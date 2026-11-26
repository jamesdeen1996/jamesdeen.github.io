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
  },
  {
    prompt: "Universal Containers uses a simple Order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a master-detail relationship between the Order and the Order Lines object. What is the best practice to get the sum of all order line totals on the order header?",
    options: [
      { id: "A", text: "Roll-up summary field" },
      { id: "B", text: "Declarative Roll-up Summaries app" },
      { id: "C", text: "Apex trigger" },
      { id: "D", text: "Process Builder" }
    ],
    answers: ["A"],
    explanation: "Because Order and Order Lines have a master-detail relationship, a standard roll-up summary field on Order can SUM the line totals with no code, and Salesforce keeps it up to date automatically. An Apex trigger, Process Builder, or the Declarative Roll-up Summaries app is only needed when there is no master-detail relationship, such as with a lookup."
  },
  {
    prompt: "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
    options: [
      { id: "A", text: "Developer orgs" },
      { id: "B", text: "Developer sandboxes" },
      { id: "C", text: "Full Copy sandboxes" },
      { id: "D", text: "Scratch orgs" }
    ],
    answers: ["D"],
    explanation: "Scratch orgs are short-lived orgs created from source control with Salesforce DX. Each developer can spin one up with a different configuration (editions, features, settings) defined in a file. Developer orgs and sandboxes aren't built from source, and Full Copy sandboxes are slow to refresh and limited in number."
  },
  {
    prompt: "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
    options: [
      { id: "A", text: "fire()" },
      { id: "B", text: "emit()" },
      { id: "C", text: "registerEvent()" },
      { id: "D", text: "fireEvent()" }
    ],
    answers: ["A"],
    explanation: "In Aura, you get the event with $A.get('e.c:myAppEvent'), set any parameters with setParams(), and call fire(). emit() and fireEvent() aren't Aura methods, and <aura:registerEvent> is markup for declaring a component event, not a method."
  },
  {
    prompt: "A developer has identified a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database. Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?",
    options: [
      { id: "A", text: "Use the Database.Savepoint method to enforce database integrity." },
      { id: "B", text: "Use partial DML statements to ensure only valid data is committed." },
      { id: "C", text: "Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL." },
      { id: "D", text: "Use the System.Limit class to monitor the current CPU governor limit consumption." }
    ],
    answers: ["A", "D"],
    explanation: "A savepoint (Database.setSavepoint() with Database.rollback()) gives transaction control, so changes can be undone if something fails. The Limits class (for example Limits.getCpuTime()) lets the method check how much of a limit it has used before going over. Partial DML doesn't control the transaction, and @ReadOnly doesn't allow DML at all."
  },
  {
    prompt: "What is the value of the Trigger.old context variable in a before insert trigger?",
    options: [
      { id: "A", text: "A list of newly created sObjects without IDs" },
      { id: "B", text: "null" },
      { id: "C", text: "An empty list of sObjects" },
      { id: "D", text: "Undefined" }
    ],
    answers: ["B"],
    explanation: "Trigger.old holds the earlier versions of records, which only exist for update and delete triggers. In an insert trigger there are no earlier versions, so Trigger.old is null, not an empty list. The new records without IDs are in Trigger.new."
  },
  {
    prompt: "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
    options: [
      { id: "A", text: "AppExchange" },
      { id: "B", text: "Developer Console" },
      { id: "C", text: "Visual Studio Code IDE" },
      { id: "D", text: "Setup Menu" }
    ],
    answers: ["B"],
    explanation: "The Developer Console captures debug logs and has the Log Inspector, with Timeline and Performance Tree views, which show how long each part of the request took (SOQL, DML, Apex, page rendering). AppExchange is a marketplace, VS Code is an editor, and Setup doesn't analyze performance."
  },
  {
    prompt: "Instead of sending emails to support personnel directly from Salesforce from the finish method of a batch process, Universal Containers wants to notify an external system in the event that an unhandled exception occurs. What is the appropriate publish/subscribe logic to meet this requirement?",
    options: [
      { id: "A", text: "Publish the error event using the Eventbus.publish() method and have the external system subscribe to the event using CometD." },
      { id: "B", text: "Publish the error event using the addError() method and write a trigger to subscribe to the event and notify the external system." },
      { id: "C", text: "Since this only involves sending emails, no publishing is necessary. Have the external system subscribe to the BatchApexError event." },
      { id: "D", text: "Publish the error event using the addError() method and have the external system subscribe to the event using CometD." }
    ],
    answers: ["C"],
    explanation: "When a batch class implements Database.RaisesPlatformEvents, Salesforce automatically publishes a BatchApexErrorEvent for any unhandled exception, so no publishing code is needed and the external system just subscribes to that event. An unhandled exception stops your code, so it can't reach an EventBus.publish() call, and addError() blocks a record from saving instead of publishing events."
  },
  {
    prompt: "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
    options: [
      { id: "A", text: "Override the Account's Edit button with a Lightning Action." },
      { id: "B", text: "Override the Account's Edit button with a Lightning Flow." },
      { id: "C", text: "Override the Account's Edit button with a Lightning page." },
      { id: "D", text: "Override the Account's Edit button with a Lightning component." }
    ],
    answers: ["D"],
    explanation: "Standard buttons such as Edit can be overridden in Lightning Experience with a Lightning component (an Aura component that implements lightning:actionOverride) or a Visualforce page. Lightning Actions, Flows, and Lightning pages can't be used as a standard button override."
  },
  {
    prompt: "How can a developer check the test coverage of active Process Builders and Flows before deploying them in a Change Set?",
    options: [
      { id: "A", text: "Use SOQL and the Tooling API." },
      { id: "B", text: "Use the ApexTestResult class." },
      { id: "C", text: "Use the Code Coverage Setup page." },
      { id: "D", text: "Use the Flow Properties page." }
    ],
    answers: ["A"],
    explanation: "Flow and process test coverage is stored in Tooling API objects such as FlowTestCoverage and FlowDefinitionView, which you query with SOQL through the Tooling API. ApexTestResult and the code coverage views only cover Apex, and the Flow Properties page doesn't show coverage."
  },
  {
    prompt: "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
    options: [
      { id: "A", text: "@AuraEnabled(cacheable=false) public static List<Opportunity> search(String term) { /*implementation*/ }" },
      { id: "B", text: "@AuraEnabled(cacheable=true) public static List<Opportunity> search(String term) { /*implementation*/ }" },
      { id: "C", text: "@AuraEnabled(cacheable=false) public List<Opportunity> search(String term) { /*implementation*/ }" },
      { id: "D", text: "@AuraEnabled(cacheable=true) public List<Opportunity> search(String term) { /*implementation*/ }" }
    ],
    answers: ["B"],
    explanation: "To be used with @wire, an Apex method must be static and annotated with @AuraEnabled(cacheable=true). The other options are either not cacheable or not static."
  },
  {
    prompt: "The values 'High', 'Medium', and 'Low' are identified as common values for multiple picklists across different objects. What is an approach a developer can take to streamline maintenance of the picklists and their values, while also restricting the values to the ones mentioned above?",
    options: [
      { id: "A", text: "Create the Picklist on each object and select \"Restrict picklist to the values defined in the value set\"." },
      { id: "B", text: "Create the Picklist on each object and use a Global Picklist Value Set containing the values." },
      { id: "C", text: "Create the Picklist on each object as a required field and select \"Display values alphabetically, not in the order entered\"." },
      { id: "D", text: "Create the Picklist on each object and add a validation rule to ensure data integrity." }
    ],
    answers: ["B"],
    explanation: "A Global Picklist Value Set keeps the values in one place that every picklist shares, and picklists using it are always restricted to those values. Option A restricts values but still means maintaining each picklist separately, and options C and D don't share the values at all."
  },
  {
    prompt: "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system based on a user-initiated action on the Opportunity detail page. Example values are as follows:\n\n• Name\n• Amount\n• Account\n\nWhich two methods should the developer implement to fulfill the business requirement?",
    options: [
      { id: "A", text: "Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated." },
      { id: "B", text: "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page." },
      { id: "C", text: "Create an after update trigger on the Opportunity object that calls a helper method using @Future(Callout=true) to perform the HTTP REST callout." },
      { id: "D", text: "Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page." }
    ],
    answers: ["B", "D"],
    explanation: "The callout must happen when a user takes an action on the detail page, so it needs something the user clicks: a quick action that opens a Lightning component or a Visualforce page. A Process Builder or trigger runs on every update, not just when the user asks, and Process Builder's immediate Apex actions can't make callouts directly."
  },
  {
    prompt: "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
    options: [
      { id: "A", text: "List<List<sObject>> searchList = [SELECT Name, ID FROM Contact, Lead WHERE Name like '%ACME%'];" },
      { id: "B", text: "List<sObject> searchList = [FIND \"*ACME*\" IN ALL FIELDS RETURNING Contact, Lead];" },
      { id: "C", text: "Map<sObject> searchList = [FIND \"*ACME*\" IN ALL FIELDS RETURNING Contact, Lead];" },
      { id: "D", text: "List<List<sObject>> searchList = [FIND \"*ACME*\" IN ALL FIELDS RETURNING Contact, Lead];" }
    ],
    answers: ["D"],
    explanation: "SOSL (FIND) searches several objects at once and returns a List<List<sObject>>, with one inner list per object in RETURNING. SOQL can't query two objects in one FROM clause, and SOSL results can't be assigned to a List<sObject> or a Map."
  },
  {
    prompt: "A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class.\n\npublic virtual class Payment {\n    public virtual void makePayment(Decimal amount) { /*implementation*/ }\n}\n\nWhich is the correct implementation?",
    options: [
      { id: "A", text: "public class CreditCardPayment implements Payment { public virtual void makePayment(Decimal amount) { /*implementation*/ } }" },
      { id: "B", text: "public class CreditCardPayment extends Payment { public override void makePayment(Decimal amount) { /*implementation*/ } }" },
      { id: "C", text: "public class CreditCardPayment extends Payment { public virtual void makePayment(Decimal amount) { /*implementation*/ } }" },
      { id: "D", text: "public class CreditCardPayment implements Payment { public override void makePayment(Decimal amount) { /*implementation*/ } }" }
    ],
    answers: ["B"],
    explanation: "Payment is a virtual class, not an interface, so the subclass uses extends. A method that replaces a virtual method must be marked override. implements is only used with interfaces, and redeclaring the method as virtual without override doesn't compile."
  },
  {
    prompt: "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
    options: [
      { id: "A", text: "@InvocableMethod global List<List<Recommendation>> getLevel(List<ContactWrapper> input) { /*implementation*/ }" },
      { id: "B", text: "@InvocableMethod global static List<Recommendation> getLevel(List<ContactWrapper> input) { /*implementation*/ }" },
      { id: "C", text: "@InvocableMethod global Recommendation getLevel(ContactWrapper input) { /*implementation*/ }" },
      { id: "D", text: "@InvocableMethod global static List<List<Recommendation>> getLevel(List<ContactWrapper> input) { /*implementation*/ }" }
    ],
    answers: ["D"],
    explanation: "An invocable method must be static and take a List. A Next Best Action Enhance element passes in a list of inputs and expects one list of recommendations back for each input, so the return type is List<List<Recommendation>>. A and C aren't static, and B returns a single list instead of a list of lists."
  },
  {
    prompt: "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
    options: [
      { id: "A", text: "In the system debug log by filtering on Paused Flow Interview" },
      { id: "B", text: "On the Paused Flow Interviews related list for a given record" },
      { id: "C", text: "On the Paused Flow Interviews component on the Home page" },
      { id: "D", text: "In the Paused Interviews section of the Apex Flex Queue" }
    ],
    answers: ["C"],
    explanation: "In Lightning Experience, users see and resume their paused flows in the Paused Flow Interviews component, which an admin adds to the Home page. Admins can also see all paused interviews in Setup on the Paused and Failed Flow Interviews page. The Apex Flex Queue only holds queued batch Apex jobs, there's no standard Paused Flow Interviews related list, and debug logs don't list paused interviews."
  },
  {
    prompt: "Refer to the following code snippet for an environment that has more than 200 Accounts belonging to the 'Technology' industry:\n\nfor (Account thisAccount : [SELECT Id, Industry FROM Account LIMIT 150]) {\n    if (thisAccount.Industry == 'Technology') {\n        thisAccount.Is_Tech__c = true;\n    }\n    update thisAccount;\n}\n\nWhen the code executes, what happens as a result of the Apex transaction?",
    options: [
      { id: "A", text: "The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated." },
      { id: "B", text: "If executed in an asynchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit." },
      { id: "C", text: "If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit." },
      { id: "D", text: "The Apex transaction fails with the following message: SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c." }
    ],
    answers: ["A"],
    explanation: "LIMIT 150 means the loop runs at most 150 times, so at most 150 update statements run, which is exactly the DML limit (150 in both synchronous and asynchronous Apex), so it isn't exceeded. Setting a field that wasn't queried is allowed; only reading an unqueried field throws an error. All processed accounts are updated. Still, DML inside a loop is bad practice."
  },
  {
    prompt: "Which three code lines are required to create a Lightning component on a Visualforce page?",
    options: [
      { id: "A", text: "$Lightning.createComponent" },
      { id: "B", text: "$Lightning.useComponent" },
      { id: "C", text: "<apex:includeLightning/>" },
      { id: "D", text: "$Lightning.use" },
      { id: "E", text: "<apex:slds/>" }
    ],
    answers: ["A", "C", "D"],
    explanation: "Lightning Components for Visualforce needs three steps: <apex:includeLightning/> loads the Lightning JavaScript library, $Lightning.use() loads the Lightning app that declares the component as a dependency, and $Lightning.createComponent() creates the component on the page. $Lightning.useComponent doesn't exist, and <apex:slds/> only adds SLDS styling."
  },
  {
    prompt: "What are two characteristics related to formulas?",
    options: [
      { id: "A", text: "Formulas can reference themselves." },
      { id: "B", text: "Formulas can reference values in related objects." },
      { id: "C", text: "Fields that are used in a formula field can be deleted or edited without editing the formula." },
      { id: "D", text: "Formulas are calculated at runtime and are not stored in the database." }
    ],
    answers: ["B", "D"],
    explanation: "Formula fields can use cross-object references to read fields on related records (for example Account.Industry), and their value is calculated each time it's read rather than stored. A formula can't reference itself, and a field used in a formula can't be deleted until it's removed from the formula."
  },
  {
    prompt: "What is a benefit of developing applications in a multi-tenant environment?",
    options: [
      { id: "A", text: "Default out-of-the-box configuration" },
      { id: "B", text: "Unlimited processing power and memory" },
      { id: "C", text: "Enforced best practices for development" },
      { id: "D", text: "Access to predefined computing resources" }
    ],
    answers: ["C"],
    explanation: "Because many customers share the same servers, Salesforce enforces governor limits and requires 75% test coverage to deploy Apex. These rules push developers toward efficient, well-tested code, which is the benefit. Resources are shared and limited, not unlimited, and out-of-the-box configuration isn't specific to multi-tenancy."
  },
  {
    prompt: "Which action may cause triggers to fire?",
    options: [
      { id: "A", text: "Changing a user's default division when the transfer division option is checked" },
      { id: "B", text: "Renaming or replacing a picklist entry" },
      { id: "C", text: "Updates to Feed Items" },
      { id: "D", text: "Cascading delete operations" }
    ],
    answers: ["C"],
    explanation: "FeedItem supports Apex triggers, so updating feed items can fire them. Salesforce lists the other three among the operations that don't fire triggers: changing a user's default division with transfer division checked, renaming or replacing picklist values, and cascading deletes."
  },
  {
    prompt: "Which two events need to happen when deploying to a production org?",
    options: [
      { id: "A", text: "All Apex code must have at least 75% test coverage." },
      { id: "B", text: "All Visual Flows must have at least 1% test coverage." },
      { id: "C", text: "All triggers must have some test coverage." },
      { id: "D", text: "All Process Builder Processes must have at least 1% test coverage." }
    ],
    answers: ["A", "C"],
    explanation: "To deploy Apex to production, at least 75% of the Apex code must be covered by tests, all tests must pass, and every trigger must have at least 1% coverage. Flows and processes have no required coverage; their coverage can be checked but isn't enforced."
  },
  {
    prompt: "Which three statements are true regarding custom exceptions in Apex?",
    options: [
      { id: "A", text: "A custom exception class must extend the system Exception class." },
      { id: "B", text: "A custom exception class cannot contain member variables or methods." },
      { id: "C", text: "A custom exception class can implement one or many interfaces." },
      { id: "D", text: "A custom exception class name must end with \"Exception\"." },
      { id: "E", text: "A custom exception class can extend other classes besides the Exception class." }
    ],
    answers: ["A", "C", "D"],
    explanation: "A custom exception must extend Exception (directly or through another custom exception), and its name must end in \"Exception\". Like any class, it can implement interfaces and contain its own variables and methods. It can't extend a class that isn't an exception."
  },
  {
    prompt: "The Job_Application__c custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology', while also retrieving the Contact's Job_Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts?",
    options: [
      { id: "A", text: "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology'];" },
      { id: "B", text: "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Industry = 'Technology'];" },
      { id: "C", text: "[SELECT Id, (SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Industry = 'Technology'];" },
      { id: "D", text: "[SELECT Id, (SELECT Id FROM Job_Applications__c) FROM Contact WHERE Accounts.Industry = 'Technology'];" }
    ],
    answers: ["A"],
    explanation: "A subquery on child records uses the plural relationship name ending in __r (Job_Applications__r), not the object name. A filter on the parent uses the singular lookup name, Account.Industry. One query gets the Contacts and their job applications together."
  },
  {
    prompt: "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "4" },
      { id: "C", text: "2" },
      { id: "D", text: "3" }
    ],
    answers: ["C"],
    explanation: "On insert, the before update trigger doesn't run. The workflow rule then increments the count to 1. A workflow field update fires the record's update triggers once more, so the before update trigger runs and increments it to 2. Because re-evaluation is off, the workflow doesn't run again, so the final value is 2."
  },
  {
    prompt: "What is the result of the following code snippet?\n\npublic void doWork(Account acct) {\n    for (Integer i = 0; i <= 200; i++) {\n        insert acct;\n    }\n}",
    options: [
      { id: "A", text: "0 Accounts are inserted." },
      { id: "B", text: "1 Account is inserted." },
      { id: "C", text: "200 Accounts are inserted." },
      { id: "D", text: "201 Accounts are inserted." }
    ],
    answers: ["A"],
    explanation: "The first insert gives acct an Id. The second insert of the same record throws a DmlException (\"cannot specify Id in an insert call\"). Nothing catches it, so the whole transaction rolls back, including the first insert, and 0 Accounts are saved."
  },
  {
    prompt: "A developer has the following requirements:\n\n• Calculate the total amount on an Order.\n• Calculate the line amount for each Line Item based on quantity selected and price.\n• Move Line Items to a different Order if a Line Item is not in stock.\n\nWhich relationship implementation supports these requirements?",
    options: [
      { id: "A", text: "Line Item has a master-detail field to Order and the master can be re-parented." },
      { id: "B", text: "Line Item has a lookup field to Order and there can be many Orders per Line Items." },
      { id: "C", text: "Order has a lookup field to Line Item and there can be many Line Items per Order." },
      { id: "D", text: "Order has a master-detail field to Line Item and there can be many Line Items per Order." }
    ],
    answers: ["A"],
    explanation: "A master-detail field from Line Item (the detail) to Order (the master) lets Order use a roll-up summary field to total the line amounts, and a formula on Line Item can calculate quantity × price. Turning on \"Allow reparenting\" lets a Line Item be moved to a different Order. The other options put the relationship on the wrong object."
  },
  {
    prompt: "In the following example, which sharing context will myMethod execute when it is invoked?\n\npublic Class myClass {\n    public void myMethod() { /* implementation */ }\n}",
    options: [
      { id: "A", text: "Sharing rules will be enforced for the running user." },
      { id: "B", text: "Sharing rules will be inherited from the calling context." },
      { id: "C", text: "Sharing rules will not be enforced for the running user." },
      { id: "D", text: "Sharing rules will be enforced by the instantiating class." }
    ],
    answers: ["B"],
    explanation: "myClass has no sharing keyword (with sharing, without sharing, or inherited sharing), so it uses the sharing setting of the code that calls it. If it's the entry point of the transaction, it runs without sharing by default."
  },
  {
    prompt: "A developer must create a DrawList class that provides capabilities defined in the Sortable and Drawable interfaces.\n\npublic interface Sortable {\n    void sort();\n}\n\npublic interface Drawable {\n    void draw();\n}\n\nWhich is the correct implementation?",
    options: [
      { id: "A", text: "public class DrawList implements Sortable, Drawable { public void sort() { /*implementation*/ } public void draw() { /*implementation*/ } }" },
      { id: "B", text: "public class DrawList extends Sortable, Drawable { public void sort() { /*implementation*/ } public void draw() { /*implementation*/ } }" }
    ],
    answers: ["A"],
    explanation: "A class uses implements for interfaces and can implement several, separated by commas. extends is for inheriting from a class, and an Apex class can extend only one."
  },
  {
    prompt: "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a master-detail relationship with the standard Account object. Based on some internal discussions, the UC administrator tried to change the master-detail relationship to a lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
    options: [
      { id: "A", text: "The Account object is included on a workflow on the Vendor object." },
      { id: "B", text: "The Vendor object must use a master-detail field for reporting." },
      { id: "C", text: "The Vendor records have existing values in the Account object." },
      { id: "D", text: "The Account records contain Vendor roll-up summary fields." }
    ],
    answers: ["D"],
    explanation: "Roll-up summary fields only work with master-detail relationships, so Salesforce won't convert the relationship to a lookup while Account has roll-up summary fields over Vendor. Delete those fields first. Workflows, reporting, and existing data don't block the change."
  },
  {
    prompt: "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?",
    options: [
      { id: "A", text: "Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() method." },
      { id: "B", text: "Use the Schema.userInfo.Opportunity.getDefaultRecordType() method." },
      { id: "C", text: "Create the opportunity and check the opportunity.recordType, which will have the record ID of the current user's default record type, before inserting." },
      { id: "D", text: "Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping() is true." }
    ],
    answers: ["D"],
    explanation: "The describe call returns RecordTypeInfo objects for the running user, and isDefaultRecordTypeMapping() returns true for that user's default record type. The methods in A and B don't exist, and a new Opportunity in Apex has no record type set before it is inserted."
  },
  {
    prompt: "What should a developer do to check the code coverage of a class after running all tests?",
    options: [
      { id: "A", text: "Select and run the class on the Apex Test Execution page in the Developer Console." },
      { id: "B", text: "View the Code Coverage column in the list view on the Apex Classes page." },
      { id: "C", text: "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab." },
      { id: "D", text: "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup." }
    ],
    answers: ["C"],
    explanation: "After tests run, the Overall Code Coverage panel on the Developer Console's Tests tab lists each class with its coverage percentage. Running the class again isn't needed, and Setup has no Class Test Percentage tab."
  },
  {
    prompt: "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
    options: [
      { id: "A", text: "Schema.sObjectType.Account.isDeletable()" },
      { id: "B", text: "accountRec.isDeletable()" },
      { id: "C", text: "Account.isDeletable()" },
      { id: "D", text: "accountRec.sObjectType.isDeletable()" }
    ],
    answers: ["A"],
    explanation: "Schema.sObjectType.Account returns the describe result for Account, and isDeletable() reports whether the running user has permission to delete Accounts. Check it before running delete. isDeletable() isn't available on a record variable or directly on the Account type."
  },
  {
    prompt: "What is an example of a polymorphic lookup field in Salesforce?",
    options: [
      { id: "A", text: "The WhatId field on the standard Event object" },
      { id: "B", text: "A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign" },
      { id: "C", text: "The LeadId and ContactId fields on the standard Campaign Member object" },
      { id: "D", text: "The ParentId field on the standard Account object" }
    ],
    answers: ["A"],
    explanation: "A polymorphic lookup can point to more than one object type. Event.WhatId can reference an Account, Opportunity, Case, custom object, and more. Custom lookup fields can only point to one object, CampaignMember's LeadId and ContactId each point to a single object, and Account.ParentId only points to Account."
  },
  {
    prompt: "A developer created these three roll-up summary fields on the custom object, Project__c:\n\nTotal_Timesheets__c\nTotal_Approved_Timesheets__c\nTotal_Rejected_Timesheet__c\n\nThe developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. What are two benefits of choosing a formula field instead of an Apex trigger to fulfill the request?",
    options: [
      { id: "A", text: "A test class will validate the formula field during deployment." },
      { id: "B", text: "Using a formula field reduces maintenance overhead." },
      { id: "C", text: "A formula field will calculate the value retroactively for existing records." },
      { id: "D", text: "A formula field will trigger existing automation when deployed." }
    ],
    answers: ["B", "C"],
    explanation: "A formula field is declarative, so there's no trigger or test class to write and maintain. It's calculated whenever it's read, so existing Project records show the ratio right away, while a trigger would only update records as they're saved. Formulas aren't validated by test classes, and adding one doesn't fire any automation."
  },
  {
    prompt: "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
    options: [
      { id: "A", text: "Declare maxAttempts as a member variable on the trigger definition." },
      { id: "B", text: "Declare maxAttempts as a private static variable on a helper class." },
      { id: "C", text: "Declare maxAttempts as a variable on a helper class." },
      { id: "D", text: "Declare maxAttempts as a constant using the static and final keywords." }
    ],
    answers: ["D"],
    explanation: "A static variable lasts for the whole transaction and is shared by every trigger execution in it, and final means it can't change after it's set, so a static final constant meets both requirements. A private static variable could still be changed, an instance variable on a helper class isn't shared, and triggers can't declare static member variables."
  },
  {
    prompt: "A developer wants to invoke an outbound message when a record meets a specific criteria. Which two features satisfy this use case?",
    options: [
      { id: "A", text: "Process Builder can be used to check the record criteria and send an outbound message without Apex code." },
      { id: "B", text: "Next Best Action can be used to check the record criteria and send an outbound message." },
      { id: "C", text: "Flow Builder can be used to check the record criteria and send an outbound message." },
      { id: "D", text: "Approval Process has the capability to check the record criteria and send an outbound message without Apex code." }
    ],
    answers: ["C", "D"],
    explanation: "A record-triggered flow can check the criteria and send an outbound message with its Outbound Message action. Approval processes have entry criteria and support outbound messages as approval actions. Process Builder has no outbound message action, and Next Best Action only shows recommendations."
  },
  {
    prompt: "Universal Containers hires a developer to build a custom search page to help users find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL?",
    options: [
      { id: "A", text: "SOSL is able to return more records." },
      { id: "B", text: "SOQL is able to return more records." },
      { id: "C", text: "SOSL is faster for text searches." },
      { id: "D", text: "SOQL is faster for text searches." }
    ],
    answers: ["B", "C"],
    explanation: "SOQL can return up to 50,000 records per transaction, while a SOSL query returns at most 2,000. SOSL searches a prebuilt text index across many fields at once, so it's faster for text searches, especially on long text fields like Description that SOQL can't filter efficiently."
  },
  {
    prompt: "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?",
    options: [
      { id: "A", text: "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user." },
      { id: "B", text: "Use the schema describe calls to determine if the logged-in user has access to the Account object." },
      { id: "C", text: "Use the with sharing keyword on the class declaration." },
      { id: "D", text: "Use the without sharing keyword on the class declaration." }
    ],
    answers: ["C"],
    explanation: "Apex runs in system mode, so by default it ignores sharing. Declaring the class with sharing makes its queries return only records the current user can access. Filtering by owner would hide records shared with the user, describe calls only check object-level permissions, and without sharing is the current problem."
  },
  {
    prompt: "Which two are best practices when it comes to Aura component and application event handling?",
    options: [
      { id: "A", text: "Use component events to communicate actions that should be handled at the application level." },
      { id: "B", text: "Reuse the event logic in a component bundle, by putting the logic in the helper." },
      { id: "C", text: "Try to use application events as opposed to component events." },
      { id: "D", text: "Handle low-level events in the event handler and re-fire them as higher-level events." }
    ],
    answers: ["B", "D"],
    explanation: "Shared logic belongs in the helper so several handlers can reuse it. Turning low-level events (like a click) into higher-level business events makes components easier to reuse. Salesforce recommends component events over application events whenever possible, and application events, not component events, are for application-level actions."
  },
  {
    prompt: "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts. How should the developer implement this request?",
    options: [
      { id: "A", text: "Use the <apex:relatedList> tag." },
      { id: "B", text: "Create a controller extension." },
      { id: "C", text: "Add a method to the standard controller." },
      { id: "D", text: "Use the <apex:include> tag." }
    ],
    answers: ["A"],
    explanation: "With the Account standard controller, <apex:relatedList list=\"Contacts\"/> shows the Contacts related list using the columns set on the page layout, with no code. A controller extension isn't needed, standard controllers can't be changed, and <apex:include> inserts another Visualforce page."
  },
  {
    prompt: "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
    options: [
      { id: "A", text: "Calendar Events" },
      { id: "B", text: "Asynchronous Data Capture Events" },
      { id: "C", text: "Event Monitoring Log" },
      { id: "D", text: "Developer Log" }
    ],
    answers: ["C"],
    explanation: "Event Monitoring provides event log files, such as Login events, that record user activity and can be checked later when real-time alerts aren't needed. Calendar Events are meetings, Asynchronous Data Capture Events isn't a Salesforce feature, and debug logs don't track logins."
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
