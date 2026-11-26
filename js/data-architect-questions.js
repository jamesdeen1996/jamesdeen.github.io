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
  }
];
