const requestedPart = Number(new URLSearchParams(window.location.search).get("part") || "1");
const partNumber = Number.isInteger(requestedPart) && requestedPart >= 1 && requestedPart <= 3
  ? requestedPart
  : 0;
const partHeading = document.querySelector("#part-number");
const comingSoon = document.querySelector("#coming-soon");

if (partNumber > 0) {
  document.title = `Platform Developer 1 - Part ${partNumber}`;
  partHeading.textContent = String(partNumber);
} else {
  document.title = "Platform Developer 1 - Part not found";
  partHeading.textContent = "Not found";
  comingSoon.textContent = "Choose a part from the Platform Developer 1 parts page.";
}
