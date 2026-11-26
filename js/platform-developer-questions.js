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

window.platformDeveloperPart2Questions = [
  {
    prompt: "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search.\n\nConsider the following code snippet:\n\n@AuraEnabled\npublic static List<List<sObject>> searchTerms(List<String> termList) {\n    List<List<sObject>> result = new List<List<sObject>>();\n    for (String term : termList) {\n        result.addAll([FIND :term IN ALL FIELDS RETURNING Account(Name), Contact(FirstName, LastName)]);\n    }\n    return result;\n}\n\nWhat is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "150" },
      { id: "C", text: "200" },
      { id: "D", text: "2,000" }
    ],
    answers: ["A"],
    explanation: "The code runs one SOSL query per search term, and a transaction can run at most 20 SOSL queries. The 21st term throws a LimitException. 2,000 is the maximum number of rows one SOSL query can return, not the number of queries."
  },
  {
    prompt: "A custom object Trainer__c has a lookup field to another custom object Gym__c. Which SOQL query will get the record for the Viridian City Gym and all it's trainers?",
    options: [
      { id: "A", text: "SELECT Id, (SELECT Id FROM Trainer__c) FROM Gym__c WHERE Name = 'Viridian City Gym'" },
      { id: "B", text: "SELECT ID FROM Trainer__c WHERE Gym__r.Name = 'Viridian City Gym'" },
      { id: "C", text: "SELECT Id, (SELECT Id FROM Trainers__c) FROM Gym__c WHERE Name = 'Viridian City Gym'" },
      { id: "D", text: "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'" }
    ],
    answers: ["D"],
    explanation: "A parent-to-child subquery uses the child relationship name, which for a custom lookup is the plural name ending in __r (Trainers__r). Option B returns only trainers, not the gym record."
  },
  {
    prompt: "Which three operations affect the number of times a trigger can fire?",
    options: [
      { id: "A", text: "Criteria-based Sharing calculations" },
      { id: "B", text: "Email messages" },
      { id: "C", text: "Lightning Flows" },
      { id: "D", text: "Workflow Rules" },
      { id: "E", text: "Roll-Up Summary fields" }
    ],
    answers: ["C", "D", "E"],
    explanation: "In the order of execution, workflow field updates, flows and processes that update records, and roll-up summary recalculations on a parent can each save a record again and fire its triggers another time. Sharing calculations and email messages don't re-save the record."
  },
  {
    prompt: "A developer has the following requirements:\n\n• Calculate the total amount on an Order.\n• Calculate the line amount for each Line Item based on quantity selected and price.\n• Move Line Items to a different Order if a Line Item is not in stock.\n\nWhich relationship implementation supports these requirements on its own?",
    options: [
      { id: "A", text: "Line Item has a re-parentable master-detail field to Order." },
      { id: "B", text: "Order has a re-parentable master-detail field to Line Item." },
      { id: "C", text: "Line Item has a re-parentable lookup field to Order." },
      { id: "D", text: "Order has a re-parentable lookup field to Line Item." }
    ],
    answers: ["A"],
    explanation: "A master-detail field on Line Item pointing to Order lets Order total the lines with a roll-up summary field, and allowing reparenting lets a Line Item move to another Order. A lookup can't support roll-up summaries, and the relationship must be on the child (Line Item)."
  },
  {
    prompt: "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
    options: [
      { id: "A", text: "@AuraEnabled(cacheable=false) public static List<Opportunity> search(String term) { /*implementation*/ }" },
      { id: "B", text: "@AuraEnabled(cacheable=false) public List<Opportunity> search(String term) { /*implementation*/ }" },
      { id: "C", text: "@AuraEnabled(cacheable=true) public static List<Opportunity> search(String term) { /*implementation*/ }" },
      { id: "D", text: "@AuraEnabled(cacheable=true) public List<Opportunity> search(String term) { /*implementation*/ }" }
    ],
    answers: ["C"],
    explanation: "A method used with @wire must be static and marked @AuraEnabled(cacheable=true). The other options are either not cacheable or not static."
  },
  {
    prompt: "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requirement in the most efficient manner?",
    options: [
      { id: "A", text: "A record trigger flow on the Opportunity object" },
      { id: "B", text: "An Apex trigger on the Opportunity object" },
      { id: "C", text: "An approval process on the Opportunity object" },
      { id: "D", text: "An error condition formula on a validation rule on Opportunity" }
    ],
    answers: ["D"],
    explanation: "A validation rule can block the save with one formula, for example ISPICKVAL(StageName, 'Closed Lost') && ISBLANK(Loss_Reason__c) && $Profile.Name <> 'Sales Manager'. It needs no code and applies everywhere the record is saved. An approval process routes records for approval; it doesn't block an edit."
  },
  {
    prompt: "Universal Containers uses a Master-Detail relationship and stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
    options: [
      { id: "A", text: "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order." },
      { id: "B", text: "Use a LATEST formula on each of the latest availability date fields." },
      { id: "C", text: "Use a MAX Roll-Up Summary field on the latest availability date fields." },
      { id: "D", text: "Use a CEILING formula on each of the latest availability date fields." }
    ],
    answers: ["C"],
    explanation: "The Order can ship only when its last Line Item is available, so the ship date is the latest availability date. A MAX roll-up summary field on Order finds it with no code. LATEST and DAYS aren't formula functions, and CEILING rounds numbers."
  },
  {
    prompt: "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
    options: [
      { id: "A", text: "emit()" },
      { id: "B", text: "fireEvent()" },
      { id: "C", text: "registerEvent()" },
      { id: "D", text: "fire()" }
    ],
    answers: ["D"],
    explanation: "In Aura you get the event with $A.get('e.c:myAppEvent'), set any parameters with setParams(), and call fire(). emit() and fireEvent() aren't Aura methods, and <aura:registerEvent> is markup for declaring a component event, not a method."
  },
  {
    prompt: "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
    options: [
      { id: "A", text: "<lightning-input-field field-name=\"Salary__c\"></lightning-input-field>" },
      { id: "B", text: "<lightning-formatted-number value=\"Salary__c\" format-style=\"currency\"></lightning-formatted-number>" },
      { id: "C", text: "<lightning-input type=\"number\" value=\"Salary__c\" formatter=\"currency\"></lightning-input>" },
      { id: "D", text: "<lightning-input-currency value=\"Salary__c\"></lightning-input-currency>" }
    ],
    answers: ["A"],
    explanation: "Inside a lightning-record-edit-form, lightning-input-field reads the field's metadata, so it shows a currency input and respects field-level security automatically. lightning-input doesn't check field-level security, lightning-formatted-number only displays a value, and lightning-input-currency doesn't exist."
  },
  {
    prompt: "What can be used to override the Account's standard Edit button for Lightning Experience?",
    options: [
      { id: "A", text: "Lightning action" },
      { id: "B", text: "Lightning component" },
      { id: "C", text: "Lightning page" },
      { id: "D", text: "Lightning flow" }
    ],
    answers: ["B"],
    explanation: "Standard buttons such as Edit can be overridden in Lightning Experience with a Lightning component (an Aura component that implements lightning:actionOverride) or a Visualforce page. Actions, Lightning pages, and flows can't be used as a standard button override."
  },
  {
    prompt: "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent. Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
    options: [
      { id: "A", text: "Create a custom field on the child object of type Lookup." },
      { id: "B", text: "Create and populate a custom field on the parent object marked as an External ID." },
      { id: "C", text: "Create and populate a custom field on the parent object marked as Unique." },
      { id: "D", text: "Create a custom field on the child object of type External Relationship." }
    ],
    answers: ["B"],
    explanation: "When the parent has a field marked as an External ID, an upsert can set the child's lookup by referencing the parent's external ID value instead of its Salesforce ID. A lookup field alone still needs the Salesforce ID, a Unique field can't be used for this, and External Relationship fields are for external objects."
  },
  {
    prompt: "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
    options: [
      { id: "A", text: "Developer sandboxes" },
      { id: "B", text: "Scratch orgs" },
      { id: "C", text: "Full Copy sandboxes" },
      { id: "D", text: "Developer orgs" }
    ],
    answers: ["B"],
    explanation: "Scratch orgs are short-lived orgs created from source control with Salesforce DX. Each developer can create one with a different configuration defined in a file. Sandboxes and Developer orgs aren't built from source."
  },
  {
    prompt: "Universal Hiring is using Salesforce to capture job applications. A salesforce administrator created two custom objects; Job__c acting as the master object, Job_Application__c acting as the detail.\n\nWithin the Job__c object, a custom multi-select picklist, Preferred_Locations__c, contains a list of approved states for the position. Each Job_Application__c record relates to a Contact within the system through a master-detail relationship.\n\nRecruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the Preferred_Locations__c field, within the Job_Application__c record. Recruiters would like this value to be kept in sync, if changes occur to the Contact's Mailing State or if the Job's Preferred_Locations__c field is updated.\n\nWhat is the recommended tool a developer should use to meet the business requirement?",
    options: [
      { id: "A", text: "Record-triggered flow" },
      { id: "B", text: "Process Builder" },
      { id: "C", text: "Formula field" },
      { id: "D", text: "Apex trigger" }
    ],
    answers: ["D"],
    explanation: "A formula can only check a multi-select picklist with INCLUDES(field, 'literal text'), so it can't compare it to another field such as the Contact's Mailing State. The value must be calculated and stored, and kept in sync when either the Contact or the Job changes. Apex triggers on Contact and Job__c can compare the values and update the related Job Application records."
  },
  {
    prompt: "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit.\n\npublic without sharing class OpportunityService {\n    public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds) {\n        List<OpportunityLineItem> oppLineItems = new List<OpportunityLineItem>();\n        for (Id thisOppId : opportunityIds) {\n            oppLineItems.addAll([Select Id FROM OpportunityLineItem WHERE OpportunityId = :thisOppId]);\n        }\n        return oppLineItems;\n    }\n}\n\nThe above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
    options: [
      { id: "A", text: "Refactor the code above to perform only one SOQL query, filtering by the set of opportunityIds." },
      { id: "B", text: "Use the System.Limits.getLimitQueries() method to ensure the number of queries is less than 100." },
      { id: "C", text: "Use the System.Limits.getQueries() method to ensure the number of queries is less than 100." },
      { id: "D", text: "Refactor the code above to perform the SOQL query only if the set of opportunityIds contains less 100 IDs." }
    ],
    answers: ["A"],
    explanation: "Querying inside a loop runs one query per Id. One query with WHERE OpportunityId IN :opportunityIds gets every line item with a single query, however many Ids there are. Checking limits or capping the input only hides the problem."
  },
  {
    prompt: "Which two settings must be defined in order to update a record of a junction object?",
    options: [
      { id: "A", text: "Read/Write access on the primary relationship" },
      { id: "B", text: "Read/Write access on the junction object" },
      { id: "C", text: "Read/Write access on the secondary relationship" },
      { id: "D", text: "Read access on the primary relationship" }
    ],
    answers: ["A", "C"],
    explanation: "A junction object has no sharing settings of its own; access to its records comes from the two master records. To edit a junction record, the user needs Read/Write access to both the primary and the secondary master records."
  },
  {
    prompt: "Given the following code snippet, that is part of a custom controller for a Visualforce page:\n\npublic void updateContact(Contact thisContact) {\n    thisContact.Is_Active__c = false;\n    try {\n        update thisContact;\n    } catch (Exception e) {\n        String errorMessage = 'An error occurred while updating the Contact. ' + e.getMessage();\n        ApexPages.addmessage(new ApexPages.message(ApexPages.severity.FATAL, errorMessage));\n    }\n}\n\nIn which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access?",
    options: [
      { id: "A", text: "Use if (Schema.sObjectType.Contact.isAccessible())" },
      { id: "B", text: "Use if (thisContact.OwnerId == UserInfo.getUserId())" },
      { id: "C", text: "Use if (Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable())" },
      { id: "D", text: "Use if (Schema.sObjectType.Contact.isUpdateable())" }
    ],
    answers: ["C", "D"],
    explanation: "The code updates a Contact, so it must check that the user can edit Contacts (object-level isUpdateable()) and edit the Is_Active__c field (field-level isUpdateable()). isAccessible() only checks read access, and checking the owner doesn't check permissions."
  },
  {
    prompt: "A developer created a trigger on the Account object and wants to test if the trigger is properly bulkified. The developer team decided that the trigger should be tested with 200 account records with unique names. What two things should be done to create the test data within the unit test with the least amount of code?",
    options: [
      { id: "A", text: "Use the @isTest(seeAllData=true) annotation in the test class." },
      { id: "B", text: "Create a static resource containing test data." },
      { id: "C", text: "Use Test.loadData to populate data in your test methods." },
      { id: "D", text: "Use the @isTest(isParallel=true) annotation in the test class." }
    ],
    answers: ["B", "C"],
    explanation: "Put the 200 Accounts in a CSV file uploaded as a static resource, then insert them all with one line: Test.loadData(Account.sObjectType, 'resourceName'). seeAllData uses real org data instead of creating test data, and isParallel only controls how tests run."
  },
  {
    prompt: "What are three ways for a developer to execute tests in an org?",
    options: [
      { id: "A", text: "SalesforceDX" },
      { id: "B", text: "Bulk API" },
      { id: "C", text: "Metadata API" },
      { id: "D", text: "Setup Menu" },
      { id: "E", text: "Tooling API" }
    ],
    answers: ["A", "D", "E"],
    explanation: "Tests can be run from the Salesforce DX CLI, from Setup (Apex Test Execution), and through the Tooling API (for example runTestsAsynchronous). The Bulk API loads data and can't run tests."
  },
  {
    prompt: "Refer to the following Apex code:\n\nInteger x = 0;\ndo {\n    x = 1;\n    x++;\n} while (x < 1);\nSystem.debug(x);\n\nWhat is the value of x when it is written to the debug log?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "3" }
    ],
    answers: ["C"],
    explanation: "A do-while loop always runs its body once. x is set to 1, then incremented to 2. The condition 2 < 1 is false, so the loop ends and 2 is written to the log."
  },
  {
    prompt: "Universal Containers has implemented an order management application. Each Order can have one or more Order Line items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multiplying the Order Line item price with the quantity ordered. What is the best practice to get the sum of all Order Line item totals on the Order record?",
    options: [
      { id: "A", text: "Roll-up summary field" },
      { id: "B", text: "Quick action" },
      { id: "C", text: "Apex trigger" },
      { id: "D", text: "Formula field" }
    ],
    answers: ["A"],
    explanation: "Because Order Line is the detail in a master-detail relationship, a roll-up summary field on Order can SUM the line totals with no code, and Salesforce keeps it up to date. An Apex trigger is only needed when there's no master-detail relationship."
  },
  {
    prompt: "Which code should be used to update an existing Visualforce page that uses standard Visualforce components so that the page matches the look and feel of Lightning Experience?",
    options: [
      { id: "A", text: "<apex:page lightningStyleSheets=\"true\">" },
      { id: "B", text: "<apex:includeLightning/>" },
      { id: "C", text: "<apex:slds/>" },
      { id: "D", text: "<apex:stylesheet value=\"{!$URLFOR($Resource.slds, 'assets/slds.css')}\">" }
    ],
    answers: ["A"],
    explanation: "lightningStyleSheets=\"true\" automatically restyles standard Visualforce components (like apex:pageBlock and apex:inputField) to look like Lightning Experience. <apex:slds/> and a stylesheet only load SLDS CSS classes; the page must be rewritten to use them. <apex:includeLightning/> is for adding Lightning components to a page."
  },
  {
    prompt: "Which exception type cannot be caught?",
    options: [
      { id: "A", text: "NoAccessException" },
      { id: "B", text: "LimitException" },
      { id: "C", text: "A Custom Exception" },
      { id: "D", text: "CalloutException" }
    ],
    answers: ["B"],
    explanation: "When a governor limit is exceeded, Apex throws a System.LimitException, which can't be caught; the transaction stops and rolls back. The other exceptions can be handled with try-catch."
  },
  {
    prompt: "What are two use cases for executing Anonymous Apex code?",
    options: [
      { id: "A", text: "To add unit test code coverage to an org" },
      { id: "B", text: "To run a batch Apex class to update all Contacts" },
      { id: "C", text: "To delete 15,000 inactive Accounts in a single transaction after a deployment" },
      { id: "D", text: "To schedule an Apex class to run periodically" }
    ],
    answers: ["B", "D"],
    explanation: "Anonymous Apex is handy for one-off tasks such as Database.executeBatch() or System.schedule(). It doesn't add code coverage, and deleting 15,000 records in one transaction exceeds the 10,000 DML row limit."
  },
  {
    prompt: "A developer wants to invoke an outbound message when a record meets a specific criteria. Which two features satisfy this use case?",
    options: [
      { id: "A", text: "Flow Builder can be used to check the record criteria and send an outbound message." },
      { id: "B", text: "Next Best Action can be used to check the record criteria and send an outbound message." },
      { id: "C", text: "Entitlement Process can be used to check the record criteria and send an outbound message without Apex code." },
      { id: "D", text: "Approval Process can be used to check the record criteria and send an outbound message without Apex code." }
    ],
    answers: ["A", "D"],
    explanation: "A record-triggered flow can check the criteria and use the Outbound Message action, and approval processes support outbound messages as approval actions. Next Best Action only shows recommendations, and entitlement processes don't send outbound messages."
  },
  {
    prompt: "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records:\n\n@AuraEnabled\npublic void static updateLeads() {\n    for (Lead thisLead : [SELECT Origin__c FROM Lead]) {\n        thisLead.LeadSource = thisLead.Origin__c;\n        update thisLead;\n    }\n}\n\nWhich governor limit will likely be exceeded within the Apex transaction?",
    options: [
      { id: "A", text: "Total number of SOQL queries issued" },
      { id: "B", text: "Total number of records processed as a result of DML statements" },
      { id: "C", text: "Total number of records retrieved by SOQL queries" },
      { id: "D", text: "Total number of DML statements issued" }
    ],
    answers: ["D"],
    explanation: "The update runs once per Lead inside the loop, so with over 2,000 Leads it passes the limit of 150 DML statements per transaction. There's only one query, the 50,000-row query limit isn't reached, and the 10,000-row DML limit isn't reached first."
  },
  {
    prompt: "Refer to the following Apex class:\n\nclass myClass {\n    class CustomException extends Exception {}\n    public static Account aQuery() {\n        Account theAccount;\n        try {\n            system.debug('Querying Accounts.');\n            theAccount = [SELECT Id FROM Account WHERE CreatedDate > TODAY];\n        }\n        catch (CustomException eX) {\n            system.debug('Custom Exception.');\n        }\n        catch (QueryException eX) {\n            system.debug('Query Exception.');\n        }\n        finally {\n            system.debug('Done.');\n        }\n        return theAccount;\n    }\n}\n\nWhat is written to the debug log when the query does not return exactly one Account?",
    options: [
      { id: "A", text: "Querying Accounts. Custom Exception. Done." },
      { id: "B", text: "Querying Accounts. Custom Exception." },
      { id: "C", text: "Querying Accounts. Query Exception." },
      { id: "D", text: "Querying Accounts. Query Exception. Done." }
    ],
    answers: ["D"],
    explanation: "Assigning a query to a single Account throws a QueryException when it returns zero or more than one row. The QueryException catch block logs 'Query Exception.', and the finally block always runs, logging 'Done.'. The CustomException block is never used because nothing throws one."
  },
  {
    prompt: "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator. How can the developer resolve the error?",
    options: [
      { id: "A", text: "Add static to the server-side method signature." },
      { id: "B", text: "Decorate the server-side method with (static=false)." },
      { id: "C", text: "Decorate the server-side method with (static=true)." },
      { id: "D", text: "Change the function signature to be private static." }
    ],
    answers: ["A"],
    explanation: "@RemoteAction methods must be static and either global or public. The annotation has no static parameter, and a private method can't be called remotely."
  },
  {
    prompt: "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object. Which two automation tools can be used to implement this feature?",
    options: [
      { id: "A", text: "Before-save flow" },
      { id: "B", text: "Approval process" },
      { id: "C", text: "Quick actions" },
      { id: "D", text: "Account trigger" }
    ],
    answers: ["A", "D"],
    explanation: "Both a before-save record-triggered flow and an Account trigger run automatically whenever the Postal Code is edited. Each can look up the matching PostalCodeToTimezone__c record and set Timezone. A quick action only runs when a user clicks it, and an approval process routes records for approval."
  },
  {
    prompt: "A software company uses the following objects and relationships:\n\n• Case: to handle customer support issues\n• Defect__c: a custom object to represent known issues with the company's software\n• Case_Defect__c: a junction object between Case and Defect__c to represent that a defect is a cause of a customer issue\n\nCase and Defect__c have Private organization-wide defaults. What should be done to share a specific Case_Defect__c record with a user?",
    options: [
      { id: "A", text: "Share the parent Case and Defect__c records." },
      { id: "B", text: "Share the parent Case record." },
      { id: "C", text: "Share the Case_Defect__c record." },
      { id: "D", text: "Share the parent Defect__c record." }
    ],
    answers: ["A"],
    explanation: "A junction object's records can't be shared directly; access comes from both master records. The user needs access to both the Case and the Defect__c record to see the Case_Defect__c record."
  },
  {
    prompt: "Universal Containers (UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called \"Global Address\". Which field should the developer add to create the most efficient model that supports the business need?",
    options: [
      { id: "A", text: "Add a master-detail field on the Global Address object to the Account object." },
      { id: "B", text: "Add a lookup field on the Account object to the Global Address object." },
      { id: "C", text: "Add a lookup field on the Global Address object to the Account object." },
      { id: "D", text: "Add a master-detail field on the Account object to the Global Address object." }
    ],
    answers: ["B"],
    explanation: "Many Accounts share one address, so each Account points to a Global Address with a lookup field on Account. A standard object like Account can't be the detail in a master-detail relationship, and a field on Global Address would link each address to only one Account."
  },
  {
    prompt: "Managers at Universal Containers want to ensure that only decommissioned containers are able to be deleted in the system. To meet the business requirement a Salesforce developer adds \"Decommissioned\" as a picklist value for the Status__c custom field within the Container__c object. Which tool should the developer use to enforce only Container records with a status of \"Decommissioned\" can be deleted?",
    options: [
      { id: "A", text: "Apex trigger" },
      { id: "B", text: "Before record-triggered flow" },
      { id: "C", text: "Validation rule" },
      { id: "D", text: "After record-triggered flow" }
    ],
    answers: ["A"],
    explanation: "Validation rules only run on insert and update, never on delete. A before delete Apex trigger can check Status__c and call addError() to stop the delete. Before-save flows don't run on delete."
  },
  {
    prompt: "A business implemented a gamification plan to encourage its customers to watch some educational videos. Customers can watch videos over several days, and their progress is recorded. Award points are granted to customers for all completed videos. When the video is marked as completed in Salesforce, an external web service must be called so that points can be awarded to the user. A developer implemented these requirements in the after update trigger by making a call to an external web service. However, a System.CalloutException is occurring. What should the developer do to fix this error?",
    options: [
      { id: "A", text: "Move the callout to an asynchronous method with @future(callout=true) annotation." },
      { id: "B", text: "Replace the after update trigger with a before insert trigger." },
      { id: "C", text: "Surround the external call with a try-catch block to handle the exception." },
      { id: "D", text: "Write a REST service to integrate with the external web service." }
    ],
    answers: ["A"],
    explanation: "Triggers can't make callouts directly, because the transaction holds a database connection open. Moving the callout to an @future(callout=true) method (or a Queueable) runs it asynchronously after the trigger finishes. A try-catch only hides the error."
  },
  {
    prompt: "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
    options: [
      { id: "A", text: "Visual Studio Code IDE" },
      { id: "B", text: "Developer Console" },
      { id: "C", text: "AppExchange" },
      { id: "D", text: "Setup Menu" }
    ],
    answers: ["B"],
    explanation: "The Developer Console captures debug logs and its Log Inspector (Timeline and Performance Tree views) shows how long each part of the request took."
  },
  {
    prompt: "Given the following Apex statement:\n\nAccount myAccount = [SELECT Id, Name FROM Account];\n\nWhat occurs when more than one Account is returned by the SOQL query?",
    options: [
      { id: "A", text: "An unhandled exception is thrown and the code terminates." },
      { id: "B", text: "The query fails and an error is written to the debug log." },
      { id: "C", text: "The variable, myAccount, is automatically cast to the List data type." },
      { id: "D", text: "The first Account returned is assigned to myAccount." }
    ],
    answers: ["A"],
    explanation: "Assigning a query to a single sObject requires exactly one row. With more than one, Apex throws a QueryException ('List has more than 1 row for assignment to SObject'), and with no try-catch the code stops."
  },
  {
    prompt: "Management asked for opportunities to be automatically created for accounts with annual revenue greater than $1,000,000. A developer created the following trigger on the Account object to satisfy this requirement.\n\nfor (Account a : Trigger.new) {\n    if (a.AnnualRevenue > 1000000) {\n        List<Opportunity> oppList = [SELECT Id FROM Opportunity WHERE accountId = :a.Id];\n        if (oppList.size() == 0) {\n            Opportunity oppty = new Opportunity(Name = a.name, StageName = 'Prospecting', CloseDate = system.today().addDays(30));\n            insert oppty;\n        }\n    }\n}\n\nUsers are able to update the account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrator tries to upload a list of 179 accounts using Data Loader, it fails with System.Exception errors. Which two actions should the developer take to fix the code segment shown above?",
    options: [
      { id: "A", text: "Move the DML that saves opportunities outside the for loop." },
      { id: "B", text: "Use Database.query to query the opportunities." },
      { id: "C", text: "Check if all the required fields for Opportunity are being added on creation." },
      { id: "D", text: "Query for existing opportunities outside the for loop." }
    ],
    answers: ["A", "D"],
    explanation: "With 179 accounts, the query inside the loop passes the 100 SOQL query limit (and the insert could pass the 150 DML limit). Bulkify the trigger: query all related opportunities once before the loop, collect the new opportunities in a list, and insert the list once after the loop."
  },
  {
    prompt: "A developer identifies the following triggers on the Expense__c object:\n\ndeleteExpense,\napplyDefaultsToExpense,\nvalidateExpenseUpdate;\n\nThe triggers process before delete, before insert, and before update events respectively. Which two techniques should the developer implement to ensure trigger best practices are followed?",
    options: [
      { id: "A", text: "Unify the before insert and before update triggers and use Flow for the delete action." },
      { id: "B", text: "Unify all three triggers in a single trigger on the Expense__c object that includes all events." },
      { id: "C", text: "Create helper classes to execute the appropriate logic when a record is saved." },
      { id: "D", text: "Maintain all three triggers on the Expense__c object, but move the Apex logic out of the trigger definition." }
    ],
    answers: ["B", "C"],
    explanation: "Best practice is one trigger per object, because the order in which several triggers on the same object run isn't guaranteed. Keep the trigger itself small and put the logic in handler or helper classes."
  },
  {
    prompt: "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
    options: [
      { id: "A", text: "Account.isDeletable()" },
      { id: "B", text: "accountRec.sObjectType.isDeletable()" },
      { id: "C", text: "accountRec.isDeletable()" },
      { id: "D", text: "Schema.sObjectType.Account.isDeletable()" }
    ],
    answers: ["D"],
    explanation: "Schema.sObjectType.Account returns the describe result for Account, and isDeletable() reports whether the running user can delete Accounts. isDeletable() isn't available on a record variable or directly on the Account type."
  },
  {
    prompt: "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. What is the correct implementation of the ShippingCalculator class?",
    options: [
      { id: "A", text: "public abstract class ShippingCalculator { public void calculate() { /*implementation*/ } }" },
      { id: "B", text: "public abstract class ShippingCalculator { public abstract calculate() { /*implementation*/ } }" },
      { id: "C", text: "public abstract class ShippingCalculator { public virtual void calculate() { /*implementation*/ } }" },
      { id: "D", text: "public abstract class ShippingCalculator { public override calculate() { /*implementation*/ } }" }
    ],
    answers: ["C"],
    explanation: "An abstract class can't be instantiated. A virtual method has a working body that subclasses can override. A method without virtual can't be overridden, an abstract method can't have a body, and override is for replacing a parent's method."
  },
  {
    prompt: "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?",
    options: [
      { id: "A", text: "SFDX CLI" },
      { id: "B", text: "Change Sets" },
      { id: "C", text: "VSCode" },
      { id: "D", text: "Developer Console" }
    ],
    answers: ["A", "C"],
    explanation: "Deployment scripts run Salesforce CLI (SFDX) commands, which can be run from a terminal or from VS Code with the Salesforce Extensions. Change Sets are point-and-click, and the Developer Console can't deploy."
  },
  {
    prompt: "Refer to the following code snippet for an environment that has more than 200 Accounts belonging to the 'Technology' industry:\n\nfor (Account thisAccount : [Select Id, Industry FROM Account LIMIT 250]) {\n    if (thisAccount.Industry == 'Technology') {\n        thisAccount.Is_Tech__c = true;\n    }\n    update thisAccount;\n}\n\nWhen the code executes, what happens as a result of the Apex transaction?",
    options: [
      { id: "A", text: "The Apex transaction fails regardless of the context of execution by exceeding the DML governor limit." },
      { id: "B", text: "If executed in an asynchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit." },
      { id: "C", text: "If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit." },
      { id: "D", text: "The Apex transaction fails with the following message: SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c." }
    ],
    answers: ["A"],
    explanation: "The update runs once per Account, up to 250 times, but the limit is 150 DML statements in both synchronous and asynchronous Apex, so it fails either way. Setting a field that wasn't queried is allowed."
  },
  {
    prompt: "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system based on an ad-hoc basis when the user presses a custom button on the Opportunity detail page. Example values are as follows:\n\n• Name\n• Amount\n• Account\n\nWhich two methods should the developer implement to fulfill the business requirement?",
    options: [
      { id: "A", text: "Create a Remote Action on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated." },
      { id: "B", text: "Create an after update trigger on the Opportunity object that calls a helper method using @Future(Callout=true) to perform the HTTP REST callout." },
      { id: "C", text: "Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page." },
      { id: "D", text: "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page." }
    ],
    answers: ["C", "D"],
    explanation: "The callout happens only when the user clicks a button, so it needs a quick action that opens a Visualforce page or a Lightning component. Options A and B run on every update, not when the user asks."
  },
  {
    prompt: "Which three statements are accurate about debug logs?",
    options: [
      { id: "A", text: "Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels." },
      { id: "B", text: "The maximum size of a debug log is 5 MB." },
      { id: "C", text: "Only the 20 most recent debug logs for a user are kept." },
      { id: "D", text: "Debug logs can be set for specific users, classes, and triggers." },
      { id: "E", text: "System debug logs are retained for 24 hours." }
    ],
    answers: ["A", "D", "E"],
    explanation: "Log levels are cumulative: a level includes everything at the levels above it. Trace flags can be set for users, Apex classes, and triggers, and system debug logs are kept for 24 hours. A single log can be up to 20 MB, and the old 20-logs-per-user rule was replaced by an org-wide 1,000 MB limit."
  },
  {
    prompt: "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users. Which three things should the developer do to satisfy these requirements?",
    options: [
      { id: "A", text: "Add a dynamic action to the Account record page." },
      { id: "B", text: "Create a custom permission for the users." },
      { id: "C", text: "Create a Lightning web component." },
      { id: "D", text: "Add a dynamic action to the user's assigned page layouts." },
      { id: "E", text: "Create a dynamic form." }
    ],
    answers: ["A", "B", "C"],
    explanation: "A Lightning web component can show the custom object form with different fields per role. A custom permission identifies the small group of users, and a dynamic action on the Account Lightning record page shows the action only to users with that permission. Dynamic actions are set on Lightning record pages, not page layouts, and Dynamic Forms only arrange the Account's own fields, so they can't create a record of another object."
  },
  {
    prompt: "Which three statements are true regarding custom exceptions in Apex?",
    options: [
      { id: "A", text: "A custom exception class must extend the system Exception class." },
      { id: "B", text: "A custom exception class can implement one or many interfaces." },
      { id: "C", text: "A custom exception class name must end with \"Exception\"." },
      { id: "D", text: "A custom exception class can extend other classes besides the Exception class." },
      { id: "E", text: "A custom exception class cannot contain member variables or methods." }
    ],
    answers: ["A", "B", "C"],
    explanation: "A custom exception must extend Exception (directly or through another custom exception), and its name must end in \"Exception\". Like any class, it can implement interfaces and have its own variables and methods."
  },
  {
    prompt: "Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
    options: [
      { id: "A", text: "Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application." },
      { id: "B", text: "Rewrite all Visualforce pages as Lightning components." },
      { id: "C", text: "Set the attribute enableLightning to true in the definition." },
      { id: "D", text: "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications." }
    ],
    answers: ["D"],
    explanation: "The apps are built with a third-party JavaScript framework, not standard Visualforce components, so adding the SLDS stylesheet is the quickest way to give them the Lightning look. The availability checkbox doesn't change styling, enableLightning isn't a real attribute, and rewriting everything is slowest."
  },
  {
    prompt: "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debitAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time?",
    options: [
      { id: "A", text: "Use the static keyword and assign its value in the class constructor." },
      { id: "B", text: "Use the final keyword and assign its value in the class constructor." },
      { id: "C", text: "Use the final keyword and assign its value when declaring the variable." },
      { id: "D", text: "Use the static keyword and assign its value in a static initializer." }
    ],
    answers: ["B", "C"],
    explanation: "A final variable can be assigned only once, either where it's declared or in a constructor. static only shares a variable across instances; it can still be changed."
  },
  {
    prompt: "A company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the records together. Which two statements are valid considerations when using merge?",
    options: [
      { id: "A", text: "The field values on the master record are overwritten by the records being merged." },
      { id: "B", text: "The merge method allows up to three records, including the master and two additional records with the same sObject type, to be merged into the master record." },
      { id: "C", text: "External ID fields can be used with the merge method." },
      { id: "D", text: "Merge is supported with accounts, contacts, cases, and leads." }
    ],
    answers: ["B", "D"],
    explanation: "merge combines up to three records of the same type (the master plus two others) and works with Leads, Contacts, Accounts, Cases, and Individuals. The master record's field values are kept, not overwritten, and Salesforce's documentation says external ID fields can't be used with merge."
  },
  {
    prompt: "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
    options: [
      { id: "A", text: "@InvocableMethod global Recommendation getLevel(ContactWrapper input) { /*implementation*/ }" },
      { id: "B", text: "@InvocableMethod global static ListRecommendation getLevel(List<ContactWrapper> input) { /*implementation*/ }" },
      { id: "C", text: "@InvocableMethod global List<List<Recommendation>> getLevel(List<ContactWrapper> input) { /*implementation*/ }" },
      { id: "D", text: "@InvocableMethod global static List<List<Recommendation>> getLevel(List<ContactWrapper> input) { /*implementation*/ }" }
    ],
    answers: ["D"],
    explanation: "An invocable method must be static and take a List. An Enhance element expects one list of recommendations back for each input, so the return type is List<List<Recommendation>>."
  },
  {
    prompt: "Which three Salesforce resources can be accessed from a Lightning web component?",
    options: [
      { id: "A", text: "Content asset files" },
      { id: "B", text: "All external libraries" },
      { id: "C", text: "SVG resources" },
      { id: "D", text: "Third-party web components" },
      { id: "E", text: "Static resources" }
    ],
    answers: ["A", "C", "E"],
    explanation: "A Lightning web component can import static resources (@salesforce/resourceUrl), content asset files (@salesforce/contentAssetUrl), and use SVG resources. Not every external library works with Lightning Locker or Lightning Web Security."
  },
  {
    prompt: "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace. Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
    options: [
      { id: "A", text: "Declare the class as public and use the global access modifier on the method." },
      { id: "B", text: "Declare the class as global and use the public access modifier on the method." },
      { id: "C", text: "Declare the class and method using the global access modifier." },
      { id: "D", text: "Declare the class and method using the public access modifier." }
    ],
    answers: ["C"],
    explanation: "Code outside a managed package's namespace can only use global classes and global methods, so both the class and the method must be global. public is visible only inside the package's namespace."
  },
  {
    prompt: "Which process automation can be used to calculate the shipping cost for an Order when the Order is placed and apply a percentage of the shipping cost to some of the related Order Products?",
    options: [
      { id: "A", text: "Entitlement Rules" },
      { id: "B", text: "Flow Builder" },
      { id: "C", text: "Approval Process" },
      { id: "D", text: "Lightning Component" }
    ],
    answers: ["B"],
    explanation: "A record-triggered flow can run when the Order is placed, calculate the shipping cost, and loop through the related Order Products to update some of them. The other options can't calculate values and update related records automatically."
  },
  {
    prompt: "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of tests allowing them to test independent requirements for various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?",
    options: [
      { id: "A", text: "Use @TestSetup with a void method." },
      { id: "B", text: "Create a mock using the Stub API." },
      { id: "C", text: "Create test data before Test.startTest() in the unit test." },
      { id: "D", text: "Add @IsTest(seeAllData=true) at the start of the unit test class." }
    ],
    answers: ["A"],
    explanation: "A @TestSetup method creates the baseline records once, and each test method gets its own fresh copy. Creating data in every test is repetitive, and seeAllData depends on real org data."
  },
  {
    prompt: "A lead developer creates an Apex interface called \"Laptop\". Consider the following code snippet:\n\npublic class SilverLaptop {\n    //code implementation\n}\n\nHow can a developer use the Laptop interface within the SilverLaptop class?",
    options: [
      { id: "A", text: "@Extends(class=\"Laptop\") public class SilverLaptop" },
      { id: "B", text: "public class SilverLaptop extends Laptop" },
      { id: "C", text: "@Interface(class=\"Laptop\") public class SilverLaptop" },
      { id: "D", text: "public class SilverLaptop implements Laptop" }
    ],
    answers: ["D"],
    explanation: "A class uses an interface with the implements keyword. extends is only for inheriting from a virtual or abstract class, and @Extends and @Interface aren't Apex annotations."
  },
  {
    prompt: "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
    options: [
      { id: "A", text: "force:data:tree:import" },
      { id: "B", text: "force:data:object:create" },
      { id: "C", text: "force:data:bulk:upsert" },
      { id: "D", text: "force:data:async:upsert" }
    ],
    answers: ["A", "C"],
    explanation: "force:data:tree:import loads related records from JSON files, and force:data:bulk:upsert loads records from a CSV file using the Bulk API. The other two commands don't exist."
  },
  {
    prompt: "A developer is creating a Lightning web component to show a list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field. How should this be enforced so that the component works for both users without showing any errors?",
    options: [
      { id: "A", text: "Use Lightning Data Service to get the collection of sales records." },
      { id: "B", text: "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component." },
      { id: "C", text: "Use Security.stripInaccessible to remove fields inaccessible to the current user." },
      { id: "D", text: "Use Lightning Locker Service to enforce sharing rules and field-level security." }
    ],
    answers: ["C"],
    explanation: "Security.stripInaccessible removes the fields the user can't see and returns the rest, so the Sales Assistant gets the records without the commission field and no error. WITH SECURITY_ENFORCED throws an error if any queried field is inaccessible, and Locker Service doesn't enforce sharing or field-level security."
  },
  {
    prompt: "What are three characteristics of change set deployments?",
    options: [
      { id: "A", text: "Sending a change set between two orgs requires a deployment connection." },
      { id: "B", text: "Change sets can only be used between related organizations." },
      { id: "C", text: "Change sets can be used to transfer records." },
      { id: "D", text: "Change sets can deploy custom settings data." },
      { id: "E", text: "Deployment is done in a one-way, single transaction." }
    ],
    answers: ["A", "B", "E"],
    explanation: "Change sets need a deployment connection, only work between orgs related to the same production org, and deploy one way in a single transaction that fully succeeds or rolls back. They move metadata only, not records or custom settings data."
  },
  {
    prompt: "An org has two custom objects:\n\n• Plan__c, that has a master-detail relationship to the Account object\n• Plan_Item__c, that has a master-detail relationship to the Plan__c object\n\nWhat should a developer use to create a Visualforce section on the Account page layout that displays all of the Plan__c records related to the Account and all of the Plan_Item__c records related to those Plan__c records?",
    options: [
      { id: "A", text: "A standard controller with a controller extension" },
      { id: "B", text: "A standard controller with a custom controller" },
      { id: "C", text: "A custom controller by itself" },
      { id: "D", text: "A controller extension with a custom controller" }
    ],
    answers: ["A"],
    explanation: "A Visualforce page can be added to the Account page layout only if it uses the Account standard controller. An extension adds the query for Plans and their Plan Items, which the standard controller alone can't do. A page can't use a standard controller and a custom controller together."
  },
  {
    prompt: "A developer has identified a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database. Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?",
    options: [
      { id: "A", text: "Use partial DML statements to ensure only valid data is committed." },
      { id: "B", text: "Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL." },
      { id: "C", text: "Use the Database.Savepoint method to enforce database integrity." },
      { id: "D", text: "Use the System.Limit class to monitor the current CPU governor limit consumption." }
    ],
    answers: ["C", "D"],
    explanation: "A savepoint with Database.rollback() gives transaction control so changes can be undone, and the Limits class (for example Limits.getCpuTime()) lets the method check its CPU use before going over. @ReadOnly doesn't allow DML, and partial DML doesn't control the transaction."
  },
  {
    prompt: "What are two best practices when it comes to Lightning Web Component events?",
    options: [
      { id: "A", text: "Use event.target to communicate data to elements that aren't in the same shadow tree." },
      { id: "B", text: "Use events configured with bubbles: false and composed: false." },
      { id: "C", text: "Use CustomEvent to pass data from a child to a parent component." },
      { id: "D", text: "Use event.detail to communicate data to elements in the same shadow tree." }
    ],
    answers: ["B", "C"],
    explanation: "Salesforce recommends events with bubbles: false and composed: false so they don't leak outside the component, and CustomEvent for sending data from a child up to its parent. Options A and D swap the guidance: event.target is for elements in the same shadow tree, and event.detail is for elements outside it."
  },
  {
    prompt: "What can be developed using the Lightning Component framework?",
    options: [
      { id: "A", text: "Dynamic web sites" },
      { id: "B", text: "Salesforce integrations" },
      { id: "C", text: "Single-page web apps" },
      { id: "D", text: "Hosted web applications" }
    ],
    answers: ["C"],
    explanation: "The Lightning Component framework is a UI framework for building single-page applications for mobile and desktop."
  },
  {
    prompt: "The Account object in an organization has a master detail relationship to a child object called Branch. The following automations exist:\n\n• Rollup summary fields\n• Custom validation rules\n• Duplicate rules\n\nA developer created a trigger on the Account object. What two things should the developer consider while testing the trigger code?",
    options: [
      { id: "A", text: "Rollup summary fields can cause the parent record to go through Save." },
      { id: "B", text: "The trigger may fire multiple times during a transaction." },
      { id: "C", text: "Duplicate rules are executed once all DML operations commit to the database." },
      { id: "D", text: "The validation rules will cause the trigger to fire again." }
    ],
    answers: ["A", "B"],
    explanation: "When a Branch changes, the roll-up summary recalculates and the parent Account is saved again, so the Account trigger can fire more than once in a transaction. Duplicate rules run before the record is saved, and validation rules don't re-fire triggers."
  },
  {
    prompt: "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application?",
    options: [
      { id: "A", text: "Triggers" },
      { id: "B", text: "Flows" },
      { id: "C", text: "Relationships" },
      { id: "D", text: "Custom objects and fields" },
      { id: "E", text: "Roll-up summaries" }
    ],
    answers: ["C", "D", "E"],
    explanation: "The database layer is the data model: custom objects and fields, relationships between them, and roll-up summary fields. Flows are business logic, and triggers are code."
  },
  {
    prompt: "Given the code below in an Apex class:\n\nList<Account> aList = [SELECT Id, Active__c FROM Account];\nfor (Account a : aList) {\n    if (!a.Active__c) {\n        a.Name = 'INACTIVE';\n    }\n}\n\nupdate aList;\n\nWhat should a developer do to correct the code so that there is no chance of hitting a governor limit?",
    options: [
      { id: "A", text: "Change the DML to use Database.update(aList, true);" },
      { id: "B", text: "Change the DML to use Database.update(aList, false);" },
      { id: "C", text: "Add a LIMIT clause to the SOQL statement." },
      { id: "D", text: "Add a WHERE clause to the SOQL statement." }
    ],
    answers: ["C"],
    explanation: "With no LIMIT, the query could return more than 50,000 rows (the query row limit) and update more than 10,000 (the DML row limit). A LIMIT clause caps the rows, so the limits can't be exceeded. A WHERE clause reduces rows but doesn't guarantee a maximum."
  },
  {
    prompt: "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?",
    options: [
      { id: "A", text: "Use the Flow Properties page." },
      { id: "B", text: "Use SOQL and the Tooling API." },
      { id: "C", text: "Use the ApexTestResult class." },
      { id: "D", text: "Use the Code Coverage Setup page." }
    ],
    answers: ["B"],
    explanation: "Flow test coverage is stored in Tooling API objects such as FlowTestCoverage and FlowDefinitionView, which you query with SOQL through the Tooling API. The other options only cover Apex or don't show coverage."
  },
  {
    prompt: "A custom picklist field, Food_Preference__c, exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the optimal way to ensure a value is selected every time a record is saved?",
    options: [
      { id: "A", text: "Mark the field as Required on the object's page layout." },
      { id: "B", text: "Write an Apex trigger to ensure a value is selected." },
      { id: "C", text: "Mark the field as Required on the field definition." },
      { id: "D", text: "Set \"Use the first value in the list as the default value\" to True." }
    ],
    answers: ["C"],
    explanation: "Making the field required in its definition applies everywhere the record is saved: the UI, the API, imports, and Apex. A page layout requirement only applies in the UI, and a default value can still be cleared."
  }
];

window.platformDeveloperPart3Questions = [
  {
    prompt: "A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class.\n\npublic virtual class Payment {\n    public virtual void makePayment(Decimal amount) { /*implementation*/ }\n}\n\nWhich is the correct implementation?",
    options: [
      { id: "A", text: "public class CreditCardPayment implements Payment { public override void makePayment(Decimal amount) { /*implementation*/ } }" },
      { id: "B", text: "public class CreditCardPayment extends Payment { public virtual void makePayment(Decimal amount) { /*implementation*/ } }" },
      { id: "C", text: "public class CreditCardPayment extends Payment { public override void makePayment(Decimal amount) { /*implementation*/ } }" },
      { id: "D", text: "public class CreditCardPayment implements Payment { public virtual void makePayment(Decimal amount) { /*implementation*/ } }" }
    ],
    answers: ["C"],
    explanation: "Payment is a virtual class, not an interface, so the subclass uses extends, and a method that replaces a virtual method must be marked override. implements is only for interfaces."
  },
  {
    prompt: "Where are two locations a developer can look to find information about the status of batch or future methods?",
    options: [
      { id: "A", text: "Paused Flow Interviews component" },
      { id: "B", text: "Developer Console" },
      { id: "C", text: "Apex Flex Queue" },
      { id: "D", text: "Apex Jobs" }
    ],
    answers: ["C", "D"],
    explanation: "The Apex Jobs page in Setup shows the status of batch, future, queueable, and scheduled jobs, and the Apex Flex Queue shows batch jobs waiting to run. Paused Flow Interviews are for flows."
  },
  {
    prompt: "A recursive transaction is initiated by a DML statement creating records for these two objects:\n\n• Accounts\n• Contacts\n\nWithin the transaction, the Account trigger hits a stack depth of 16. Which statement is true regarding the outcome of the transaction?",
    options: [
      { id: "A", text: "The Account records are rolled back and the Contact records are committed." },
      { id: "B", text: "The transaction succeeds and all changes are committed to the database." },
      { id: "C", text: "The transaction fails and all the changes are rolled back." },
      { id: "D", text: "The transaction fails only if the Contact trigger stack depth is greater or equal to 16." }
    ],
    answers: ["C"],
    explanation: "Apex allows a trigger stack depth of 16. Recursion that reaches it throws an uncatchable 'maximum trigger depth exceeded' error, and the whole transaction, Accounts and Contacts alike, is rolled back."
  },
  {
    prompt: "Flow Builder uses an Apex Action to provide additional information about multiple Contacts, stored in a custom class, ContactInfo. Which is the correct definition of the Apex method that gets the additional information?",
    options: [
      { id: "A", text: "@InvocableMethod(label='Additional Info') public static ContactInfo getInfo(Id contactId) { /*implementation*/ }" },
      { id: "B", text: "@InvocableMethod(label='Additional Info') public static List<ContactInfo> getInfo(List<Id> contactIds) { /*implementation*/ }" },
      { id: "C", text: "@InvocableMethod(label='Additional Info') public List<ContactInfo> getInfo(List<Id> contactIds) { /*implementation*/ }" },
      { id: "D", text: "@InvocableMethod(label='Additional Info') public ContactInfo getInfo(Id contactId) { /*implementation*/ }" }
    ],
    answers: ["B"],
    explanation: "An invocable method must be static, take a List as its input, and return a List so that it works in bulk. Only option B is both static and list-based."
  },
  {
    prompt: "A third-party vendor created an unmanaged Lightning web component. The Salesforce Administrator wishes to expose the component only on Record Page Layouts. Which two actions should the developer take to accomplish this business objective?",
    options: [
      { id: "A", text: "Specify lightningCommunity__Page as a target in the XML file." },
      { id: "B", text: "Ensure isExposed is set to true on the XML file." },
      { id: "C", text: "Specify lightning__RecordPage as a target in the XML file." },
      { id: "D", text: "Specify lightningCommunity__Page_Layout as a target in the XML file." }
    ],
    answers: ["B", "C"],
    explanation: "In the component's .js-meta.xml file, isExposed must be true for the component to appear in Lightning App Builder, and listing only lightning__RecordPage as a target limits it to record pages. The community targets are for Experience Cloud pages."
  },
  {
    prompt: "Which code in a Visualforce page and/or controller might present a security vulnerability?",
    options: [
      { id: "A", text: "<apex:outputField value=\"{!ctrl.userInput}\" />" },
      { id: "B", text: "<apex:outputText escape=\"false\" value=\"{!$CurrentPage.parameters.userInput}\" />" },
      { id: "C", text: "<apex:outputField escape=\"false\" value=\"{!ctrl.userInput}\" />" },
      { id: "D", text: "<apex:outputText value=\"{!$CurrentPage.parameters.userInput}\" />" }
    ],
    answers: ["B"],
    explanation: "escape=\"false\" turns off Visualforce's HTML escaping, so a URL parameter containing a script would run on the page (cross-site scripting). Visualforce escapes output by default, and apex:outputField has no escape attribute."
  },
  {
    prompt: "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component-based development over Visualforce?",
    options: [
      { id: "A", text: "Rich component ecosystem" },
      { id: "B", text: "Self-contained and reusable units of an application" },
      { id: "C", text: "Built-in standard and custom set controllers" },
      { id: "D", text: "Log capturing via the Debug Logs Setup page" }
    ],
    answers: ["A", "B"],
    explanation: "Lightning web components are self-contained, reusable building blocks with a large library of base and AppExchange components. Standard and set controllers are a Visualforce feature."
  },
  {
    prompt: "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a master-detail relationship with the standard Account object. Based on some internal discussions, the UC administrator tried to change the master-detail relationship to a lookup relationship, but was not able to do so. What is a possible reason that this change was not permitted?",
    options: [
      { id: "A", text: "Some of the Vendor records have null for the Account field." },
      { id: "B", text: "The Account object has a roll-up summary field on the Vendor object." },
      { id: "C", text: "The Account object does not allow changing a field type for a custom field." },
      { id: "D", text: "The organization wide default for the Vendor object is Public Read/Write." }
    ],
    answers: ["B"],
    explanation: "Roll-up summary fields need a master-detail relationship, so it can't be converted to a lookup while Account has a roll-up summary over Vendor. Detail records in a master-detail relationship can't have a null master anyway."
  },
  {
    prompt: "A developer needs to prevent the creation of Request__c records when certain conditions exist in the system. A RequestLogic class exists that checks the conditions. What is the correct implementation?",
    options: [
      { id: "A", text: "trigger RequestTrigger on Request__c (after insert) { if (RequestLogic.isValid(Request__c)) Request.addError('Your request cannot be created at this time.'); }" },
      { id: "B", text: "trigger RequestTrigger on Request__c (after insert) { RequestLogic.validateRecords(trigger.new); }" },
      { id: "C", text: "trigger RequestTrigger on Request__c (before insert) { if (RequestLogic.isValid(Request__c)) Request.addError('Your request cannot be created at this time.'); }" },
      { id: "D", text: "trigger RequestTrigger on Request__c (before insert) { RequestLogic.validateRecords(trigger.new); }" }
    ],
    answers: ["D"],
    explanation: "Validation belongs in a before insert trigger, which passes the records in Trigger.new to the helper class so it can call addError() on invalid ones. Options A and C pass the object type instead of records and won't compile."
  },
  {
    prompt: "What does the Lightning Component framework provide to developers?",
    options: [
      { id: "A", text: "Support for Classic and Lightning UIs" },
      { id: "B", text: "Templates to create custom components" },
      { id: "C", text: "Extended governor limits for applications" },
      { id: "D", text: "Prebuilt components that can be reused" }
    ],
    answers: ["D"],
    explanation: "The framework includes a library of prebuilt base components that developers can reuse. It's built for Lightning Experience and doesn't change governor limits."
  },
  {
    prompt: "Which exception type cannot be caught?",
    options: [
      { id: "A", text: "A Custom Exception" },
      { id: "B", text: "LimitException" },
      { id: "C", text: "NoAccessException" },
      { id: "D", text: "CalloutException" }
    ],
    answers: ["B"],
    explanation: "System.LimitException is thrown when a governor limit is exceeded and can't be caught; the transaction stops and rolls back."
  },
  {
    prompt: "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in another custom object called PostalCodeToTimezone__c. What is the optimal way to implement this feature?",
    options: [
      { id: "A", text: "Build a flow with Flow Builder." },
      { id: "B", text: "Create a formula field." },
      { id: "C", text: "Create an account approval process." },
      { id: "D", text: "Build an account assignment rule." }
    ],
    answers: ["A"],
    explanation: "A record-triggered flow can look up the matching PostalCodeToTimezone__c record and set Timezone with no code. A formula can't query an unrelated object."
  },
  {
    prompt: "What is an example of a polymorphic lookup field in Salesforce?",
    options: [
      { id: "A", text: "A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign" },
      { id: "B", text: "The LeadId and ContactId fields on the standard Campaign Member object" },
      { id: "C", text: "The WhatId field on the standard Event object" },
      { id: "D", text: "The ParentId field on the standard Account object" }
    ],
    answers: ["C"],
    explanation: "A polymorphic lookup can point to more than one object type. Event.WhatId can reference an Account, Opportunity, Case, and more. Custom lookups point to one object only."
  },
  {
    prompt: "A credit card company needs to implement the functionality for a service agent to process damaged or stolen credit cards. When the customers call in, the service agent must gather many pieces of information. A developer is tasked to implement this functionality. What should the developer use to satisfy this requirement in the most efficient manner?",
    options: [
      { id: "A", text: "Lightning Component" },
      { id: "B", text: "Apex Trigger" },
      { id: "C", text: "Approval Process" },
      { id: "D", text: "Flow Builder" }
    ],
    answers: ["D"],
    explanation: "A screen flow built in Flow Builder guides the agent step by step through collecting the information, with no code. An Apex trigger can't show screens to a user, and a custom Lightning component takes more effort."
  },
  {
    prompt: "Which two statements are true about getter and setter methods as they relate to Visualforce?",
    options: [
      { id: "A", text: "Getter methods must be named getVariable and setter methods must be named setVariable." },
      { id: "B", text: "A corresponding setter method is required for each getter method." },
      { id: "C", text: "Setter methods always have to be declared global." },
      { id: "D", text: "Getter methods pass values from a controller to a page." }
    ],
    answers: ["A", "D"],
    explanation: "A Visualforce expression like {!variable} calls getVariable(), and an input bound to it calls setVariable(), so the names must follow that pattern. Getters pass values from the controller to the page. A getter doesn't need a matching setter (for read-only values), and setters don't need to be global."
  },
  {
    prompt: "The Salesforce Administrator created a custom picklist field Account_Status__c, on the Account object. This picklist has possible values of \"Inactive\" and \"Active\". As part of a new business process, management wants to ensure an opportunity record is created only for Accounts marked as Active. A developer is asked to implement this business requirement. Which automation tool should be used to fulfill the business need?",
    options: [
      { id: "A", text: "Entitlement Process" },
      { id: "B", text: "Salesforce Flow" },
      { id: "C", text: "Outbound Messaging" },
      { id: "D", text: "Approval Process" }
    ],
    answers: ["B"],
    explanation: "A record-triggered flow on Opportunity can check the parent Account's status and block the save with a custom error when it isn't Active. The other tools can't check a related record and block creation."
  },
  {
    prompt: "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
    options: [
      { id: "A", text: "Developer Console" },
      { id: "B", text: "Execute Anonymous" },
      { id: "C", text: "Salesforce CLI" },
      { id: "D", text: "VS Code" }
    ],
    answers: ["C"],
    explanation: "Salesforce CLI commands can be run from scripts in a CI pipeline to deploy metadata and run tests. The other tools are interactive."
  },
  {
    prompt: "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
    options: [
      { id: "A", text: "Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity." },
      { id: "B", text: "Use the Metadata API to create real-time roll-up summaries." },
      { id: "C", text: "Use the Streaming API to create real-time roll-up summaries." },
      { id: "D", text: "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity." }
    ],
    answers: ["D"],
    explanation: "The total changes when child records are inserted, updated, or deleted, so the trigger goes on the child object. It uses an aggregate SUM query to recalculate the total and updates the Opportunity."
  },
  {
    prompt: "A lead developer creates an Apex interface called \"Laptop\". Consider the following code snippet:\n\npublic class SilverLaptop {\n    //code implementation\n}\n\nHow can a developer use the Laptop interface within the SilverLaptop class?",
    options: [
      { id: "A", text: "@Extends(class=\"Laptop\") public class SilverLaptop" },
      { id: "B", text: "@Interface(class=\"Laptop\") public class SilverLaptop" },
      { id: "C", text: "public class SilverLaptop implements Laptop" },
      { id: "D", text: "public class SilverLaptop extends Laptop" }
    ],
    answers: ["C"],
    explanation: "A class uses an interface with implements. extends is for classes, and @Extends and @Interface aren't Apex annotations."
  },
  {
    prompt: "How many Accounts will be inserted by the following block of code?\n\nfor (Integer i = 0; i < 500; i++) {\n    Account a = new Account(Name = 'New Account ' + i);\n    insert a;\n}",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "150" },
      { id: "C", text: "100" },
      { id: "D", text: "500" }
    ],
    answers: ["A"],
    explanation: "Only 150 DML statements are allowed per transaction. The 151st insert throws an uncatchable LimitException and the whole transaction rolls back, so no Accounts are saved."
  },
  {
    prompt: "The Job_Application__c custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology', while also retrieving the Contact's Job_Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts?",
    options: [
      { id: "A", text: "[SELECT Id, (SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Industry = 'Technology'];" },
      { id: "B", text: "[SELECT Id, (SELECT Id FROM Job_Applications__c) FROM Contact WHERE Accounts.Industry = 'Technology'];" },
      { id: "C", text: "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Industry = 'Technology'];" },
      { id: "D", text: "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology'];" }
    ],
    answers: ["D"],
    explanation: "A child subquery uses the plural relationship name ending in __r (Job_Applications__r), and a parent filter uses the singular lookup name, Account.Industry."
  },
  {
    prompt: "A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition. As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?",
    options: [
      { id: "A", text: "Update the PrimaryId__c field definition to mark it as an External Id." },
      { id: "B", text: "Upload the CSV into a custom object related to Candidate__c." },
      { id: "C", text: "Create a before insert trigger to correctly map the records." },
      { id: "D", text: "Create a before save flow to correctly map the records." }
    ],
    answers: ["A"],
    explanation: "Marking PrimaryId__c as an External ID lets Data Loader or the Data Import Wizard upsert the file, matching each row to the existing Candidate by that field, with no code."
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
    explanation: "Because tenants share resources, Salesforce enforces governor limits and test coverage requirements, which push developers toward efficient, well-tested code. Resources are shared and limited, not unlimited."
  },
  {
    prompt: "What are three capabilities of the <ltng:require> tag when loading JavaScript resources in Aura components?",
    options: [
      { id: "A", text: "Loading files from Documents" },
      { id: "B", text: "Loading externally hosted scripts" },
      { id: "C", text: "Specifying loading order" },
      { id: "D", text: "One-time loading for duplicate scripts" },
      { id: "E", text: "Loading scripts in parallel" }
    ],
    answers: ["C", "D", "E"],
    explanation: "<ltng:require> loads scripts from static resources in a set order, loads each resource only once even if several components ask for it, and can load scripts in parallel. It can't load externally hosted scripts or files from Documents."
  },
  {
    prompt: "A developer created a new after insert trigger on the Lead object that creates Task records for each Lead. After deploying to production, an existing outside integration that inserts Lead records in batches to Salesforce is occasionally reporting total batch failures being caused by the Task insert statement. This causes the integration process in the outside system to stop, requiring a manual restart. Which change should the developer make to allow the integration to continue when some records in a batch cause failures due to the Task insert statement, so that manual restarts are not needed?",
    options: [
      { id: "A", text: "Use the Database method with allOrNone set to false." },
      { id: "B", text: "Remove the Apex class from the integration user's profile." },
      { id: "C", text: "Use a try-catch block after the insert statement." },
      { id: "D", text: "Deactivate the trigger before the integration runs." }
    ],
    answers: ["A"],
    explanation: "Database.insert(tasks, false) allows partial success: valid Tasks are saved and failed rows come back as errors instead of failing the whole batch."
  },
  {
    prompt: "A business has a proprietary Order Management System (OMS) that creates orders from their website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in Salesforce. It is noticed that each update from the OMS creates a new order record in Salesforce. Which two actions will prevent the duplicate order records from being created in Salesforce?",
    options: [
      { id: "A", text: "Use the email on the contact record as an external ID." },
      { id: "B", text: "Write a before trigger on the order object to delete any duplicates." },
      { id: "C", text: "Ensure that the order number in the OMS is unique." },
      { id: "D", text: "Use the order number from the OMS as an external ID." }
    ],
    answers: ["C", "D"],
    explanation: "Storing the OMS order number in an External ID field lets the integration upsert, updating the existing order instead of creating a new one. That only works if the order number is unique."
  },
  {
    prompt: "How should a developer write unit tests for a private method in an Apex class?",
    options: [
      { id: "A", text: "Use the TestVisible annotation." },
      { id: "B", text: "Add a test method in the Apex class." },
      { id: "C", text: "Use the SeeAllData annotation." },
      { id: "D", text: "Mark the Apex class as global." }
    ],
    answers: ["A"],
    explanation: "@TestVisible lets test classes call private methods and variables without making them public. Test methods can't be added to non-test classes."
  },
  {
    prompt: "Which annotation exposes an Apex class as a RESTful web service?",
    options: [
      { id: "A", text: "@RemoteAction" },
      { id: "B", text: "@HttpInvocable" },
      { id: "C", text: "@RestResource" },
      { id: "D", text: "@AuraEnabled" }
    ],
    answers: ["C"],
    explanation: "@RestResource(urlMapping='/...') exposes a global class as a REST endpoint, with methods marked @HttpGet, @HttpPost, and so on."
  },
  {
    prompt: "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. What should a developer implement to support these requirements?",
    options: [
      { id: "A", text: "Lookup field from Engineering_Support__c to Opportunity" },
      { id: "B", text: "Master-detail field from Engineering_Support__c to Opportunity" },
      { id: "C", text: "Lookup field from Opportunity to Engineering_Support__c" },
      { id: "D", text: "Master-detail field from Opportunity to Engineering_Support__c" }
    ],
    answers: ["B"],
    explanation: "A master-detail field on Engineering_Support__c lets many records link to one Opportunity and allows roll-up summary fields on Opportunity for the aggregate information."
  },
  {
    prompt: "Given the following Anonymous block:\n\nList<Case> casesToUpdate = new List<Case>();\nfor (Case thisCase : [SELECT Id, Status FROM Case LIMIT 50000]) {\n    thisCase.Status = 'Working';\n    casesToUpdate.add(thisCase);\n}\ntry {\n    Database.update(casesToUpdate, false);\n} catch (Exception e) {\n    System.debug(e.getMessage());\n}\n\nWhat should a developer consider for an environment that has over 10,000 Case records?",
    options: [
      { id: "A", text: "The try-catch block will handle exceptions thrown by governor limits." },
      { id: "B", text: "The transaction will fail due to exceeding the governor limit." },
      { id: "C", text: "The try-catch block will handle any DML exceptions thrown." },
      { id: "D", text: "The transaction will succeed and changes will be committed." }
    ],
    answers: ["B"],
    explanation: "A transaction can process at most 10,000 records through DML. Updating more than that throws a LimitException, which try-catch can't catch, and allOrNone=false doesn't help, so the transaction fails."
  },
  {
    prompt: "A developer is creating an app that contains multiple Lightning web components. One of the child components is used for navigation purposes. When a user clicks a button called Next in the child component, the parent component must be alerted so it can navigate to the next page. How should this be accomplished?",
    options: [
      { id: "A", text: "Create a custom event." },
      { id: "B", text: "Call a method in the Apex controller." },
      { id: "C", text: "Update a property on the parent." },
      { id: "D", text: "Fire a notification." }
    ],
    answers: ["A"],
    explanation: "A child communicates up to its parent by dispatching a CustomEvent that the parent listens for. A child can't change a parent's properties directly."
  },
  {
    prompt: "What are two characteristics related to formulas?",
    options: [
      { id: "A", text: "Formulas can reference themselves." },
      { id: "B", text: "Formulas are calculated at runtime and are not stored in the database." },
      { id: "C", text: "Fields that are used in a formula field can be deleted or edited without editing the formula." },
      { id: "D", text: "Formulas can reference values in related objects." }
    ],
    answers: ["B", "D"],
    explanation: "Formula values are calculated when read, not stored, and can reference fields on related records. A formula can't reference itself, and a field used in a formula can't be deleted until it's removed from the formula."
  },
  {
    prompt: "A developer has an Apex controller for a Visualforce page that takes an ID as a URL parameter. How should the developer prevent a cross site scripting vulnerability?",
    options: [
      { id: "A", text: "ApexPages.currentPage().getParameters().get('url_param')" },
      { id: "B", text: "String.ValueOf(ApexPages.currentPage().getParameters().get('url_param'))" },
      { id: "C", text: "ApexPages.currentPage().getParameters().get('url_param').escapeHtml4()" },
      { id: "D", text: "String.escapeSingleQuotes(ApexPages.currentPage().getParameters().get('url_param'))" }
    ],
    answers: ["C"],
    explanation: "escapeHtml4() turns characters like < and > into HTML entities, so a script in the parameter is shown as text instead of running. String.escapeSingleQuotes() protects against SOQL injection, not cross-site scripting."
  },
  {
    prompt: "A developer wants to mark each Account in a List<Account> as either Active or Inactive, based on the value in the LastModifiedDate field of each Account being greater than 90 days in the past. Which Apex technique should the developer use?",
    options: [
      { id: "A", text: "A for loop, with a switch statement inside" },
      { id: "B", text: "An if-else statement, with a for loop inside" },
      { id: "C", text: "A switch statement, with a for loop inside" },
      { id: "D", text: "A for loop, with an if-else statement inside" }
    ],
    answers: ["D"],
    explanation: "Loop through each Account and use if-else to compare its LastModifiedDate to 90 days ago. A switch matches exact values and can't compare ranges like this."
  },
  {
    prompt: "Universal Hiring is using Salesforce to capture job applications. A salesforce administrator created two custom objects; Job__c acting as the master object, Job_Application__c acting as the detail.\n\nWithin the Job__c object, a custom multi-select picklist, Preferred_Locations__c, contains a list of approved states for the position. Each Job_Application__c record relates to a Contact within the system through a master-detail relationship.\n\nRecruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the Preferred_Locations__c field, within the Job_Application__c record. Recruiters would like this value to be kept in sync, if changes occur to the Contact's Mailing State or if the Job's Preferred_Locations__c field is updated.\n\nWhat is the recommended tool a developer should use to meet the business requirement?",
    options: [
      { id: "A", text: "Record-triggered flow" },
      { id: "B", text: "Apex trigger" },
      { id: "C", text: "Process Builder" },
      { id: "D", text: "Formula field" }
    ],
    answers: ["B"],
    explanation: "A formula can only check a multi-select picklist against literal text with INCLUDES, not against another field. Apex triggers on Contact and Job__c can compare the values and keep the Job Application records in sync when either side changes."
  },
  {
    prompt: "A developer migrated functionality from JavaScript Remoting to a Lightning web component and wants to use the existing getOpportunities() method to provide data. Which modification to the method is necessary?",
    options: [
      { id: "A", text: "The method must be decorated with (cacheable=true)." },
      { id: "B", text: "The method must return a String of a serialized JSON Array." },
      { id: "C", text: "The method must return a JSON Object." },
      { id: "D", text: "The method must be decorated with @AuraEnabled." }
    ],
    answers: ["D"],
    explanation: "A Lightning web component can only call Apex methods marked @AuraEnabled. cacheable=true is needed only when using @wire, and Apex return values are converted to JSON automatically."
  },
  {
    prompt: "What is the value of the Trigger.old context variable in a before insert trigger?",
    options: [
      { id: "A", text: "null" },
      { id: "B", text: "An empty list of sObjects" },
      { id: "C", text: "A list of newly created sObjects without IDs" },
      { id: "D", text: "Undefined" }
    ],
    answers: ["A"],
    explanation: "Trigger.old holds earlier versions of records, which exist only in update and delete triggers. In insert triggers it is null."
  },
  {
    prompt: "Considering the following code snippet:\n\npublic static void insertAccounts(List<Account> theseAccounts) {\n    for (Account thisAccount : theseAccounts) {\n        if (thisAccount.website == null) {\n            thisAccount.website = 'https://www.demo.com';\n        }\n    }\n    update theseAccounts;\n}\n\nWhen the code executes, a DML exception is thrown. How should the developer modify the code to ensure exceptions are handled gracefully?",
    options: [
      { id: "A", text: "Implement a try/catch block for the DML." },
      { id: "B", text: "Implement the upsert DML statement." },
      { id: "C", text: "Remove null items from the list of Accounts." },
      { id: "D", text: "Implement Change Data Capture." }
    ],
    answers: ["A"],
    explanation: "Wrapping the update in try/catch lets the code catch the DmlException and handle it (log it or show a message) instead of failing with an unhandled error."
  },
  {
    prompt: "What is the result of the following code?\n\nAccount a = new Account();\nDatabase.insert(a, false);",
    options: [
      { id: "A", text: "The record will not be created and no error will be reported." },
      { id: "B", text: "The record will not be created and an exception will be thrown." },
      { id: "C", text: "The record will be created and a message will be in the debug log." },
      { id: "D", text: "The record will be created and no error will be reported." }
    ],
    answers: ["A"],
    explanation: "The Account has no Name, which is required, so it isn't saved. With allOrNone=false, Database.insert doesn't throw; the error is only in the returned SaveResult, which this code ignores."
  },
  {
    prompt: "An Approval Process is defined in the Expense_Item__c object. A business rule dictates that whenever a user changes the Status to 'Submitted' on an Expense_Report__c record, all the Expense_Item__c records related to the expense report must enter the approval process individually. A developer is asked to explore if this automation can be implemented without writing any Apex code. Which statement is true regarding this automation request?",
    options: [
      { id: "A", text: "This can only be automated with Apex code." },
      { id: "B", text: "The developer can use a record triggered flow with Actions." },
      { id: "C", text: "This approval step cannot be automated and must be done manually." },
      { id: "D", text: "The developer can use Einstein Next Best Actions." }
    ],
    answers: ["B"],
    explanation: "A record-triggered flow on Expense_Report__c can get the related Expense_Item__c records, loop through them, and use the Submit for Approval action on each one, with no Apex."
  },
  {
    prompt: "The OrderHelper class is a utility class that contains business logic for processing orders. Consider the following code snippet:\n\npublic class without sharing OrderHelper {\n    //code implementation\n}\n\nA developer needs to create a constant named DELIVERY_MULTIPLIER with a value of 4.15. The value of the constant should not change at any time in the code. How should the developer declare the DELIVERY_MULTIPLIER constant to meet the business objectives?",
    options: [
      { id: "A", text: "static decimal DELIVERY_MULTIPLIER = 4.15;" },
      { id: "B", text: "decimal DELIVERY_MULTIPLIER = 4.15;" },
      { id: "C", text: "static final decimal DELIVERY_MULTIPLIER = 4.15;" },
      { id: "D", text: "constant decimal DELIVERY_MULTIPLIER = 4.15;" }
    ],
    answers: ["C"],
    explanation: "Apex constants are declared static final: final stops the value from changing, and static shares one copy. constant isn't an Apex keyword."
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
    explanation: "renderAs=\"pdf\" makes Visualforce render the page as a PDF. contentType only sets the response type, and renderAs accepts \"pdf\", not a MIME type."
  },
  {
    prompt: "An org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update must the developer make in the flow?",
    options: [
      { id: "A", text: "Add a new Update Records element." },
      { id: "B", text: "Add a new Get Records element." },
      { id: "C", text: "Add a new Create Records element." },
      { id: "D", text: "Add a new Roll Back Records element." }
    ],
    answers: ["C"],
    explanation: "A Create Records element creates the Contact and stores its new ID in a variable, which the flow can then set on the Opportunity."
  },
  {
    prompt: "Which three data types can a SOQL query return?",
    options: [
      { id: "A", text: "List" },
      { id: "B", text: "Integer" },
      { id: "C", text: "Double" },
      { id: "D", text: "Long" },
      { id: "E", text: "sObject" }
    ],
    answers: ["A", "B", "E"],
    explanation: "A SOQL query returns a List of sObjects, a single sObject when assigned to one record, or an Integer when using SELECT COUNT()."
  },
  {
    prompt: "Which statement describes the execution order when triggers are associated to the same object and event?",
    options: [
      { id: "A", text: "Triggers are executed alphabetically by trigger name." },
      { id: "B", text: "Trigger execution order cannot be guaranteed." },
      { id: "C", text: "Triggers are executed in the order they are created." },
      { id: "D", text: "Triggers are executed in the order they are modified." }
    ],
    answers: ["B"],
    explanation: "Salesforce doesn't guarantee the order of multiple triggers on the same object and event, which is why one trigger per object is recommended."
  },
  {
    prompt: "Managers at Universal Containers want to ensure that only decommissioned containers are able to be deleted in the system. To meet the business requirement a Salesforce developer adds \"Decommissioned\" as a picklist value for the Status__c custom field within the Container__c object. Which tool should the developer use to enforce only Container records with a status of \"Decommissioned\" can be deleted?",
    options: [
      { id: "A", text: "Apex trigger" },
      { id: "B", text: "After record-triggered flow" },
      { id: "C", text: "Validation rule" },
      { id: "D", text: "Before record-triggered flow" }
    ],
    answers: ["A"],
    explanation: "Validation rules never run on delete. A before delete Apex trigger can check Status__c and call addError() to stop the delete."
  },
  {
    prompt: "Universal Containers has created a unique process for tracking container repairs. A custom field, Status__c, has been created within the Container__c custom object. A developer is tasked with sending notifications to multiple external systems every time the value of the Status__c picklist changes. Which two tools should the developer use to meet the business requirement and ensure low maintenance of the solution?",
    options: [
      { id: "A", text: "Apex trigger" },
      { id: "B", text: "Record-Triggered flow" },
      { id: "C", text: "Apex callouts" },
      { id: "D", text: "Platform event" }
    ],
    answers: ["B", "D"],
    explanation: "A record-triggered flow can publish a platform event when Status__c changes, and every external system can subscribe to that event. Adding a new system needs no code changes, while triggers with callouts need code for each system."
  },
  {
    prompt: "Which three code lines are required to create a Lightning component on a Visualforce page?",
    options: [
      { id: "A", text: "<apex:slds/>" },
      { id: "B", text: "$Lightning.createComponent" },
      { id: "C", text: "<apex:includeLightning/>" },
      { id: "D", text: "$Lightning.use" },
      { id: "E", text: "$Lightning.useComponent" }
    ],
    answers: ["B", "C", "D"],
    explanation: "<apex:includeLightning/> loads the Lightning library, $Lightning.use() loads the Lightning app that declares the component, and $Lightning.createComponent() creates it on the page."
  },
  {
    prompt: "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
    options: [
      { id: "A", text: "Dev Hub" },
      { id: "B", text: "Production" },
      { id: "C", text: "Sandbox" },
      { id: "D", text: "Environment Hub" }
    ],
    answers: ["A"],
    explanation: "Scratch orgs are created and managed from an org with Dev Hub enabled. Environment Hub is for managing related orgs, not scratch orgs."
  },
  {
    prompt: "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. Which Visualforce feature supports this requirement?",
    options: [
      { id: "A", text: "controller extension" },
      { id: "B", text: "recordSetVar page attribute" },
      { id: "C", text: "<apex:listButton> tag" },
      { id: "D", text: "custom controller" }
    ],
    answers: ["B"],
    explanation: "Setting recordSetVar on <apex:page> uses the standard list controller, which works with a set of records and lets the page be used as a list button."
  },
  {
    prompt: "A developer creates a custom exception as shown below:\n\npublic class ParityException extends Exception {}\n\nWhat are two ways the developer can fire the exception in Apex?",
    options: [
      { id: "A", text: "new ParityException('parity does not match');" },
      { id: "B", text: "throw new ParityException();" },
      { id: "C", text: "throw new ParityException('parity does not match');" },
      { id: "D", text: "new ParityException();" }
    ],
    answers: ["B", "C"],
    explanation: "An exception is fired with the throw keyword, with or without a message. Creating it with new alone doesn't throw it."
  },
  {
    prompt: "When importing and exporting data into Salesforce, which two statements are true?",
    options: [
      { id: "A", text: "Data import wizard is an application that is installed on your computer." },
      { id: "B", text: "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits." },
      { id: "C", text: "Bulk API can be used to bypass the storage limits when importing large data volumes in development environments." },
      { id: "D", text: "Developer and Developer Pro sandboxes have different storage limits." }
    ],
    answers: ["B", "D"],
    explanation: "The Bulk API handles large loads but still counts against storage limits. Developer sandboxes have 200 MB of data storage and Developer Pro sandboxes 1 GB. The Data Import Wizard runs in the browser, not as an installed app."
  },
  {
    prompt: "A developer wrote the following two classes (the top of the StatusFetcher class was cut off in the source):\n\npublic class StatusFetcher {\n    private Boolean active = true;\n    private Boolean isActive() {\n        return active;\n    }\n}\n\npublic with sharing class Calculator {\n    public void doCalculations() {\n        StatusFetcher sFetcher = new StatusFetcher();\n        if (sFetcher.isActive()) {\n            // do calculations here\n        }\n    }\n}\n\nThe StatusFetcher class successfully compiled and saved. However, the Calculator class has a compile time error. How should the developer fix this code?",
    options: [
      { id: "A", text: "Change the class declaration for the Calculator class to public with inherited sharing." },
      { id: "B", text: "Make the isActive method in the StatusFetcher class public." },
      { id: "C", text: "Make the doCalculations method in the Calculator class private." },
      { id: "D", text: "Change the class declaration for the StatusFetcher class to public with inherited sharing." }
    ],
    answers: ["B"],
    explanation: "isActive() is private, so only StatusFetcher can call it. Making it public lets Calculator call it. Sharing keywords don't affect method visibility."
  },
  {
    prompt: "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL. Which three statements are useful inside the unit test to effectively test the custom controller?",
    options: [
      { id: "A", text: "String nextPage = controller.save().getUrl();" },
      { id: "B", text: "ApexPages.currentPage().getParameters().put('input', 'TestValue');" },
      { id: "C", text: "insert pageRef;" },
      { id: "D", text: "Test.setCurrentPage(pageRef);" },
      { id: "E", text: "public ExtendedController(ApexPages.StandardController cntrl) { }" }
    ],
    answers: ["A", "B", "D"],
    explanation: "Test.setCurrentPage() sets the page under test, getParameters().put() sets the URL parameter, and checking save().getUrl() confirms the wizard moves to the right next page. A PageReference can't be inserted, and E is an extension constructor, not a test statement."
  },
  {
    prompt: "While working in a sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors. Why did the method fail in the sandbox test framework but succeed in the Developer Console?",
    options: [
      { id: "A", text: "The test method has a syntax error in the code." },
      { id: "B", text: "The test method does not use System.runAs to execute as a specific user." },
      { id: "C", text: "The test method relies on existing data in the sandbox." },
      { id: "D", text: "The test method is calling an @future method." }
    ],
    answers: ["C"],
    explanation: "Tests can't see org data by default, but Execute Anonymous runs against real sandbox data. Logic that depends on existing records works there and fails in the test."
  },
  {
    prompt: "What are two ways for a developer to execute tests in an org?",
    options: [
      { id: "A", text: "Bulk API" },
      { id: "B", text: "Developer Console" },
      { id: "C", text: "Tooling API" },
      { id: "D", text: "Metadata API" }
    ],
    answers: ["B", "C"],
    explanation: "Tests can be run from the Developer Console's Test menu and through the Tooling API. The Bulk API loads data and can't run tests."
  },
  {
    prompt: "A team of many developers work in their own individual orgs that have the same configuration as the production org. Which type of org is best suited for this scenario?",
    options: [
      { id: "A", text: "Developer Edition" },
      { id: "B", text: "Full Sandbox" },
      { id: "C", text: "Partner Developer Edition" },
      { id: "D", text: "Developer Sandbox" }
    ],
    answers: ["D"],
    explanation: "A Developer sandbox copies production's configuration (metadata), and orgs usually have many available, so each developer can have their own. Full sandboxes also copy all data, are limited in number, and are meant for staging and performance testing. Developer Edition orgs don't copy production."
  },
  {
    prompt: "Which two process automations can be used on their own to send Salesforce Outbound Message?",
    options: [
      { id: "A", text: "Workflow Rule" },
      { id: "B", text: "Process Builder" },
      { id: "C", text: "Flow Builder" },
      { id: "D", text: "Strategy Builder" }
    ],
    answers: ["A", "C"],
    explanation: "Workflow rules have an outbound message action, and record-triggered flows can send an outbound message with the Outbound Message action. Process Builder can't."
  },
  {
    prompt: "A developer created a weather app that contains multiple Lightning web components. One of the components, called Toggle, has a toggle for Fahrenheit or Celsius units. Another component, called Temperature, displays the current temperature in the unit selected in the Toggle component. When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, the information must be sent to the Temperature component so the temperature can be converted and displayed. What is the recommended way to accomplish this?",
    options: [
      { id: "A", text: "Create a custom event to handle the communication between components." },
      { id: "B", text: "Use an application event to communicate between the components." },
      { id: "C", text: "The Toggle component should call a method in the Temperature component." },
      { id: "D", text: "Use Lightning Message Service to communicate between the components." }
    ],
    answers: ["D"],
    explanation: "Toggle and Temperature are separate components, not parent and child, so Lightning Message Service is the recommended way to send messages between them. Custom events only travel up to a component's parents, and application events are an Aura feature."
  },
  {
    prompt: "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?",
    options: [
      { id: "A", text: "Ant Migration Tool" },
      { id: "B", text: "Change Sets" },
      { id: "C", text: "SFDX CLI" },
      { id: "D", text: "Developer Console" }
    ],
    answers: ["A", "C"],
    explanation: "Both the Ant Migration Tool and Salesforce CLI can be run from a script to deploy metadata. Change Sets are point-and-click, and the Developer Console can't deploy."
  },
  {
    prompt: "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
    options: [
      { id: "A", text: "Use @IsTest(SeeAllData=true) and delete the existing standard price book." },
      { id: "B", text: "Use @TestVisible to allow the test method to see the standard price book." },
      { id: "C", text: "Use Test.getStandardPricebookId() to get the standard price book ID." },
      { id: "D", text: "Use Test.loadData() and a static resource to load a standard price book." }
    ],
    answers: ["C"],
    explanation: "Test.getStandardPricebookId() returns the standard price book's ID inside a test without needing SeeAllData, so the test can create PricebookEntry records."
  },
  {
    prompt: "A large corporation stores Orders and Line Items in Salesforce for different lines of business. Users are allowed to see Orders across the entire organization, but, for security purposes, should only be able to see the Line Items for Orders in their line of business. Which type of relationship should be used between Line Items and Orders?",
    options: [
      { id: "A", text: "Lookup" },
      { id: "B", text: "Direct Lookup" },
      { id: "C", text: "Master-Detail" },
      { id: "D", text: "Indirect Lookup" }
    ],
    answers: ["C"],
    explanation: "This answer follows the screenshot and the usual answer for this question, but the logic is debatable. In a master-detail relationship, Line Items inherit their sharing from the Order, so anyone who can see an Order can also see its Line Items. A lookup gives Line Items their own sharing settings, which would be needed to hide them while Orders stay visible."
  },
  {
    prompt: "In the following example, which sharing context will myMethod execute when it is invoked?\n\npublic Class myClass {\n    public void myMethod() { /* implementation */ }\n}",
    options: [
      { id: "A", text: "Sharing rules will be inherited from the calling context." },
      { id: "B", text: "Sharing rules will be enforced by the instantiating class." },
      { id: "C", text: "Sharing rules will not be enforced for the running user." },
      { id: "D", text: "Sharing rules will be enforced for the running user." }
    ],
    answers: ["A"],
    explanation: "A class with no sharing keyword uses the sharing setting of the code that calls it."
  },
  {
    prompt: "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?",
    options: [
      { id: "A", text: "Use the with sharing keyword on the class declaration." },
      { id: "B", text: "Use the without sharing keyword on the class declaration." },
      { id: "C", text: "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user." },
      { id: "D", text: "Use the schema describe calls to determine if the logged-in user has access to the Account object." }
    ],
    answers: ["A"],
    explanation: "Apex ignores sharing by default. Declaring the class with sharing makes its queries return only records the current user can access."
  },
  {
    prompt: "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "4" },
      { id: "D", text: "3" }
    ],
    answers: ["B"],
    explanation: "On insert the before update trigger doesn't run. The workflow increments the count to 1, and its field update fires the update triggers once more, so the trigger increments it to 2. Workflow isn't re-evaluated, so the count ends at 2."
  }
];

window.quizConfig = {
  name: "Platform Developer 1",
  homeUrl: "platform-developer-home.html",
  partCount: 3,
  parts: {
    1: window.platformDeveloperPart1Questions,
    2: window.platformDeveloperPart2Questions,
    3: window.platformDeveloperPart3Questions
  }
};
