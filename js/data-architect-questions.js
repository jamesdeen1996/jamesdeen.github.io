window.dataArchitectQuestions = [
  {
    prompt: "A large insurance provider is implementing Salesforce. Leads come from multiple channels, duplicate leads are common, and the duplicates are hurting customer experience and increasing costs. Which three actions should mitigate the issue?",
    options: [
      { id: "A", text: "Build a manual process to search for and merge duplicates" },
      { id: "B", text: "Standardize lead information across all channels" },
      { id: "C", text: "Build a custom solution to identify and merge duplicates" },
      { id: "D", text: "Use a third-party solution to clean and enrich lead data" },
      { id: "E", text: "Implement a de-duplication strategy to prevent duplicates" }
    ],
    answers: ["B", "D", "E"],
    explanation: "Standardized capture, data cleaning, and duplicate-prevention rules improve quality and reduce duplicate creation."
  },
  {
    prompt: "Cloud Kicks needs to send Salesforce data to an external Order Management System to generate invoices. An administrator must be able to customize which fields are sent without changing code. Which two approaches meet the requirements?",
    options: [
      { id: "A", text: "Use a set <sobjectFieldset> to determine fields for an HTTP callout" },
      { id: "B", text: "Use an Outbound Message to determine which fields are sent to the OMS" },
      { id: "C", text: "Use a Field Set to determine which fields are sent in an HTTP callout" },
      { id: "D", text: "Enable field-level security for the fields to send" }
    ],
    answers: ["B", "C"],
    explanation: "Outbound Messages and administrator-managed Field Sets let the outbound field selection be configured declaratively."
  },
  {
    prompt: "A report must show Accounts opened in the past year grouped by industry, with related Contact, Opportunity, and Order information. The org contains several million Accounts. Which two recommendations support report performance and the business need?",
    options: [
      { id: "A", text: "Use triggers to populate denormalized related fields on Account" },
      { id: "B", text: "Use formula fields to surface information from related entities" },
      { id: "C", text: "Use unbounded date ranges to filter the report" },
      { id: "D", text: "Use an indexed field with bounded date filters" }
    ],
    answers: ["B", "D"],
    explanation: "Related formula fields and selective filters on indexed fields help the report retrieve and display the required data efficiently."
  },
  {
    prompt: "Universal Containers is exporting 40 million Account records with Informatica Cloud. The ETL tool times out after a full table scan. What is the recommended solution?",
    options: [
      { id: "A", text: "Set Export-in-Parallel in the export job header" },
      { id: "B", text: "Add a LIMIT clause and set the batch size to 10,000" },
      { id: "C", text: "Add standard indexed fields to the export query" },
      { id: "D", text: "Set Sforce-Enable-PKChunking in the export job header" }
    ],
    answers: ["D"],
    explanation: "Primary-key chunking divides a very large Bulk API query into smaller ranges that can be processed independently."
  },
  {
    prompt: "Northern Trail Outfitters' sales teams used Excel before Salesforce was implemented. Their opportunity data was not migrated, and Salesforce adoption is low. What should a data architect recommend?",
    options: [
      { id: "A", text: "Use the Excel connector to sync each user's files" },
      { id: "B", text: "Define a standard mapping and train sales users to import opportunity data" },
      { id: "C", text: "Load the data into an external database and give sales users access" },
      { id: "D", text: "Create a Chatter group and upload the Excel files" }
    ],
    answers: ["B"],
    explanation: "A standard mapping and user training help move the opportunity records into Salesforce, where users can work with them directly."
  },
  {
    prompt: "Sales managers want to monitor and measure data quality in Salesforce. Which two solutions should a data architect recommend?",
    options: [
      { id: "A", text: "Use custom objects and fields to identify issues" },
      { id: "B", text: "Review data quality reports and dashboards" },
      { id: "C", text: "Install and run a data quality analysis dashboard app" },
      { id: "D", text: "Export data and check completeness outside Salesforce" }
    ],
    answers: ["B", "C"],
    explanation: "Reports and a data quality analysis dashboard can surface completeness, accuracy, consistency, and duplicate-record issues."
  },
  {
    prompt: "During an Account load, Salesforce returns UNABLE_TO_LOCK_ROW. The Account has a roll-up summary field that counts related Contacts. What should a data architect recommend?",
    options: [
      { id: "A", text: "Defer roll-up summary calculation during data migration" },
      { id: "B", text: "Run the batch job in serial mode and reduce the batch size" },
      { id: "C", text: "Run the batch job in parallel mode and reduce the batch size" },
      { id: "D", text: "Use Data Loader's platform API" }
    ],
    answers: ["B"],
    explanation: "Serial processing with smaller batches reduces concurrent updates and contention on shared parent records."
  },
  {
    prompt: "A report must show Accounts opened in the past year grouped by industry, with related Contact, Opportunity, and Order information. The org contains several million Accounts. Which two options should be recommended?",
    options: [
      { id: "A", text: "Use triggers to populate denormalized related fields on Account" },
      { id: "B", text: "Use an indexed field with bounded date filters" },
      { id: "C", text: "Use formula fields to surface information from related entities" },
      { id: "D", text: "Use unbounded date ranges to filter the report" }
    ],
    answers: ["B", "C"],
    explanation: "An indexed bounded filter narrows the records scanned, while formula fields surface related information for the report."
  },
  {
    prompt: "Northern Trail Outfitters streams IoT data from connected devices to a cloud database. Every 24 hours, 100,000 records are generated. Employees need the records in Salesforce for weekly reports, and developers need to use them in programmatic logic and workflows. Which data pattern fits?",
    options: [
      { id: "A", text: "Bidirectional integration" },
      { id: "B", text: "Unidirectional integration" },
      { id: "C", text: "Virtualization" },
      { id: "D", text: "Persistence" }
    ],
    answers: ["D"],
    explanation: "Persistence stores the records in Salesforce so they can be used by reports, workflows, and application logic."
  },
  {
    prompt: "Universal Containers loads 500,000 leads and 10,000 campaigns weekly. Leads are shared with sales agents and added to Campaigns by triggers. Agents work leads for six months, the business wants them for one year, compliance requires three years, and older data may be deleted. Which statement about an archiving strategy is true?",
    options: [
      { id: "A", text: "Custom storage objects do not count against storage limits" },
      { id: "B", text: "Salesforce Data Backup and Recovery is an archival solution" },
      { id: "C", text: "The Recycle Bin guarantees record storage for 15 days after deletion" },
      { id: "D", text: "Use a tier-based approach to classify storage needs" }
    ],
    answers: ["D"],
    explanation: "A tier-based strategy classifies data by usage, value, and retention requirements, then applies an appropriate storage approach."
  },
  {
    prompt: "Universal Containers wants to recover data that is corrupted, changed by mistake, or deleted. What should a data architect consider when designing a field-level audit and recovery plan?",
    options: [
      { id: "A", text: "Reduce storage by purging old data" },
      { id: "B", text: "Implement an AppExchange package" },
      { id: "C", text: "Review projected data storage needs" },
      { id: "D", text: "Schedule a weekly export file" }
    ],
    answers: ["C"],
    explanation: "Estimating future storage requirements helps ensure the audit and recovery strategy can retain the data it needs."
  },
  {
    prompt: "A nonprofit tracks Projects and volunteer time in a related VTOTime__c object. VTOTime__c access must match its Project, and managers must see total volunteer hours on the Project. Which relationship should be used?",
    options: [
      { id: "A", text: "Lookup from Project to VTOTime__c with a related list" },
      { id: "B", text: "Lookup from VTOTime__c to Project with a formula field for the sum" },
      { id: "C", text: "Master-detail from VTOTime__c to Project with a roll-up summary on Project" },
      { id: "D", text: "Master-detail from Project to VTOTime__c" }
    ],
    answers: ["C"],
    explanation: "The detail record inherits access from its master, and the master can use a roll-up summary to total related hours."
  },
  {
    prompt: "Get Cloudy Consulting monitors 15,000 servers every 10 minutes and must retain status reports for five years. Managers need detailed access to up to one week's worth of reports. Which two limits should the architect consider?",
    options: [
      { id: "A", text: "Data storage limits" },
      { id: "B", text: "Workflow rule limits" },
      { id: "C", text: "API request limits" },
      { id: "D", text: "Web service callout limits" }
    ],
    answers: ["A", "C"],
    explanation: "The record volume affects storage capacity, while integration activity consumes API requests."
  },
  {
    prompt: "A large automobile company creates Accounts from website leads and retail store visits. Customers may use both channels, resulting in duplicate Accounts. Associates already use Global Search. Which scalable option should the architect choose?",
    options: [
      { id: "A", text: "Create duplicate rules to validate Accounts during creation" },
      { id: "B", text: "Implement MDM validation before creating Accounts" },
      { id: "C", text: "Build custom Account search for store associates" },
      { id: "D", text: "Customize Account creation to search before saving" }
    ],
    answers: ["A"],
    explanation: "Duplicate rules can flag or block matching Accounts at creation time using Salesforce's existing duplicate-management capabilities."
  },
  {
    prompt: "Which two statements are accurate about performance testing a Force.com application?",
    options: [
      { id: "A", text: "Every Force.com application must be tested in both sandbox and production" },
      { id: "B", text: "A performance test plan must be created and submitted to Salesforce Customer Support" },
      { id: "C", text: "Applications with highly customized code or large data volumes should be performance tested" },
      { id: "D", text: "A sandbox performance benchmark can be expected to match production" }
    ],
    answers: ["B", "C"],
    explanation: "A test plan and performance testing are important for applications with substantial customization or data volume."
  },
  {
    prompt: "Universal Containers is connecting a legacy CRM, an ERP, and Salesforce during a gradual migration. Some sales users still rely on the legacy CRM. Which two techniques support interoperability now and later?",
    options: [
      { id: "A", text: "Replicate all legacy CRM changes to Salesforce until the legacy system retires" },
      { id: "B", text: "Keep the legacy CRM as system of record during transition until it is replaced" },
      { id: "C", text: "Establish an MDM plan for systems of record by object, record, and field" },
      { id: "D", text: "Keep Salesforce and the legacy CRM disconnected while both connect to the ERP" }
    ],
    answers: ["B", "C"],
    explanation: "A defined transitional system of record and an MDM plan help manage ownership and consistency across systems."
  },
  {
    prompt: "Universal Containers has a multi-system Service Cloud call center and wants every system to have access to the same customer information. What should a data architect recommend?",
    options: [
      { id: "A", text: "Make Salesforce the system of record for all data" },
      { id: "B", text: "Implement a master data management strategy for customer data" },
      { id: "C", text: "Load customer data into every system" },
      { id: "D", text: "Let each system own the data it generates" }
    ],
    answers: ["B"],
    explanation: "An MDM strategy coordinates customer data across systems and reduces conflicts caused by multiple competing sources."
  },
  {
    prompt: "Universal Containers stores 10 million inventory rows in a cloud database and wants to use the data in Sales Cloud without importing it. Which three considerations support using Salesforce Connect?",
    options: [
      { id: "A", text: "Real-time access to the latest data from other systems is needed" },
      { id: "B", text: "Large amounts of data should be copied into Salesforce in subsets" },
      { id: "C", text: "Data must be exposed through a virtual private connection" },
      { id: "D", text: "A large amount of data should not be copied into the Salesforce org" },
      { id: "E", text: "Only small amounts of external data are needed at any one time" }
    ],
    answers: ["A", "D", "E"],
    explanation: "Salesforce Connect can provide real-time access to external data without storing the full dataset in Salesforce."
  },
  {
    prompt: "Contacts are stored in the standard Contact object and conferences in Conference__c. Each Contact can attend many conferences, and each conference can have many Contacts. How should the relationship be modeled?",
    options: [
      { id: "A", text: "Use a Contact Conference junction object with master-detail relationships to Contact and Conference__c" },
      { id: "B", text: "Create a master-detail field on Contact" },
      { id: "C", text: "Create a master-detail field on Conference__c" },
      { id: "D", text: "Create a lookup field on Contact" }
    ],
    answers: ["A"],
    explanation: "A junction object with relationships to both parent objects represents a many-to-many relationship."
  },
  {
    prompt: "Website leads and retail visits both create Accounts, causing duplicates. Associates search with Global Search before creating a record. Which option should the data architect choose?",
    options: [
      { id: "A", text: "Use Salesforce duplicate rules to validate records during Account creation" },
      { id: "B", text: "Run a nightly Apex job to search for and remove duplicates" },
      { id: "C", text: "Implement MDM validation before creating Salesforce records" },
      { id: "D", text: "Build custom real-time customer search for store associates" }
    ],
    answers: ["A"],
    explanation: "Duplicate rules prevent or flag duplicates at the point of creation rather than cleaning them up later."
  },
  {
    prompt: "A complex Salesforce org has incomplete and duplicate data. Which three factors should be considered when defining data quality standards?",
    options: [
      { id: "A", text: "Define data duplication standards and rules" },
      { id: "B", text: "Define key fields in a staging database for data cleansing" },
      { id: "C", text: "Measure data timeliness and consistency" },
      { id: "D", text: "Finalize an ETL tool for data migration" },
      { id: "E", text: "Measure data completeness and accuracy" }
    ],
    answers: ["A", "C", "E"],
    explanation: "Duplication rules and measures of timeliness, consistency, completeness, and accuracy are core data-quality standards."
  },
  {
    prompt: "A company is building a channel sales portal. External resellers need authenticated access to Lead, Opportunity, and Order data and may run reports and dashboards. They need no more than 10 custom objects or additional file storage. Which license type is recommended?",
    options: [
      { id: "A", text: "Customer Community" },
      { id: "B", text: "Lightning External Apps Starter" },
      { id: "C", text: "Customer Community Plus" },
      { id: "D", text: "Partner Community" }
    ],
    answers: ["D"],
    explanation: "Partner Community supports reseller access to sales records as well as reports and dashboards."
  },
  {
    prompt: "Universal Containers tracks shipping status on 200,000 Opportunity records. Status has ten possible values. Which field should be created to improve data quality and avoid data skew?",
    options: [
      { id: "A", text: "A picklist field with values sorted alphabetically" },
      { id: "B", text: "A master-detail relationship to a ShippingStatus__c object" },
      { id: "C", text: "A lookup relationship to a ShippingStatus__c object" },
      { id: "D", text: "A text field marked as an external ID" }
    ],
    answers: ["A"],
    explanation: "A picklist constrains entries to approved values and makes the choices easier for users to scan."
  },
  {
    prompt: "An integration creates custom-object records, but a field required only on the page layout is blank in many imported records. Which two approaches ensure the field is populated?",
    options: [
      { id: "A", text: "Add a validation rule that prevents blank values" },
      { id: "B", text: "Create a workflow to default a value into the field" },
      { id: "C", text: "Mark the field required in setup at the field level" },
      { id: "D", text: "Blame the external system for bad data" }
    ],
    answers: ["A", "C"],
    explanation: "A validation rule and field-level required setting enforce the requirement beyond a page layout."
  },
  {
    prompt: "A casino wants Salesforce service agents to see current, real-time customer activities from its point-of-sale system, Salesforce, mobile app, and marketing system. Which strategy should the data architect implement?",
    options: [
      { id: "A", text: "Explore external data sources in Salesforce to build the customer 360-degree view" },
      { id: "B", text: "Use a customer data mart to create the view" },
      { id: "C", text: "Periodically upload summary information into Salesforce" },
      { id: "D", text: "Migrate all customer activities from all four systems into Salesforce" }
    ],
    answers: ["A"],
    explanation: "External data sources can provide a current view without periodically copying or fully migrating all activity data."
  },
  {
    prompt: "A company using Sales and Service Cloud has many duplicate B2C customers. Which two approaches are recommended to reduce duplicates and improve data quality?",
    options: [
      { id: "A", text: "Use Duplicate Management" },
      { id: "B", text: "Use an Enterprise Service Bus" },
      { id: "C", text: "Use Data.com Clean" },
      { id: "D", text: "Use a data warehouse" }
    ],
    answers: ["A", "C"],
    explanation: "Duplicate Management can prevent or alert on duplicate records, while Data.com Clean can identify potential record updates or duplicates."
  }
];

window.dataArchitectPart2Questions = [
  {
    prompt: "UC is planning a massive Salesforce implementation with large data volumes. Roles, territories, groups, and sharing rules have been configured. The architect must load all required data, including user data, promptly. What should the architect do to minimize data-load times caused by system calculations?",
    options: [
      { id: "A", text: "Enable deferred sharing calculations and suspend sharing-rule calculations" },
      { id: "B", text: "Load data through Data Loader and enable parallel processing" },
      { id: "C", text: "Use the Bulk API and concurrent processing with multiple batches" },
      { id: "D", text: "Enable granular locking to avoid UNABLE_TO_LOCK_ROW errors" }
    ],
    answers: ["A"],
    explanation: "Deferring sharing calculations and suspending sharing-rule calculations avoids repeated recalculation during a large data load."
  },
  {
    prompt: "UC has millions of Case records with Case History and SLA data. The compliance team needs historical Cases to remain accessible for 10 years for audit purposes. What solution should a data architect recommend?",
    options: [
      { id: "A", text: "Archive Case data using the Salesforce archiving process" },
      { id: "B", text: "Purchase more data storage for the Case object" },
      { id: "C", text: "Use a custom object to store archived Case data" },
      { id: "D", text: "Use a custom Big Object to store archived Case data" }
    ],
    answers: ["D"],
    explanation: "A custom Big Object is designed to store very large volumes of archival data for long-term access without consuming standard Salesforce data storage."
  },
  {
    prompt: "A large telecommunications provider serves residential and business customers. Residential customers are Accounts, household members are Contacts, and businesses are Accounts. Some individuals use both residential and business services. What should a data architect recommend to provide a single view without creating duplicate customer records?",
    options: [
      { id: "A", text: "Create customers as Contacts and relate them to Business and Residential Accounts using Account Contact Relationships" },
      { id: "B", text: "Create customers as Person Accounts and relate them to Business and Residential Accounts using Account Contact Relationships" },
      { id: "C", text: "Create individual custom objects for customers and relate them to Business and Residential Accounts" },
      { id: "D", text: "Create customers as Residential Accounts and use Parent Accounts to relate Business Accounts" }
    ],
    answers: ["B"],
    explanation: "Person Accounts represent individual customers, and Account Contact Relationships can associate those individuals with their business relationships."
  },
  {
    prompt: "Universal Containers has over 10 million Accounts with an average of 20 Opportunities per Account. A Sales Executive needs a daily report of all Opportunities in a specific stage. Which two considerations help ensure report performance is not degraded by the large data volume?",
    options: [
      { id: "A", text: "The number of queries running at one time" },
      { id: "B", text: "The number of joins used in the report query" },
      { id: "C", text: "The number of records returned by the report query" },
      { id: "D", text: "The number of characters in the report query" }
    ],
    answers: ["B", "C"],
    explanation: "More joins can increase query complexity, and returning more records increases the amount of data the report engine must process."
  },
  {
    prompt: "A customer faces locking issues while importing large volumes of Order records that are children in a master-detail relationship with Account. What is the recommended way to avoid locking issues during import?",
    options: [
      { id: "A", text: "Import Accounts first, then Orders sorted by Order ID" },
      { id: "B", text: "Import Accounts first, then Orders sorted by Account ID" },
      { id: "C", text: "Change the relationship to Lookup, then change it back to master-detail after import" },
      { id: "D", text: "Import Orders and Accounts separately, then populate Account IDs in Orders using batch Apex" }
    ],
    answers: ["B"],
    explanation: "Loading parents first and grouping child records by Account ID reduces concurrent updates to the same parent and helps limit lock contention."
  },
  {
    prompt: "A Salesforce customer categorizes each data element by owner, security level (such as confidential), and compliance types (such as GDPR, PII, or HIPAA). Administrators must generate compliance audit reports. What should a data architect recommend?",
    options: [
      { id: "A", text: "Extract field attributes with the Metadata API, then classify them and build reports from the extract" },
      { id: "B", text: "Use field metadata attributes for compliance categories, data owner, and data sensitivity level" },
      { id: "C", text: "Create a custom object and fields to capture compliance information and build custom reports" },
      { id: "D", text: "Build reports for field information, then export it to classify and report for audits" }
    ],
    answers: ["B"],
    explanation: "Field metadata attributes keep compliance category, ownership, and sensitivity information with each field so administrators can report on it."
  },
  {
    prompt: "Universal Containers (UC) has Org A and has acquired a company with its own Salesforce org, Org B. UC will keep the orgs separate but wants to share Opportunities bidirectionally between them in near real time. Which three options should a data architect recommend?",
    options: [
      { id: "A", text: "Use Heroku Connect and Heroku Postgres to synchronize Opportunities bidirectionally" },
      { id: "B", text: "Install a third-party AppExchange tool to handle the data sharing" },
      { id: "C", text: "Use a scheduled Apex class to push Opportunity data between orgs daily" },
      { id: "D", text: "Use middleware to send Opportunity data bidirectionally across the orgs" },
      { id: "E", text: "Use Salesforce Connect and the cross-org adapter to expose Opportunities as external objects" }
    ],
    answers: ["A", "D", "E"],
    explanation: "Heroku Connect with Postgres, middleware, and Salesforce Connect's cross-org adapter are viable near-real-time sharing approaches; a daily scheduled Apex sync is not near real time."
  },
  {
    prompt: "A healthcare provider uses Salesforce to track patient care. Payment providers are organizations that pay for care, doctors provide care plans for multiple patients and need access to patient information, and patients are individuals who need care. Which Salesforce object mapping is optimal?",
    options: [
      { id: "A", text: "Patients as Contacts, payment providers as Accounts, and doctors as Accounts" },
      { id: "B", text: "Patients as Person Accounts, payment providers as Accounts, and doctors as Contacts" },
      { id: "C", text: "Patients as Person Accounts, payment providers as Accounts, and doctors as Person Accounts" },
      { id: "D", text: "Patients as Accounts, payment providers as Accounts, and doctors as Person Accounts" }
    ],
    answers: ["C"],
    explanation: "Person Accounts model individual patients and doctors, while payment-provider organizations are represented by Accounts."
  },
  {
    prompt: "UC is implementing a data-classification policy for customer information across its internal systems, including Salesforce. How can it classify information maintained under both standard and custom objects?",
    options: [
      { id: "A", text: "Use AppExchange products to classify fields based on policy" },
      { id: "B", text: "Use data-classification metadata fields available in field definitions" },
      { id: "C", text: "Create a custom picklist field to capture the classification" },
      { id: "D", text: "Build reports for customer information and validate it manually" }
    ],
    answers: ["B"],
    explanation: "Field-level data-classification metadata can record sensitivity categories consistently for standard and custom object fields."
  },
  {
    prompt: "Universal Containers is moving from a legacy CRM to Salesforce but will keep both systems running until Salesforce functionality is complete. Data must stay synchronized among Salesforce, the legacy CRM, and SAP. What is the recommendation?",
    options: [
      { id: "A", text: "Integrate the legacy CRM with Salesforce and keep them synchronized until the new functionality is deployed" },
      { id: "B", text: "Do not integrate the legacy CRM with Salesforce, but integrate Salesforce with SAP" },
      { id: "C", text: "Integrate SAP with Salesforce and with the legacy CRM, but do not integrate the legacy CRM directly with Salesforce" },
      { id: "D", text: "Use an MDM solution linked to Salesforce and SAP" }
    ],
    answers: ["C", "D"],
    explanation: "Using SAP as an integration point avoids a direct legacy-CRM-to-Salesforce connection, while MDM can coordinate data ownership and quality across systems."
  },
  {
    prompt: "Universal Containers has Salesforce and an on-premises ERP system. An Opportunity should be copied to the ERP when it reaches Closed/Won, and the copied fields must be read-only in the ERP. What real-time approach best meets the requirement?",
    options: [
      { id: "A", text: "Implement an MDM system to determine the system of record" },
      { id: "B", text: "Use a workflow rule to send Opportunity data through Outbound Messaging" },
      { id: "C", text: "Have the ERP poll Salesforce nightly for the required Opportunities" },
      { id: "D", text: "Build an hourly integration that sends Salesforce Opportunities to the ERP" }
    ],
    answers: ["B"],
    explanation: "A workflow rule can trigger an Outbound Message when an Opportunity reaches Closed/Won, sending the data to the ERP without waiting for a polling schedule."
  },
  {
    prompt: "Universal Containers has data-quality issues with duplicate Accounts, Contacts, and Leads. It wants to prompt users when a possible duplicate exists and generate duplicate-record reports. What approach should it implement immediately?",
    options: [
      { id: "A", text: "Create after-insert and after-update triggers on Account, Contact, and Lead to detect duplicates using custom criteria" },
      { id: "B", text: "Create duplicate rules for Account, Lead, and Contact using standard matching rules, with report and alert actions for creates and edits" },
      { id: "C", text: "Create duplicate rules for Account, Lead, and Contact using standard matching rules, and block creates and edits" },
      { id: "D", text: "Create before-insert and before-update triggers on Account, Contact, and Lead to detect duplicates using custom criteria" }
    ],
    answers: ["B"],
    explanation: "Standard matching rules with duplicate rules configured to alert and report on creates and edits can promptly flag possible duplicates and support follow-up reporting."
  },
  {
    prompt: "Which two best practices should be followed when using SOSL for searching?",
    options: [
      { id: "A", text: "Search against single objects for greater speed and accuracy" },
      { id: "B", text: "Keep searches specific and avoid wildcards where possible" },
      { id: "C", text: "Ignore custom indexes because search fields are pre-indexed" },
      { id: "D", text: "Use FIND in ALL FIELDS for faster searches" }
    ],
    answers: ["B", "D"],
    explanation: "Specific search terms can reduce irrelevant results, and FIND in ALL FIELDS can use Salesforce's search indexes across searchable fields."
  },
  {
    prompt: "Universal Container is replacing a home-grown CRM with Salesforce. It will migrate open and active records to Salesforce while keeping historical records in the legacy system, but wants those records available in Salesforce when needed. What solution should a data architect recommend?",
    options: [
      { id: "A", text: "Use real-time integration to pull historical records into Salesforce" },
      { id: "B", text: "Move all data to Salesforce and delete it after one year" },
      { id: "C", text: "Use a mashup to display historical records in Salesforce" },
      { id: "D", text: "Build a custom solution that opens the legacy system and displays its records" }
    ],
    answers: ["C"],
    explanation: "A mashup can display read-only historical data from the legacy system on a Salesforce page without copying or synchronizing the records."
  },
  {
    prompt: "A manager at Cloud Kicks is importing Leads into Salesforce and needs to avoid creating duplicate records. Which two approaches should the manager take?",
    options: [
      { id: "A", text: "Acquire an AppExchange Lead de-duplication application" },
      { id: "B", text: "Implement Salesforce Matching Rules and Duplicate Rules" },
      { id: "C", text: "Run the Salesforce Lead Mass de-duplication tool" },
      { id: "D", text: "Create a Workflow Rule to check for duplicate records" }
    ],
    answers: ["A", "B"],
    explanation: "A suitable AppExchange tool and Salesforce Matching and Duplicate Rules can identify and prevent duplicate Leads during import."
  },
  {
    prompt: "Universal Containers loads bulk Leads and Campaigns from third-party aggregators. Leads are shared with sales agents and added to Campaigns by Apex triggers. Agents work Leads for six months, the business wants records for at least one year, and compliance requires three years of retention before deletion. Which statement about an archiving strategy is true?",
    options: [
      { id: "A", text: "Store long-term Leads in custom storage objects to avoid counting against storage limits" },
      { id: "B", text: "Use Salesforce Data Backup and Recovery as the data archiving solution" },
      { id: "C", text: "Use the Recycle Bin, which guarantees record storage for 15 days after deletion" },
      { id: "D", text: "Use a tier-based approach to classify record storage needs" }
    ],
    answers: ["D"],
    explanation: "A tier-based strategy classifies data by usage, value, and retention requirements, then applies an appropriate storage and archival solution."
  },
  {
    prompt: "Universal Containers needs to move millions of records from an external ERP system into Salesforce. What is an appropriate scenario for using the Bulk API in serial mode rather than parallel mode?",
    options: [
      { id: "A", text: "Placing 20 batches on the queue for upsert jobs" },
      { id: "B", text: "Inserting one million Orders across many Accounts where lock exceptions may occur" },
      { id: "C", text: "Loading a controlled feed with 10 batches per job" },
      { id: "D", text: "Inserting one million Orders across many Accounts with all lock exceptions already eliminated and managed" }
    ],
    answers: ["B"],
    explanation: "Serial processing can reduce lock contention when large imports update related records and lock exceptions are possible."
  },
  {
    prompt: "Northern Trail Outfitters wants to launch a loyalty program that records every purchase and awards points. The data will support marketing and product-development decisions, and the program is expected to generate 100 million rows per month. NTO uses Einstein Analytics and Discovery. Where should the reward-program data be captured for consumption by Einstein?",
    options: [
      { id: "A", text: "Create a custom Big Object in Salesforce to capture the reward-program data" },
      { id: "B", text: "Connect Einstein directly to the point-of-sale system to capture the data" },
      { id: "C", text: "Create a Big Object in Einstein Analytics to capture the loyalty data" },
      { id: "D", text: "Create a custom Salesforce object to capture the reward-program data" }
    ],
    answers: ["A"],
    explanation: "A Salesforce Big Object is designed for very large data volumes and can provide the stored reward history for analytics consumption."
  },
  {
    prompt: "Cloud Kicks is launching a Partner Community where customers submit shipment requests for employees to process. Each request has header information and up to five shipment items. The rollout grows from 6,000 North American customers to 24,000 worldwide over two years. Each customer submits an average of 12 requests per week, and customers need three years of request history with Salesforce reporting. What solution is recommended?",
    options: [
      { id: "A", text: "Create an external object for shipment requests and a child external object for shipment items" },
      { id: "B", text: "Create an external object for requests with five lookup fields for shipment items" },
      { id: "C", text: "Create a custom object for shipment requests and a child custom object for items, then archive data off-platform after three years" },
      { id: "D", text: "Create a custom object for requests with five lookup fields for items, then archive data off-platform after three years" }
    ],
    answers: ["C"],
    explanation: "Separate parent and child custom objects support request and item reporting in Salesforce; an archive process can move older data off-platform after the required three years."
  },
  {
    prompt: "Cloud Kicks requires every Shipment record to relate to a Product, Sender, and Receiver, each stored in a separate custom object. Referenced parent records must not be deletable, and each object needs its own sharing model. What should the architect do?",
    options: [
      { id: "A", text: "Associate each parent with the Shipment using a VLOOKUP formula field" },
      { id: "B", text: "Create a required Lookup relationship to each of the three parent records" },
      { id: "C", text: "Create a Master-Detail relationship to each of the three parent records" },
      { id: "D", text: "Create two Master-Detail relationships and one Lookup relationship" }
    ],
    answers: ["B"],
    explanation: "Required Lookup fields enforce the relationships and protect referenced parents from deletion while allowing each object to keep its own sharing model."
  },
  {
    prompt: "Northern Trail Outfitters has customer records across several systems, including Salesforce Contacts. Its master data management tool assigns each customer a master key, maps it to record IDs in each system, and de-duplicates records. How should the key be stored in Salesforce?",
    options: [
      { id: "A", text: "Store it in Heroku Postgres and synchronize it with Heroku Connect" },
      { id: "B", text: "Create a custom object to hold the master key and add a lookup to Contact" },
      { id: "C", text: "Create an external object to hold the master key and add a lookup to Contact" },
      { id: "D", text: "Store it on Contact in an External ID field for referential imports" }
    ],
    answers: ["D"],
    explanation: "An External ID on Contact gives integrations a unique key to match and upsert records, helping prevent duplicates without adding another object."
  },
  {
    prompt: "Universal Containers allows all internal users to edit every Contact, but management wants only a Contact's owner to be able to delete it. How should the architect meet this requirement?",
    options: [
      { id: "A", text: "Use a before-delete trigger that blocks deletion when the current user is not the owner" },
      { id: "B", text: "Set Contact sharing to Public Read Only" },
      { id: "C", text: "Remove Delete permission on Contact from user profiles" },
      { id: "D", text: "Create a validation rule that blocks deletion when the current user is not the owner" }
    ],
    answers: ["A"],
    explanation: "A before-delete trigger can compare the current user's ID with the Contact OwnerId and add an error when they differ. Validation rules do not run on delete; the other options also prevent the intended editing or owner deletion."
  },
  {
    prompt: "Universal Containers has a complex data landscape and is beginning a data governance program. Which two are appropriate first steps when assessing its data architecture?",
    options: [
      { id: "A", text: "Ask IT program managers about the velocity of projects in the pipeline" },
      { id: "B", text: "Ask DBAs about current database performance metrics" },
      { id: "C", text: "Work with executive sponsors to understand the enterprise data strategy and goals" },
      { id: "D", text: "Work with business units and IT to understand current operational systems and data models" }
    ],
    answers: ["C", "D"],
    explanation: "An assessment should establish the enterprise strategy and goals and understand the current state of systems and data models."
  },
  {
    prompt: "Universal Containers keeps 10 million inventory rows in a cloud database and wants them visible in Sales Cloud without importing them. Which three considerations support using Salesforce Connect?",
    options: [
      { id: "A", text: "Real-time access to the latest data in other systems is needed" },
      { id: "B", text: "There is a large amount of data, and subsets should be copied into Salesforce" },
      { id: "C", text: "Data must be exposed over a virtual private connection" },
      { id: "D", text: "There is a large amount of data that should not be copied into the org" },
      { id: "E", text: "Only small amounts of external data need to be viewed at a time" }
    ],
    answers: ["A", "D", "E"],
    explanation: "Salesforce Connect is suited to live access to large external datasets that should remain outside the org, especially when users work with small subsets at a time."
  },
  {
    prompt: "Universal Containers has about 5 million Shipment records with Private OWD, each with up to 10 Shipment Items in a master-detail relationship. Twenty-five sharing rules share shipments with 25 business-area public groups, and reps move between areas frequently. What should the architect do to maintain performance while meeting the requirements?",
    options: [
      { id: "A", text: "Archive old Shipment records" },
      { id: "B", text: "Ask Salesforce to create skinny tables for Shipment" },
      { id: "C", text: "Set Shipment OWD to Public Read/Write" },
      { id: "D", text: "Ask Salesforce to enable Defer Sharing Rules" }
    ],
    answers: ["D"],
    explanation: "Moving users between groups can trigger sharing recalculation. Deferring sharing rules postpones that recalculation and helps avoid performance slowdowns and locking."
  },
  {
    prompt: "Universal Containers is planning an archiving and purging strategy for Topic__c and Comment__c. Which three questions should the architect ask?",
    options: [
      { id: "A", text: "How many fields do the objects have?" },
      { id: "B", text: "Which profiles and users can currently access the records?" },
      { id: "C", text: "If reporting is needed, can the data be rolled up into fewer summary records?" },
      { id: "D", text: "Will archived data need to be reported on or accessed later?" },
      { id: "E", text: "Do regulations restrict archiving and purging?" }
    ],
    answers: ["C", "D", "E"],
    explanation: "Future access needs, whether summaries are sufficient, and regulatory requirements determine what data to retain and how to archive it."
  },
  {
    prompt: "A casino has customer activity in a point-of-sale system, Salesforce, a mobile app, and a marketing system. Service agents in Salesforce need current, real-time activity from all four systems. What should the architect do?",
    options: [
      { id: "A", text: "Use external data sources in Salesforce to build the customer 360 view" },
      { id: "B", text: "Use a customer data mart to build the view" },
      { id: "C", text: "Migrate activities from all four systems into Salesforce" },
      { id: "D", text: "Periodically upload summary data into Salesforce" }
    ],
    answers: ["A"],
    explanation: "External data sources can provide a current view without periodically copying or fully migrating activity data."
  },
  {
    prompt: "Universal Containers must store more than 100 million records in a custom Big Object. Which two tools can be used to create it?",
    options: [
      { id: "A", text: "Salesforce DX" },
      { id: "B", text: "Metadata API" },
      { id: "C", text: "Setup > Big Objects > New" },
      { id: "D", text: "Setup > Object Manager > New" }
    ],
    answers: ["B", "C"],
    explanation: "A custom Big Object can be defined through the Metadata API or created declaratively from the Big Objects page in Setup."
  },
  {
    prompt: "Universal Containers has 30 million Cases with 80 fields, and agents report slow reports. What should the architect recommend?",
    options: [
      { id: "A", text: "Create a custom object of aggregated data for reporting" },
      { id: "B", text: "Ask Salesforce Support to enable a skinny table for Case" },
      { id: "C", text: "Move data off-platform and report outside Salesforce" },
      { id: "D", text: "Build reports with custom Lightning components" }
    ],
    answers: ["B"],
    explanation: "A skinny table can hold frequently used Case fields together without joins, reducing the data a report query needs to read while keeping reporting in Salesforce."
  },
  {
    prompt: "Cloud Kicks sends Salesforce data to an external Order Management System to create invoices. An administrator must be able to change which fields are sent without code. Which two approaches work?",
    options: [
      { id: "A", text: "Use a set <sobjectFieldset> to decide which fields go in an HTTP callout" },
      { id: "B", text: "Use an Outbound Message to decide which fields are sent to the OMS" },
      { id: "C", text: "Use a Field Set to decide which fields go in an HTTP callout" },
      { id: "D", text: "Use field-level security to select the fields to send" }
    ],
    answers: ["B", "C"],
    explanation: "Outbound Message fields are selected declaratively, and an administrator can maintain a Field Set that Apex reads when constructing a callout. Field-level security controls access, not which fields an integration sends."
  },
  {
    prompt: "Universal Containers has 100,000 existing Contacts and will load 200,000 new ones. Contact has a unique External ID populated on every existing record. What reduces load processing time?",
    options: [
      { id: "A", text: "Load everything with the Streaming API using Upsert" },
      { id: "B", text: "Delete all existing records, then insert everything" },
      { id: "C", text: "Upsert everything so Salesforce determines which records are new or existing" },
      { id: "D", text: "Insert the new records and update the existing records" }
    ],
    answers: ["D"],
    explanation: "When the new and existing records are already known, separate Insert and Update jobs avoid the per-record matching work required by Upsert."
  },
  {
    prompt: "Northern Trail Outfitters needs an archive that removes outdated data no longer needed day to day and improves Salesforce performance. What should it use?",
    options: [
      { id: "A", text: "Choose an archive location and use scheduled nightly batch jobs to move and purge aged data" },
      { id: "B", text: "Choose an archive location and move data there with a time-based workflow" },
      { id: "C", text: "Use a formula field to flag old records and export them by report to SharePoint" },
      { id: "D", text: "Use a Full Copy sandbox to hold archived data" }
    ],
    answers: ["A"],
    explanation: "Scheduled batch jobs can move aged records to an archive and then delete them from Salesforce, reducing the org's stored data."
  },
  {
    prompt: "Universal Containers is migrating from two legacy systems and wants to clean and de-duplicate the data before loading it into Salesforce. What should the architect recommend?",
    options: [
      { id: "A", text: "Define External IDs, merge the second database into the first, then load" },
      { id: "B", text: "Define duplicate rules in Salesforce and load from both databases" },
      { id: "C", text: "Use a staging database, External IDs, and an ETL process to merge, clean, de-duplicate, and then load" },
      { id: "D", text: "Define External IDs, insert from one database, and upsert from the second" }
    ],
    answers: ["C"],
    explanation: "A staging database lets the team combine both sources, clean and de-duplicate records, and then load the prepared data using External IDs."
  },
  {
    prompt: "Accounts and Opportunities are created in Salesforce. An ERP, an accounting system, and a commission system all update both objects. How should the architect determine the system of record?",
    options: [
      { id: "A", text: "Salesforce is the system of record because the data starts there" },
      { id: "B", text: "The system that updates a field or object is its system of record" },
      { id: "C", text: "The last integration to run becomes the system of record" },
      { id: "D", text: "Review data flows with business users and determine the system of record per object or field" }
    ],
    answers: ["D"],
    explanation: "System-of-record ownership can differ by object or field and must be agreed through business rules and a review of the data flows."
  },
  {
    prompt: "Universal Containers, a logistics company, has several million US business Accounts. Many addresses are incorrect or the businesses no longer exist. Which two scalable strategies can help?",
    options: [
      { id: "A", text: "Contact each business and ask it to update its address" },
      { id: "B", text: "Build a team to check Accounts with web searches and phone calls" },
      { id: "C", text: "Integrate with a third-party database or service for address validation and enrichment" },
      { id: "D", text: "Use Data.com Clean to update addresses from the Dun & Bradstreet database" }
    ],
    answers: ["C", "D"],
    explanation: "Address-validation and enrichment services compare records against trusted external data sources and can scale to millions of Accounts."
  },
  {
    prompt: "Universal Containers is creating a cross-business-unit team to make enterprise-wide data governance decisions. Which two roles belong on the council?",
    options: [
      { id: "A", text: "Analytics and BI owners" },
      { id: "B", text: "Data domain stewards" },
      { id: "C", text: "Salesforce administrators" },
      { id: "D", text: "Operational data users" }
    ],
    answers: ["A", "B"],
    explanation: "BI owners define reporting needs and metrics, while data domain stewards set and enforce quality rules for their data domains."
  },
  {
    prompt: "Users report that Salesforce reports time out or run too long. Which two actions should the architect recommend?",
    options: [
      { id: "A", text: "Index key fields used in report filters" },
      { id: "B", text: "Enable Divisions for large data objects" },
      { id: "C", text: "Create a skinny table for each report" },
      { id: "D", text: "Share each report with fewer users" }
    ],
    answers: ["A", "C"],
    explanation: "Indexes on filter fields can make report queries more selective, and skinny tables can reduce joins and the amount of data read. The supplied source marks A and C."
  },
  {
    prompt: "Northern Trail Outfitters wants a consent form that records customer authorization for marketing. What should the architect recommend?",
    options: [
      { id: "A", text: "Use the Authorization Form Consent object" },
      { id: "B", text: "Use an AppExchange solution" },
      { id: "C", text: "Create a custom object" },
      { id: "D", text: "Use custom fields" }
    ],
    answers: ["A"],
    explanation: "The standard Authorization Form Consent object is part of Salesforce's consent data model and can record when and how a person agreed to a form."
  },
  {
    prompt: "Northern Trail Outfitters needs a CSV export that runs weekly on a schedule and is configured in the Salesforce UI. Which tool fits?",
    options: [
      { id: "A", text: "Bulk API" },
      { id: "B", text: "Data Export wizard" },
      { id: "C", text: "A third-party ETL tool" },
      { id: "D", text: "Data Loader" }
    ],
    answers: ["B"],
    explanation: "Data Export in Setup produces CSV files, can be scheduled weekly, and is configured through the Salesforce UI."
  },
  {
    prompt: "Salesforce is being introduced into Ursa Major Solar's multi-system ERP environment, and data must stay synchronized between systems. Which two techniques should be used?",
    options: [
      { id: "A", text: "Integrate Salesforce with the ERP environment" },
      { id: "B", text: "Use Workbench to update files in each system" },
      { id: "C", text: "Use a master data management strategy to define a single source of truth" },
      { id: "D", text: "Build synchronization reports and dashboards" }
    ],
    answers: ["A", "C"],
    explanation: "Integration moves data between systems, while master data management establishes which system or value is authoritative."
  },
  {
    prompt: "Universal Containers' assignment rules send unrouted Leads to a single dummy user. Reps report slow load times and trouble accessing those Leads. What should the architect recommend?",
    options: [
      { id: "A", text: "Put the dummy user in the lowest role in the hierarchy" },
      { id: "B", text: "Create several dummy users and distribute the Leads among them" },
      { id: "C", text: "Put the dummy user in the highest role in the hierarchy" },
      { id: "D", text: "Periodically delete Leads" }
    ],
    answers: ["B"],
    explanation: "Distributing ownership across several users avoids concentrating a large number of records on one owner, which can create ownership data skew and affect queries and sharing calculations."
  },
  {
    prompt: "A highly regulated customer stores PII, uses IP restrictions by geography, keeps financial records private to the assigned rep, must block data exports, and needs geography-based access limits plus detailed activity monitoring. Which three Shield capabilities fit?",
    options: [
      { id: "A", text: "Event Monitoring to track user activity" },
      { id: "B", text: "Restrict access from users outside a specific geography" },
      { id: "C", text: "Stop Sales users from seeing customer PII" },
      { id: "D", text: "Transaction Security policies to block data exports" },
      { id: "E", text: "Encrypt sensitive customer data" }
    ],
    answers: ["B", "D", "E"],
    explanation: "The supplied source marks B, D, and E for geographic access restrictions, export blocking, and encryption. It also notes that Event Monitoring (A) is a Shield capability relevant to the detailed-monitoring requirement, and some references may instead select A, D, and E."
  },
  {
    prompt: "Universal Containers has never deleted data and now exceeds its storage limits. Which three recommendations reduce record counts?",
    options: [
      { id: "A", text: "Hard delete with the Bulk API" },
      { id: "B", text: "Hard delete in Batch Apex" },
      { id: "C", text: "Find records that have not been modified or used in the last three years" },
      { id: "D", text: "Permanently delete with the REST API" },
      { id: "E", text: "Archive records to an enterprise data warehouse before deleting them" }
    ],
    answers: ["A", "C", "E"],
    explanation: "Identify stale records, archive them to the enterprise data warehouse, and then use Bulk API hard delete to remove them without retaining them in the Recycle Bin."
  },
  {
    prompt: "Which three characteristics help make Salesforce skinny tables fast?",
    options: [
      { id: "A", text: "They exclude soft-deleted records" },
      { id: "B", text: "They avoid resource-heavy joins" },
      { id: "C", text: "They stay synchronized with their source tables automatically" },
      { id: "D", text: "They can include fields from other objects" },
      { id: "E", text: "They support up to 100 columns" }
    ],
    answers: ["A", "B", "C"],
    explanation: "A skinny table keeps frequently used fields from one object together, excludes soft-deleted rows, avoids joins, and is kept synchronized by Salesforce."
  },
  {
    prompt: "Universal Containers' Project object is Private and has roll-up summary fields for resources, total hours, and work items. Large volumes of time-entry records are regularly loaded from an external system. What should the architect consider?",
    options: [
      { id: "A", text: "Load everything with External IDs linking the records to their parents" },
      { id: "B", text: "Use workflow instead of roll-up summaries to calculate totals" },
      { id: "C", text: "Use triggers instead of roll-up summaries to calculate totals" },
      { id: "D", text: "Load the data after deferring sharing calculations" }
    ],
    answers: ["D"],
    explanation: "For a large load, deferring sharing calculations can avoid repeated sharing recalculation and reduce locking; recalculate sharing after the load. The source question refers to a data-model image that was not included."
  },
  {
    prompt: "An automaker receives website leads in batches and links them to Accounts; store visitors are also created as Accounts. Many customers use both channels, causing duplicates. Reps use Global Search before creating customers. Which scalable option prevents duplicates?",
    options: [
      { id: "A", text: "Use Salesforce Duplicate Rules to check during Account creation" },
      { id: "B", text: "Use an MDM solution to validate customers before creating Accounts" },
      { id: "C", text: "Build a custom search on Account fields to match store visitors" },
      { id: "D", text: "Customize Account creation to search for an existing customer first" }
    ],
    answers: ["A"],
    explanation: "Matching Rules and Duplicate Rules can automatically detect possible duplicates during record creation from both batch and manual processes."
  },
  {
    prompt: "Universal Containers' legacy field data types do not match Salesforce's. What approach supports a successful migration?",
    options: [
      { id: "A", text: "Move data to a staging database for mapping, then use an ETL tool to transform and load it" },
      { id: "B", text: "Export to a staging database and use stored procedures to transform field types" },
      { id: "C", text: "Use an ETL tool to transform data types and load into Salesforce" },
      { id: "D", text: "Export to CSV and load with Data Loader" }
    ],
    answers: ["C"],
    explanation: "An ETL tool can map fields, transform incompatible data types, and load the resulting data into Salesforce."
  },
  {
    prompt: "Northern Trail Outfitters users see new fields on their pages but do not know what to enter, and the company is concerned about change governance. What should the architect recommend?",
    options: [
      { id: "A", text: "Add descriptions and make the fields required" },
      { id: "B", text: "Maintain a data dictionary and establish a governance process for changes to common objects" },
      { id: "C", text: "Report on users leaving fields blank and fill gaps from external sources" },
      { id: "D", text: "Create validation rules with error messages explaining each field" }
    ],
    answers: ["B"],
    explanation: "A data dictionary documents field meaning, while a governance process ensures changes are reviewed and communicated."
  },
  {
    prompt: "Universal Containers has many Apex classes, triggers, and automations that may update the same record at the same time. What guarantees that a record is not updated simultaneously?",
    options: [
      { id: "A", text: "Add FOR UPDATE to SOQL queries" },
      { id: "B", text: "Disable classes or triggers that might touch the same record" },
      { id: "C", text: "Move logic to processes and flows" },
      { id: "D", text: "Optimize classes and triggers for CPU performance" }
    ],
    answers: ["A"],
    explanation: "A SOQL query using FOR UPDATE locks the returned records for the remainder of the transaction so another transaction cannot modify them until the lock is released."
  },
  {
    prompt: "Universal Containers is migrating a legacy client-server application with a relational database to Salesforce. Which three actions are key parts of Salesforce data modeling?",
    options: [
      { id: "A", text: "Identify which data elements should persist in Salesforce" },
      { id: "B", text: "Map legacy data to Salesforce objects" },
      { id: "C", text: "Map legacy data only to Salesforce custom objects" },
      { id: "D", text: "Work with the legacy application owner to analyze the legacy data model" },
      { id: "E", text: "Implement the legacy data model in Salesforce using custom fields" }
    ],
    answers: ["A", "B", "E"],
    explanation: "The supplied source marks A, B, and E: identify the data to retain, map it to Salesforce objects, and implement it with fields. It notes that some study guides prefer D instead of E because copying the legacy model as-is is often discouraged."
  },
  {
    prompt: "Universal Containers has millions of Cases and is running out of storage. Some groups need access to historical Cases for up to seven years. Which two solutions minimize performance and storage issues?",
    options: [
      { id: "A", text: "Export the Cases to flat files on an external system" },
      { id: "B", text: "Create a custom object for Case history and report on it in Salesforce" },
      { id: "C", text: "Use an on-premises archive with an integration to view archived data" },
      { id: "D", text: "Archive the Cases to a Big Object and display them with Lightning components" }
    ],
    answers: ["C", "D"],
    explanation: "An on-premises archive or Big Object can move older Cases out of regular Salesforce storage while keeping historical records accessible from Salesforce."
  },
  {
    prompt: "Salesforce is the system of record for Leads, while an on-premises order management system is the system of record for Accounts and Contacts. Each system may keep its own version of a name, but Universal Containers wants one store that links records across systems. What approach fits?",
    options: [
      { id: "A", text: "Have Salesforce poll the order management system nightly for Accounts and Contacts" },
      { id: "B", text: "Use an integration tool to send Accounts and Contacts from the order management system to Salesforce" },
      { id: "C", text: "Use a master data management strategy to reconcile Leads, Accounts, and Contacts" },
      { id: "D", text: "Use Streaming API to send Account and Contact data from Salesforce to the order management system" }
    ],
    answers: ["C"],
    explanation: "MDM can maintain a master record with cross-references to each system's record IDs while allowing each system to retain its own values."
  },
  {
    prompt: "Millions of rows are used for historical trend reports, causing performance and storage problems. Which two strategies should be recommended?",
    options: [
      { id: "A", text: "Use scheduled Batch Apex to copy aggregates into a custom object, then delete the source records" },
      { id: "B", text: "Use Analytic Snapshots with a purge plan, report on the snapshots, and delete the source records" },
      { id: "C", text: "Extract data with Data Loader, aggregate it, write it back to a custom object, and delete the source records" },
      { id: "D", text: "Use a Salesforce archiving feature to archive older records off the storage limit" }
    ],
    answers: ["A", "D"],
    explanation: "The supplied source marks A and D for reducing detailed records and archiving older data. It notes that Analytic Snapshots (B) are specifically designed for historical trend reporting and that some study guides instead select A and B."
  },
  {
    prompt: "Contacts can attend many Conferences, and each Conference can have many Contacts. How should this many-to-many relationship be modeled?",
    options: [
      { id: "A", text: "Create a Contact Conference junction object with master-detail relationships to both objects" },
      { id: "B", text: "Create a master-detail field on Contact" },
      { id: "C", text: "Create a master-detail field on Conference" },
      { id: "D", text: "Create a lookup field on Contact" }
    ],
    answers: ["A"],
    explanation: "A junction object with two master-detail relationships models a many-to-many relationship; a single relationship field supports only a one-to-many relationship."
  },
  {
    prompt: "Universal Containers sells directly to consumers and is moving about one million consumer records to Salesforce. What model gives the best use of Salesforce features while avoiding load issues?",
    options: [
      { id: "A", text: "Create a custom Individual_Consumer__c object" },
      { id: "B", text: "Load consumers as Accounts only, without Contacts" },
      { id: "C", text: "Create one Account and one Contact for each consumer" },
      { id: "D", text: "Create one Account and load all consumers as Contacts under it" }
    ],
    answers: ["D"],
    explanation: "The supplied source marks D to avoid creating an Account for every consumer. It also cautions that putting a million Contacts under one Account can cause account data skew and locking; many study guides instead select C or Person Accounts."
  },
  {
    prompt: "Universal Containers is splitting its org. Org B has a very different data model, including objects, fields, and picklist values, and three million records must move from Org A to Org B within two months. Which strategy fits?",
    options: [
      { id: "A", text: "Use an ETL tool to orchestrate the migration" },
      { id: "B", text: "Use Data Loader to export and Data Import Wizard to import" },
      { id: "C", text: "Write a script that uses the Bulk API" },
      { id: "D", text: "Use Salesforce CLI to query, export, and import the records" }
    ],
    answers: ["A"],
    explanation: "An ETL tool can map and transform data for the redesigned model at high volume, with less custom code than a bespoke script."
  },
  {
    prompt: "Attachments on Invoice__c must be classified by Type, such as Purchase Order or Receipt, so reports can count attachments per invoice by Type. What should the architect do?",
    options: [
      { id: "A", text: "Add values to the standard ContentType picklist on Attachment" },
      { id: "B", text: "Add a ContentType picklist to the Attachment page layout" },
      { id: "C", text: "Add a custom Type picklist to the standard Attachment object" },
      { id: "D", text: "Create a custom object related to Invoice__c with a Type picklist" }
    ],
    answers: ["D"],
    explanation: "The standard Attachment object cannot be extended with custom fields for this use. A related custom object can store the Type and support reporting."
  },
  {
    prompt: "Universal Containers' on-premises billing system produces more than one million invoices a year. Sales users need to see account status, invoice history, and opportunities without leaving Salesforce. What should be used?",
    options: [
      { id: "A", text: "Migrate the last 12 months of invoices into a custom object" },
      { id: "B", text: "Use an Apex callout to populate a related list on Account" },
      { id: "C", text: "Build a mashup page that presents billing records inside Salesforce" },
      { id: "D", text: "Build a Visualforce tab that displays the billing system in an iframe" }
    ],
    answers: ["C"],
    explanation: "A mashup can show live billing data in context without copying more than a million invoices a year into Salesforce."
  },
  {
    prompt: "Universal Containers has about one million Opportunities with 12 invoices each in an ERP that supports SOAP and OData. Reps need current invoice status and amount on each Opportunity. Considering performance and storage, how should invoices be modeled?",
    options: [
      { id: "A", text: "Use Streaming API to pull current status from the ERP" },
      { id: "B", text: "Create an external object Invoice__x with a lookup to Opportunity" },
      { id: "C", text: "Create a custom object Invoice__c with a master-detail relationship to Opportunity" },
      { id: "D", text: "Create a custom object Invoice__c with a lookup to Opportunity" }
    ],
    answers: ["B"],
    explanation: "An external object can read invoices live from the ERP over OData, keeping the 12 million records out of Salesforce storage and current."
  },
  {
    prompt: "A customer wants to store latitude and longitude on a custom object. What should the architect recommend?",
    options: [
      { id: "A", text: "Create formula fields using geolocation functions" },
      { id: "B", text: "Create separate custom fields for latitude and longitude" },
      { id: "C", text: "Create a geolocation custom field" },
      { id: "D", text: "Install an AppExchange package" }
    ],
    answers: ["C"],
    explanation: "A geolocation field stores latitude and longitude together and supports distance functions in formulas and SOQL."
  },
  {
    prompt: "Universal Containers receives Leads from many sources and wants each Lead to have company profile and location data. What should the architect recommend?",
    options: [
      { id: "A", text: "Have salespeople look up and enter the data" },
      { id: "B", text: "Run reports to find Leads missing the data" },
      { id: "C", text: "Use external data providers to enrich company profile and location data" },
      { id: "D", text: "Export the data and have another team fill it in" }
    ],
    answers: ["C"],
    explanation: "External data providers can enrich Leads automatically and at scale; the other options are manual or only identify missing data."
  },
  {
    prompt: "Universal Containers creates hundreds of thousands of Conferences a year but has used only about 20 Venues. It wants a single Conference object with a Venue picklist instead of a separate Venue object. Which two considerations should the architect review?",
    options: [
      { id: "A", text: "Limits on master-detail relationships" },
      { id: "B", text: "Org data storage limits" },
      { id: "C", text: "Bulk API limitations on picklist fields" },
      { id: "D", text: "Inline editing in standard list views" }
    ],
    answers: ["C", "D"],
    explanation: "Picklists have considerations for bulk loads and list-view inline editing; new venue values must be maintained as picklist values. Removing the Venue object also avoids its storage and relationship overhead."
  },
  {
    prompt: "Universal Containers needs to extract 100 million records from Salesforce for a new enterprise data warehouse. Which strategy gives maximum performance?",
    options: [
      { id: "A", text: "Use a third-party AppExchange tool" },
      { id: "B", text: "Run successive REST API queries" },
      { id: "C", text: "Use primary-key chunking with the Bulk API" },
      { id: "D", text: "Use the Bulk API in parallel mode" }
    ],
    answers: ["C"],
    explanation: "Primary-key chunking divides a very large Bulk API query into smaller record-ID ranges that can be processed independently."
  },
  {
    prompt: "For security, Universal Containers must capture user actions such as login, logout, attachment download, and package installation. What is the recommended approach?",
    options: [
      { id: "A", text: "Field Audit Trail" },
      { id: "B", text: "A custom object and trigger" },
      { id: "C", text: "Event Monitoring" },
      { id: "D", text: "A third-party AppExchange app" }
    ],
    answers: ["C"],
    explanation: "Event Monitoring logs user events such as logins, downloads, and installations; Field Audit Trail tracks field-value changes."
  },
  {
    prompt: "Administrators receive Unable to lock row errors when updating user records, such as moving users to new territories. What can prevent the errors?",
    options: [
      { id: "A", text: "Update fewer users at a time" },
      { id: "B", text: "Enable granular locking" },
      { id: "C", text: "Analyze Splunk queries for the offending records" },
      { id: "D", text: "Increase the org's CPU" }
    ],
    answers: ["B"],
    explanation: "Granular locking lets Salesforce lock only the affected portions of group and role tables, reducing contention during simultaneous updates."
  },
  {
    prompt: "Each Account Plan must be related to an Account, but its access rules must differ from the Account's. What should the architect recommend?",
    options: [
      { id: "A", text: "Make Account Plan a detail record in a master-detail relationship with Account" },
      { id: "B", text: "Use master-detail with Account and add sharing rules" },
      { id: "C", text: "Use a lookup to Account with no validation rule" },
      { id: "D", text: "Use a lookup to Account with a validation rule requiring the Account" }
    ],
    answers: ["D"],
    explanation: "A lookup allows Account Plan to have its own sharing model, while a validation rule or required lookup enforces the relationship."
  },
  {
    prompt: "Universal Containers tracks shipment status on 200,000 Opportunities, and status has 10 possible values. What improves data quality and avoids data skew?",
    options: [
      { id: "A", text: "A picklist with values sorted alphabetically" },
      { id: "B", text: "A master-detail relationship to a ShippingStatus__c object" },
      { id: "C", text: "A lookup relationship to a ShippingStatus__c object" },
      { id: "D", text: "A text field marked as an External ID" }
    ],
    answers: ["A"],
    explanation: "A picklist constrains entries to approved values and avoids concentrating hundreds of thousands of records on a small number of status records."
  },
  {
    prompt: "Account has a roll-up summary field that counts Contacts. A data load fails with Unable to lock row errors. What should the architect do?",
    options: [
      { id: "A", text: "Use the Data Loader platform API" },
      { id: "B", text: "Run the batch in parallel mode with smaller batches" },
      { id: "C", text: "Run the batch in serial mode with smaller batches" },
      { id: "D", text: "Defer roll-up summary calculation during migration" }
    ],
    answers: ["C"],
    explanation: "Serial processing with smaller batches prevents parallel batches from trying to update the same parent Account's roll-up summary at once."
  },
  {
    prompt: "Universal Containers will use Salesforce to track customer complaints, provide product white papers, and offer fee-based support. Which license do users need?",
    options: [
      { id: "A", text: "Lightning Platform Starter" },
      { id: "B", text: "Service Cloud" },
      { id: "C", text: "Salesforce" },
      { id: "D", text: "Sales Cloud" }
    ],
    answers: ["B"],
    explanation: "Cases, Knowledge, and Entitlements or Service Contracts are Service Cloud capabilities."
  },
  {
    prompt: "Universal Containers is planning a large migration from a legacy CRM. Which three things optimize load performance?",
    options: [
      { id: "A", text: "Time zones of the user loading data" },
      { id: "B", text: "Remove custom indexes on the data being loaded" },
      { id: "C", text: "Whether the legacy system is still in use" },
      { id: "D", text: "Defer sharing calculations" },
      { id: "E", text: "Deactivate approval processes and workflow rules" }
    ],
    answers: ["B", "D", "E"],
    explanation: "Removing index upkeep, deferring sharing calculations, and deactivating automation reduce per-record work during a large load."
  },
  {
    prompt: "Sales managers want to explore data on mobile, drill down, and add ad-hoc filters while on the move. What is the recommended solution?",
    options: [
      { id: "A", text: "Use an external reporting tool and link to it from Salesforce" },
      { id: "B", text: "Embed an external reporting tool with the Canvas toolkit" },
      { id: "C", text: "Use a standard Salesforce dashboard tied to filtered reports" },
      { id: "D", text: "Use a CRM Analytics dashboard with ad-hoc lenses and drill-down" }
    ],
    answers: ["D"],
    explanation: "CRM Analytics supports interactive exploration with lenses, drill-down, and filters across devices; standard dashboards offer more limited exploration."
  },
  {
    prompt: "Universal Containers uses classic encryption on custom fields and makes weekly data exports for backup. The exports contain masked values. How can decrypted values be exported?",
    options: [
      { id: "A", text: "Give a standard profile for the migration user the View Encrypted Data permission" },
      { id: "B", text: "Copy encrypted values into another field and export that field" },
      { id: "C", text: "Decrypt the values with an Apex class before export" },
      { id: "D", text: "Give a custom profile for the migration user the View Encrypted Data permission" }
    ],
    answers: ["A"],
    explanation: "The supplied source marks A, but notes that standard profiles cannot be edited and its own explanation points to B. In practice, a custom profile with View Encrypted Data (D) is the usual answer; verify against the intended source."
  },
  {
    prompt: "The standard Product object cannot represent Universal Containers' hierarchical product structure. How can it support the hierarchy for synchronization from the product master?",
    options: [
      { id: "A", text: "Create a custom lookup on Product pointing to the child record" },
      { id: "B", text: "Create a custom lookup on Product pointing to the parent record" },
      { id: "C", text: "Create a custom master-detail relationship on Product pointing to the child record" },
      { id: "D", text: "Create an Apex trigger to synchronize the Product Family picklist" }
    ],
    answers: ["B"],
    explanation: "A self-lookup to the parent lets each product point up the hierarchy to any depth. A product can have many children, and standard objects cannot be the detail side of a master-detail relationship."
  },
  {
    prompt: "Universal Containers has billing, support, and CRM systems and a new MDM system that is the customer source of truth. Which MDM data element enables reporting across systems?",
    options: [
      { id: "A", text: "A global unique customer number" },
      { id: "B", text: "Email address" },
      { id: "C", text: "Phone number" },
      { id: "D", text: "Full name" }
    ],
    answers: ["A"],
    explanation: "A global unique ID links the same customer's records in every system; email, phone, and name can change or repeat."
  },
  {
    prompt: "Which three skinny-table traits improve performance?",
    options: [
      { id: "A", text: "Contain frequently used fields, avoiding joins" },
      { id: "B", text: "Allow custom indexes on multi-select picklists" },
      { id: "C", text: "Provide a view across multiple objects" },
      { id: "D", text: "Stay synchronized with changes in source tables" },
      { id: "E", text: "Exclude records that are in the Recycle Bin" }
    ],
    answers: ["A", "D", "E"],
    explanation: "A skinny table keeps frequently used fields from one object together, excludes soft-deleted records, and stays synchronized. It cannot span objects or index multi-select picklists."
  },
  {
    prompt: "Get Cloudy Consulting's reps have incomplete Contact data and interpret it inconsistently. The company has selected key fields. Which two actions help review completeness and consistency?",
    options: [
      { id: "A", text: "Report on when key fields were last updated" },
      { id: "B", text: "Create one report per key field, grouped by that field, to see how values vary" },
      { id: "C", text: "Report the percentage of blanks in important fields" },
      { id: "D", text: "Create a process that fills defaults into blank fields" }
    ],
    answers: ["A", "C"],
    explanation: "The supplied source marks A and C: update dates reveal stale data, and blank percentages measure completeness. It notes that grouping values in B directly measures consistency, so some guides select B and C."
  },
  {
    prompt: "A custom pricing engine evaluates state, then city, then ZIP code. Criteria should be changeable with minimal code changes. Where should they be stored?",
    options: [
      { id: "A", text: "A custom object" },
      { id: "B", text: "Hard-coded in the pricing engine" },
      { id: "C", text: "Custom metadata types" },
      { id: "D", text: "Price books" }
    ],
    answers: ["C"],
    explanation: "Custom metadata stores deployable configuration that code can read at run time, so criteria can change without editing the pricing engine."
  },
  {
    prompt: "Universal Containers wants to automatically archive inactive Accounts older than three years. Archived data does not need to remain accessible in Salesforce. Which two approaches work?",
    options: [
      { id: "A", text: "Export with Workbench" },
      { id: "B", text: "Schedule a weekly export from the Salesforce UI" },
      { id: "C", text: "Schedule export-and-delete jobs with an ETL tool" },
      { id: "D", text: "Schedule export-and-delete jobs with Data Loader command line" }
    ],
    answers: ["C", "D"],
    explanation: "An ETL tool or Data Loader command line can run scheduled, filtered export-and-delete jobs. Workbench is manual, and scheduled UI exports do not delete records."
  },
  {
    prompt: "Vehicle__c and Service_History__c are linked by a lookup. A weekly two-hour batch synchronization encounters record-locking errors. What avoids locking without hurting performance?",
    options: [
      { id: "A", text: "Use Bulk API parallel mode" },
      { id: "B", text: "Use Bulk API serial mode" },
      { id: "C", text: "Insert into a staging object, then move records with Batch Apex" },
      { id: "D", text: "Set the lookup to clear its value when the parent is deleted" }
    ],
    answers: ["B"],
    explanation: "Serial mode processes one batch at a time, so batches do not compete for locks on the same parent records. Sorting by parent ID before loading can also help."
  },
  {
    prompt: "Universal Containers' shipment data is on-premises in a system that is not OData-enabled, and there is no middleware. A custom app needs real-time access. Which Salesforce Connect approach fits?",
    options: [
      { id: "A", text: "Use an Apex REST callout to the external API" },
      { id: "B", text: "Use a process that calls an invocable web service" },
      { id: "C", text: "Migrate to Heroku and register Postgres as a data source" },
      { id: "D", text: "Build a custom adapter with the Apex Connector Framework" }
    ],
    answers: ["D"],
    explanation: "The Apex Connector Framework lets a custom Salesforce Connect adapter expose an external API as real-time external objects without OData or middleware."
  },
  {
    prompt: "Universal Containers' architecture team is building a data dictionary describing business entities across its systems. Which two common techniques can record how entities are defined?",
    options: [
      { id: "A", text: "SOQL" },
      { id: "B", text: "A data definition language (DDL)" },
      { id: "C", text: "An entity relationship diagram (ERD)" },
      { id: "D", text: "The Salesforce Metadata API" }
    ],
    answers: ["C", "D"],
    explanation: "The supplied source marks C and D: an ERD captures entities and relationships, and the Metadata API retrieves Salesforce definitions. It notes that a cross-system dictionary may instead use DDL and ERD (B and C)."
  },
  {
    prompt: "Several systems hold customer data and are connected point to point. Customers complain about inconsistent information. What should the architect recommend?",
    options: [
      { id: "A", text: "Improve the point-to-point integrations" },
      { id: "B", text: "Cleanse each system" },
      { id: "C", text: "Run a one-time synchronization to reset inconsistencies" },
      { id: "D", text: "Create an MDM customer master with centralized integrations" }
    ],
    answers: ["D"],
    explanation: "An MDM customer master provides an authoritative record and centralized integration, addressing the root cause rather than applying a one-time fix."
  },
  {
    prompt: "Universal Containers is running out of storage and wants to keep two years of data in Salesforce while archiving older data. What should the architect recommend?",
    options: [
      { id: "A", text: "Create a third-party backup of all data" },
      { id: "B", text: "Move all records off-platform and delete them all" },
      { id: "C", text: "Move records older than two years off-platform and delete them" },
      { id: "D", text: "Move all records off-platform and delete only old ones" }
    ],
    answers: ["C"],
    explanation: "Archiving and deleting only records older than two years frees storage while keeping the most recent two years in Salesforce."
  },
  {
    prompt: "Universal Containers wants to preserve original Created and Last Modified dates and retain ownership by inactive users during a migration. Which two settings should it enable?",
    options: [
      { id: "A", text: "Log a case with Salesforce to update the fields" },
      { id: "B", text: "Update Records with Inactive Owners" },
      { id: "C", text: "Set Audit Fields upon Record Creation" },
      { id: "D", text: "Grant Modify All and View All" }
    ],
    answers: ["B", "C"],
    explanation: "Set Audit Fields permits eligible audit dates to be supplied during record creation, and Update Records with Inactive Owners allows records to be owned by inactive users."
  },
  {
    prompt: "Northern Trail Outfitters stores retail customers as Person Accounts, commercial customers as Contacts, employees as Users, and prospects as Leads. It needs a standard way to manage communication preferences for all of them. What should it use?",
    options: [
      { id: "A", text: "Custom preference fields on Lead, Person Account, and User" },
      { id: "B", text: "Cases to validate preferences" },
      { id: "C", text: "A custom preferences object related to each record" },
      { id: "D", text: "The Individual object related to Lead, Person Account, and User" }
    ],
    answers: ["D"],
    explanation: "The standard Individual object manages privacy and contact preferences and can be associated with Leads, Contacts or Person Accounts, and Users."
  },
  {
    prompt: "Universal Containers loads third-party prospect CSVs into Leads and then syncs them to Marketing Cloud. Leads now consume too much storage. What avoids storage issues going forward?",
    options: [
      { id: "A", text: "Load CSVs into CRM Analytics and sync them to Marketing Cloud" },
      { id: "B", text: "Load CSVs into an external database and sync them to Marketing Cloud" },
      { id: "C", text: "Load prospects directly into Marketing Cloud and reconcile them when they convert" },
      { id: "D", text: "Keep the Lead process and delete Leads after syncing" }
    ],
    answers: ["C"],
    explanation: "Prospects that are only used for marketing can be loaded directly into Marketing Cloud, keeping them out of Sales Cloud storage until conversion."
  },
  {
    prompt: "Northern Trail Outfitters wants to virtualize and report on enterprise data warehouse data through Salesforce Connect, running thousands of reports daily across 10–15 external objects. What should the architect consider first?",
    options: [
      { id: "A", text: "Maximum records returned" },
      { id: "B", text: "OData callout limits" },
      { id: "C", text: "Maximum page size for server-driven paging" },
      { id: "D", text: "Maximum external objects per org" }
    ],
    answers: ["B"],
    explanation: "Reports on external objects make callouts to the external system, so OData callout limits could be reached with thousands of reports per day."
  },
  {
    prompt: "DreamHouse Realty's Project object is Private and has roll-up summaries for resources, hours, and work items. Large volumes of time entries are loaded regularly. What should the architect consider?",
    options: [
      { id: "A", text: "Load all data after deferring sharing calculations" },
      { id: "B", text: "Use workflow instead of roll-up summaries" },
      { id: "C", text: "Use triggers instead of roll-up summaries" },
      { id: "D", text: "Load using External IDs to link records to parents" }
    ],
    answers: ["A"],
    explanation: "Deferring sharing calculations avoids recalculating sharing on every insert and reduces locking; sharing can be recalculated once after the load. The source notes this is similar to Question 45."
  },
  {
    prompt: "Universal Containers' org has hundreds of validation rules and triggers that were not designed for data loads. It will import 100,000 records over a weekend. How can it avoid unwanted results?",
    options: [
      { id: "A", text: "Disable validation rules, triggers, and other automation during the load" },
      { id: "B", text: "Define duplicate and matching rules" },
      { id: "C", text: "Import in smaller batches over 24 hours" },
      { id: "D", text: "Bulkify the triggers" }
    ],
    answers: ["A"],
    explanation: "Temporarily disabling automation that was not designed for bulk loads can prevent errors and unwanted updates; re-enable it after the import."
  },
  {
    prompt: "Universal Containers is adding a B2C offering alongside its B2B business, which uses Accounts. It expects more than 50 million individual consumers across 50 regions and does not need household accounts. What data model is recommended?",
    options: [
      { id: "A", text: "Use Person Accounts with a new B2C page layout" },
      { id: "B", text: "Use Account with a new B2C record type" },
      { id: "C", text: "Add a B2C value to Account Type" },
      { id: "D", text: "Create 50 regional umbrella Accounts with consumers as Contacts" }
    ],
    answers: ["A"],
    explanation: "Person Accounts model individual consumers alongside business Accounts. Umbrella Accounts with millions of Contacts would create severe account data skew."
  },
  {
    prompt: "Northern Trail Outfitters has five million customers—households, businesses, and individuals—duplicated across many systems, with no consistent way to identify a customer. Which three actions address the problem?",
    options: [
      { id: "A", text: "Create a unique global customer ID and store it in every system" },
      { id: "B", text: "Use Salesforce Change Data Capture to synchronize customer data to all systems" },
      { id: "C", text: "Use a de-duplication tool to merge duplicates across systems" },
      { id: "D", text: "Copy customer records across systems with two-way synchronization" },
      { id: "E", text: "Use an external customer master database as the system of truth and synchronize it to all systems" }
    ],
    answers: ["A", "C", "E"],
    explanation: "A global ID identifies customers everywhere, de-duplication cleans existing records, and an external master helps maintain consistent data going forward."
  },
  {
    prompt: "Northern Trail Outfitters extracts 50 million records from one custom object every day and encounters query timeouts. What should the architect recommend?",
    options: [
      { id: "A", text: "Use an auto-number and formula field to chunk records during extraction" },
      { id: "B", text: "Use REST API, which chunks records into groups of 200" },
      { id: "C", text: "Use an ETL tool to extract the data" },
      { id: "D", text: "Ask Salesforce Support to increase the query timeout" }
    ],
    answers: ["C"],
    explanation: "The supplied source marks an ETL tool (C), but notes that chunking a huge query into smaller selective queries addresses the timeout and that many guides select A."
  },
  {
    prompt: "Which two classifications are available through Salesforce Data Classification?",
    options: [
      { id: "A", text: "Reference data policy" },
      { id: "B", text: "Data governance policy" },
      { id: "C", text: "Data sensitivity level" },
      { id: "D", text: "Compliance categorization" }
    ],
    answers: ["C", "D"],
    explanation: "Salesforce field classification metadata includes Data Sensitivity Level and Compliance Categorization, as well as other attributes such as Data Owner and Field Usage."
  },
  {
    prompt: "Sales Cloud is used for sales and the ERP is the customer master. Sales users report duplicate Accounts and poor data quality. Which two solutions help?",
    options: [
      { id: "A", text: "Run a nightly batch job to de-duplicate and merge Accounts" },
      { id: "B", text: "Integrate with the ERP and make it the system of truth" },
      { id: "C", text: "Run a nightly synchronization from the ERP to Salesforce" },
      { id: "D", text: "Use a de-duplication solution and define clear Account ownership in Salesforce" }
    ],
    answers: ["B", "D"],
    explanation: "Making the ERP the source of truth through integration improves consistency, while de-duplication and clear ownership help prevent and clean Salesforce duplicates."
  },
  {
    prompt: "Sales Orders live in an on-premises ERP, number more than 150 million, must be shown in Salesforce, and will not be updated there. What should the architect recommend?",
    options: [
      { id: "A", text: "Custom objects" },
      { id: "B", text: "Custom Big Objects" },
      { id: "C", text: "External objects" },
      { id: "D", text: "The standard Order object" }
    ],
    answers: ["C"],
    explanation: "External objects provide access to ERP data without copying more than 150 million read-only records into Salesforce storage."
  },
  {
    prompt: "Fifteen thousand servers report status every 10 minutes, reports are kept for five years, and managers need one week of detail in Salesforce. Which two limits should the architect consider?",
    options: [
      { id: "A", text: "Data storage limits" },
      { id: "B", text: "Workflow rule limits" },
      { id: "C", text: "API request limits" },
      { id: "D", text: "Web service callout limits" }
    ],
    answers: ["A", "C"],
    explanation: "The volume of incoming status records affects both API usage during ingestion and data storage for retained records."
  },
  {
    prompt: "Northern Trail Outfitters' pricing system is the trusted source for Opportunity Amount and updates it daily, overwriting sales reps' changes. Opportunity Forecasts use Amount. How should this be fixed?",
    options: [
      { id: "A", text: "Create a custom amount field that the pricing system updates, separate from the reps' field" },
      { id: "B", text: "Have the pricing system update Amount only when it is blank" },
      { id: "C", text: "Make Amount read-only for sales users with field-level security" },
      { id: "D", text: "Create a custom amount field that reps update, separate from the pricing-system field" }
    ],
    answers: ["C"],
    explanation: "Because the pricing system owns Amount and forecasts use that field, making it read-only to sales users prevents conflicting edits while preserving the trusted value."
  },
  {
    prompt: "Universal Containers loads large volumes of Leads weekly with validation rules disabled. How can it maintain data quality?",
    options: [
      { id: "A", text: "Re-activate validation rules after loading" },
      { id: "B", text: "Keep validation rules enabled during the load" },
      { id: "C", text: "Run a custom Apex batch to fix data quality after loading" },
      { id: "D", text: "Preprocess the Lead data for quality before loading" }
    ],
    answers: ["D"],
    explanation: "Preprocessing the data ensures poor-quality records are corrected before they enter Salesforce; reactivating validation rules does not validate records already loaded."
  },
  {
    prompt: "Which two approaches help a company avoid duplicate B2C customers?",
    options: [
      { id: "A", text: "Use Duplicate Management" },
      { id: "B", text: "Use an Enterprise Service Bus" },
      { id: "C", text: "Use Data.com Clean" },
      { id: "D", text: "Use a data warehouse" }
    ],
    answers: ["A", "C"],
    explanation: "Duplicate and matching rules can flag or block duplicate records, while Data.com Clean can compare records with reference data."
  },
  {
    prompt: "Universal Containers creates Leads with Apex jobs and wants failures reported to the business. What can Apex offer?",
    options: [
      { id: "A", text: "Store Leads in a custom object and report on unprocessed ones" },
      { id: "B", text: "Save Apex errors in a custom object the business can report on" },
      { id: "C", text: "Use Apex to email failures to the business when they happen" },
      { id: "D", text: "Install an AppExchange package to clean Leads first" }
    ],
    answers: ["C"],
    explanation: "The supplied source marks C for sending email notifications, but notes that its explanation describes logging errors to a reportable custom object (B), which better matches the reporting requirement and is selected by many guides."
  },
  {
    prompt: "Universal Containers wants its 100,000 mostly US Accounts continuously enriched and cleansed, with easy monitoring of data-quality metrics. What should it use?",
    options: [
      { id: "A", text: "Data.com Clean, configured declaratively" },
      { id: "B", text: "Batch Apex calling a third-party data-quality API" },
      { id: "C", text: "Data.com Prospector, configured declaratively" },
      { id: "D", text: "An Account trigger calling a third-party API" }
    ],
    answers: ["A"],
    explanation: "Data.com Clean is a declarative service for matching and enriching records and includes data-quality dashboards and reports; Prospector is for finding new prospects."
  },
  {
    prompt: "Universal Containers needs to export one million Contacts to a business intelligence system without timeouts. What should it use?",
    options: [
      { id: "A", text: "SOAP API" },
      { id: "B", text: "Bulk API" },
      { id: "C", text: "GZIP compression" },
      { id: "D", text: "A scheduled Batch Apex job" }
    ],
    answers: ["C"],
    explanation: "The supplied source marks GZIP compression (C), but notes that its own explanation supports Bulk API (B), the standard choice for exporting large data volumes without timeouts."
  },
  {
    prompt: "Many Accounts will be loaded at cutover without known owners. Which two ownership options reduce performance problems?",
    options: [
      { id: "A", text: "Assign them to a system user with no role" },
      { id: "B", text: "Assign them to a system user in the lowest role in the hierarchy" },
      { id: "C", text: "Assign them to the VP of Sales, who reports to the senior VP" },
      { id: "D", text: "Assign them to a system user in the highest role" }
    ],
    answers: ["A", "B"],
    explanation: "Keeping a high-volume owner outside the role hierarchy or at its bottom reduces ownership skew and the sharing recalculations that can flow up the hierarchy."
  },
  {
    prompt: "Accounts are stored in Salesforce and Invoices in an ERP exposed as an external object. Universal Containers wants to see both in one report in one place. Which two options fit?",
    options: [
      { id: "A", text: "Create a report in an external system that combines both sources" },
      { id: "B", text: "Create a Salesforce report combining Account and the Invoice external object" },
      { id: "C", text: "Build a Visualforce page combining Account and Invoice external-object data" },
      { id: "D", text: "Create separate Salesforce reports and combine them in a dashboard" }
    ],
    answers: ["A", "C"],
    explanation: "Standard Salesforce report types do not easily join a standard object with an external object; an external reporting system or a custom page can combine the data."
  },
  {
    prompt: "A phased Salesforce rollout has three deployments over a year and well-documented requirements. Which two methods help trace configuration back to requirements?",
    options: [
      { id: "A", text: "Review the Setup Audit Trail" },
      { id: "B", text: "Put the business purpose in each field's Description" },
      { id: "C", text: "Maintain a data dictionary with each field's justification" },
      { id: "D", text: "Store metadata in source control through the IDE" }
    ],
    answers: ["B", "D"],
    explanation: "The supplied source marks field descriptions and source control (B and D), but notes that a data dictionary (C) serves a similar purpose and that some guides select C and D."
  },
  {
    prompt: "A call center receives 10 million calls and creates 100 million Cases per month, linked by lookup to a custom Call object. Universal Containers wants reports and dashboards on Case types per call. What should the architect recommend?",
    options: [
      { id: "A", text: "Archive data to a warehouse and analyze it there" },
      { id: "B", text: "Use Big Objects for archiving and CRM Analytics for reporting" },
      { id: "C", text: "Create custom objects to store aggregated data" },
      { id: "D", text: "Use standard reports on Case and the IVR custom object" }
    ],
    answers: ["B"],
    explanation: "Big Objects support very large data volumes, and CRM Analytics can analyze the data at scale; standard reports are not suited to this volume."
  },
  {
    prompt: "Universal Containers has frequent group-membership locking that blocks manual and automated updates running at the same time. What can fix it?",
    options: [
      { id: "A", text: "Enable granular locking" },
      { id: "B", text: "Enable parallel sharing-rule calculation" },
      { id: "C", text: "Enable deferred sharing calculation" },
      { id: "D", text: "Enable implicit sharing" }
    ],
    answers: ["A"],
    explanation: "Granular locking limits locks to the affected parts of group tables, allowing more concurrent group-membership and sharing operations."
  },
  {
    prompt: "Northern Trail Outfitters has 1,000 franchisees who need a portal to view product information, track large customer sales and Opportunities, and run sales reports and dashboards. Which license should they use?",
    options: [
      { id: "A", text: "Sales Cloud" },
      { id: "B", text: "Lightning Platform" },
      { id: "C", text: "Customer Community" },
      { id: "D", text: "Partner Community" }
    ],
    answers: ["D"],
    explanation: "Partner Community supports external users working with sales records, Opportunities, reports, and dashboards; Customer Community does not provide Opportunity access."
  },
  {
    prompt: "Universal Containers has outgrown native reports and dashboards in a multi-system ERP environment. Which two approaches provide deeper analytics?",
    options: [
      { id: "A", text: "AppExchange analytics applications" },
      { id: "B", text: "Wave Analytics (CRM Analytics)" },
      { id: "C", text: "Weekly snapshots" },
      { id: "D", text: "Setup Audit Trail" }
    ],
    answers: ["A", "B"],
    explanation: "CRM Analytics and AppExchange business-intelligence applications can provide advanced analysis across data sources; snapshots only capture trends and the audit trail tracks configuration changes."
  },
  {
    prompt: "Northern Trail Outfitters is evaluating Big Objects for large volumes of asset data and needs weekly reports. Which two native tools can be used?",
    options: [
      { id: "A", text: "Standard reports and dashboards" },
      { id: "B", text: "Async SOQL to write results into a custom object" },
      { id: "C", text: "Standard SOQL queries" },
      { id: "D", text: "Einstein Analytics" }
    ],
    answers: ["B", "D"],
    explanation: "The supplied source marks Async SOQL and Einstein Analytics; standard reports do not support Big Objects. Note that Async SOQL has since been retired."
  },
  {
    prompt: "Universal Containers is migrating Account data from two aging systems. Which two design considerations minimize duplication?",
    options: [
      { id: "A", text: "Create a workflow to check for and prevent duplicates" },
      { id: "B", text: "Clean the data before importing it" },
      { id: "C", text: "Use Salesforce Matching Rules and Duplicate Rules" },
      { id: "D", text: "Import the data concurrently" }
    ],
    answers: ["B", "C"],
    explanation: "Cleaning data before import removes existing duplicates, while Matching Rules and Duplicate Rules help prevent new ones."
  },
  {
    prompt: "Two million Opportunities will be loaded in batches with the Bulk API in parallel mode. What should the architect consider?",
    options: [
      { id: "A", text: "Sort batches by Name" },
      { id: "B", text: "Order batches by an auto-number field" },
      { id: "C", text: "Index Opportunity text fields" },
      { id: "D", text: "Group batches by AccountId" }
    ],
    answers: ["D"],
    explanation: "Opportunity inserts can lock their parent Accounts. Grouping records by AccountId keeps records for the same parent together and reduces cross-batch lock contention."
  },
  {
    prompt: "Smart containers send temperature and humidity readings every 10 minutes. There are 10,000 containers now and up to 50,000 within five years. Users need current and historical readings per container. What is recommended?",
    options: [
      { id: "A", text: "Store temperature and humidity on Container and overwrite them with each reading" },
      { id: "B", text: "Create a Container Reading child record for every reading" },
      { id: "C", text: "Show the latest reading in Lightning and keep history in a data warehouse" },
      { id: "D", text: "Create a Container Reading child record for every reading and archive hourly" }
    ],
    answers: ["D"],
    explanation: "A child record preserves reading history, while an archiving process controls volume; 50,000 containers at 144 readings per day would otherwise create more than seven million records daily."
  },
  {
    prompt: "A customer often upserts Contacts with Data Loader to avoid duplicates. What common error should the architect watch for?",
    options: [
      { id: "A", text: "Duplicate External ID values in the same CSV file" },
      { id: "B", text: "Inserts and updates in the same file" },
      { id: "C", text: "Duplicate Contact names causing failure" },
      { id: "D", text: "Using the wrong External ID causing failure" }
    ],
    answers: ["A"],
    explanation: "If the same External ID appears more than once in an upsert file, Salesforce cannot determine which row to apply and those rows fail."
  },
  {
    prompt: "What two outcomes does enterprise data governance improve?",
    options: [
      { id: "A", text: "Data integrity" },
      { id: "B", text: "Data distribution" },
      { id: "C", text: "Data usability" },
      { id: "D", text: "Data modeling" }
    ],
    answers: ["A", "C"],
    explanation: "Data governance improves accuracy and consistency (integrity) and makes data easier to find, understand, and use (usability)."
  },
  {
    prompt: "Which two approaches help maintain Contact data quality?",
    options: [
      { id: "A", text: "Use a private sharing model" },
      { id: "B", text: "Use Salesforce Duplicate Management" },
      { id: "C", text: "Use validation rules on create and edit" },
      { id: "D", text: "Use workflow to delete duplicates" }
    ],
    answers: ["B", "C"],
    explanation: "Duplicate Management prevents or flags duplicate Contacts, and validation rules enforce correct values during entry."
  },
  {
    prompt: "Universal Containers loads 500,000 Leads and 10,000 Campaigns each week. Leads are shared by sharing rules and added to Campaigns by triggers. Agents work Leads for six months, records are kept for one year for reference, and compliance requires three years of retention. Which statement is true?",
    options: [
      { id: "A", text: "Use Salesforce Backup and Recovery as the archive" },
      { id: "B", text: "Custom storage objects avoid counting against storage limits" },
      { id: "C", text: "The Recycle Bin guarantees records are stored for 15 days after deletion" },
      { id: "D", text: "Use a tier-based approach to classify storage needs" }
    ],
    answers: ["D"],
    explanation: "A tiered approach can store active, reference, and compliance-only data according to its usage and retention needs; backup and custom objects are not substitutes for archiving."
  },
  {
    prompt: "A company will categorize 500,000 customers as Gold, Silver, or Bronze, distributed evenly, as they buy a support service. About 1% buy each month for five years. What ensures long-term performance?",
    options: [
      { id: "A", text: "Use a global picklist with the three values on Account" },
      { id: "B", text: "Use a picklist field on Account with the three values" },
      { id: "C", text: "Create a Categories object with a master-detail relationship from Account" },
      { id: "D", text: "Create a Categories object with a lookup relationship from Account" }
    ],
    answers: ["B"],
    explanation: "A picklist avoids lookup skew that would result from hundreds of thousands of Accounts relating to only three category records. A global picklist adds no benefit if only one object uses it."
  },
  {
    prompt: "Two systems' customer records will be integrated into Account using MDM. How should the architect decide the system of record for each field?",
    options: [
      { id: "A", text: "MDM decides it, so the architect does not need to consider it" },
      { id: "B", text: "Have key stakeholders review fields with the same purpose across systems and how they will be used" },
      { id: "C", text: "Review schemas; differently named fields must always become separate fields" },
      { id: "D", text: "Let the last load overwrite fields, without assigning a system of record" }
    ],
    answers: ["B"],
    explanation: "Field-level ownership is a business decision that stakeholders must agree on; MDM enforces the resulting rules."
  },
  {
    prompt: "Universal Containers needs to track history on 100 Opportunity fields. Which two solutions should it consider?",
    options: [
      { id: "A", text: "Create a custom object that stores a copy of the record when it changes" },
      { id: "B", text: "Create a custom object that stores previous and new field values" },
      { id: "C", text: "Use Analytic Snapshots of the record when it changes" },
      { id: "D", text: "Select all 100 fields in Opportunity history tracking" }
    ],
    answers: ["A", "B"],
    explanation: "Standard field history tracking supports fewer fields than required here, so a custom history solution is needed; snapshots run on a schedule rather than on each change."
  },
  {
    prompt: "Northern Trail Outfitters wants a consent form recording customer authorization for marketing. What should the architect recommend?",
    options: [
      { id: "A", text: "Use custom fields" },
      { id: "B", text: "Create a custom object" },
      { id: "C", text: "Use the Authorization Form Consent object" },
      { id: "D", text: "Use an AppExchange solution" }
    ],
    answers: ["C"],
    explanation: "Authorization Form Consent is the standard object for recording consent, including details such as capture date, source, and status."
  },
  {
    prompt: "Customers are called by several reps who do not know about one another's calls. What data-quality problem could cause this?",
    options: [
      { id: "A", text: "Missing phone numbers on Contacts" },
      { id: "B", text: "Changed phone numbers on Contacts" },
      { id: "C", text: "Duplicate Contact records" },
      { id: "D", text: "Duplicate Activity records on a Contact" }
    ],
    answers: ["C"],
    explanation: "If one customer exists as multiple Contact records, reps may log calls on separate records and not see one another's activity."
  },
  {
    prompt: "Which standard Salesforce feature should a large B2C retailer use for its consumer account structure?",
    options: [
      { id: "A", text: "Individual Accounts" },
      { id: "B", text: "Account Contact" },
      { id: "C", text: "Contacts" },
      { id: "D", text: "Person Accounts" }
    ],
    answers: ["D"],
    explanation: "Person Accounts combine Account and Contact fields in a record for an individual consumer and are the standard Salesforce B2C model."
  },
  {
    prompt: "Universal Containers creates five million Cases a year. Two years must remain in Salesforce for reporting, while Cases from two to seven years old must be available to agents on demand. Which two archiving strategies fit?",
    options: [
      { id: "A", text: "Move older Cases to custom objects with a nightly batch" },
      { id: "B", text: "Synchronize older Cases to an external database and give agents access to it" },
      { id: "C", text: "Move older Cases to Big Objects with a nightly batch" },
      { id: "D", text: "Use Heroku and external objects to show older Cases, and hard-delete them from Salesforce with Bulk API" }
    ],
    answers: ["C", "D"],
    explanation: "Big Objects or an external database surfaced through external objects can keep older Cases accessible from Salesforce without using standard data storage."
  }
];
