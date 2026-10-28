/* ------------------------------------------------------------------
   Fourteen sector dossiers. Plain text only — edit freely.
------------------------------------------------------------------- */

export const industries = [
  {
    name: "Banking & financial services",
    line: "NRB directive compliance, loan classification and IFRS 9 provisioning.",
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
      "We run directive-compliance reviews, statutory and internal audit support, and tax computations reconciled to NRB reporting.",
  },
  {
    name: "Insurance",
    line: "Reserve adequacy, solvency margins and regulator reporting.",
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
      "We provide statutory audit support, regulatory returns review and tax planning on investment income.",
  },
  {
    name: "Manufacturing",
    line: "Costing, inventory valuation and the excise–VAT interplay.",
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
      "We perform costing reviews, observe inventory counts, reconcile excise and deliver the statutory audit.",
  },
  {
    name: "Consumer & Retail",
    line: "High-volume sales integrity, shrinkage and supplier rebates.",
    challenges: [
      "POS-to-ledger completeness",
      "Stock shrinkage and pilferage",
      "Supplier rebate and scheme accounting",
    ],
    regulatory: "VAT Act 2052 invoicing rules and consumer protection regulation.",
    considerations:
      "Completeness of recorded sales is the key audit assertion; VAT invoice discipline determines penalty exposure.",
    support:
      "We design POS-to-ledger reconciliations, cycle-count programmes and a VAT compliance calendar.",
  },
  {
    name: "Real estate & construction",
    line: "Percentage-of-completion, project costing and land transaction tax.",
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
      "We provide project audits, completion-percentage reviews and capital gains computations with filing support.",
  },
  {
    name: "Healthcare",
    line: "Mixed revenue streams, equipment capitalisation and pharmacy stock.",
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
      "We maintain exempt/taxable revenue splits, asset registers and the statutory audit.",
  },
  {
    name: "Education",
    line: "Fee recognition across sessions, governance and grant compliance.",
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
      "We prepare academic-to-fiscal reconciliations, governance reviews and annual audits.",
  },
  {
    name: "Development Sector & NGOs",
    line: "Grant conditions, donor reporting packs and SWC compliance.",
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
      "We run donor audits in international formats, SWC compliance and exemption filings.",
  },
  {
    name: "Government & Public sector",
    line: "Appropriation compliance, procurement rules and OAG audit readiness.",
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
      "We support internal audit units, run procurement reviews and prepare files for OAG audit.",
  },
  {
    name: "Technology & startups",
    line: "Contract revenue, capitalised development and FDI compliance.",
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
      "We provide NFRS bookkeeping, a withholding map for cross-border payments and investor-ready reporting.",
  },
  {
    name: "Hospitality & Tourism",
    line: "Daily revenue completeness, service charge and seasonal payroll.",
    challenges: [
      "Daily revenue completeness across rooms and F&B",
      "Service charge and tip accounting",
      "Seasonal staffing and payroll",
    ],
    regulatory: "VAT on hospitality services, labour-law service charge rules and tourism licences.",
    considerations:
      "Completeness of cash-intensive revenue and lawful service-charge distribution are the two audit hotspots.",
    support:
      "We install daily revenue reconciliations, service-charge ledgers and payroll compliance.",
  },
  {
    name: "Logistics & transport",
    line: "Fleet costing, fuel reconciliation and cross-border withholding.",
    challenges: [
      "Fleet utilisation and fuel reconciliation",
      "Route-wise profitability",
      "Withholding on cross-border freight",
    ],
    regulatory: "Transport permitting, VAT on freight services and TDS on transport payments.",
    considerations:
      "Fuel and tyre consumption norms versus books, and TDS credits on transport receipts, decide both audit and tax outcomes.",
    support:
      "We build fleet costing systems, fuel reconciliations and TDS credit tracking.",
  },
  {
    name: "Professional services",
    line: "Work-in-progress, partner remuneration and TDS on fees.",
    challenges: [
      "Work-in-progress valuation",
      "Partner drawings versus remuneration",
      "TDS on professional fees",
    ],
    regulatory: "TDS provisions on professional fees, VAT thresholds and partnership deed law.",
    considerations:
      "Unbilled revenue cut-off and the deductibility of partner remuneration are the recurring judgement areas.",
    support:
      "We maintain WIP schedules, partner accounts and complete tax compliance.",
  },
  {
    name: "Energy & hydropower",
    line: "Construction capitalisation, PPA revenue and generation licences.",
    challenges: [
      "Capitalisation of construction cost and IDC",
      "PPA-based revenue measurement",
      "Licence and royalty compliance",
    ],
    regulatory: "Electricity Act and DoED licences, water resources royalty provisions and PPA terms.",
    considerations:
      "Interest during construction capitalisation and royalty or free-energy obligations drive both audit and tax positions.",
    support:
      "We provide construction-phase audits, royalty computations and lender reporting packs.",
  },
];
