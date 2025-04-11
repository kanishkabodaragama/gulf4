import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          // Navbar
          Home: "Home",
          "Service Offering": "Service Offering",
          Contact: "Contact",
          "Book a Demo": "Book a Demo",

          //Contact Us
          c1: "gulfHR is excited to work with you!",
          c2: "If you would like one of our consultants to discuss your unique requirements with you, please fill in the form below, and we will contact you.",
          c3: "Email:",
          c4: "Saudi Arabia:",
          c5: "Bahrain, Qatar:",
          c6: "UAE, Oman:",
          c7: "Other:",
          //form
          firstName: "First Name",
          lastName: "Last Name",
          contact: "Contact Tel",
          whatsapp: "Whatsapp No.",
          employee: "No. of Employees",
          companyWeb: "Company Website",
          email: "Email",
          country: "Country",
          freeDemo: "I would like to book a FREE DEMO",
          message: "Your Message",
          button: "Contact gulfHR",

          // Home Banner
          "hb-1": "Powerful human resource and payroll management system",
          "hb-2":
            "gulfHR has at its core a robust processing engine. You work smarter, while all HR functions connect instantly with real-time information sharing.",
          "hb-3": "Get started",
          "hb-4": "View Services",

          // Home Sticky Bar
          "hsb-1": "Intuitive, time saving & user friendly.",
          "hsb-2":
            "gulfHR's Human Resource Management System (HRMS) and payroll software is the key component to managing your organisations' most valuable resource.",
          "hsb-3": "Cloud Human Resources",
          "hsb-4": "Best practices and industry standard human capital administration SaaS wherever you go.",
          "hsb-5": "HR analytics and metrics",
          "hsb-6": "Embed analytics on a dashboard to provide a sound basis for decision making with an easily managed UI.",
          "hsb-7": "Time and attendance",
          "hsb-8": "Manage employee attendance and productivity, while integrating with payroll and leave management functions.",
          "hsb-9": "Value added services",
          "hsb-10": "Consulting, training, web and application developments and other value-added solutions to optimize human resource management.",
          "hsb-11": "Integration with other applications",
          "hsb-12": "Known expertise in biometrics, time tracking and finance integration.",
          "hsb-13": "Arabic interface",
          "hsb-14": "Fully Arabic enabled, empowering local and regional businesses even more.",

          // Home Video Content
          "hvc-1":
            "Clients may start with our comprehensive system (all modules) or start with our core system and expand at a later stage in accordance with budget and functionality requirements.",
          "hvc-2":
            "Core system typically include Payroll and Leave Management, HR Administration, Report Writing, Document Management and Security modules and are often combined with Employee Self-Service and Time Management.",
          "hvc-3":
            "Modules such as Performance Management, Learning & Development and Recruitment or any combination thereof are then added at a later stage.",

          // Three Divs
          tdf1: "Demanding environments?",
          "tdf1.5": "No Problem.",
          tdf2: "No matter how complex your environment is, gulfHR will deliver while being simple for users.",
          tdf3: "Exceptional client training and support, with customisations and technical backup readily available.",
          tdf4: "Tailor made HR and Payroll software for Dubai, UAE, Bahrain, Saudi Arabia, Kuwait, Qatar, Oman, Iraq, Egypt, Pakistan, Jordan, Libya, Algeria and more…",
          tdf5: "In addition to these countries we are also able to customize our software for use in many other countries including (but not limited to) Iraq, Afghanistan, and Sri Lanka.",

          tdf6: "The power of automation and interactivity.",
          tdf7: "Simple and intuitive HR processes. Line Managers and Employees take ownership of relevant HR tasks.",
          tdf8: "Complete Human Resource Management System (HRMS) developed by Gulf Solutions Group, one of the most reputable software companies in the Middle East and African region.",

          tdf9: "Made in the Middle East, for the Middle East and well beyond.",
          tdf10: "Implemented in the UAE, Saudi Arabia, Bahrain, Kuwait, Qatar, Oman, Jordan, Egypt, Libya, Algeria and Pakistan.",
          tdf11: "The gulfHR system can also be deployed with an Arabic interface.",

          // Bottom Section
          "hbs-1": "Keep human capital on the go with our mobile app",
          "hbs-2": "Contact gulfHR",
          "hbs-3": "View Service Offering",

          //Bottom sticky slider
          "bs-1": "An affordable monthly fee:",
          "bs-2": "No capital cost",
          "bs-3":
            "On-Cloud is a progressive software deployment approach where the application software for human resource management is hosted on the Cloud and clients use a web browser to access the application. This ensures that clients can setup their own application almost immediately and benefit from a secure and scalable architecture without having to go through complex and time consuming software and hardware installations. Cloud ensures that clients benefit product enhancements with no downtime.",
          "bs-4":
            "Increased Scalability and Speed: Since companies no longer have to invest time in buying and setting up hardware and software, they can seamlessly scale up or down depending on their usage of services on the cloud.",
          "bs-5": "Hosted Title",

          // Home Feature
          "hfs-1": "Simple. Scalable. Flexible. Friendly. Affordable.",
          "hfs-2":
            "Powerful security module allows superuser to define selective access for users and the data they require, in ‘real time’ and from any location.",
          "hfs-3": "Employee Self-Service Portal",
          "hfs-4": "Employees participate in the process online, accessing their own information with an extensive ‘employee self-service’ module.",

          //Time to Implement
          "tt-1": "Time to Implement",
          "tt-2": "The powerful gulfHR data upload facility facilitates quick and easy HRMS implementation.",
          "tt-3": "Data is uploaded in bulk via excel spreadsheet",
          "tt-4": "With co-operation of the client, the parallel payroll is normally produced at the end of the first month",
          "tt-5": "Live payroll is possible at the end of month two",
          "tt-6": "Integrated time & attendance payroll is possible from month three onwards.",
          "tt-7": "Book a Free Demo",

          // Footer
          f1: "Powerful human resource and payroll management system",
          f2: "Innovative Gulf Solutions for Information Technology, Riyadh, Saudi Arabia",
          f3: "Innovative Gulf Solutions W.L.L., Saar, Bahrain",
          f4: "Gulf Solutions Group FZ LLC, Dubai Internet City,",
          f5: "United Arab Emirates.",
          f6: "Support",
          f7: "Email:",
          f8: "Saudi Arabia:",
          f9: "Baharain, Quatar:",
          f10: "UAE, Oman:",
          f11: "Other:",
          f12: "©  2024. All rights reserved.",
          f13: "Site development by ",

          //contactus
          cu1: "gulfHR is excited to work with you!",
          cu2: "If you would like one of our consultants to discuss your unique requirements with you, please fill in the form below, and we will contact you.",
          cuf1: "Get in touch!",
          cuf2: "First Name",
          cuf3: "First Name",
          cuf4: "Contact Tel",
          cuf5: "WhatsApp No.",
          cuf6: "No. of Employees",
          cuf7: "Company Website",
          cuf8: "Email",
          cuf9: "Country",
          cuf10: "I would like to book a FREE DEMO",
          cuf11: "Your Message",
          cuf12: "Contact gulfHR",

          //service offering
          so1_1: "Service ",
          so1_2: "Offering",
          so2: "As a comprehensive human resources and payroll management system, gulfHR has at its core a robust processing engine. You work smarter, while all HR functions connect instantly with real-time information sharing.",
          so3: "Click on the Service Offering Headings below for quick navigation, or scroll down the page to view each individually.",

          // Service Navigation Items
          so0:"Menu",
          sot1: "HR Management",
          sot2: "Payroll Software",
          sot3: "Employee Leave",
          sot4: "Employee Reporting",
          sot5: "Online Configuration",
          sot6: "HR Approval Process",
          sot7: "Employee Self Service",
          sot8: "HR Recruitment",
          sot9: "Workforce Planning",
          sot10: "Employee Performance",
          sot11: "HR Training",
          sot12: "Mass Mobilization",
          sot13: "Time Tracking",
          sot14: "SI Web Services",
          sot15: "SI Existing Systems",
          sot16: "General Ledger",

          // Bottom Sticky Section
          bs1: "Helping our customers on every channel:",
          bs1a:"Choose your deployment platform",
          bs2: "OnCloud",
          bs3: "No capital cost",
          bs4: "Hosted",
          bs5: "Accessibility",
          bs6: "OnPremise",
          bs7: "Control over systems and data",
          bs8: "Outsourced",
          bs9: "Scalable and modular pricing",
          bs10: "An affordable monthly fee:",
          bs11: "On-Cloud is a progressive software deployment approach where the application software for human resource management is hosted on the Cloud and clients use a web browser to access the application. This ensures that clients can setup their own application almost immediately and benefit from a secure and scalable architecture without having to go through complex and time consuming software and hardware installations. Cloud ensures that clients benefit product enhancements with no downtime.",
          bs12: "Increased Scalability and Speed:",
          bs13: "Since companies no longer have to invest time in buying and setting up hardware and software, they can seamlessly scale up or down depending on their usage of services on the cloud.",
          bs14: "Use your web browser to access the application",
          bs15: "With the Hosted option gulfHR offers managed server hosting. gulfHR offers dedicated and virtual servers, managed by reputed 3rd party providers in the UK and KSA. Servers run on a secure SSL encrypted server platform, disaster recovery procedures, 24×7 on-site technicians and high physical security.",
          bs16: "On Premise Title",
          bs17: "Outsourced Title",
          bs18: "Ideal for sensitive business data",
          bs19: "The tried and tested traditional approach to software deployment and management. gulfHR is installed and operated from a client’s in-house server and computing infrastructure, utilizing an organization’s native computing resources and requires only a licensed copy of gulfHR.",
          bs20: "Only pay for the headcount and services you need.",
          bs21: "gulHR’s trusted HRMS solution, combined with regional expertise, now brings you HR Administration and payroll outsourcing for the Middle East region. Whether you are a bespoke small company with special payrolling requirements, or a larger SME seeking confidentiality, accuracy and timeliness, gulfHR had proven themselves to be a reliable business partner. gulfHR’s strength in payrolling lies in the controls and governance that is put in place.",

          // HR Management Section
          hrm1: "Human Resource Management",
          hrm2: "SAAS HR Software - Cloud HR System - Dynamic Management of Human Resources",
          hrm3: "Company Structure",
          hrm3_content:
            "Structure master, organisation structure, grade masters, job masters, company details, mail and workflow configuration, employee checklist master, company employee defaults.",
          hrm4: "All employment processes with checklists and approvals",
          hrm4_content:
            "Engagements, suspensions, reinstatements, transfers, terminations, employee status changes and movement history with full audit trails.",
          hrm5: "Data updates of employees",
          hrm5_content:
            "Personal details, bank details, passport issue, authorisation of data and bank detail changes, visa approvals, salary certificates issue and flight ticket changes.",
          hrm6: "General HR Administration",
          hrm6_content: "Licenses, visa & passport management, health cards, dependants and employee education and experience documentation.",
          hrm7: "Flight Ticket Module",
          hrm7_content: "Schemes, entitlements, accruals, approvals, encashment and adjustments.",
          hrm8: "Employee Surveys",
          hrm8_content: "New surveys, schedule per group, summary and detail statistics.",
          hrm9: "Accommodation module",
          hrm9_content: "Set-up, mapping and reporting.",
          hrm10: "Manage payroll and non-payroll related assets and benefits",
          hrm11: "Employee document expiry reminders and history of record keeping",
          hrm12: "Issuing of letters of appreciation and discipline",
          hrm13: "Management reporting",
          hrm14: "HR analytics",

          // Cloud Payroll Software Section
          cps1: "Cloud Payroll Software",
          cps2: "Multipurpose Payroll Software on Cloud - Unique Payroll Management System",
          cps3: "This flexible, robust payroll system caters for a comprehensive range of payroll calculations, including:",
          cps4: "All master data",
          cps4_content: "Basic salary, payroll deductions and earnings and income base calculations.",
          cps5: "Multiple payroll runs",
          cps5_content: "Default, leave and termination.",
          cps6: "Salary increases, pay-rate splits and back-dated calculation options",
          cps6_content: "Basic salary, leave and overtime.",
          cps7: "All monthly transactions",
          cps7_content: "Expense recoveries, miscellaneous earnings, time sheets, and leave benefits.",
          cps8: "Full payroll configuration",
          cps8_content: "Payroll run set-up, currency converting, payroll and time mapping, company calendars and calendar run groups.",
          cps9: "Full GOSI setup, calculations and reporting",
          cps10: "Ability to handle tax commutations/calculations",
          cps10_content: "For regions that require tax.",
          cps11: "GL interface facility",
          cps12: "Multiple reports",
          cps12_content:
            "Payroll master, payroll reconciliation, department summary, payroll YTD reports and final settlement reports. Create own reports with report writer. System generated payslips & bank transfer reports.",
          cps13: "Payroll bank transfer files",
          cps13_content: "According to government requirements.",
          cps14: "Leave",
          cps14_content: "Entitlements, accruals, advances and balances. Indemnity and leave liability balances.",
          cps15: "Flight ticket module",
          cps15_content: "Entitlements, accruals, adjustments and encashment.",
          cps16: "Overtime",
          cps16_content: "And time based allowances. Time and attendance approvals and integration.",
          cps17: "Ad hoc payment runs and transfers",
          cps17_content: "Including staff loans.",

          //Employee Leave Calculation
          elc1: "Employee Leave Calculation",
          elc2: "Employee Leave Calculation Multiple Employee Leave Management",
          elc3: "Known in the industry to be the most powerful and comprehensive functionality.",
          elc4: "Employee leave lookups, types, schemes, rules and summaries",
          elc4_content: `Leave entitlement calculations.
        Links to the organisation structure and payroll calculations.`,

          elc5_content: `Related to part-paid leave, i.e. sick leave, maternity leave.
Sick leave calculation and rules.`,
          elc5: "Leave portions",

          elc6: "Links to the organisation structure and payroll calculations",
          elc6_content: `Leave advance module.
Leave integration to time and attendance.`,
          elc7: "Multiple leave balance calculations",
          elc7_content: "Reconciliations, adjustment uploads, entitlement summaries, leave advances, accruals and forecast reports.",

          //Employee Reporting Tool
          ert1: "Employee Reporting Tool",
          ert2: "Dynamic Reporting Tool for Employees",
          ert3: "gulfHR has its own ‘end user’ dynamic in-built report writer, allowing you to access information stored on the database for reporting purposes. This report writer removes the hindrance of integration with a third party product.",
          ert4: "Creation of own reports",
          ert4_content: "From existing data and saving them for later use.",
          ert5: "Built in filter",
          ert5_content: "Allowing users to extract and sort data on reports before printing or saving.",
          ert6: "Export reports",
          ert6_content: `n csv, .xlsx (Excel), .docx (Word) and .pdf file formats.
Reports can be sent as attachments to emails from its saved location.`,

          ert7: "Customise",
          ert7_content: "Any report requirements unique to the client, including naming and setting the sequence of your own columns.",

          //Online Configuration Tools
          oct1: "Online Configuration Tools",
          oct2: "Scripts, Spreadsheets, Structure Process, Wages Protection System (WPS), etc.",
          oct3: "This module is technical in nature and provides the configuration mechanisms whereby the vendors’ consultants manage the installation, implementation, support and customisation (if required) of the gulfHR/Payroll solution.",
          oct4: "These tools allow for the set up and management:",
          oct5: "Workflow processes",
          oct5_content: "<b>Portal tools:</b> scripts<br><b>Other tools:</b> CSV upload tables",
          oct6: "All screen development",
          oct6_content: "Menu headers, details and rights, table and screen generation, attachment settings and audit trails, etc.",
          oct7: "Upload tools",
          oct7_content: "Spreadsheet upload, timesheet processes and expense recovery processes, etc.",
          oct8: "All new objects",
          oct8_content: "The organisation structure process, employee and user upload and the payroll master process.",

          //HR Approval Process Management
          apm1: "HR Approval Process Management",
          apm2: "Manage all HR processes that are in varying stages of approval",
          apm3: "This module allows for the approval of any predefined process by a designated manager.",
          apm4: "Master setup",
          apm4_content: "All processes that will require approval.",
          apm5: "Approval levels definition",
          apm5_content: "Processes requiring more than one level of approval.",
          apm6: "Reflection of comparative analysis between old and new value changes",
          apm6_content: "Available in employee self-service.",
          apm7: "Reports",
          apm7_content: "Reflecting all manager or HR processes that are in varying stages of approval – exception reports can also be produced.",

          // Employee Self Service Section
          ess1: "Employee Access to HR and Payroll",
          ess2: "HR Self Service, Employee Self Service Access to HR and Payroll",
          ess3: "Employee Self Service allows the employee the opportunity to participate personally in the HR and payroll process, as it relates to their job title.",
          ess4: "Employee leave, short leave and return from leave applications",
          ess4_content: `Monthly leave summaries and entitlements.
Online approvals by manager.`,
          ess5: "Online data change requests",
          ess5_content: "Personal data, dependant data and passport data.",
          ess6: "Full personal details viewing",
          ess6_content: `Managers can also view subordinates details.
Electronic submitting of info to HR.
Employee master lists and details.`,
          ess7: "Online electronic payslip",
          ess7_content: "Online loan application and report.",
          ess8: "Timesheet submission and approval",
          ess8_content: "Time and attendance review and manager approval.",
          ess9: "Overseas training and business trips",
          ess9_content: "Internal and external job applications.",
          ess10: "Documentation viewing",
          ess10_content:
            "Payroll history and timesheet details.<br>" +
            "Document expiry notifications.<br>" +
            "Document uploading & issue tracking.<br>" +
            "Variety of document and status requests: salary certificates, passports, visas, licenses etc.",
          ess11: "Policy manual viewing and helpdesk",
          ess11_content: `The Client can define, publish and amend its policy manual on-line.
All employees can access and view this manual in the employee self-service portal.
All news announcements and bulletins can also be posted with employees enjoying the same levels of access and viewing.`,
          ess12: "Logging and prioritising of all issues, disputes and grievances",
          ess12_content: `Refund requests and expense claims.
Document uploading & issue tracking.`,

          // HR Recruitment Management Section
          rm1: "HR Recruitment Management",
          rm2: "Vacancies, Candidate Management",
          rm3: "This module provides a manager with tools to manage recruitment activity.",
          rm4: "List of vacancies",
          rm4_content: "Direct linkage to job descriptions.<br> Actions taken by HR to fill all vacancies (candidate management).",
          rm5: "Online application for vacancies",
          rm5_content:
            "Internal and external.<br> Candidate login to update CV and link to vacancies. <br>Link to clients recruitment web-site and predefined agency access (if required).",
          rm6: "Applicant databank",
          rm6_content:
            "Candidate management: pre-screening, screening and evaluation.<br> Automatic data transfer once successful applicants become actual employees.",
          rm7: "Complete online interview process",
          rm7_content: "Scheduling of interviews, drawing up of questionnaires, management of the interview process etc.",
          rm8: "Recruitment and company employee letters generation",
          rm8_content: "i.e. offer letters, job offer master, status and reporting.",
          rm9: "Document uploading",
          rm9_content: "CV’s, photographs, contracts, letters of reference.",
          rm10: "Search facility",
          rm10_content: "For candidate or applicant CV’s.",

          //Workforce Planning
          wp1: "Workforce Planning",
          wp2: "Manpower Planning – Workforce Management",
          wp3: "This module provides the HR and Line managers with online information regarding:",
          wp3_1: "Company and job title skills definition",
          wp3_2: "Manpower and succession planning",
          wp3_3: "Job costing, budgeting and forecasting",
          wp3_4: "YTD manpower reporting",

          //Employee Performance Management
          epm1: "Employee Performance Management",
          epm2: "Succession Planning and Workforce Plan Evaluation",
          epm3: "This module allows HR and Management to create, manage and evaluate the skills or competencies required by a particular person for a particular job.",
          epm4: "It also allows HR and Management to create, manage and evaluate these skills or competency assessment questionnaires as a development tool for employees.",
          epm5: "It includes the following functions:",
          epm5_1: "Employee skills",
          epm5_2: "Evaluation and succession process flow",
          epm5_3: "Creation of job goals and attribute framework (job profiling)",
          epm5_4: "Creation of KPIs (key performance indicators) and KPI ‘weightings’",
          epm5_5: "Online targets, self-assessment, manager assessment",
          epm5_6: "2nd and 3rd level acknowledgements",
          epm5_7: "360 competency questionnaire and assessment setup",
          epm5_8: "Self Service completion of questionnaire by participants",
          epm5_9: "HR assessments management and analysis",
          epm5_10: "Assessment feedback and reporting: employee development recommendations",
          epm5_11: "Interface with training: requirements and availability of specific training courses",
          epm5_12: "Performance document master and upload facility",

          //Human Resources Training Management
          hrt1: "Human Resources Training Management",
          hrt2: "Training Plans, Training Course Management",
          hrt3: "This module allows the HR and Line managers an opportunity to conduct training more professionally.",
          hrt4: "This module manages the following functions:",
          hrt4_1: "Training action plans",
          hrt4_2: "Training requests and scheduling",
          hrt4_3: "Course management",
          hrt4_4: "Training venues, providers and course material evaluation with reporting",
          hrt4_5: "Provision for internal and external training",
          hrt4_6: "Training skills mapping",
          hrt4_7: "Training costing and budgeting",
          hrt4_8: "Interface with performance management",

          //Mass Mobilization
          mm1: "Mass Mobilization",
          mm2: "Mass Mobilization of Employees – Demobilization of Work Groups",
          mm3: "This module allows the Employer to simultaneously process and track administrative tasks of large batches of employees.",
          mm4: "This applies mainly to the construction industry:",
          mm4_1: "Mass transfer of work groups between projects",
          mm4_2: "Engagement/Termination/Demobilisation of work groups",
          mm4_3: "Mass application, processing and renewal of documents including licence, visas, health cards and passports",

          // Employee Time Tracking Section
          ett1: "Employee Time Tracking",
          ett2: "Employee Timesheet software – Time Management Module",
          ett3: "This module manages the time-keeping and absenteeism levels of the employees utilising a number of different options.",
          ett4: "Time and attendance",
          ett4_content:
            "This functionality manages the employee's attendance, calculates the overtime worked and links the designated overtime with payroll. It also enables managers to approve the overtime which has been calculated by the Time and Attendance system.",
          ett5: "It includes the following:",
          ett5_1: "Shift codes and patterns definition",
          ett5_2: "Shift pattern mapping",
          ett5_3: "Calculation of daily time and attendance through integration with clocking system",
          ett5_4: "Integration of all leave records, short leave, overseas training and business trips",
          ett5_5: "Manager approval of normal time and overtime (through Self-Service)",
          ett5_6: "Overtime and Time and Attendance reporting",
          ett5_7: "Approved overtime posting to Payroll",
          ett5_8: "Payroll deductions due to lateness",
          ett6: "Timesheets/Project timesheets",
          ett6_content:
            "This functionality tracks the number of hours worked by the team on a client’s project. It gives the line manager flexibility to approve the hours worked by a team member at the same time see the activity/s they are performing for a project.",
          eet6_sub: "It also tracks the overtime hours worked:",
          eet6_1: "Set-up screens for clients, rates, activities and projects",
          eet6_2: "Multiple set-up options for shifts, calendars, over-time rates, cost-centres and approval levels",
          eet6_3: "Timesheet upload facility",
          eet6_4: "Integration with absence and leave",
          eet6_5: "Project owner timesheet report",
          eet6_6: "Timesheet submission and approval function",
          eet6_7: "Project schedule report",
          eet6_8: "Project billing report",

          //System Integration through web services
          sit1: "System Integration through web services",
          sit: "We support integration to other systems",
          sit3: "gulfHR support integration to other systems via web-services.",
          sit4: "Interfaces are in place for:",
          sit4_1: "Employee master creation",
          sit4_2: "Payroll master",
          sit4_3: "Termination",
          sit4_4: "Salary increases",
          sit4_5: "Promotions",
          sit4_6: "Time and attendance clocking data",

          // System Integration Section
          si1: "System Integration to Existing Systems",
          si2: "General Ledger Interface with any Time & Attendance device",
          si3: "The general ledger interface operates with the following financial systems:",
          si3_1: "Microsoft Great Plains",
          si3_2: "Navision",
          si3_3: "SAP",
          si3_4: "Oracle",
          si3_5: "SAGE",
          si3_6: "Accpac",
          si3_7: "JD Edwards",
          si3_8: "Peachtree",
          si4: "The payroll can be directly interfaced with the processing engine which feeds off the time and attendance access control.",
          si5: "This can be done directly with the time and attendance database or through web services.",
          si6: "gulfHR can be interfaced with any Time & Attendance device where the clocking data is stored on a SQL based database.",

          //General Ledger Interface
          gli1: "General Ledger Interface",
          gli2: "Payroll Ledger Interface",
          gli3: "The main key integration usually necessary for a successful implementation of gulfHR is the General Ledger (GL) interface.",
          gli3_1:
            "This interface transfers monthly payroll information, at a summary or detail level (depending on client requirements), into the correct table ready for posting into the General Ledger module of the client’s financial system.",
          gli3_2:
            "This integration can either be direct – i.e. a direct interface into the financial systems ‘back-end’ or indirect – the GL summaries will be exported to excel and from there pushed or uploaded into the clients financial system.",
        },
      },
      ar: {
        translation: {
          // Navbar
          Home: "الرئيسية",
          "Service Offering": "عروض الخدمة",
          Contact: "إتصل بنا",
          "Book a Demo": "حجز تجربة",

          //Contact Us
          c1: "متحمسون للعمل معك! gulfHR",
          c2: "إذا كنت ترغب في أن يقوم أحد مستشارينا بمناقشة متطلباتك الفريدة، يرجى ملء النموذج أدناه، وسوف نتصل بك.",
          c3: "البريد الالكتروني:",
          c4: "المملكة العربية السعودية:",
          c5: "البحرين،قطر:",
          c6: "الإمارات، عمان:",
          c7: "أخرى:",
          //form
          firstName: "الاسم الأول",
          lastName: "الاسم الاخير",
          contact: "رقم هاتف التواصل",
          whatsapp: "رقم الواتساب",
          employee: "عدد الموظفين",
          companyWeb: "الموقع الالكتروني للشركة",
          email: "البريد الالكتروني",
          country: "الدولة",
          freeDemo: "اود ان احجز فترة تجريبية مجانية",
          message: "رسالتك",
          button: "الاتصال بـ gulfHR",

          // Home Banner
          "hb-1": "نظام قوي لإدارة الرواتب والموارد البشرية",
          "hb-2":
            "يمتلك نظام GulfHR في جوهره محرك معالجة قوي. أنت تعمل بشكل أكثر ذكاءً، بينما تتصل جميع وظائف الموارد البشرية على الفور من خلال مشاركة المعلومات في الوقت الفعلي.",
          "hb-3": "إبدا",
          "hb-4": "عرض الخدمات",

          // Home Sticky Bar
          "hsb-1": "بديهية وموفرة للوقت وسهلة الاستخدام.",
          "hsb-2": "(HMS) وبرنامج إدارة الرواتب الخاص بنظام GulfHR يعتبر العنصر الأساسي لإدارة المواردالبشرية الأكثر قيمة لمؤسستك.",
          "hsb-3": "سحابة الموارد البشرية",
          "hsb-4": "أفضل الممارسات ومعايير الصناعة وإدارة رأس المال البشري SaaS أينما ذهبت.",
          "hsb-5": "تحليلات ومقاييس الموارد البشرية",
          "hsb-6": "قم بتضمين التحليلات على لوحة المعلومات لتوفير أساس سليم لاتخاذ القرار من خلال واجهة مستخدم يمكن إدارتها بسهولة.",
          "hsb-7": "الوقت والحضور",
          "hsb-8": "إدارة حضور الموظفين وإنتاجيتهم، مع التكامل مع وظائف إدارة الرواتب والإجازات. ",
          "hsb-9": "خدمات القيمة المضافة",
          "hsb-10": "الاستشارات والتدريب وتطوير الويب والتطبيقات وغيرها من الحلول ذات القيمة المضافة لتحسين إدارة الموارد البشرية.",
          "hsb-11": "الربط مع التطبيقات الأخرى",
          "hsb-12": "خبرة معروفة في القياسات الحيوية وتتبع الوقت والتكامل المالي.",
          "hsb-13": "الوقت والحضور",
          "hsb-14": "إدارة حضور الموظفين وإنتاجيتهم، مع التكامل مع وظائف إدارة الرواتب والإجازات.",

          // Home Video Content
          "hvc-1":
            "يمكن للعملاء البدء بنظامنا الشامل (جميع الوحدات) أو البدء بنظامنا الأساسي والتوسع في مرحلة لاحقة وفقًا لمتطلبات الميزانية والوظائف.",
          "hvc-2":
            "يشتمل النظام الأساسي عادةً على كشوف المرتبات وإدارة الإجازات وإدارة الموارد البشرية وكتابة التقارير وإدارة المستندات ووحدات الأمان وغالبًا ما يتم دمجها مع الخدمة الذاتية للموظفين وإدارة الوقت.",
          "hvc-3": "ويتم بعد ذلك إضافة وحدات مثل إدارة الأداء والتعلم والتطوير والتوظيف أو أي مجموعة منها في مرحلة لاحقة.",

          // Bottom Section
          "hbs-1": "اجعل رأس المال البشري متنقل مع تطبيقنا الخاص بالهواتف المحمولة",
          "hbs-2": "الاتصال بـ GulfHR",
          "hbs-3": "إستعراض عرض الخدمة",

          // Three Divs
          tdf1: "البيئات الصعبة؟.",
          "tdf1.5": "لا مشكلة.",
          tdf2: "بغض النظر عن مدى تعقيد بيئتك، فإن GulfHR  سوف تقدم لك الخدمة مع كونها بسيطة بالنسبة للمستخدمين.",
          tdf3: "تدريب ودعم استثنائي للعملاء، مع توفر التخصيصات والنسخ الاحتياطي الفني بسهولة.",
          tdf4: "برنامج مخصص للموارد البشرية وكشوف المرتبات لدبي والإمارات العربية المتحدة والبحرين والمملكة العربية السعودية والكويت وقطر وعمان والعراق ومصر وباكستان والأردن وليبيا والجزائر والمزيد ...",
          tdf5: "بالإضافة إلى هذه البلدان، يمكننا أيضًا تخصيص برامجنا لاستخدامها في العديد من البلدان الأخرى بما في ذلك (على سبيل المثال لا الحصر) العراق وأفغانستان وسريلانكا.",

          tdf6: "قوة الأتمتة والتفاعل.",
          tdf7: "عمليات الموارد البشرية بسيطة وبديهية. يتولى المديرون المباشرون والموظفون مسؤولية مهام الموارد البشرية ذات الصلة.",
          tdf8: "نظام متكامل لإدارة الموارد البشرية HRMS) ) يتم تطويره من قبل مجموعة حلول الخليج، إحدى شركات البرمجيات الأكثر شهرة في منطقة الشرق الأوسط وأفريقيا.",

          tdf9: "ُنع في الشرق الأوسط، لمنطقة الشرق الأوسط وخارجها.",
          tdf10: "تم تنفيذه في الإمارات العربية المتحدة والمملكة العربية السعودية والبحرين والكويت وقطر وعمان والأردن ومصر وليبيا والجزائر وباكستان.",
          tdf11: "يمكن أيضًا عرض نظام GulfHR  بواجهة اللغة العربية.",

          // Home Feature
          "hfs-1": "بسيط. القابلة للتطوير. مرن. ودي. بسعر معقول.",
          "hfs-2":
            "تسمح وحدة الأمان القوية للمستخدم المدير بتحديد امكانيات الوصول الانتقائي للمستخدمين والبيانات التي يحتاجونها، في 'الوقت الفعلي' ومن أي مكان.",
          "hfs-3": "بوابة الخدمة الذاتية للموظفين",
          "hfs-4": "يشارك الموظفون في' العملية عبر الإنترنت، ويصلون إلى المعلومات الخاصة بهم من خلال خاصية الخدمة الذاتية للموظف'",

          //Time to Implement
          "tt-1": "الوقت للتنفيذ",
          "tt-2": "تسهل مرفقات البيانات القوية لـ GulfHR تنفيذ نظام إدارة الموارد البشرية بسرعة وسهولة.",
          "tt-3": "يتم تحميل البيانات بالجملة عبر جدول بيانات Excel",
          "tt-4": "بالتعاون مع العميل، يتم إنتاج الرواتب الموازية عادةً في نهاية الشهر الأول",
          "tt-5": "يمكن إنتاج الرواتب الحية في نهاية الشهر الثاني",
          "tt-6": "يمكن إنتاج رواتب الوقت والحضور المتكاملة من الشهر الثالث فصاعدًا.",
          "tt-7": "البدء",

          // Footer
          f1: "نظام قوي لإدارة الموارد البشرية والرواتب",
          f2: "الحلول الخليجية المبتكرة لتقنية المعلومات، الرياض، المملكة العربية السعودية",
          f3: "حلول الخليج المبتكرة ذ.م.م، سار، البحرين",
          f4: "مجموعة حلول الخليج منطقة حرة ذ.م.م، مدينة دبي للإنترنت،",
          f5: "الإمارات العربية المتحدة.",
          f6: "للدعم",
          f7: "البريد الالكتروني:",
          f8: "المملكة العربية السعودية:",
          f9: "البحرين ,قطر:",
          f10: "الامارات،عمان",
          f11: "اخرى:",
          f12: "© 2023. جميع الحقوق محفوظة.",
          f13: "تم تطوير الموقع بواسطة ",

          //contactus
          cu1: "يسعدنا في شركة GulfHR أن نعمل معك!",
          cu2: "إذا كنت ترغب في أن يقوم أحد مستشارينا بمناقشة متطلباتك الفريدة معك، فيرجى ملء النموذج أدناه، وسوف نتصل بك.",
          cuf1: "تواصل معنا!",
          cuf2: "الاسم الأول",
          cuf3: "الاسم الأول",
          cuf4: "اتصل هاتف",
          cuf5: "رقم الواتس اب",
          cuf6: "عدد الموظفين",
          cuf7: "موقع الشركة",
          cuf8: "بريد إلكتروني",
          cuf9: "دولة",
          cuf10: "أرغب في حجز عرض توضيحي مجاني",
          cuf11: "رسالتك",
          cuf12: "اتصال gulfHR",

          //service offering
          so1_1: "عرض ",
          so1_2: "الخدمة",
          so2: " في جوهرة محرك معالجة قوي.انت تعمل بشكل اكثر ذكاءً،بينما تتصل جميع وظائف الموارد البشرية على الفور من خلال مشاركة المعلومات في الوقت الفعلي.GulfHR كنظام شامل لإدارة الموارد البشرية والرواتب يمتلك نظام",
          so3: "انقر فوق عناوين عرض الخدمة أدناه للتنقل السريع، أو قم بالتمرير لأسفل الصفحة لعرض كل منها على حدة.",

          // Service Navigation Items
          so0:"قائمة طعام",
          sot1: "إدارة الموارد البشرية",
          sot2: "نظام الرواتب",
          sot3: "إجازة الموظفين",
          sot4: "تقرير الموظفين",
          sot5: "التكوين عبر الإنترنت",
          sot6: "عملية موافقة الموارد البشرية",
          sot7: "الخدمة الذاتية للموظف",
          sot8: "توظيف الموارد البشرية",
          sot9: "تخطيط القوى العاملة",
          sot10: "اداء الموظف",
          sot11: "تدريب الموارد البشرية",
          sot12: "التعبئة الجماهيرية",
          sot13: "تتبع الوقت",
          sot14: "SI Web Services",
          sot15: "SI Existing Systems",
          sot16: "دفتر الأستاذ العام",

          bs1: "مساعدة عملائنا على كافة القنوات",
          bs0: "اختر منصة النشر الخاصة بك",
          bs2: "OnCloud",
          bs3: "لا توجد تكلفة رأسمالية",
          bs4: "مُستضاف",
          bs5: "إمكانية الوصول",
          bs6: "OnPremise",
          bs7: "التحكم في الأنظمة والبيانات في الموقع",
          bs8: "الاستعانة بمصادر خارجية",
          bs9: "أسعار قابلة للتطوير والتعديل",
          bs10: "رسوم شهرية معقولة:",
          bs11: "إن On-Cloud هو نهج نشر برمجي تقدمي حيث يتم استضافة برنامج التطبيق لإدارة الموارد البشرية على السحابة ويستخدم العملاء متصفح ويب للوصول إلى التطبيق. وهذا يضمن أن يتمكن العملاء من إعداد تطبيقهم الخاص على الفور تقريبًا والاستفادة من بنية آمنة وقابلة للتطوير دون الحاجة إلى المرور بعمليات تثبيت برامج وأجهزة معقدة وتستغرق وقتًا طويلاً. تضمن السحابة أن يستفيد العملاء من تحسينات المنتج دون توقف.",
          bs12: "زيادة قابلية التوسع والسرعة:",
          bs13: "نظرًا لأن الشركات لم تعد مضطرة إلى استثمار الوقت في شراء وإعداد الأجهزة والبرامج، فيمكنها التوسع أو تقليص حجمها بسلاسة اعتمادًا على استخدامها للخدمات على السحابة.",
          bs14: "عنوان مستضاف",
          bs15: "لوريم إيبسوم دولور سيت أميت، consectetur adipiscing إيليت. ولكن قد يحدث وقت طويل من العمل والألم الكبير.",
          bs16: "عنوان في الموقع",
          bs17: "عنوان خارجي",
          bs18: "مثالي لبيانات الأعمال الحساسة",
          bs19: "النهج التقليدي المجرب والمختبر لنشر البرامج وإدارتها. يتم تثبيت gulfHR وتشغيله من خادم العميل الداخلي والبنية الأساسية للحوسبة، باستخدام موارد الحوسبة الأصلية للمؤسسة ولا يتطلب سوى نسخة مرخصة من gulfHR.",
          bs20: "ادفع فقط مقابل عدد الموظفين والخدمات التي تحتاجها.",
          bs21: "بفضل حلول إدارة الموارد البشرية الموثوقة من gulHR، جنبًا إلى جنب مع الخبرة الإقليمية، يمكنك الآن إدارة الموارد البشرية وتعهيد الرواتب لمنطقة الشرق الأوسط. سواء كنت شركة صغيرة مخصصة ذات متطلبات خاصة في مجال الرواتب، أو شركة صغيرة ومتوسطة الحجم تبحث عن السرية والدقة والالتزام بالمواعيد، فقد أثبتت gulHR أنها شريك تجاري موثوق. تكمن قوة gulHR في مجال الرواتب في الضوابط والحوكمة التي يتم تطبيقها.",

          // HR Management Section
          hrm1: "دفتر الأستاذ العام",
          hrm2: "برنامج  SAASللموارد البشرية - نظام الموارد البشرية السحابي – الإدارة الديناميكية للموارد البشرية",
          hrm3: "هيكل الشركة",
          hrm3_content:
            "الهيكل الرئيسي، والهيكل التنظيمي، والدرجات الرئيسية، والوظائف الرئيسية، وتفاصيل الشركة، وتكوين البريد وسير العمل، والقائمة المرجعية الرئيسية للموظفين، والافتراضيات الخاصة بموظفي الشركة.",
          hrm4: "جميع عمليات التوظيف مع قوائم المراجعة والموافقات",
          hrm4_content:
            "المشاركات، التعليقات، الإعادة إلى الوظيفة، التحويلات، إنهاء الخدمة، تغييرات حالة الموظف، وسجل الانتقالات الوظيفية مع مسارات التدقيق الكاملة.",
          hrm5: "تحديث بيانات الموظفين",
          hrm5_content:
            "التفاصيل الشخصية، التفاصيل المصرفية، إصدار جواز السفر، تفويض البيانات وتغييرات التفاصيل المصرفية، الموافقات على التأشيرة، إصدار شهادات الرواتب وتغييرات تذكرة الطيران.",
          hrm6: "الإدارة العامة للموارد البشرية",
          hrm6_content: "التراخيص، إدارة التأشيرات، جوازات السفر، البطاقات الصحية، المعالين، تعليم الموظفين ووثائق الخبرة.",
          hrm7: "نموذج تذاكر الطيران",
          hrm7_content: "المخططات، الاستحقاقات، المستحقات، الموافقات، الصرف والتعديلات.",
          hrm8: "استطلاعات رأي الموظفين",
          hrm8_content: "استطلاعات جديدة، الجدول الزمني لكل مجموعة، ملخص، وإحصائيات تفصيلية.",
          hrm9: "نموذج الاقامة ( السكن )",
          hrm9_content: "الإعداد، التخطيط وإعداد التقارير.",
          hrm10: "إدارة كشوف المرتبات والأصول والمزايا غير المتعلقة بكشوف المرتبات",
          hrm11: "تذكير بانتهاء صلاحية مستند الموظف وتاريخ حفظ السجلات",
          hrm12: "إصدار خطابات التقدير والانضباط",
          hrm13: "التقارير الإدارية",
          hrm14: "تحليلات الموارد البشرية",

          // Cloud Payroll Software Section
          cps1: "برنامج رواتب سحابي",
          cps2: "برنامج كشوف المرتبات متعدد الأغراض على السحابة - نظام فريد لإدارة الرواتب",
          cps3: "يلبي نظام الرواتب المرن والقوي هذا مجموعة شاملة من حسابات الرواتب، بما في ذلك:",
          cps4: "جميع البيانات الرئيسية",
          cps4_content: "الراتب الأساسي، استقطاعات الرواتب، حسابات الأرباح وقاعدة الدخل.",
          cps5: "إجراء كشوف المرتبات المتعددة",
          cps5_content: "الإفتراضي، الإجازة والإنهاء من العمل.",
          cps6: "زيادات الرواتب، وتقسيم معدلات الأجور، وخيارات الحساب بتواريخ سابقة",
          cps6_content: "الراتب الأساسي، الإجازات والعمل الإضافي.",
          cps7: "جميع المعاملات الشهرية",
          cps7_content: "استرداد النفقات، الأرباح المتنوعة، الجداول الزمنية ومزايا الإجازات.",
          cps8: "التكوين الكامل للرواتب",
          cps8_content: "إعداد تشغيل كشوف المرتبات، تحويل العملات، الرواتب والتخطيط الزمني، تقويمات الشركة، ومجموعات تشغيل التقويم.",
          cps9: "الإعداد الكامل للتأمينات الاجتماعية، والحسابات، وإعداد التقارير",
          cps10: "القدرة على التعامل مع تخفيف الضرائب / الحسابات",
          cps10_content: "بالنسبة للمناطق التي تتطلب الضريبة.",
          cps11: "إنشاء الواجهة وإعداد حساب GL  ورسم الخرائط والبحث مع إمكانية إعداد التقارير (تفاصيل الواجهة والتقارير الموجزة).",
          cps12: "التقارير المتعددة",
          cps12_content:
            "كشوف المرتبات الرئيسية، وتسوية كشوف المرتبات، وملخص القسم، وتقارير كشوف المرتبات منذ بداية العام، وتقارير التسوية النهائية." +
            "إنشاء التقارير الخاصة بك مع كاتب التقرير.كشوف المرتبات التي ينشئها النظام وتقارير التحويل المصرفي.",
          cps13: "ملفات التحويل البنكي للرواتب",
          cps13_content: "وفقا لمتطلبات الحكومة.",
          cps14: "إجازة",
          cps14_content: `الاستحقاقات، المستحقات، السلفيات والأرصدة.
أرصدة التعويضات والتزامات الإجازات.`,
          cps15: "نموذج تذاكرالطيران",
          cps15_content: "الاستحقاقات، المستحقات، التسويات والصرف.",
          cps16: "العمل الإضافي",
          cps16_content: `البدلات على أساس الوقت.
موافقات الوقت والحضور والتكامل.`,
          cps17: "عمليات الدفع والتحويلات المخصصة",
          cps17_content: "بما في ذلك قروض الموظفين",

          //Employee Leave Calculation
          elc1: "حساب إجازات الموظف",
          elc2: "حساب إجازة الموظف إدارة إجازات الموظفين المتعددة",
          elc3: "معروف في الصناعة بأنه الوظيفة الأقوى والأكثر شمولاً.",
          elc4: "حساب إجازات الموظف",
          elc4_content: `حسابات استحقاق الإجازة.
روابط للهيكل التنظيمي وحسابات الرواتب.`,
          elc5: "أجزاء من الإجازة",
          elc5_content: `تتعلق بالإجازة مدفوعة الأجر جزئياً، أي الإجازة المرضية، وإجازة الأمومة.
حساب الإجازة المرضية وقواعدها.`,
          elc6: "روابط للهيكل التنظيمي وحسابات الرواتب",
          elc6_content: `النموذج المتقدم للإجازة.
ربط الإجازة مع  الوقت والحضور.`,
          elc7: "حسابات رصيد الإجازات المتعددة",
          elc7_content: "التسويات، تحميل التعديلات، ملخصات الاستحقاقات، سلف الإجازات، الاستحقاقات، وتقارير التنبؤ.",

          //Employee Reporting Tool
          ert1: "أداة تقرير الموظف",
          ert2: "أداة إعداد التقارير الديناميكية للموظفين",
          ert3: "لدى gulfHR  كاتب تقارير ديناميكي مدمج \"للمستخدم \"، مما يسمح لك بالوصول إلى المعلومات المخزنة في قاعدة البيانات لأغراض إعداد التقارير. يزيل كاتب التقرير هذا عائق الربط مع منتج خارجي.",
          ert4: "إنشاء التقارير الخاصة",
          ert4_content: "من البيانات الموجودة وحفظها لاستخدامها لاحقا.",
          ert5: "أداة فرز مدمجة",
          ert5_content: "السماح للمستخدمين باستخراج البيانات في التقارير وفرزها قبل طباعتها أو حفظها.",
          ert6: "تصدير التقارير",
          ert6_content: `بتنسيقات ملفات:
csv, xlsx (Excel), docx (Word) and pdf.
يمكن إرسال التقارير كمرفقات إلى البريد الإلكتروني من موقعها المحفوظ.`,
          ert7: "التعديل",
          ert7_content: "أي متطلبات فريدة للعميل بالنسبة للتقارير، بما في ذلك تسمية وتعيين تسلسل الأعمدة الخاصة بك.",

          //Online Configuration Tools
          oct1: "أدوات التكوين عبر الإنترنت",
          oct2: "أداة إعداد التقارير الديناميكية للموظفين",
          oct3: "البرامج النصية، وجداول البيانات، وعملية الهيكلة، ونظام حماية الأجور (WPS)، وما إلى ذلك.",
          oct4: "هذه الوحدة تقنية بطبيعتها وتوفر آليات التكوين التي من خلالها يقوم مستشارو البائعين بإدارة التثبيت والتنفيذ والدعم والتخصيص (إذا لزم الأمر) نظام رواتب gulfHR",
          oct5: "عمليات مجرى العمل",
          oct5_content: `Portal tools: scripts
Other tools: CSV upload tables`,
          oct6: "جميع تطويرات الشاشة",
          oct6_content: "رؤوس القائمة، تفاصيلها، حقوقها، إنشاء الجداول والشاشات، إعدادات المرفقات، ومسارات التدقيق، وما إلى ذلك.",
          oct7: "أداة التحميل",
          oct7_content: "تحميل جدول البيانات، عمليات الجدول الزمني، عمليات استرداد النفقات، وما إلى ذلك.",
          oct8: "جميع الكائنات الجديدة",
          oct8_content: "عملية الهيكل التنظيمي، تحميل بيانات الموظفين والمستخدمين، العملية الرئيسية لكشوف المرتبات.",

          //HR Approval Process Management
          apm1: "إدارة عملية موافقة الموارد البشرية",
          apm2: "إدارة جميع عمليات الموارد البشرية التي هي في مراحل مختلفة من الموافقة",
          apm3: "يسمح هذا النموذج بالموافقة على أي عملية محددة مسبقًا بواسطة مدير معين.",
          apm4: "الإعداد الرئيسي",
          apm4_content: "جميع العمليات التي سوف تتطلب الموافقة.",
          apm5: "تعريف مستويات الموافقة",
          apm5_content: "العمليات التي تتطلب أكثر من مستوى واحد من الموافقة.",
          apm6: "انعكاس التحليل المقارن بين تغيرات القيمة القديمة والجديدة",
          apm6_content: "متوفر في الخدمة الذاتية للموظفين.",
          apm7: "التقارير",
          apm7_content: "تعكس جميع عمليات المدير أو الموارد البشرية التي هي في مراحل مختلفة من الموافقة - ويمكن أيضًا إنتاج تقارير الاستثناء.",

          // Employee Self Service Section
          ess1: "ولوج الموظف إلى الموارد البشرية وكشوف المرتبات",
          ess2: "الخدمة الذاتية للموارد البشرية، وصول الخدمة الذاتية للموظف إلى الموارد البشرية وكشوف المرتبات",
          ess3: "تتيح الخدمة الذاتية للموظفين الفرصة للموظف بالمشاركة شخصيًا في عملية الموارد البشرية وكشوف المرتبات، من حيث صلتها بالمسمى الوظيفي.",
          ess4: "طلبات إجازة الموظف والإجازة القصيرة والعودة من الإجازة",
          ess4_content: `ملخصات الإجازات الشهرية ومستحقاتها
الموافقات عن بُعد من قِبَل المدير.`,
          ess5: "طلبات تغيير البيانات عبر الإنترنت",
          ess5_content: "البيانات الشخصية، بيانات التابعين وبيانات جواز السفر.",
          ess6: "عرض التفاصيل الشخصية الكاملة",
          ess6_content: `يمكن للمديرين أيضًا عرض تفاصيل المرؤوسين.
إرسال المعلومات إلكترونيًا إلى الموارد البشرية.
القوائم الرئيسية للموظفين والتفاصيل.`,
          ess7: "قسيمة الدفع الإلكترونية عبر الإنترنت",
          ess7_content: "طلب القروض والتقارير عبر الانترنت",
          ess8: "تقديم الجدول الزمني والموافقة",
          ess8_content: "مراجعة الوقت والحضور وموافقة المدير.",
          ess9: "التدريب في الخارج ورحلات العمل",
          ess9_content: "طلبات العمل الداخلية والخارجية.",
          ess10: "عرض الوثيقة",
          ess10_content: `سِجل الرواتب وتفاصيل الجدول الزمني.
إشعارات انتهاء صلاحية المستندات.
تحميل المستندات وتتبع المشكلات.
مجموعة متنوعة من طلبات المستندات والحالة: شهادات الرواتب وجوازات السفر والتأشيرات والتراخيص وما إلى ذلك.`,

          ess11: "عرض دليل السياسة والمساعدة",
          ess11_content: `يمكن للعميل تحديد ونشر وتعديل دليل السياسة الخاص به عبر الإنترنت.
يمكن لجميع الموظفين الوصول إلى هذا الدليل والاطلاع عليه في بوابة الخدمة الذاتية للموظفين.
يمكن أيضًا نشر جميع الإعلانات والنشرات الإخبارية مع تمتع الموظفين بنفس مستويات الوصول والعرض.`,

          ess12: "تسجيل الدخول وتحديد اولويات المشاكل والنزاعات والمظالم",
          ess12_content: `طلبات استرداد الأموال ومطالبات النفقات.
تحميل المستندات وتتبع المشكلات.`,

          // HR Recruitment Management Section
          rm1: "إدارة توظيف الموارد البشرية",
          rm2: "الوظائف الشاغرة، إدارة المرشحين",
          rm3: "يوفر هذا النموذج للمدير الأدوات اللازمة لإدارة نشاط التوظيف.",
          rm4: "قائمة الوظائف الشاغرة",
          rm4_content: `الارتباط المباشر بالوصف الوظيفي.
الإجراءات التي اتخذتها إدارة الموارد البشرية لملء جميع الوظائف الشاغرة (إدارة المرشحين).`,

          rm5: "التقديم عبر الإنترنت للوظائف الشاغرة",
          rm5_content: `داخلي وخارجي.
يقوم المرشح بتسجيل الدخول لتحديث السيرة الذاتية والارتباط بالوظائف الشاغرة
رابط إلى موقع توظيف العملاء والوصول إلى الوكالة المحددة مسبقًا (إذا لزم الأمر).`,

          rm6: "بنك بيانات مقدم الطلب",
          rm6_content: `إدارة المرشح: الفحص المسبق والفحص والتقييم.
نقل البيانات تلقائيًا بمجرد أن يصبح المتقدمون الناجحون موظفين فعليين.`,
          rm7: "استكمال عملية المقابلة عبر الإنترنت",
          rm7_content: "جدولة المقابلات، وإعداد الاستبيانات، وإدارة عملية المقابلة، وما إلى ذلك.",
          rm8: "التوظيف وتوليد خطابات موظفي الشركة",
          rm8_content: "على سبيل المثال، خطابات العرض، عرض الوظيفة الرئيسي، الحالة، والتقارير.",
          rm9: "تحميل الوثيقة",
          rm9_content: "السير الذاتية، الصور الفوتوغرافية، العقود، خطابات التوصية.",
          rm10: "البحث عن المنشاءة",
          rm10_content: "بالنسبة للسيرة الذاتية للمرشح أو مقدم الطلب.",

          //Workforce Planning
          wp1: "تخطيط القوى العاملة",
          wp2: "تخطيط القوى العاملة – إدارة القوى العاملة",
          wp3: "توفر هذه الوحدة لمديري الموارد البشرية ومديري الخطوط المعلومات عبر الإنترنت فيما يتعلق بما يلي:",
          wp3_1: "تعريف مهارات الشركة والمسمى الوظيفي",
          wp3_2: "القوى العاملة وتخطيط النجاحات",
          wp3_3: "تكلفة الوظيفة، والميزانية، والتنبؤ",
          wp3_4: "تقارير القوى العاملة منذ بداية العام",

          //Employee Performance Management
          epm1: "إدارة أداء الموظفين",
          epm2: "تخطيط التعاقب وتقييم خطة القوى العاملة",
          epm3: "تسمح هذه الوحدة للموارد البشرية والإدارة بإنشاء وإدارة وتقييم المهارات أو الكفاءات التي يحتاجها شخص معين لوظيفة معينة.",
          epm4: "كما يسمح للموارد البشرية والإدارة بإنشاء وإدارة وتقييم هذه المهارات أو استبيانات تقييم الكفاءة كأداة تطوير للموظفين.",
          epm5: "ويشمل الوظائف التالية:",
          epm5_1: "مهارات الموظفين",
          epm5_2: "سير عملية التقييم والخلافة",
          epm5_3: "إنشاء أهداف الوظيفة وإطار السمات (التوصيف الوظيفي)",
          epm5_4: 'إنشاء مؤشرات الأداء الرئيسية (مؤشرات الأداء الرئيسية) و"أوزان" مؤشرات الأداء الرئيسية',
          epm5_5: "الأهداف عبر الإنترنت، التقييم الذاتي، تقييم المدير",
          epm5_6: "شهادات تقدير للمستوى الثاني والثالث",
          epm5_7: "استبيان 360 الكفاءة وإعداد التقييم",
          epm5_8: "الخدمة الذاتية لاستكمال الاستبيان من قبل المشاركين",
          epm5_9: "إدارة تقييمات الموارد البشرية وتحليلها",
          epm5_10: "تعليقات التقييم وإعداد التقارير: توصيات تطوير الموظفين",
          epm5_11: "واجهة التدريب: متطلبات وتوافر دورات تدريبية محددة",
          epm5_12: "مرفق مستند الأداء الرئيسي والتحميل",

          //Human Resources Training Management
          hrt1: "إدارة تدريب الموارد البشرية",
          hrt2: "خطط التدريب، إدارة الدورات التدريبية",
          hrt3: "يتيح هذا النموذج لمديري الموارد البشرية ومديري الخطوط فرصة إجراء التدريب بشكل أكثر احترافية.",
          hrt4: "ويشمل الوظائف التالية:",
          hrt4_1: "خطط العمل التدريبية",
          hrt4_2: "طلبات التدريب والجدول الزمني",
          hrt4_3: "إدارة الدورة",
          hrt4_4: "أماكن التدريب ومقدميه وتقييم مواد الدورة مع إعداد التقارير",
          hrt4_5: "توفير التدريب الداخلي والخارجي",
          hrt4_6: "رسم خرائط المهارات التدريبية",
          hrt4_7: "تكاليف التدريب والميزانية",
          hrt4_8: "واجهة مع إدارة الأداء",

          //Mass Mobilization
          mm1: "التعبئة الجماهيرية",
          mm2: "التعبئة الجماعية للموظفين – تسريح مجموعات العمل",
          mm3: "يسمح هذا النموذج لصاحب العمل بمعالجة وتتبع المهام الإدارية لمجموعات كبيرة من الموظفين في وقت واحد.",
          mm4: "ينطبق هذا بشكل أساسي على صناعة البناء:",
          mm4_1: "النقل الجماعي لمجموعات العمل بين المشاريع",
          mm4_2: "إشراك/إنهاء/تسريح مجموعات العمل",
          mm4_3: "التقديم الجماعي ومعالجة وتجديد المستندات بما في ذلك التراخيص والتأشيرات والبطاقات الصحية وجوازات السفر",

          // Employee Time Tracking Section
          ett1: "تتبع وقت الموظف",
          ett2: "برنامج الجدول الزمني للموظفين –نموذج إدارة الوقت",
          ett3: "تدير هذه الوحدة مستويات حفظ الوقت والتغيب عن العمل للموظفين باستخدام عدد من الخيارات المختلفة.",
          ett4: "الوقت والحضور",
          ett4_content:
            "تقوم هذه الوظيفة بإدارة حضور الموظف، وحساب العمل الإضافي، وربط العمل الإضافي المحدد بكشوف المرتبات. كما أنها تمكن المديرين من الموافقة على العمل الإضافي الذي تم حسابه بواسطة نظام الوقت والحضور.",
          ett5: "ويشمل ما يلي:",
          ett5_1: "تعريف رموز وأنماط الوردية",
          ett5_2: "رسم خرائط نمط الوردية",
          ett5_3: "حساب الوقت والحضور اليومي من خلال الربط مع نظام الحضور والانصراف",
          ett5_4: "ربط جميع سجلات الإجازات والإجازات القصيرة والتدريب في الخارج ورحلات العمل",
          ett5_5: "موافقة المدير على العمل العادي والعمل الإضافي (من خلال الخدمة الذاتية)",
          ett5_6: "العمل الإضافي والوقت وإعداد تقارير الحضور",
          ett5_7: "نشر العمل الإضافي في كشوف المرتبات التي تم الموافقة عليها",
          ett5_8: "الاستقطاعات من الرواتب بسبب التأخير",
          ett6: "الجداول الزمنية/الجداول الزمنية للمشروع",
          ett6_content:
            "تتتبع هذه الوظيفة عدد ساعات العمل التي قام بها الفريق في مشروع العميل. كما تمنح المدير المباشر المرونة للموافقة على ساعات العمل التي قام بها أحد أعضاء الفريق في نفس الوقت للاطلاع على النشاط/الأنشطة التي يقومون بها للمشروع.",
          eet6_sub: "كما أنه يتتبع ساعات العمل الإضافي:",
          eet6_1: "شاشات إعداد للعملاء والأسعار والأنشطة والمشاريع",
          eet6_2: "خيارات إعداد متعددة للمناوبات والتقويمات ومعدلات العمل الإضافي ومراكز التكلفة ومستويات الموافقة",
          eet6_3: "خاصية تحميل الجدول الزمني",
          eet6_4: "الربط مع الغياب والإجازات",
          eet6_5: "تقرير الجدول الزمني لصاحب المشروع",
          eet6_6: "وظيفة تقديم الجدول الزمني والموافقة",
          eet6_7: "تقرير الجدول الزمني للمشروع",
          eet6_8: "تقرير فواتير المشروع",

          //System Integration through web services
          sit1: "ربط النظام من خلال خدمات الويب",
          sit: "نحن ندعم الربط مع الأنظمة الأخرى",
          sit3: "يدعم gulfHR الربط مع الأنظمة الأخرى عبر خدمات الويب.",
          sit4: "الواجهات موجودة من أجل:",
          sit4_1: "مسؤول إنشاء الموظف",
          sit4_2: "واجهة مسؤول الرواتب",
          sit4_3: "الإنهاء",
          sit4_4: "زيادة الراتب",
          sit4_5: "العروض الترويجية",
          sit4_6: "بيانات تسجيل الوقت والحضور",

          // System Integration Section
          si1: "ربط النظام مع الأنظمة الموجودة",
          si2: "واجهة دفتر الأستاذ العام مع أي جهاز وقت وحضور",
          si3: "تعمل واجهة دفتر الأستاذ العام مع الأنظمة المالية التالية:",
          si3_1: "Microsoft Great Plains برنامج",
          si3_2: "Navision برنامج",
          si3_3: "SAP برنامج",
          si3_4: "Oracle برنامج",
          si3_5: "SAGE برنامج",
          si3_6: "Accpac برنامج",
          si3_7: "JD Edwards برنامج",
          si3_8: "Peachtree برنامج",
          si4: "يمكن ربط كشوف المرتبات مباشرة بمحرك المعالجة الذي يغذي التحكم في الوصول إلى الوقت والحضور.",
          si5: "يمكن القيام بذلك مباشرة باستخدام قاعدة بيانات الوقت والحضور أو من خلال خدمات الويب.",
          si6: "يمكن ربط gulfHR  مع أي جهاز للوقت والحضور حيث يتم تخزين بيانات الحضور والانصراف على قاعدة بيانات تعتمد على SQL",

          //General Ledger Interface
          gli1: "واجهة دفتر الأستاذ العام",
          gli2: "واجهة دفتر الرواتب",
          gli3: "الربط الرئيسي الضروري عادة للتنفيذ الناجح لـ gulfHR  هو واجهة دفتر الأستاذ العام (GL).",
          gli3_1:
            "تقوم هذه الواجهة بنقل معلومات كشوف المرتبات الشهرية، على مستوى ملخص أو تفصيلي (اعتمادًا على متطلبات العميل)، إلى الجدول الصحيح الجاهز للنشر في نموذج دفتر الأستاذ العام للنظام المالي للعميل.",
          gli3_2:
            'يمكن أن يكون هذا الربط إما مباشرًا - أي واجهة مباشرة في "الواجهة الخلفية" للأنظمة المالية أو غير مباشر - سيتم تصدير ملخصات GL  إلى Excel ومن هناك يتم دفعها أو تحميلها إلى النظام المالي للعملاء.',
        },
      },
    },
  });
