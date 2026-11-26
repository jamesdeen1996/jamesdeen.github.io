// Simple client-side password gate. This is a static site, so it only keeps
// casual visitors out; it is not real security.
(function () {
  const STORAGE_KEY = "cert-practice-auth";
  // SHA-256 hash of the password, so the password itself is not in the source.
  const PASSWORD_HASH = "5a63970b95ba747381245fc66d48f553445945caa62e1e9319ef3a1250462f76";
  const isLoginPage = document.documentElement.dataset.page === "login";

  function readAuth() {
    try {
      return localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH;
    } catch {
      return false;
    }
  }

  function writeAuth(value) {
    try {
      if (value) {
        localStorage.setItem(STORAGE_KEY, PASSWORD_HASH);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Storage unavailable: login lasts only for this page view.
    }
  }

  async function hash(text) {
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
  }

  if (readAuth()) {
    document.documentElement.classList.add("is-authenticated");
  } else if (!isLoginPage) {
    window.location.replace("index.html");
    return;
  }

  if (!isLoginPage) {
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login-form");
    const input = document.querySelector("#password");
    const error = document.querySelector("#login-error");
    const logout = document.querySelector("#logout");
    const home = document.querySelector("#home-content");

    function showHome(isLoggedIn) {
      document.documentElement.classList.toggle("is-authenticated", isLoggedIn);
      form.hidden = isLoggedIn;
      home.hidden = !isLoggedIn;
    }

    showHome(readAuth());

    const toggle = document.querySelector("#password-toggle");
    toggle.addEventListener("click", () => {
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      toggle.textContent = show ? "Hide" : "Show";
      toggle.setAttribute("aria-label", show ? "Hide password" : "Show password");
      toggle.setAttribute("aria-pressed", String(show));
      input.focus();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      error.hidden = true;
      if ((await hash(input.value)) === PASSWORD_HASH) {
        writeAuth(true);
        form.reset();
        showHome(true);
      } else {
        error.hidden = false;
        input.select();
      }
    });

    logout.addEventListener("click", () => {
      writeAuth(false);
      showHome(false);
      input.focus();
    });

    if (!home.hidden) {
      return;
    }
    input.focus();
  });
})();
