export const site = {
  name: "KODEBLINK",
  tagline: "CUSTOM DESIGN & TECHNOLOGY COMPANY",
  positioning: "CUSTOM DESIGN & TECHNOLOGY COMPANY",
  email: "kodeblinksales@gmail.com",
  phone: "+91 95528 48466",
  phoneHref: "tel:+919552848466",
  linkedin: "https://www.linkedin.com/in/kodeblink-b537b4435/",
  instagram: "https://www.instagram.com/Kode_blink/",
  navigation: [
    { label: "Home", to: "/" as const },
    { label: "About", to: "/about" as const },
    { label: "Services", to: "/services" as const },
    { label: "Solutions", to: "/solutions" as const },
    { label: "SmartReceipt", to: "/smart-receipt" as const },
    { label: "Portfolio", to: "/portfolio" as const },
    { label: "Contact", to: "/contact" as const },
  ],
};

export const buildCapabilities = [
  { number: "01", title: "Websites", text: "Modern websites designed around your brand and business goals." },
  { number: "02", title: "Web Applications", text: "Custom applications designed around your workflow." },
  { number: "03", title: "Business Software", text: "Practical software for managing business processes." },
  { number: "04", title: "Manufacturing Solutions", text: "Technology for production, inventory and operations." },
];

export const processSteps = [
  { number: "01", title: "Understand", text: "Understand the business and requirements." },
  { number: "02", title: "Design", text: "Create a simple and effective user experience." },
  { number: "03", title: "Build", text: "Develop the technology around the requirements." },
  { number: "04", title: "Launch", text: "Prepare and deliver the final product." },
];

export const services = [
  ["Web Design", "What it is", "A clear digital presence built around your brand.", "How it helps", "Makes your business easier to understand and trust."],
  ["Web Development", "What it is", "Reliable websites and systems that work across devices.", "How it helps", "Gives your team and customers a dependable experience."],
  ["UI/UX Design", "What it is", "Interfaces planned around real users and real tasks.", "How it helps", "Turns complicated workflows into simple actions."],
  ["Web Applications", "What it is", "Browser-based tools built around your workflow.", "How it helps", "Keeps important work accessible and organized."],
  ["Custom Software", "What it is", "Purpose-built software for a specific business need.", "How it helps", "Supports the way your business actually operates."],
  ["CRM", "What it is", "A focused system for managing customer relationships.", "How it helps", "Keeps conversations and follow-ups easier to manage."],
  ["HRMS", "What it is", "A practical system for everyday people operations.", "How it helps", "Brings employee information and processes together."],
  ["Payroll", "What it is", "Software for organizing payroll workflows.", "How it helps", "Makes recurring payroll work clearer and more consistent."],
  ["ERP", "What it is", "Connected tools for core business operations.", "How it helps", "Creates a more complete view of the business."],
  ["Manufacturing Software", "What it is", "Technology for production, inventory and operations.", "How it helps", "Connects the work happening across the floor and office."],
  ["E-commerce", "What it is", "A straightforward online selling experience.", "How it helps", "Makes products easier for customers to discover and buy."],
  ["Mobile Applications", "What it is", "Mobile experiences designed for specific business needs.", "How it helps", "Puts useful workflows where people need them."],
] as const;

export const solutions = [
  ["CRM Solutions", "Customer information is spread across tools.", "Bring the important customer workflow into one place.", "Clearer follow-up and better visibility."],
  ["HRMS Solutions", "People processes take too much manual coordination.", "Organize employee information and recurring tasks.", "A more consistent employee experience."],
  ["Payroll Solutions", "Payroll work is repetitive and difficult to track.", "Create a focused workflow for payroll operations.", "Fewer handoffs and clearer records."],
  ["ERP Solutions", "Business information lives in disconnected systems.", "Connect the operational view around your needs.", "Better decisions with less searching."],
  ["Manufacturing Solutions", "Production and business teams need the same view.", "Connect production, inventory and operations.", "A clearer picture of the workflow."],
  ["Inventory Solutions", "Stock information is difficult to keep current.", "Design a system around how stock moves.", "More confidence in everyday planning."],
  ["Custom Business Software", "Off-the-shelf tools do not fit the work.", "Build the essential workflow around the business.", "Technology that adapts instead of getting in the way."],
] as const;

export const portfolio = [
  ["Websites", "KODEBLINK CONCEPT", "Corporate Website", "A clear digital presence for a growing technology company."],
  ["Web Applications", "KODEBLINK CONCEPT", "CRM Interface", "A focused workspace for customer conversations."],
  ["Business Software", "KODEBLINK CONCEPT", "HRMS Interface", "A simple employee operations experience."],
  ["Manufacturing", "KODEBLINK CONCEPT", "Manufacturing Dashboard", "A compact view of production and operations."],
  ["UI/UX", "KODEBLINK CONCEPT", "SmartReceipt Interface", "A product direction for clear receipt management."],
] as const;