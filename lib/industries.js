/* ------------------------------------------------------------------
   Fourteen sector dossiers. Plain text only — edit freely.
------------------------------------------------------------------- */

export const industries = [
  {
    name: "Banking & financial services",
    line: "Helping banks and financial institutions navigate NRB directives, Loan-Loss Provisioning and IFRS 9 requirements.",
    challenges: [
      "Loan classification and provisioning judgement",
      "Integrity across high-volume transactions",
      "Frequent NRB directive changes",
    ],
    regulatory:
      "Nepal Rastra Bank directives, BAFIA licensing conditions and NFRS including IFRS 9.",
    considerations:
      "Audit risk concentrates in non-performing loan classification, provisioning adequacy and related-party disclosure; tax follows interest income recognition and withholding on deposits.",
    support:
      "We provide NRB directive compliance reviews, statutory and internal audit support, and tax computations reconciled to regulatory reporting.",
  },
  {
    name: "Insurance",
    line: "Supporting insurers with reserving, solvency and regulatory reporting, including the transition to NFRS 17.",
    challenges: [
      "Actuarial reserve estimation",
      "Solvency margin compliance",
      "Reinsurance accounting",
    ],
    regulatory:
      "Nepal Insurance Authority directives, the Insurance Act 2079 and NFRS 17 transition requirements.",
    considerations:
      "Premium recognition, reinsurance recoveries and reserve adequacy drive both audit risk and the timing of taxable income.",
    support:
      "We provide statutory audit support, review of regulatory returns and tax advice on investment income.",
  },
  {
    name: "Manufacturing",
    line: "Helping manufacturers strengthen costing, inventory valuation and excise and VAT compliance.",
    challenges: [
      "Inventory valuation and wastage norms",
      "Cost of production accuracy",
      "Excise and VAT treatment of by-products",
    ],
    regulatory:
      "VAT Act 2052, Excise Act provisions, Income Tax Act 2058 and labour law for shift payroll.",
    considerations:
      "Wastage and by-product treatment is the most frequent tax adjustment; inventory counts and costing are the centre of gravity in audit.",
    support:
      "We perform cost reviews, attend inventory counts, reconcile excise obligations and deliver statutory audits.",
  },
  {
    name: "Consumer & Retail",
    line: "Helping retailers and distributors protect revenue, control stock loss and account for supplier arrangements.",
    challenges: [
      "POS-to-ledger completeness",
      "Stock shrinkage and pilferage",
      "Supplier rebate and scheme accounting",
    ],
    regulatory: "VAT Act 2052 invoicing rules and consumer protection regulation.",
    considerations:
      "Completeness of recorded sales is the key audit assertion; VAT invoice discipline determines penalty exposure.",
    support:
      "We design point-of-sale reconciliations, inventory cycle-count programmes and VAT compliance calendars.",
  },
  {
    name: "Real estate & construction",
    line: "Supporting developers and contractors with revenue recognition, project costing and property taxation.",
    challenges: [
      "Percentage-of-completion estimation",
      "Project-wise cost allocation",
      "Capital gains and TDS on land transactions",
    ],
    regulatory:
      "NFRS 15, Income Tax Act 2058 capital gains and TDS provisions, and local permitting rules.",
    considerations:
      "Revenue cut-off and completion estimates carry the audit risk; land transactions attract capital gains tax and TDS at source.",
    support:
      "We provide project audits, reviews of stage-of-completion estimates, and capital gains tax computations and filings.",
  },
  {
    name: "Healthcare",
    line: "Helping hospitals and healthcare providers manage complex revenue streams, medical assets and pharmacy inventory.",
    challenges: [
      "Cash, insurance and donor revenue mix",
      "High-value equipment capitalisation",
      "Pharmacy inventory control",
    ],
    regulatory:
      "Health service registration rules, VAT exemption on medical services and TDS on professional fees.",
    considerations:
      "The boundary between VAT-exempt and taxable services, and capitalisation versus repair on equipment, are the recurring flashpoints.",
    support:
      "We support the classification of exempt and taxable revenue, maintain asset registers and deliver statutory audits.",
  },
  {
    name: "Education",
    line: "Supporting schools, colleges and universities with fee recognition, governance and grant compliance.",
    challenges: [
      "Fee revenue across academic sessions",
      "Trust and society governance",
      "Scholarship and grant utilisation",
    ],
    regulatory:
      "Education rules, Social Welfare Council requirements for grants and TDS on salaries and contracts.",
    considerations:
      "Academic-year versus fiscal-year revenue cut-off, and related-party transactions with promoters, require careful handling.",
    support:
      "We prepare academic-to-fiscal year reconciliations, conduct governance reviews and deliver annual audits.",
  },
  {
    name: "Development Sector & NGOs",
    line: "Helping development organisations meet donor requirements, grant conditions and Social Welfare Council obligations.",
    challenges: [
      "Multiple donor reporting formats",
      "Grant conditionality and cost eligibility",
      "Social Welfare Council approvals",
    ],
    regulatory:
      "Social Welfare Council requirements, Association Registration Act, grant agreements and Income Tax Act exemptions.",
    considerations:
      "Eligibility of expenditure under each grant, presentation of unspent balances and maintenance of tax-exempt status are the core tests.",
    support:
      "We conduct donor audits to international reporting formats and support SWC compliance and tax-exemption filings.",
  },
  {
    name: "Government & Public sector",
    line: "Supporting public bodies with financial management, procurement compliance and audit readiness.",
    challenges: [
      "Budget appropriation limits",
      "Public procurement compliance",
      "Asset and store management",
    ],
    regulatory:
      "Public Financial Management Act, Public Procurement Act 2063 and the Audit Act with OAG standards.",
    considerations:
      "Regularity and propriety matter as much as the financial statements; procurement deviations are the most common finding.",
    support:
      "We support internal audit functions, conduct procurement compliance reviews and help entities prepare for audit by the Office of the Auditor General.",
  },
  {
    name: "Technology & startups",
    line: "Helping technology businesses and emerging companies with revenue recognition, investment compliance and investor reporting.",
    challenges: [
      "SaaS and milestone revenue recognition",
      "Capitalised development costs",
      "Foreign investment and repatriation compliance",
    ],
    regulatory:
      "FITTA, NRB requirements for foreign payments and Income Tax Act treatment of ESOPs.",
    considerations:
      "Revenue recognition on contracts and withholding on cross-border payments are where startups most often carry hidden exposure.",
    support:
      "We provide NFRS-compliant accounting, guidance on withholding tax for cross-border payments and investor-ready financial reporting.",
  },
  {
    name: "Hospitality & Tourism",
    line: "Supporting hotels, restaurants and tourism businesses with revenue assurance, service charge and payroll compliance.",
    challenges: [
      "Daily revenue completeness across rooms and F&B",
      "Service charge and tip accounting",
      "Seasonal staffing and payroll",
    ],
    regulatory: "VAT on hospitality services, labour-law service charge rules and tourism licences.",
    considerations:
      "Completeness of cash-intensive revenue and lawful service-charge distribution are the two audit hotspots.",
    support:
      "We implement daily revenue reconciliations, service charge accounting and payroll compliance processes.",
  },
  {
    name: "Logistics & transport",
    line: "Helping logistics and transport operators control fleet costs and manage cross-border tax obligations.",
    challenges: [
      "Fleet utilisation and fuel reconciliation",
      "Route-wise profitability",
      "Withholding on cross-border freight",
    ],
    regulatory: "Transport permitting, VAT on freight services and TDS on transport payments.",
    considerations:
      "Fuel and tyre consumption norms versus books, and TDS credits on transport receipts, decide both audit and tax outcomes.",
    support:
      "We develop fleet costing systems, fuel reconciliation processes and TDS credit tracking.",
  },
  {
    name: "Professional services",
    line: "Supporting professional firms with work-in-progress valuation, partner remuneration and fee-related tax compliance.",
    challenges: [
      "Work-in-progress valuation",
      "Partner drawings versus remuneration",
      "TDS on professional fees",
    ],
    regulatory: "TDS provisions on professional fees, VAT thresholds and partnership deed law.",
    considerations:
      "Unbilled revenue cut-off and the deductibility of partner remuneration are the recurring judgement areas.",
    support:
      "We maintain work-in-progress schedules and partner accounts and manage full tax compliance.",
  },
  {
    name: "Energy & hydropower",
    line: "Helping hydropower and energy developers with construction accounting, PPA revenue and licence compliance.",
    challenges: [
      "Capitalisation of construction cost and IDC",
      "PPA-based revenue measurement",
      "Licence and royalty compliance",
    ],
    regulatory: "Electricity Act and DoED licences, water resources royalty provisions and PPA terms.",
    considerations:
      "Interest during construction capitalisation and royalty or free-energy obligations drive both audit and tax positions.",
    support:
      "We provide construction-phase audits, royalty computations and lender reporting packages.",
  },
];
