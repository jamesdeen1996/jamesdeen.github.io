window.platformDeveloperPart1Questions = [
  {
    prompt: "A developer is writing tests for a class and needs to insert records to validate functionality. Which annotation method should be used to create records for every method in the test class?",
    options: [
      { id: "A", text: "@TestSetup" },
      { id: "B", text: "@isTest(SeeAllData=true)" },
      { id: "C", text: "@StartTest" },
      { id: "D", text: "@PreTest" }
    ],
    answers: ["A"],
    explanation: "A method annotated with @TestSetup runs once before the test methods, and the records it creates are available to every test method in the class (each method gets a fresh copy, since changes are rolled back). SeeAllData=true exposes existing org data instead of creating test records, and @StartTest and @PreTest are not valid annotations."
  },
  {
    prompt: "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
    options: [
      { id: "A", text: "Schedule a report." },
      { id: "B", text: "Define a Data Export scheduled job." },
      { id: "C", text: "Create a Schedulable Apex class." },
      { id: "D", text: "Use the Data Loader command line." }
    ],
    answers: ["B"],
    explanation: "The Data Export service can be scheduled to run monthly and can include images, documents, and attachments, producing a full backup with no code. A report exports only selected fields, and Schedulable Apex or Data Loader command line would require custom building and still wouldn't easily capture all files."
  },
  {
    prompt: "Which two statements accurately represent the MVC framework implementation in Salesforce?",
    options: [
      { id: "A", text: "Records created or updated by triggers represent the Model (M) part of the MVC framework." },
      { id: "B", text: "Validation rules enforce business rules and represent the Controller (C) part of the MVC framework." },
      { id: "C", text: "Standard and Custom objects used in the app schema represent the View (V) part of the MVC framework." },
      { id: "D", text: "Lightning component HTML files represent the Model (M) part of the MVC framework." }
    ],
    answers: ["A", "B"],
    explanation: "Records and the data they hold are the Model, and business logic such as validation rules and triggers belongs to the Controller. Objects in the schema are part of the Model, not the View, and Lightning component HTML files are the View, not the Model."
  },
  {
    prompt: "Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
    options: [
      { id: "A", text: "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications." },
      { id: "B", text: "Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application." },
      { id: "C", text: "Set the attribute enableLightning to true in the definition." },
      { id: "D", text: "Rewrite all Visualforce pages as Lightning components." }
    ],
    answers: ["A"],
    explanation: "The Salesforce Lightning Design System (SLDS) is a CSS framework that gives any page the Lightning look and feel, so adding its stylesheet restyles the existing apps without rebuilding them. The Available for Lightning Experience checkbox only controls where a page can be used, not how it looks; enableLightning is not a real attribute; and rewriting every page is the slowest option."
  },
  {
    prompt: "Which process automation should be used to send an outbound message without using Apex code?",
    options: [
      { id: "A", text: "Workflow Rule" },
      { id: "B", text: "Process Builder" },
      { id: "C", text: "Flow Builder" },
      { id: "D", text: "Strategy Builder" }
    ],
    answers: ["A"],
    explanation: "Outbound messages are a Workflow Rule action, which sends a SOAP message to an external endpoint with no code. Process Builder can't send outbound messages, and Strategy Builder is for Einstein Next Best Action recommendations."
  },
  {
    prompt: "What does the Lightning Component framework provide to developers?",
    options: [
      { id: "A", text: "Support for Classic and Lightning UIs" },
      { id: "B", text: "Templates to create custom components" },
      { id: "C", text: "Prebuilt components that can be reused" },
      { id: "D", text: "Extended governor limits for applications" }
    ],
    answers: ["C"],
    explanation: "The Lightning Component framework includes a library of prebuilt base components (buttons, inputs, data tables, and more) that developers can reuse to build apps faster. It is built for Lightning Experience, not Classic, and it doesn't change governor limits."
  },
  {
    prompt: "What are two benefits of using declarative customizations over code?",
    options: [
      { id: "A", text: "Declarative customizations automatically update with each Salesforce release." },
      { id: "B", text: "Declarative customizations cannot generate run time errors." },
      { id: "C", text: "Declarative customizations automatically generate test classes." },
      { id: "D", text: "Declarative customizations generally require less maintenance." }
    ],
    answers: ["A", "D"],
    explanation: "Declarative tools are maintained by Salesforce, so they pick up new features with each release and generally need less upkeep than custom code. They can still fail at run time (for example, a flow fault), and they don't generate test classes."
  },
  {
    prompt: "What are three considerations when using the @InvocableMethod annotation in Apex?",
    options: [
      { id: "A", text: "Only one method using the @InvocableMethod annotation can be defined per Apex class." },
      { id: "B", text: "A method using the @InvocableMethod annotation can have multiple input parameters." },
      { id: "C", text: "A method using the @InvocableMethod annotation can be declared as Public or Global." },
      { id: "D", text: "A method using the @InvocableMethod annotation must define a return value." },
      { id: "E", text: "A method using the @InvocableMethod annotation must be declared as static." }
    ],
    answers: ["A", "C", "E"],
    explanation: "An invocable method must be static and public or global, and a class can contain only one of them. It accepts at most one input parameter (a list), and a return value is optional."
  },
  {
    prompt: "Which code displays the contents of a Visualforce page as a PDF?",
    options: [
      { id: "A", text: "<apex:page contentType=\"pdf\">" },
      { id: "B", text: "<apex:page contentType=\"application/pdf\">" },
      { id: "C", text: "<apex:page renderAs=\"application/pdf\">" },
      { id: "D", text: "<apex:page renderAs=\"pdf\">" }
    ],
    answers: ["D"],
    explanation: "Setting renderAs=\"pdf\" on <apex:page> makes Visualforce render the page as a PDF. contentType sets the response's MIME type but doesn't convert the page, and renderAs only accepts \"pdf\", not a MIME type."
  },
  {
    prompt: "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name \"Universal Containers\"?",
    options: [
      { id: "A", text: "SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'" },
      { id: "B", text: "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id, name), contact(id, name)" },
      { id: "C", text: "SELECT Lead.id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'" },
      { id: "D", text: "FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)" }
    ],
    answers: ["B"],
    explanation: "SOSL (FIND) searches several objects in one query, and IN NAME FIELDS is a valid search group. SOQL (SELECT) can only query one object in its FROM clause, and CompanyName Fields is not a valid SOSL search group."
  },
  {
    prompt: "How many Accounts will be inserted by the following block of code?\n\nfor (Integer i = 0; i < 500; i++) {\n    Account a = new Account(Name = 'New Account ' + i);\n    insert a;\n}",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "150" },
      { id: "C", text: "500" },
      { id: "D", text: "100" }
    ],
    answers: ["A"],
    explanation: "A transaction allows only 150 DML statements. The 151st insert throws an uncatchable LimitException, and the whole transaction rolls back, so no Accounts are saved. The fix is to add the records to a list and insert the list once, after the loop."
  },
  {
    prompt: "A developer created a new trigger that inserts a Task when a new Lead is created. After deploying to production, an outside integration that reads task records is periodically reporting errors. Which change should the developer make to ensure the integration is not affected with minimal impact to business logic?",
    options: [
      { id: "A", text: "Use the Database method with allOrNone set to false." },
      { id: "B", text: "Deactivate the trigger before the integration runs." },
      { id: "C", text: "Use a try-catch block after the insert statement." },
      { id: "D", text: "Remove the Apex class from the integration user's profile." }
    ],
    answers: ["A"],
    explanation: "Database.insert(records, false) allows partial success: valid Tasks are saved and failed rows come back as errors instead of throwing an exception that fails the whole transaction. Deactivating the trigger removes the business logic, a try-catch placed after the insert never catches its error, and profile access to Apex classes doesn't control whether triggers run."
  },
  {
    prompt: "A developer considers the following snippet of code:\n\nBoolean isOK;\nInteger x;\nString theString = 'Hello';\n\nif (isOK == false && theString == 'Hello') {\n    x = 1;\n} else if (isOK == true && theString == 'Hello') {\n    x = 2;\n} else if (isOK != null && theString == 'Hello') {\n    x = 3;\n} else {\n    x = 4;\n}\n\nBased on this code, what is the value of x?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "1" },
      { id: "D", text: "2" }
    ],
    answers: ["B"],
    explanation: "isOK is declared but never assigned, so it is null. null is neither false nor true, and isOK != null is false, so the first three conditions fail and the else branch sets x = 4."
  },
  {
    prompt: "While working in a sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors. Why did the method fail in the sandbox test framework but succeed in the Developer Console?",
    options: [
      { id: "A", text: "The test method relies on existing data in the sandbox." },
      { id: "B", text: "The test method does not use System.runAs to execute as a specific user." },
      { id: "C", text: "The test method is calling an @future method." },
      { id: "D", text: "The test method has a syntax error in the code." }
    ],
    answers: ["A"],
    explanation: "Test methods can't see org data by default (SeeAllData=false), but Execute Anonymous runs against the real sandbox data. Logic that relies on existing records works in Execute Anonymous and fails in the test unless the test creates its own data."
  },
  {
    prompt: "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
    options: [
      { id: "A", text: "Use Anonymous Apex to create the required data." },
      { id: "B", text: "Use Test.loadData() and reference a JSON file in Documents." },
      { id: "C", text: "Use Test.loadData() and reference a CSV file in a static resource." },
      { id: "D", text: "Use SOQL to query the org for the required data." }
    ],
    answers: ["C"],
    explanation: "Test.loadData() inserts test records from a CSV file stored as a static resource, so the test controls the exact field values. Data created with Anonymous Apex or found by querying the org isn't visible to tests by default, and Test.loadData() doesn't read JSON files from Documents."
  },
  {
    prompt: "Which two statements are true about using the @testSetup annotation in an Apex test class?",
    options: [
      { id: "A", text: "A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits." },
      { id: "B", text: "In a test setup method, test data is inserted once and made available for all test methods in the test class." },
      { id: "C", text: "The @testSetup annotation is not supported when the @isTest(SeeAllData=True) annotation is used." },
      { id: "D", text: "Records created in the test setup method cannot be updated in individual test methods." }
    ],
    answers: ["B", "C"],
    explanation: "A @testSetup method runs once per test class, not once per test method. Its records are available to every test method, and any changes a method makes are rolled back before the next one runs, so individual methods can update them. Test setup methods can't be used in a class annotated with @isTest(SeeAllData=true)."
  },
  {
    prompt: "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
    options: [
      { id: "A", text: "<lightning-input type=\"number\" value=\"Salary__c\" formatter=\"currency\"></lightning-input>" },
      { id: "B", text: "<lightning-formatted-number value=\"Salary__c\" format-style=\"currency\"></lightning-formatted-number>" },
      { id: "C", text: "<lightning-input-currency value=\"Salary__c\"></lightning-input-currency>" },
      { id: "D", text: "<lightning-input-field field-name=\"Salary__c\"></lightning-input-field>" }
    ],
    answers: ["D"],
    explanation: "Inside a lightning-record-edit-form, lightning-input-field reads the field's metadata, so it shows the right input type (currency here) and respects field-level security automatically. lightning-input doesn't check field-level security, lightning-formatted-number only displays a value, and lightning-input-currency doesn't exist."
  },
  {
    prompt: "Which three steps allow a custom Scalable Vector Graphic (SVG) to be included in a Lightning web component?",
    options: [
      { id: "A", text: "Upload the SVG as a static resource." },
      { id: "B", text: "Import the static resource and provide a variable for it in JavaScript." },
      { id: "C", text: "Reference the import in the HTML template." },
      { id: "D", text: "Reference the variable in the HTML template." },
      { id: "E", text: "Import the SVG as a content asset file." }
    ],
    answers: ["A", "B", "D"],
    explanation: "Upload the SVG as a static resource, import it in the component's JavaScript (import svgUrl from '@salesforce/resourceUrl/...') and expose it as a property, then use that property in the template, for example <img src={svgUrl}>. The HTML template can't reference an import directly, only properties on the component."
  },
  {
    prompt: "Which exception type cannot be caught?",
    options: [
      { id: "A", text: "CalloutException" },
      { id: "B", text: "LimitException" },
      { id: "C", text: "A Custom Exception" },
      { id: "D", text: "NoAccessException" }
    ],
    answers: ["B"],
    explanation: "When a governor limit is exceeded, Apex throws a System.LimitException, which can't be caught; the transaction stops and rolls back. CalloutException, NoAccessException, and custom exceptions can all be handled with try-catch."
  },
  {
    prompt: "Given the following trigger implementation:\n\ntrigger leadTrigger on Lead (before update) {\n    final ID BUSINESS_RECORDTYPEID = '012500000009Qad';\n\n    for (Lead thisLead : Trigger.new) {\n        if (thisLead.Company != null && thisLead.RecordTypeId != BUSINESS_RECORDTYPEID) {\n            thisLead.RecordTypeId = BUSINESS_RECORDTYPEID;\n        }\n    }\n}\n\nThe developer receives deployment errors every time a deployment is attempted from a sandbox to Production. What should the developer do to ensure a successful deployment?",
    options: [
      { id: "A", text: "Ensure the deployment is validated by a System Admin user on Production." },
      { id: "B", text: "Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls." },
      { id: "C", text: "Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment." },
      { id: "D", text: "Ensure BUSINESS_RECORDTYPEID is pushed as part of the deployment components." }
    ],
    answers: ["B"],
    explanation: "Record type IDs differ between orgs, so the ID hardcoded from the sandbox doesn't exist in Production and the tests fail during deployment. Look the ID up at run time instead, for example Schema.SObjectType.Lead.getRecordTypeInfosByDeveloperName().get('Business').getRecordTypeId(). Deploying the record type still gives it a new ID in Production, and you can't choose a record's ID."
  }
];

window.quizConfig = {
  name: "Platform Developer 1",
  homeUrl: "platform-developer-home.html",
  partCount: 3,
  parts: {
    1: window.platformDeveloperPart1Questions
  }
};
