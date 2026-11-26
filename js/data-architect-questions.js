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

window.dataArchitectPart3Questions = [
  {
    prompt: "An automaker must track local dealers, regional distributors, state distributors and service dealers. Each type has its own attributes, users should only enter that type's attributes, and processes may differ. How should dealers be stored?",
    options: [
      { id: "A", text: "Accounts, with a record type per dealer type" },
      { id: "B", text: "Accounts, with custom list views per dealer type" },
      { id: "C", text: "Accounts, with a custom picklist for dealer type" },
      { id: "D", text: "A custom object per dealer type" }
    ],
    answers: ["A"],
    explanation: "Record types give each dealer type its own page layout, picklist values and business process on one object. Views and picklists don't change which fields users see."
  },
  {
    prompt: "What data quality problem could cause this?",
    options: [
      { id: "A", text: "Missing phone numbers on Contacts" },
      { id: "B", text: "Changed phone numbers on Contacts" },
      { id: "C", text: "Duplicate Contact records" },
      { id: "D", text: "Duplicate Activity records on a Contact" }
    ],
    answers: ["C"],
    explanation: "If one customer exists as two Contacts, each rep logs calls on a different record and can't see the other's activity."
  },
  {
    prompt: "Advantage of custom metadata types over custom settings",
    options: [
      { id: "A", text: "Custom metadata records aren't copied from production to sandbox" },
      { id: "B", text: "Custom metadata types are available for reporting" },
      { id: "C", text: "Custom metadata records can be deployed in packages" },
      { id: "D", text: "Custom metadata records are editable in Apex" }
    ],
    answers: ["C"],
    explanation: "Custom metadata records are metadata, so they deploy with change sets and packages. Custom settings data has to be loaded separately in each org."
  },
  {
    prompt: "Cloud Kicks sends Invoice records to Accounting with missing States and badly formatted Postal Codes. Which two actions improve quality?",
    options: [
      { id: "A", text: "Make address fields required on the page layout" },
      { id: "B", text: "An Apex trigger requiring all fields" },
      { id: "C", text: "A validation rule using REGEX on Postal Code" },
      { id: "D", text: "A validation rule using CONTAINS on address fields" }
    ],
    answers: ["C", "D"],
    explanation: "REGEX enforces the postal code format, and a validation rule on address fields can check for valid States. Page-layout requirements only apply in the UI, not to integrations."
  },
  {
    prompt: "UC is migrating from a legacy system and worries about the quality of data entered by users and integrations.",
    options: [
      { id: "A", text: "Use picklists and lookups where possible" },
      { id: "B", text: "Apex to validate formats entered on mobile" },
      { id: "C", text: "Validation rules and workflows" },
      { id: "D", text: "Third-party AppExchange tools" }
    ],
    answers: ["A", "C"],
    explanation: "Picklists and lookups limit entries to valid values, and validation rules enforce format and completeness for every entry channel, with no code."
  },
  {
    prompt: "Speeding up a large migration (choose 3)",
    options: [
      { id: "A", text: "Time zones of the loading user" },
      { id: "B", text: "Remove custom indexes on the data being loaded" },
      { id: "C", text: "Whether the legacy system is still in use" },
      { id: "D", text: "Defer sharing calculations" },
      { id: "E", text: "Deactivate approval processes and workflow rules" }
    ],
    answers: ["B", "D", "E"],
    explanation: "Each removes per-record work during the load: index upkeep, sharing recalculation and automation."
  },
  {
    prompt: "License for complaints, white papers and paid support",
    options: [
      { id: "A", text: "Lightning Platform Starter" },
      { id: "B", text: "Service Cloud" },
      { id: "C", text: "Salesforce" },
      { id: "D", text: "Sales Cloud" }
    ],
    answers: ["B"],
    explanation: "Cases, Knowledge and Entitlements (paid support) are Service Cloud features."
  },
  {
    prompt: "Loading 1 million B2C consumers",
    options: [
      { id: "A", text: "A custom Individual_Consumer__c object" },
      { id: "B", text: "Accounts only, no Contacts" },
      { id: "C", text: "One Account and one Contact per consumer" },
      { id: "D", text: "One Account with all consumers as Contacts" }
    ],
    answers: ["D"],
    explanation: "The site says this avoids unnecessary Accounts. Caution: a million Contacts under one Account causes account data skew, so many guides pick C (or Person Accounts). Check this one."
  },
  {
    prompt: "Reports timing out (choose 2)",
    options: [
      { id: "A", text: "Index key fields used in report filters" },
      { id: "B", text: "Enable Divisions" },
      { id: "C", text: "One skinny table per report" },
      { id: "D", text: "Share reports with fewer users" }
    ],
    answers: ["A", "C"],
    explanation: "Indexed filter fields make queries selective, and skinny tables cut joins. Sharing doesn't change speed."
  },
  {
    prompt: "UC has over 10,000 Accounts with near-duplicate names and addresses. What ensures data quality?",
    options: [
      { id: "A", text: "Standardize addresses with a service, then merge with a third-party tool by rules" },
      { id: "B", text: "Report on Accounts with the same first five characters and merge them" },
      { id: "C", text: "Create matching rules in Salesforce, which mass-merge duplicate Accounts" },
      { id: "D", text: "Have owners clean addresses, then merge same-address Accounts" }
    ],
    answers: ["C"],
    explanation: "Matching rules find near-duplicates. Caution: Salesforce matching and duplicate rules identify and alert but don't mass-merge, and near-duplicates need standardizing first, so many guides pick A. Check this one."
  },
  {
    prompt: "An audit found that some standard and custom fields holding health records must be encrypted. What should the architect recommend?",
    options: [
      { id: "A", text: "Apex Crypto class" },
      { id: "B", text: "Classic encryption" },
      { id: "C", text: "Shield Platform Encryption" },
      { id: "D", text: "Export the data and encrypt it outside Salesforce" }
    ],
    answers: ["C"],
    explanation: "Shield Platform Encryption encrypts data at rest on many standard and custom fields while keeping features working. Classic encryption only covers special custom text fields."
  },
  {
    prompt: "UC built a custom Projects__c object for project details and billable hours. Some finance users need to report on it and adjust utilization, but won't use any sales objects.",
    options: [
      { id: "A", text: "Service Cloud" },
      { id: "B", text: "Sales Cloud" },
      { id: "C", text: "Lightning Platform Starter" },
      { id: "D", text: "Lightning Platform Plus" }
    ],
    answers: ["D"],
    explanation: "Platform licenses cover custom objects, reports and dashboards without CRM objects, and Plus allows more custom objects than Starter. Sales or Service Cloud would pay for objects they won't use."
  },
  {
    prompt: "Discount Request is the detail in a master-detail with a custom Product. UC now needs generic discount requests with no Product.",
    options: [
      { id: "A", text: "Require a Product on every request" },
      { id: "B", text: "Create a placeholder Product for generic requests" },
      { id: "C", text: "Remove the relationship entirely" },
      { id: "D", text: "Change master-detail to a lookup" }
    ],
    answers: ["D"],
    explanation: "A detail record must always have a master. A lookup can be left blank, so generic requests are allowed while specific ones still link to a Product."
  },
  {
    prompt: "Regulations require access based on record ownership, letting customers request removal of their data, and blocking access from outside the company network (VPN). What should the architect recommend?",
    options: [
      { id: "A", text: "Ask Salesforce Support to restrict access to the VPN" },
      { id: "B", text: "A custom web app inside the VPN" },
      { id: "C", text: "IP restrictions, sharing settings, and custom Apex for removal requests" },
      { id: "D", text: "Shield with Event Monitoring" }
    ],
    answers: ["C"],
    explanation: "Login IP ranges limit access to the company network, a private sharing model gives ownership-based access, and custom logic handles deletion requests. Shield doesn't restrict access."
  },
  {
    prompt: "Legacy B2C customers are stored as accounts and contacts. Which object model should be configured?",
    options: [
      { id: "A", text: "Person Accounts" },
      { id: "B", text: "A custom person account object" },
      { id: "C", text: "Custom account and contact objects" },
      { id: "D", text: "Standard Account and Contact" }
    ],
    answers: ["A"],
    explanation: "Person Accounts are the standard model for individual consumers, combining Account and Contact in one record."
  },
  {
    prompt: "NTO's contact data is 10 years old and returned mail has risen to 35%. What reduces it?",
    options: [
      { id: "A", text: "Use a third-party data source to update contact information" },
      { id: "B", text: "Email customers asking them to verify their address" },
      { id: "C", text: "Delete contacts when mail is returned" },
      { id: "D", text: "Have sales call every customer to verify details" }
    ],
    answers: ["A"],
    explanation: "A third-party data source updates addresses automatically and at scale. The other options are manual or lose data."
  },
  {
    prompt: "15,000 servers report every 10 minutes, kept 5 years; managers need one week in Salesforce.",
    options: [
      { id: "A", text: "Data storage limits" },
      { id: "B", text: "Workflow rule limits" },
      { id: "C", text: "API request limits" },
      { id: "D", text: "Web service callout limits" }
    ],
    answers: ["A", "C"],
    explanation: "About 2 million records a week use API calls to load and data storage to keep."
  },
  {
    prompt: "UC's homegrown CRM has many duplicate customers. How should the migration handle this?",
    options: [
      { id: "A", text: "Have an intern de-dupe after migration" },
      { id: "B", text: "Migrate as-is, then use Salesforce de-duplication" },
      { id: "C", text: "Have users clean the old system first" },
      { id: "D", text: "Load into a staging database and de-duplicate there" }
    ],
    answers: ["D"],
    explanation: "De-duplicating in staging means only clean data reaches Salesforce, using automated rules instead of manual work."
  },
  {
    prompt: "What makes skinny tables fast (choose 3)",
    options: [
      { id: "A", text: "They exclude soft-deleted records" },
      { id: "B", text: "They avoid resource-heavy joins" },
      { id: "C", text: "They stay in sync with source tables automatically" },
      { id: "D", text: "They can include fields from other objects" },
      { id: "E", text: "They support up to 100 columns" }
    ],
    answers: ["A", "B", "C"],
    explanation: "One object's key fields in a single table, no soft-deleted rows, kept in sync by Salesforce. They can't span objects."
  },
  {
    prompt: "Org B will have a very different data model, and 3 million records must move from Org A within two months.",
    options: [
      { id: "A", text: "An ETL tool to orchestrate the migration" },
      { id: "B", text: "Data Loader export plus Data Import Wizard" },
      { id: "C", text: "A Bulk API script" },
      { id: "D", text: "Salesforce CLI" }
    ],
    answers: ["A"],
    explanation: "ETL tools handle mapping and transformation to a new model at high volume with little custom code."
  },
  {
    prompt: "UC has several million US business Accounts with many wrong addresses or defunct businesses.",
    options: [
      { id: "A", text: "Ask each business to update its address" },
      { id: "B", text: "A team that checks Accounts by web search and phone" },
      { id: "C", text: "Integrate a third-party address validation and enrichment service" },
      { id: "D", text: "Data.com Clean with the D&B database" }
    ],
    answers: ["C", "D"],
    explanation: "Both check records against a trusted outside source automatically, so they scale to millions."
  },
  {
    prompt: "The head of sales wants key performance figures so managers can take corrective action. Which reporting option fits?",
    options: [
      { id: "A", text: "Case SLA performance report" },
      { id: "B", text: "Sales KPI dashboard" },
      { id: "C", text: "Opportunity analytic snapshot" },
      { id: "D", text: "Lead conversion rate report" }
    ],
    answers: ["B"],
    explanation: "A KPI dashboard shows the key sales metrics together at a glance. The other options cover one narrow metric or service data."
  },
  {
    prompt: "Reps create duplicate Accounts, Contacts and Leads. UC wants to warn users immediately and report on duplicates.",
    options: [
      { id: "A", text: "After-insert/update triggers with custom matching" },
      { id: "B", text: "Duplicate rules with standard matching rules, action Report and Alert on create and edit" },
      { id: "C", text: "Duplicate rules with standard matching rules, action Block" },
      { id: "D", text: "Before-insert/update triggers with custom matching" }
    ],
    answers: ["B"],
    explanation: "\"Alert\" prompts users about possible duplicates, and \"Report\" logs them in Duplicate Record Sets for reporting. It's declarative, so it can start right away. Block wouldn't produce the report."
  },
  {
    prompt: "Extracting 100 million records for an EDW",
    options: [
      { id: "A", text: "A third-party AppExchange tool" },
      { id: "B", text: "Successive REST API queries" },
      { id: "C", text: "PK Chunking with the Bulk API" },
      { id: "D", text: "Bulk API in parallel mode" }
    ],
    answers: ["C"],
    explanation: "PK Chunking splits the huge query into ID ranges processed as separate Bulk API batches, avoiding timeouts."
  },
  {
    prompt: "NTO's loyalty program tracks every item bought (100 million records a month), with levels based on the last 12 months of spending. Support wants a summary of recent transactions and reward levels in Salesforce.",
    options: [
      { id: "A", text: "A custom object loaded nightly from POS" },
      { id: "B", text: "External data store, shown via Salesforce Connect external objects" },
      { id: "C", text: "A button opening the POS system" },
      { id: "D", text: "A custom big object loaded nightly, shown on the Contact" }
    ],
    answers: ["D"],
    explanation: "Big objects are built for this volume on-platform and can be shown on records with custom components. A custom object can't hold 100 million records a month."
  },
  {
    prompt: "Archive to remove old data and improve performance",
    options: [
      { id: "A", text: "Archive location plus scheduled nightly batch jobs to move and purge aged data" },
      { id: "B", text: "Archive location plus time-based workflow" },
      { id: "C", text: "A formula flag plus report export to SharePoint" },
      { id: "D", text: "A Full Copy sandbox as the archive" }
    ],
    answers: ["A"],
    explanation: "Batch jobs can move and then delete aged data in bulk. Workflow can't move data out, and an export doesn't purge."
  },
  {
    prompt: "NTO backs up weekly to an EDW and wants daily backups with restore capability.",
    options: [
      { id: "A", text: "An AppExchange backup and restore package" },
      { id: "B", text: "ETL backup and restore from the EDW" },
      { id: "C", text: "Bulk API daily extract plus REST API restore" },
      { id: "D", text: "Switch to daily backups and build a custom restore" }
    ],
    answers: ["A"],
    explanation: "Backup packages handle daily backups and, more importantly, restoring with relationships intact. Custom restore logic is hard to get right."
  },
  {
    prompt: "Minimizing duplicates when merging two legacy systems (choose 2)",
    options: [
      { id: "A", text: "A workflow to check and prevent duplicates" },
      { id: "B", text: "Clean data before importing" },
      { id: "C", text: "Salesforce matching and duplicate rules" },
      { id: "D", text: "Import the data concurrently" }
    ],
    answers: ["B", "C"],
    explanation: "Cleaning before import removes existing duplicates, and matching and duplicate rules stop new ones. Workflow can't detect duplicates."
  },
  {
    prompt: "Retrieving org metadata for backup",
    options: [
      { id: "A", text: "Metadata API" },
      { id: "B", text: "Tooling API" },
      { id: "C", text: "Bulk API in serial mode" },
      { id: "D", text: "SOAP API" }
    ],
    answers: ["A"],
    explanation: "The Metadata API retrieves and deploys an org's configuration (objects, fields, code, layouts). The other APIs work with data or single dev components."
  },
  {
    prompt: "A telecom creates a household as an Account with household members as Contacts, and businesses as Accounts. Some people have both home and business services. How do you get one view of each person without duplicate records?",
    options: [
      { id: "A", text: "Contacts related to both business and residential Accounts with Account Contact Relationships" },
      { id: "B", text: "Person Accounts related with Account Contact Relationships" },
      { id: "C", text: "Individual objects related to Accounts" },
      { id: "D", text: "Residence Accounts with Parent Account pointing to the business" }
    ],
    answers: ["A"],
    explanation: "Contacts to Multiple Accounts lets one Contact relate to many Accounts, so the person exists once but appears under both home and business."
  },
  {
    prompt: "UC uses classic encryption on custom fields and weekly exports as backup; exports show encrypted values. How can decrypted values be exported?",
    options: [
      { id: "A", text: "Give a standard profile for the migration user View Encrypted Data" },
      { id: "B", text: "Copy encrypted values into another field and export that" },
      { id: "C", text: "Decrypt with Apex before exporting" },
      { id: "D", text: "Give a custom profile for the migration user View Encrypted Data" }
    ],
    answers: ["B"],
    explanation: "The site says classic encryption won't export decrypted values, so copy them to a plain field. Caution: copying defeats the encryption, and a user with View Encrypted Data (on a custom profile, D) sees unmasked values. The same question in Part 2 was marked A. Many guides pick D. Check this one."
  },
  {
    prompt: "UC uses MDM with a central system of truth, customer data must be accurate everywhere at all times, and Salesforce is the system of record.",
    options: [
      { id: "A", text: "Nightly batch to the system of truth" },
      { id: "B", text: "Nightly batch from Salesforce to each system" },
      { id: "C", text: "Real-time changes from Salesforce to the system of truth" },
      { id: "D", text: "Each system subscribes to Salesforce Change Data Capture" }
    ],
    answers: ["D"],
    explanation: "Change Data Capture publishes every change in near real time, and each system subscribes to it, so all stay current. Nightly batches aren't \"at all times.\""
  },
  {
    prompt: "Ensuring Leads have company profile and location data",
    options: [
      { id: "A", text: "Salespeople look it up" },
      { id: "B", text: "Reports on missing data" },
      { id: "C", text: "External data providers fill it in" },
      { id: "D", text: "Export for another team to fill in" }
    ],
    answers: ["C"],
    explanation: "Data providers enrich records automatically and at scale."
  },
  {
    prompt: "A health care provider tracks payment providers (organizations that pay), doctors (who build care plans for many patients and need patient access) and patients (individuals).",
    options: [
      { id: "A", text: "Patients as Contacts, payers as Accounts, doctors as Accounts" },
      { id: "B", text: "Patients as Person Accounts, payers as Accounts, doctors as Contacts" },
      { id: "C", text: "Patients as Person Accounts, payers as Accounts, doctors as Person Accounts" },
      { id: "D", text: "Patients as Accounts, payers as Accounts, doctors as Person Accounts" }
    ],
    answers: ["C"],
    explanation: "Payers are organizations (business Accounts). Patients and doctors are individuals in their own right, not employees of a payer, so both fit Person Accounts."
  },
  {
    prompt: "The query `SELECT Id, Description, Subject FROM Task WHERE WhatId != NULL` times out.",
    options: [
      { id: "A", text: "Remove Description from the fields" },
      { id: "B", text: "Use SOSL" },
      { id: "C", text: "Add LIMIT 100" },
      { id: "D", text: "Filter on a specific, defined value" }
    ],
    answers: ["D"],
    explanation: "Filters on NULL (or not NULL) usually can't use an index, causing a full scan. Filtering on a specific value makes the query selective."
  },
  {
    prompt: "Users need current and historical temperature and humidity for each container.",
    options: [
      { id: "A", text: "Fields on Container, overwritten with each reading" },
      { id: "B", text: "A Container Reading object (master-detail to Container) per reading" },
      { id: "C", text: "A Lightning component showing the latest reading plus warehouse history" },
      { id: "D", text: "A Container Reading object (master-detail to Container) per reading, plus an hourly archiving process" }
    ],
    answers: ["D"],
    explanation: "A child object keeps history, and archiving controls volume (50,000 containers \u00d7 144 readings a day is over 7 million records daily). A loses history and B grows without limit."
  },
  {
    prompt: "Members of an enterprise data governance council (choose 2)",
    options: [
      { id: "A", text: "Analytics/BI Owners" },
      { id: "B", text: "Data Domain Stewards" },
      { id: "C", text: "Salesforce Administrators" },
      { id: "D", text: "Operational Data Users" }
    ],
    answers: ["A", "B"],
    explanation: "BI owners define reporting needs and metrics; domain stewards set and enforce quality rules for their domains. Admins and everyday users carry out decisions rather than make them."
  },
  {
    prompt: "Data quality for web forms creating Leads via REST (choose 2)",
    options: [
      { id: "A", text: "Client-side validation of phone and email formats" },
      { id: "B", text: "Picklists instead of free text where possible" },
      { id: "C", text: "Make sure visitors use HTTPS" },
      { id: "D", text: "Cookies to track multiple submissions" }
    ],
    answers: ["A", "B"],
    explanation: "Format checks and fixed choices stop bad values before they reach Salesforce. HTTPS is about security, not quality."
  },
  {
    prompt: "MDM says Salesforce is the system of record for Account, Contact and Opportunity, but a new Opportunity engagement system holds valuable data that may conflict.",
    options: [
      { id: "A", text: "Salesforce always wins, per the MDM strategy" },
      { id: "B", text: "The most recently updated record wins" },
      { id: "C", text: "Make the new system the record for Opportunities" },
      { id: "D", text: "Bring stakeholders together to agree the data strategy going forward" }
    ],
    answers: ["D"],
    explanation: "New valuable data may change which system should own which fields. That's a business decision, so stakeholders must revisit the strategy rather than apply a blanket rule."
  },
  {
    prompt: "Informatica export of 40 million Accounts failing on a full table scan",
    options: [
      { id: "A", text: "Header for export in parallel" },
      { id: "B", text: "Header Sforce-Enable-PKChunking" },
      { id: "C", text: "Add standard indexed fields to the query" },
      { id: "D", text: "LIMIT with a batch size of 10,000" }
    ],
    answers: ["B"],
    explanation: "The PK Chunking header makes the Bulk API split the extract into ID ranges, so no single query scans the whole table."
  },
  {
    prompt: "Same scenario as Q81, with the choices in a different order.",
    options: [
      { id: "A", text: "Keep a data dictionary with each field's justification" },
      { id: "B", text: "Review the Setup Audit Trail" },
      { id: "C", text: "Put the business purpose in each field's Description" },
      { id: "D", text: "Store metadata in source control" }
    ],
    answers: ["C", "D"],
    explanation: "Field descriptions record why each field exists, and source control keeps a history of changes linked to requirements. The audit trail shows what changed, not why."
  },
  {
    prompt: "Product hierarchy on the standard Product object",
    options: [
      { id: "A", text: "Custom lookup on Product to the child record" },
      { id: "B", text: "Custom lookup on Product to the parent record" },
      { id: "C", text: "Custom master-detail on Product to the child record" },
      { id: "D", text: "Apex trigger syncing Product Family" }
    ],
    answers: ["B"],
    explanation: "A self-lookup to the parent lets each product point up the tree, supporting any depth. A record can have many children, so pointing to a child doesn't work."
  },
  {
    prompt: "UC needs who changed each of ten Contact fields, when, and the old and new values, reportable for the past 3 months.",
    options: [
      { id: "A", text: "Workflow field updates copying old values into ten new fields" },
      { id: "B", text: "An after insert/update trigger storing old values in a custom object" },
      { id: "C", text: "Field history tracking on the ten fields, with Contact History reports" },
      { id: "D", text: "A daily scheduled report emailed to the admin" }
    ],
    answers: ["B", "C"],
    explanation: "Standard history tracking covers up to 20 fields and keeps 18 months, with reports. A trigger writing to a custom object is the custom alternative. Workflow can't capture who and when properly, and a daily report doesn't track changes."
  },
  {
    prompt: "Monitoring and measuring data quality (choose 2)",
    options: [
      { id: "A", text: "Custom objects and fields to flag issues" },
      { id: "B", text: "Data quality reports and dashboards" },
      { id: "C", text: "Install a data quality analysis dashboard app" },
      { id: "D", text: "Export and check completeness outside Salesforce" }
    ],
    answers: ["B", "C"],
    explanation: "Reports and dashboards (including free AppExchange data quality dashboards) measure completeness and track it over time inside Salesforce."
  },
  {
    prompt: "Extra guidance when users fill in a standard field",
    options: [
      { id: "A", text: "Custom help text in the field properties" },
      { id: "B", text: "A custom page with help text" },
      { id: "C", text: "Help text in the default value" },
      { id: "D", text: "A label field next to the field" }
    ],
    answers: ["A"],
    explanation: "Field-level help text shows as a hover icon right next to the field, including on standard fields."
  },
  {
    prompt: "Storing latitude and longitude",
    options: [
      { id: "A", text: "Formula fields with geolocation functions" },
      { id: "B", text: "Separate latitude and longitude fields" },
      { id: "C", text: "A geolocation custom field" },
      { id: "D", text: "An AppExchange package" }
    ],
    answers: ["C"],
    explanation: "A geolocation field holds both values and works with distance functions."
  },
  {
    prompt: "1-day SLA for data loss from bad or malicious updates",
    options: [
      { id: "A", text: "Daily extract to on-premise systems" },
      { id: "B", text: "Weekly Export of key objects to spreadsheets" },
      { id: "C", text: "Shadow custom objects copying every change" },
      { id: "D", text: "A third-party AppExchange backup app (e.g. OwnBackup, Spanning)" }
    ],
    answers: ["D"],
    explanation: "Backup apps run daily (or more often) and, crucially, can restore records and relationships quickly. An extract alone gives no restore."
  },
  {
    prompt: "A new DR policy requires a continuity plan separate from the cloud provider's own recovery.",
    options: [
      { id: "A", text: "A third-party tool that extracts data and metadata to an external protected system" },
      { id: "B", text: "Weekly exports stored as flat files" },
      { id: "C", text: "ETL to an on-premise archive" },
      { id: "D", text: "A custom nightly batch extracting changes" }
    ],
    answers: ["A"],
    explanation: "Dedicated backup tools capture both data and metadata frequently and can restore them. Weekly exports miss metadata and are too infrequent; custom jobs are hard to restore from."
  },
  {
    prompt: "Documenting a multi-system data architecture (choose 2)",
    options: [
      { id: "A", text: "User stories" },
      { id: "B", text: "Data model" },
      { id: "C", text: "Integration specification" },
      { id: "D", text: "Non-functional requirements" }
    ],
    answers: ["B", "C"],
    explanation: "The data model shows the entities and relationships, and the integration spec shows how data moves between systems. Those two describe the data architecture."
  },
  {
    prompt: "Project is Private with roll-up summary fields, and large volumes of time entries load regularly. (The original refers to an image not shown.)",
    options: [
      { id: "A", text: "Load using External IDs to link parents" },
      { id: "B", text: "Workflow instead of roll-ups" },
      { id: "C", text: "Triggers instead of roll-ups" },
      { id: "D", text: "Load after deferring sharing calculations" }
    ],
    answers: ["D"],
    explanation: "Deferring sharing calculations avoids recalculating on every insert and reduces locking, then recalculates once at the end."
  },
  {
    prompt: "Preventing race conditions on the same record",
    options: [
      { id: "A", text: "Add FOR UPDATE to SOQL queries" },
      { id: "B", text: "Disable classes or triggers that might touch the same record" },
      { id: "C", text: "Move logic to processes and flows" },
      { id: "D", text: "Optimize classes and triggers for CPU" }
    ],
    answers: ["A"],
    explanation: "SELECT ... FOR UPDATE locks the returned records until the transaction ends, so nothing else can change them meanwhile."
  },
  {
    prompt: "NTO's OMS holds 2 million+ historical orders. Sales wants to see related orders without storing millions of records in Salesforce.",
    options: [
      { id: "A", text: "A second admin user for authenticating to the external source" },
      { id: "B", text: "Develop an object relationship strategy" },
      { id: "C", text: "Identify which external tables become external objects" },
      { id: "D", text: "Check whether the source is reachable through an OData endpoint" },
      { id: "E", text: "Configure middleware to poll the external tables" }
    ],
    answers: ["B", "C", "D"],
    explanation: "You need to know how external objects will relate to Salesforce records, which tables to expose, and whether an OData endpoint exists (or a custom adapter is needed). Polling middleware defeats the purpose of virtual data."
  },
  {
    prompt: "All of Company S's data, including 6 million Cases, moves into Company T's org, and load time must be optimized.",
    options: [
      { id: "A", text: "Pre-process, then Data Loader (SOAP API) upsert with zip compression" },
      { id: "B", text: "Salesforce-to-Salesforce" },
      { id: "C", text: "Load in multiple sets with Bulk API parallel processing" },
      { id: "D", text: "An \"Org Migration Tool\" in Setup" }
    ],
    answers: ["A"],
    explanation: "The site credits pre-processing plus compression. Caution: for millions of records the Bulk API in parallel (C) is normally much faster than the SOAP API, and many guides pick C. Check this one."
  },
  {
    prompt: "Reps' Amount changes overwritten by the pricing system",
    options: [
      { id: "A", text: "Custom amount field for reps, separate from PPS" },
      { id: "B", text: "Custom amount field for PPS, separate from reps" },
      { id: "C", text: "Make Amount read-only for sales users with field-level security" },
      { id: "D", text: "PPS updates Amount only when blank" }
    ],
    answers: ["C"],
    explanation: "PPS is the trusted source and forecasts use Amount, so reps shouldn't edit it."
  },
  {
    prompt: "Reporting on invoice attachments by Type",
    options: [
      { id: "A", text: "New values on Attachment's ContentType picklist" },
      { id: "B", text: "A ContentType picklist on the Attachment layout" },
      { id: "C", text: "A custom Type picklist on Attachment" },
      { id: "D", text: "A custom object related to Invoice with a Type picklist" }
    ],
    answers: ["D"],
    explanation: "Attachment can't take custom fields. A related custom object holds the Type and supports reporting."
  },
  {
    prompt: "Locking when importing Orders under Accounts (master-detail)",
    options: [
      { id: "A", text: "Load Accounts, then Orders sorted by OrderId" },
      { id: "B", text: "Load Accounts, then Orders sorted by AccountId" },
      { id: "C", text: "Switch to lookup during import, then back to master-detail" },
      { id: "D", text: "Load separately and set AccountId with batch Apex" }
    ],
    answers: ["B"],
    explanation: "Sorting by AccountId keeps each Account's Orders in the same batch, so batches don't compete for the same parent lock."
  },
  {
    prompt: "360 view across several regional orgs",
    options: [
      { id: "A", text: "Consolidate data from each org into a central data store" },
      { id: "B", text: "Salesforce Connect cross-org adapter" },
      { id: "C", text: "Two-way integration between all orgs" },
      { id: "D", text: "ETL to copy missing Accounts and Contacts into each org" }
    ],
    answers: ["A"],
    explanation: "A central store gives one place with every org's customers. Cross-org links or point-to-point syncs get complex fast."
  },
  {
    prompt: "100,000 Contacts exist (each with a unique External ID) and 200,000 new ones will be loaded.",
    options: [
      { id: "A", text: "Streaming API upsert" },
      { id: "B", text: "Delete all, then insert everything" },
      { id: "C", text: "Upsert everything" },
      { id: "D", text: "Insert new records and update existing ones separately" }
    ],
    answers: ["D"],
    explanation: "Upsert must look up every record first. When you already know which are new, separate Insert and Update jobs are faster."
  },
  {
    prompt: "Loading 1 million Opportunities with Bulk API in parallel",
    options: [
      { id: "A", text: "Index Opportunity text fields" },
      { id: "B", text: "Group batches by AccountId" },
      { id: "C", text: "Sort batches by Name" },
      { id: "D", text: "Order batches by an auto-number field" }
    ],
    answers: ["D"],
    explanation: "The site says ordering avoids locking. Caution: locks come from parallel batches touching the same parent Account, which grouping by AccountId (B) prevents. Part 2's version of this question marked the AccountId answer. Most guides pick B. Check this one."
  },
  {
    prompt: "Each Order has 10 line items, and the export is failing.",
    options: [
      { id: "A", text: "Export in multiple batches" },
      { id: "B", text: "Bulk API in parallel mode" },
      { id: "C", text: "Use PK Chunking" },
      { id: "D", text: "Limit batches to 10K records" }
    ],
    answers: ["A", "C"],
    explanation: "Splitting the export into batches, and PK Chunking by ID range, keep each query small enough to avoid timeouts."
  },
  {
    prompt: "Historical trend reports hurting performance and storage (choose 2)",
    options: [
      { id: "A", text: "Scheduled batch Apex copies aggregates to a custom object, then deletes originals" },
      { id: "B", text: "Analytic Snapshots plus a purge plan" },
      { id: "C", text: "Data Loader extract, aggregate, write back, delete originals" },
      { id: "D", text: "A Salesforce Archiving feature to move older records off the storage limit" }
    ],
    answers: ["A", "D"],
    explanation: "Keeping only summaries for trends cuts volume and storage. Note: Analytic Snapshots (B) exist exactly for trend reporting, so many guides pick A, B. Check this one."
  },
  {
    prompt: "Agents in Service Console need website browsing (on-premise), store interactions and contact center history (both in Salesforce), and email campaign activity (marketing system).",
    options: [
      { id: "A", text: "Web tabs in Service Console" },
      { id: "B", text: "Custom components pulling marketing and website data" },
      { id: "C", text: "Salesforce Connect external objects for website and marketing" },
      { id: "D", text: "A customer view with components showing website and marketing data as a mashup" }
    ],
    answers: ["D"],
    explanation: "A mashup shows the outside data in context on the customer view without storing it or building full integrations."
  },
  {
    prompt: "Users confused by new fields with no governance",
    options: [
      { id: "A", text: "Add descriptions and make fields required" },
      { id: "B", text: "Maintain a data dictionary and a governance process for changes to common objects" },
      { id: "C", text: "Report on blanks and fill gaps from outside sources" },
      { id: "D", text: "Validation rules explaining each field" }
    ],
    answers: ["B"],
    explanation: "The root issue is ungoverned change. A dictionary documents fields, and a change process makes sure new fields are reviewed and explained."
  },
  {
    prompt: "UC has a certified-accurate MDM for customers, with over 20 million records in both the MDM and Salesforce. How can it ensure Salesforce data matches?",
    options: [
      { id: "A", text: "Compare manually in Excel" },
      { id: "B", text: "Load MDM data into Salesforce and find differences with batch Apex" },
      { id: "C", text: "An AppExchange data quality package that matches Salesforce against the trusted source" },
      { id: "D", text: "Assume it will correct itself" }
    ],
    answers: ["C"],
    explanation: "Data quality tools are built to match and fix records against a reference source at this scale. Excel can't handle 20 million rows, and loading the MDM into Salesforce doubles storage."
  },
  {
    prompt: "Avoiding data skew with millions of records (choose 3)",
    options: [
      { id: "A", text: "Picklists instead of lookups to a custom object" },
      { id: "B", text: "Limit any one user to owning 10,000 records" },
      { id: "C", text: "Put 10,000 Opportunities on one Account" },
      { id: "D", text: "Limit Opportunities per Account to 10,000" },
      { id: "E", text: "Limit records looking up to the same record to 10,000" }
    ],
    answers: ["B", "D", "E"],
    explanation: "These cover the three types of skew: ownership, account and lookup skew. About 10,000 child records per parent or owner is the usual threshold."
  },
  {
    prompt: "The customer has plenty of storage. Reps' searches return old, irrelevant records, but managers need them for historical reporting.",
    options: [
      { id: "A", text: "A permission set to hide old data" },
      { id: "B", text: "Batch Apex to archive nightly" },
      { id: "C", text: "Archive and purge old data monthly" },
      { id: "D", text: "Private sharing to hide old data" }
    ],
    answers: ["C"],
    explanation: "Moving old data to an archive (where managers can still report on it) cleans up searches for reps. Permission sets can't hide records, and private sharing would hide current records too."
  },
  {
    prompt: "NTO's legacy CRM stores agent relationships in a lookup table. How should this be migrated?",
    options: [
      { id: "A", text: "Custom objects to store agent relationships" },
      { id: "B", text: "Migrate without record owners" },
      { id: "C", text: "Assign owners based on the relationship" },
      { id: "D", text: "Assign everything to a system user" }
    ],
    answers: ["A"],
    explanation: "A custom (junction) object keeps the many relationships the lookup table held. Ownership can show only one person per record."
  },
  {
    prompt: "Enforcing a data quality plan (choose 2)",
    options: [
      { id: "A", text: "Store data externally with view-only access in Salesforce" },
      { id: "B", text: "Weekly reports that automatically merge or delete duplicates" },
      { id: "C", text: "Enforce processes with workflow, validation rules and Apex" },
      { id: "D", text: "A weekly dashboard of records missing information sent to managers" }
    ],
    answers: ["C", "D"],
    explanation: "Rules and automation stop bad data at entry, and regular dashboards hold people accountable for fixing gaps. Reports can't merge or delete."
  },
  {
    prompt: "An insurer gets leads from many channels and has duplicates, causing poor experience and higher costs.",
    options: [
      { id: "A", text: "A manual process to search and merge duplicates" },
      { id: "B", text: "Standardize lead information across channels" },
      { id: "C", text: "A custom solution to find and merge duplicates" },
      { id: "D", text: "A third-party solution to clean and enrich lead data" },
      { id: "E", text: "A de-duplication strategy that prevents duplicate leads" }
    ],
    answers: ["B", "D", "E"],
    explanation: "Standard formats make matching possible, a proven tool cleans existing data, and prevention stops new duplicates. Manual and custom approaches don't scale or cost more."
  },
  {
    prompt: "Automatically archive inactive Accounts older than 3 years (choose 2)",
    options: [
      { id: "A", text: "Export with Workbench" },
      { id: "B", text: "Weekly export from the UI" },
      { id: "C", text: "Scheduled export-and-delete jobs with an ETL tool" },
      { id: "D", text: "Scheduled export-and-delete jobs with Data Loader" }
    ],
    answers: ["C", "D"],
    explanation: "Both can run on a schedule with filters and delete after exporting. Workbench and weekly export are manual or export only."
  },
  {
    prompt: "Nightly integration queries timing out on 12 million records (choose 2)",
    options: [
      { id: "A", text: "Make sure filters don't check for NULL" },
      { id: "B", text: "Use a formula field instead of multiple filters" },
      { id: "C", text: "Custom indexes on the filter fields" },
      { id: "D", text: "Give the integration user View All Data" }
    ],
    answers: ["A", "C"],
    explanation: "Filters on NULL usually can't use indexes, and indexing filter fields makes queries selective. Formula fields aren't indexed, and View All Data doesn't speed queries."
  },
  {
    prompt: "What enterprise data governance improves (choose 2)",
    options: [
      { id: "A", text: "Data integrity" },
      { id: "B", text: "Data distribution" },
      { id: "C", text: "Data usability" },
      { id: "D", text: "Data modeling" }
    ],
    answers: ["A", "C"],
    explanation: "Governance makes data accurate and consistent (integrity) and easy to use (usability)."
  },
  {
    prompt: "Agents need order history on the customer record during calls, without hurting the user experience.",
    options: [
      { id: "A", text: "Apex callout filling a text area" },
      { id: "B", text: "Salesforce Connect with an external object" },
      { id: "C", text: "Import into a custom object nightly" },
      { id: "D", text: "ERP in an iframe on a custom tab" }
    ],
    answers: ["B"],
    explanation: "External objects show live ERP orders as a related list on the customer, without copying the data or leaving Salesforce."
  },
  {
    prompt: "Maintaining Contact data quality (choose 2)",
    options: [
      { id: "A", text: "Private sharing model" },
      { id: "B", text: "Duplicate management" },
      { id: "C", text: "Validation rules on create and edit" },
      { id: "D", text: "Workflow to delete duplicates" }
    ],
    answers: ["B", "C"],
    explanation: "Duplicate rules stop duplicates and validation rules enforce correct values. Workflow can't delete records."
  },
  {
    prompt: "Activity is in a POS system, Salesforce, a mobile app and a marketing system; agents need it current and real time.",
    options: [
      { id: "A", text: "External data sources in Salesforce" },
      { id: "B", text: "A customer data mart" },
      { id: "C", text: "Migrate all activity into Salesforce" },
      { id: "D", text: "Periodic summary uploads" }
    ],
    answers: ["A"],
    explanation: "External data sources show live data without storing it. A data mart or periodic uploads aren't real time."
  },
  {
    prompt: "Shipment must always relate to a Product, Sender and Receiver (all custom objects). Parents can't be deleted while linked, and each object needs its own sharing model.",
    options: [
      { id: "A", text: "VLOOKUP formula fields" },
      { id: "B", text: "Required lookups to all three parents" },
      { id: "C", text: "Master-detail to all three" },
      { id: "D", text: "Two master-details and one lookup" }
    ],
    answers: ["B"],
    explanation: "A required lookup can't be blank and blocks deletion of a referenced parent, while sharing stays separate. Master-detail would make Shipment inherit sharing, and an object can have only two master-details."
  },
  {
    prompt: "Key data modeling actions for a legacy migration (choose 3)",
    options: [
      { id: "A", text: "Identify data elements to keep in Salesforce" },
      { id: "B", text: "Map legacy data to Salesforce objects" },
      { id: "C", text: "Map legacy data to custom objects" },
      { id: "D", text: "Analyze the legacy model with the app owner" },
      { id: "E", text: "Implement the legacy model with custom fields" }
    ],
    answers: ["A", "B", "E"],
    explanation: "Decide what to keep, map it to Salesforce objects, then build fields. Note: many guides pick D instead of E, since copying a legacy model as-is is discouraged. Check this one."
  },
  {
    prompt: "Distributors create sales orders (stored as Opportunities) priced by region, closed when fulfilled.",
    options: [
      { id: "A", text: "Lookup to a custom Price object shared with distributors" },
      { id: "B", text: "A price book per region, shared with distributors" },
      { id: "C", text: "Manually update prices on Opportunities" },
      { id: "D", text: "Custom fields and triggers to set prices" }
    ],
    answers: ["B"],
    explanation: "Price books are the standard way to hold different prices per region, and Opportunity products pull prices from them."
  },
  {
    prompt: "Bulk query timing out on 10 million Orders",
    options: [
      { id: "A", text: "Tooling API" },
      { id: "B", text: "PK Chunking" },
      { id: "C", text: "Metadata API" },
      { id: "D", text: "Streaming API" }
    ],
    answers: ["B"],
    explanation: "PK Chunking splits the query into ID ranges run as separate batches, so no single query times out."
  },
  {
    prompt: "When is Salesforce Connect needed? (choose 3)",
    options: [
      { id: "A", text: "You want real-time access to the latest data" },
      { id: "B", text: "You want to copy subsets into Salesforce" },
      { id: "C", text: "You need a virtual private connection" },
      { id: "D", text: "You have lots of data you don't want to copy in" },
      { id: "E", text: "You only need small amounts of external data at a time" }
    ],
    answers: ["A", "D", "E"],
    explanation: "Salesforce Connect fits live data, large volumes you don't want to copy, and small slices viewed at a time."
  },
  {
    prompt: "Tracing configuration changes back to requirements (choose 2)",
    options: [
      { id: "A", text: "Review the Setup Audit Trail" },
      { id: "B", text: "Put the business purpose in each field's Description" },
      { id: "C", text: "Keep a data dictionary with each field's justification" },
      { id: "D", text: "Store metadata in source control" }
    ],
    answers: ["B", "D"],
    explanation: "Field descriptions record why each field exists, and source control keeps a linked history of changes. Note: a data dictionary (C) serves the same purpose, so some guides choose C, D."
  },
  {
    prompt: "Customer Type limited to High, Medium, Low",
    options: [
      { id: "A", text: "Lookup to a custom object" },
      { id: "B", text: "Single-select restricted picklist" },
      { id: "C", text: "Help text listing the choices" },
      { id: "D", text: "A validation rule limiting entries" }
    ],
    answers: ["B"],
    explanation: "A restricted picklist only accepts its defined values, even through the API, and reports group cleanly on it."
  },
  {
    prompt: "Keep 2 years in Salesforce, archive the rest",
    options: [
      { id: "A", text: "Third-party backup of all data" },
      { id: "B", text: "Batch job moving and deleting all records" },
      { id: "C", text: "Batch job moving records older than two years off platform and deleting them" },
      { id: "D", text: "Batch job moving everything but deleting only old records" }
    ],
    answers: ["C"],
    explanation: "It archives exactly the data that should leave. A backup doesn't free storage."
  },
  {
    prompt: "Preventing ownership skew for 100,000 migrated Accounts (choose 3)",
    options: [
      { id: "A", text: "A default owner with a normal role in the hierarchy" },
      { id: "B", text: "Keep that user out of public groups used in sharing rules" },
      { id: "C", text: "A default owner with no role" },
      { id: "D", text: "Give View All on profiles" },
      { id: "E", text: "A default owner in the top-most role" }
    ],
    answers: ["B", "C", "E"],
    explanation: "Salesforce's guidance for a user owning many records: no role, or if needed a separate role at the top of the hierarchy, and keep them out of groups used for sharing. This limits sharing recalculation when things change."
  },
  {
    prompt: "Querying Salesforce for parent Order IDs before loading lines causes timeouts.",
    options: [
      { id: "A", text: "Query only indexed ID fields" },
      { id: "B", text: "Use the source system's External ID on Orders to link order lines" },
      { id: "C", text: "Batch Apex to set Order IDs on lines after import" },
      { id: "D", text: "A number sequence on imported Orders" }
    ],
    answers: ["B"],
    explanation: "With an External ID on Order, the line load can reference the parent by its source ID, and Salesforce resolves it, so no lookup queries are needed."
  },
  {
    prompt: "Monthly and yearly reports on 5M Opportunities and 10M Orders timing out",
    options: [
      { id: "A", text: "Copy Order data onto Opportunity fields" },
      { id: "B", text: "Report in a third-party tool outside Salesforce" },
      { id: "C", text: "A skinny table combining Order and Opportunity fields" },
      { id: "D", text: "An aggregate custom object with monthly and yearly summaries" }
    ],
    answers: ["D"],
    explanation: "Pre-summarized records make the reports tiny and fast. Skinny tables can't combine two objects, and copying fields or moving off-platform is more work."
  },
  {
    prompt: "Clean migration from two legacy systems",
    options: [
      { id: "A", text: "External IDs, merge the second database into the first, then load" },
      { id: "B", text: "Duplicate rules in Salesforce, load from both" },
      { id: "C", text: "A staging database with External IDs to merge, clean and de-dupe, then load" },
      { id: "D", text: "External IDs, insert from one database and upsert from the other" }
    ],
    answers: ["C"],
    explanation: "Staging lets you combine, clean and de-duplicate both sources before one clean load."
  },
  {
    prompt: "Avoiding duplicate Leads when importing (choose 2)",
    options: [
      { id: "A", text: "An AppExchange lead de-duplication app" },
      { id: "B", text: "Salesforce matching and duplicate rules" },
      { id: "C", text: "The Lead mass de-duplication tool" },
      { id: "D", text: "A workflow rule checking for duplicates" }
    ],
    answers: ["A", "B"],
    explanation: "Duplicate rules and specialized apps catch duplicates on import. There's no standard Lead mass-dedupe tool, and workflow can't detect duplicates."
  },
  {
    prompt: "Identifying and filtering sensitive data",
    options: [
      { id: "A", text: "Data grouping metadata" },
      { id: "B", text: "Field-level security" },
      { id: "C", text: "A custom \"sensitive\" checkbox" },
      { id: "D", text: "Data classification metadata" }
    ],
    answers: ["D"],
    explanation: "Data classification fields (sensitivity level, compliance category, owner) tag each field so sensitive data can be found and filtered. FLS controls access but doesn't label anything."
  },
  {
    prompt: "The app needs 45 custom objects and about 20,000 API calls a day from an on-premise app.",
    options: [
      { id: "A", text: "Service Cloud" },
      { id: "B", text: "Lightning Platform Starter" },
      { id: "C", text: "Lightning Platform Plus" },
      { id: "D", text: "Lightning External Apps Starter" }
    ],
    answers: ["C"],
    explanation: "Platform Plus allows up to 110 custom objects with more API capacity; Starter allows only 10 custom objects. The app needs no CRM objects, so Service Cloud would be overkill."
  },
  {
    prompt: "The project has large data volumes, real-time web service integrations and Visualforce mashups; the Full sandbox connects to full-scale back-end test systems.",
    options: [
      { id: "A", text: "Pre-go-live automated page-load testing in the Full sandbox" },
      { id: "B", text: "Post-go-live page-load testing in Production" },
      { id: "C", text: "Pre-go-live unit testing in the Full sandbox" },
      { id: "D", text: "Stress testing the web services on the middleware" }
    ],
    answers: ["A", "D"],
    explanation: "Load-test the pages in a production-like sandbox before go-live, and stress-test the integrations that could become bottlenecks. Testing in Production is too late, and unit tests don't measure performance. (Salesforce requires approval before load testing.)"
  },
  {
    prompt: "More analytics beyond native reports (choose 2)",
    options: [
      { id: "A", text: "Weekly snapshots" },
      { id: "B", text: "Einstein Analytics" },
      { id: "C", text: "Setup Audit Trail" },
      { id: "D", text: "AppExchange apps" }
    ],
    answers: ["B", "D"],
    explanation: "Einstein (CRM) Analytics and AppExchange BI apps give deeper, cross-source analysis than native reports."
  },
  {
    prompt: "Order status from an ERP for reps without ERP access",
    options: [
      { id: "A", text: "Canvas to show the order management UI in a tab" },
      { id: "B", text: "Batch jobs pushing order lines to Salesforce" },
      { id: "C", text: "Salesforce Connect to bring order lines in as external objects" },
      { id: "D", text: "A real-time integration pulling order lines when viewing orders" }
    ],
    answers: ["C"],
    explanation: "Salesforce Connect shows live ERP order data inside Salesforce without copying it or building custom integration."
  },
  {
    prompt: "Orchestrating data between a hub org and spoke orgs",
    options: [
      { id: "A", text: "Middleware that extracts and distributes data across hub and spokes" },
      { id: "B", text: "Custom APIs polling the hub and pushing to spokes" },
      { id: "C", text: "Custom APIs polling the spokes and pushing to the hub" },
      { id: "D", text: "A backup and archive solution" }
    ],
    answers: ["A"],
    explanation: "Middleware is built to route, transform and orchestrate data between many systems. Custom polling APIs are brittle and one-directional."
  },
  {
    prompt: "Leads piled on one dummy user",
    options: [
      { id: "A", text: "Dummy user in the lowest role" },
      { id: "B", text: "Several dummy users sharing the Leads" },
      { id: "C", text: "Dummy user in the highest role" },
      { id: "D", text: "Periodically delete Leads" }
    ],
    answers: ["B"],
    explanation: "One owner of more than ~10,000 records causes ownership skew. Spreading the Leads across several users removes it."
  },
  {
    prompt: "Avoiding duplicate B2C customers (choose 2)",
    options: [
      { id: "A", text: "Duplicate Management" },
      { id: "B", text: "An Enterprise Service Bus" },
      { id: "C", text: "Data.com Clean" },
      { id: "D", text: "A data warehouse" }
    ],
    answers: ["A", "C"],
    explanation: "Duplicate rules prevent duplicates, and Data.com Clean keeps records accurate against a reference source."
  },
  {
    prompt: "UC is moving millions of ERP records into Salesforce. In which situation should serial mode be used instead of parallel?",
    options: [
      { id: "A", text: "20 batches queued for upsert jobs" },
      { id: "B", text: "Inserting 1 million orders across many accounts, with possible lock exceptions" },
      { id: "C", text: "A controlled feed of 10 batches per job" },
      { id: "D", text: "Inserting 1 million orders with lock exceptions already eliminated" }
    ],
    answers: ["B"],
    explanation: "Serial mode is for when parallel batches might lock the same parent records. If locks are already ruled out (D), parallel is faster."
  },
  {
    prompt: "License for complaints, white papers and paid support",
    options: [
      { id: "A", text: "Sales Cloud" },
      { id: "B", text: "Lightning Platform Starter" },
      { id: "C", text: "Service Cloud" },
      { id: "D", text: "Salesforce" }
    ],
    answers: ["C"],
    explanation: "Cases, Knowledge and Entitlements are Service Cloud features."
  },
  {
    prompt: "Real-time access to non-OData external data, no middleware",
    options: [
      { id: "A", text: "Apex REST callout" },
      { id: "B", text: "A process calling an invocable web service" },
      { id: "C", text: "Migrate to Heroku Postgres" },
      { id: "D", text: "A custom adapter with the Apex Connector Framework" }
    ],
    answers: ["D"],
    explanation: "The Apex Connector Framework builds a custom Salesforce Connect adapter for any API, giving real-time external objects without OData or middleware."
  },
  {
    prompt: "Encrypting patient files",
    options: [
      { id: "A", text: "Shield Platform Encryption for files" },
      { id: "B", text: "Classic encryption" },
      { id: "C", text: "A third-party AppExchange app" },
      { id: "D", text: "Store files outside Salesforce" }
    ],
    answers: ["A"],
    explanation: "Shield Platform Encryption can encrypt files and attachments at rest. Classic encryption only covers special text fields."
  },
  {
    prompt: "A logistics company's reports on large container-location data are starting to time out.",
    options: [
      { id: "A", text: "A custom Visualforce report using a cache" },
      { id: "B", text: "Replace the reports with Analytics Cloud (CRM Analytics) reports" },
      { id: "C", text: "An Apex trigger on Report to pre-fetch data" },
      { id: "D", text: "A dashboard that runs the reports once a day" }
    ],
    answers: ["B"],
    explanation: "CRM Analytics is built for large data volumes and doesn't have standard reports' timeouts. You can't put triggers on reports."
  },
  {
    prompt: "UC must load all data, including users, quickly in an org with many roles, territories, groups and sharing rules.",
    options: [
      { id: "A", text: "Defer sharing calculations and suspend sharing rule calculation" },
      { id: "B", text: "Data Loader with parallel processing" },
      { id: "C", text: "Bulk API with concurrent batches" },
      { id: "D", text: "Granular locking" }
    ],
    answers: ["A"],
    explanation: "The slow part is sharing recalculation after each change. Deferring it lets the load finish first, then recalculates once."
  },
  {
    prompt: "A subset must sync to Salesforce for service agents; the rest must be reachable from Salesforce any time, without storage problems.",
    options: [
      { id: "A", text: "Virtualize the remaining data with Salesforce Connect and external objects" },
      { id: "B", text: "Heroku Connect two-way sync of all data" },
      { id: "C", text: "Callouts that copy data into Salesforce as needed" },
      { id: "D", text: "Migrate to big objects and use Async SOQL" }
    ],
    answers: ["A"],
    explanation: "Heroku Connect syncs the subset, and external objects show the rest without storing it in Salesforce. Syncing a billion records would blow through storage."
  },
  {
    prompt: "Reporting failures from an Apex lead-creation job",
    options: [
      { id: "A", text: "Store leads in a custom object and report on unprocessed ones" },
      { id: "B", text: "Save Apex errors in a custom object for reporting" },
      { id: "C", text: "Email failures to the business from Apex" },
      { id: "D", text: "An AppExchange package to clean leads first" }
    ],
    answers: ["C"],
    explanation: "Apex can email failures as they happen. Caution: the site's own explanation describes B (logging errors to a custom object for reporting), and many guides pick B. Check this one."
  },
  {
    prompt: "Many portal orders owned by one generic user (choose 2)",
    options: [
      { id: "A", text: "Clear the generic user's role" },
      { id: "B", text: "No action needed; Salesforce handles it" },
      { id: "C", text: "Put the generic user in a role at the top of the hierarchy" },
      { id: "D", text: "Spread ownership across a pool of generic users" }
    ],
    answers: ["A", "C"],
    explanation: "One user owning many records causes ownership skew. Salesforce's guidance for such a user is no role at all or, if a role is needed, a separate role at the top of the hierarchy, so changes don't trigger sharing recalculation across the hierarchy. Spreading ownership (D) also helps, so some guides pick A, D."
  },
  {
    prompt: "Deciding field-level system of record with MDM",
    options: [
      { id: "A", text: "MDM decides it, so the architect needn't" },
      { id: "B", text: "Key stakeholders review fields with the same purpose across systems" },
      { id: "C", text: "Differently named fields always become separate fields" },
      { id: "D", text: "Input fields get overwritten and can't have a system of record" }
    ],
    answers: ["B"],
    explanation: "Field ownership is a business decision that stakeholders agree on; MDM then enforces it."
  },
  {
    prompt: "Legacy inventory goes into a custom child object Inventory__c related to Account. It must inherit Account's sharing and be deleted when the Account is deleted.",
    options: [
      { id: "A", text: "Master-detail field on Account pointing to Inventory__c" },
      { id: "B", text: "Master-detail field on Inventory__c pointing to Account" },
      { id: "C", text: "Indirect lookup on Account" },
      { id: "D", text: "Lookup on Inventory__c to Account" }
    ],
    answers: ["B"],
    explanation: "The master-detail field lives on the child (detail). It gives inherited sharing and cascade delete. A lookup does neither."
  },
  {
    prompt: "NTO's 5-year-old org has incomplete and duplicate data, and an architect will define quality standards.",
    options: [
      { id: "A", text: "Define duplication standards and rules" },
      { id: "B", text: "Define key fields in a staging database" },
      { id: "C", text: "Measure timeliness and consistency" },
      { id: "D", text: "Pick an ETL tool" },
      { id: "E", text: "Measure completeness and accuracy" }
    ],
    answers: ["A", "C", "E"],
    explanation: "Standards cover the core quality dimensions: uniqueness, timeliness, consistency, completeness and accuracy. Staging and ETL are migration choices, not standards."
  },
  {
    prompt: "Questions for an archiving strategy (choose 3)",
    options: [
      { id: "A", text: "How many fields the objects have" },
      { id: "B", text: "Who currently has access" },
      { id: "C", text: "Can reporting use fewer summary records?" },
      { id: "D", text: "Will archived data need reporting or access later?" },
      { id: "E", text: "Do regulations restrict archiving and purging?" }
    ],
    answers: ["C", "D", "E"],
    explanation: "Future access needs, whether summaries suffice, and regulations decide what to keep and where."
  },
  {
    prompt: "Cloud Kicks expects 6,000 customers growing to 24,000, each sending about 12 shipment requests a week (up to 5 items each). Customers need 3 years of requests and Salesforce reports.",
    options: [
      { id: "A", text: "External object for requests plus child external object for items (Heroku)" },
      { id: "B", text: "External object for requests with five item lookups (Heroku)" },
      { id: "C", text: "Custom object for requests plus child custom object for items, archiving off-platform after 3 years" },
      { id: "D", text: "Custom object with five item lookups, archiving after 3 years" }
    ],
    answers: ["C"],
    explanation: "Custom objects support community access and standard reporting, a child object models items properly, and archiving after 3 years controls growth. Five lookup fields is poor design."
  },
  {
    prompt: "What to review before a data stewardship engagement (choose 3)",
    options: [
      { id: "A", text: "Metadata XML files for redundant fields" },
      { id: "B", text: "Whether integrations create records in Salesforce" },
      { id: "C", text: "Key reports to decide which fields should be required" },
      { id: "D", text: "The Setup Audit Trail to see which fields are used" },
      { id: "E", text: "The sharing model's impact on duplicate records" }
    ],
    answers: ["B", "C", "E"],
    explanation: "Integrations are a common source of bad data, reports show which fields matter, and restrictive sharing makes users create duplicates of records they can't see. The audit trail shows config changes, not field usage."
  },
  {
    prompt: "Tracking history on 100 Opportunity fields (choose 2)",
    options: [
      { id: "A", text: "A custom object storing a copy of the record when changed" },
      { id: "B", text: "A custom object storing previous and new values" },
      { id: "C", text: "Analytic Snapshots on change" },
      { id: "D", text: "Select all 100 fields in history tracking" }
    ],
    answers: ["A", "B"],
    explanation: "Standard history tracking allows only 20 fields per object (60 with Field Audit Trail), so 100 fields needs a custom solution."
  },
  {
    prompt: "Same customer information across a multi-system call center",
    options: [
      { id: "A", text: "Make Salesforce the system of record for all data" },
      { id: "B", text: "A master data management (MDM) strategy for customer data" },
      { id: "C", text: "Load customer data into every system" },
      { id: "D", text: "Let each system own the data it creates" }
    ],
    answers: ["B"],
    explanation: "MDM defines one master customer record and keeps every system in line with it. Copying data everywhere creates drift."
  },
  {
    prompt: "Customers must have these three fields before they can be created in the MDM.",
    options: [
      { id: "A", text: "Mark them required on the page layout" },
      { id: "B", text: "Validation rules checking the fields" },
      { id: "C", text: "Mark the fields required in Setup" },
      { id: "D", text: "Check in the MDM integration" }
    ],
    answers: ["B"],
    explanation: "Validation rules apply to every channel (UI, API, imports). Page-layout requirements only apply in the UI, and some standard fields can't be made universally required."
  },
  {
    prompt: "Opportunities go to an on-premise ERP when Closed/Won, where they're read-only.",
    options: [
      { id: "A", text: "An MDM system" },
      { id: "B", text: "A workflow rule sending Outbound Messages" },
      { id: "C", text: "ERP polls Salesforce nightly" },
      { id: "D", text: "An hourly integration" }
    ],
    answers: ["B"],
    explanation: "An outbound message fires as soon as the stage changes, with no code, and retries until delivered. The other options aren't real time."
  },
  {
    prompt: "Custom Visualforce pages also edit Opportunities. Two fields should become required only at later stages.",
    options: [
      { id: "A", text: "Required on the page layout" },
      { id: "B", text: "A validation rule per field that checks Stage" },
      { id: "C", text: "Required in Setup" },
      { id: "D", text: "An Apex trigger" }
    ],
    answers: ["B"],
    explanation: "Validation rules can depend on Stage and apply to the Visualforce pages too. Layout and Setup requirements can't depend on Stage, and a trigger is more work."
  },
  {
    prompt: "CEO dashboard on 100 million Opportunities timing out (choose 3)",
    options: [
      { id: "A", text: "Selective queries to return less data" },
      { id: "B", text: "Denormalize to reduce joins" },
      { id: "C", text: "Remove dashboard widgets" },
      { id: "D", text: "Run it and email it to the CEO" },
      { id: "E", text: "Archive unused Opportunities" }
    ],
    answers: ["A", "B", "E"],
    explanation: "All three cut the data each query has to process. Fewer widgets or emailing it works around the problem rather than fixing it."
  }
];
