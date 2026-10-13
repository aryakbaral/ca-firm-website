/* ------------------------------------------------------------------
   Knowledge hub content. To publish a new note, copy any object,
   change the slug/category/title/date and write the blocks.
   Block types: "p" (paragraph), "h2" (heading), "ul" (list), "quote".
------------------------------------------------------------------- */

export const postCategories = [
  "Tax Alert",
  "Audit Update",
  "Accounting Standards",
  "Compliance Calendar",
  "Advisory Insight",
];

export const posts = [
  {
    slug: "finance-act-review-checklist",
    category: "Tax Alert",
    title: "After the Finance Act: a practical review checklist for companies",
    excerpt:
      "Every Finance Act moves rates, thresholds and incentives. This is the order we work through the changes so nothing reaches a return unexamined.",
    author: "Tax Desk",
    dateLabel: "6 Oct 2026",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "The Finance Act is rarely revolutionary, but it is never neutral. Rates move, thresholds shift, incentives sunset and new withholding obligations appear — usually with effect from the start of the fiscal year, which leaves little time to react.",
      },
      {
        type: "p",
        text: "Our practice is to convert the Act into a checklist within days of publication, entity by entity. The sequence below is the one we follow, and it works as well for a single company as for a group.",
      },
      { type: "h2", text: "1. Re-run the entity map" },
      {
        type: "p",
        text: "List every registered entity, its tax regime and its filing calendar. Changes that look minor — a threshold, an exemption list — often bite only one entity in a group.",
      },
      { type: "h2", text: "2. Diff rates and thresholds against your own numbers" },
      {
        type: "ul",
        items: [
          "Corporate and dividend tax rates against current computations",
          "TDS schedules against every payment code you actually use",
          "VAT thresholds and exemption lists against your revenue mix",
          "Customs and excise changes against imported inputs",
        ],
      },
      { type: "h2", text: "3. Diary the sunsets" },
      {
        type: "p",
        text: "Tax holidays, investment allowances and sector incentives carry expiry dates. Every sunset that touches your positions goes into the compliance calendar before, not during, an assessment.",
      },
      {
        type: "quote",
        text: "A Finance Act review is not reading the Act. It is diffing it against your own numbers.",
      },
      {
        type: "p",
        text: "Rates and thresholds change every year. Confirm the current schedules before filing — or ask us to run the diff for you.",
      },
    ],
  },
  {
    slug: "tds-withholding-mistakes",
    category: "Tax Alert",
    title: "TDS at source: the five withholding mistakes we see most often",
    excerpt:
      "Withholding tax is simple in principle and expensive in practice. These five errors account for most of the assessments we defend.",
    author: "Tax Desk",
    dateLabel: "14 Sep 2026",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Withholding is a collection mechanism: the law makes the payer the collector. When it goes wrong, the payer — not the recipient — carries the tax, the interest and the penalty. These are the five failures we meet most often.",
      },
      { type: "h2", text: "1. Paying gross 'because the invoice says so'" },
      {
        type: "p",
        text: "An invoice amount is not a payment instruction. If the payment code attracts withholding, the net paid must be invoice less TDS, with the certificate to follow.",
      },
      { type: "h2", text: "2. Right intention, wrong code" },
      {
        type: "p",
        text: "Consultancy, professional fees, commission and contract payments carry different rates. Choosing by habit rather than by code is the most common source of short deduction.",
      },
      { type: "h2", text: "3. Depositing late, then forgetting the interest" },
      {
        type: "p",
        text: "A late deposit accrues interest automatically. Paying the tax without the interest leaves an open item that surfaces at assessment, years later.",
      },
      { type: "h2", text: "4. Certificates never issued" },
      {
        type: "p",
        text: "Recipients need certificates to claim their credit. Unissued certificates damage supplier relationships and invite disputes you did not need.",
      },
      { type: "h2", text: "5. No reconciliation, ever" },
      {
        type: "p",
        text: "TDS payable per ledger, TDS deposited per slips and TDS declared per return should agree to the rupee every quarter. Where they do not, the difference is cheap to fix now and expensive later.",
      },
      {
        type: "quote",
        text: "Withholding errors are never discovered in the year they are made. They are discovered at assessment, with interest.",
      },
    ],
  },
  {
    slug: "statutory-audit-prepared-by-client",
    category: "Audit Update",
    title: "Preparing for your statutory audit: a prepared-by-client list that works",
    excerpt:
      "Audit duration is decided before fieldwork begins. Here is the file we ask for, and why each item shortens the engagement.",
    author: "Audit Desk",
    dateLabel: "22 Sep 2026",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Two companies of identical size can take a week or a month to audit. The difference is rarely the accounting; it is the file. A complete prepared-by-client list turns audit from an excavation into a review.",
      },
      { type: "h2", text: "The core file" },
      {
        type: "ul",
        items: [
          "Trial balance and general ledger, with comparative year",
          "Bank reconciliations for every account at year-end",
          "Fixed asset register with additions and disposals",
          "Debtors and creditors ageing with post-year-end receipts",
          "Loan schedules, sanctions and covenants",
          "Board minutes, contracts and related-party agreements",
          "Tax returns, VAT and TDS reconciliations",
        ],
      },
      { type: "h2", text: "Why each item shortens the audit" },
      {
        type: "p",
        text: "Reconciliations eliminate the most common source of audit adjustments. Confirmations and post-year-end receipts convert debtor balances from estimates into evidence. The asset register turns a two-day count debate into a two-hour walk-through.",
      },
      {
        type: "quote",
        text: "The quality of the file is the quality of the audit experience.",
      },
      {
        type: "p",
        text: "Clients on our bookkeeping desk receive this file automatically at year-end — which is why their audits finish early.",
      },
    ],
  },
  {
    slug: "nfrs-first-time-adoption",
    category: "Accounting Standards",
    title: "NFRS first-time adoption: where SMEs stumble",
    excerpt:
      "Moving from tax-basis or legacy books to NFRS is a translation exercise with traps. These are the four we see in almost every first adoption.",
    author: "Accounting Desk",
    dateLabel: "30 Aug 2026",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "First-time adoption is not an upgrade; it is a restatement. The opening balance sheet under NFRS becomes the baseline for every future year, so errors made here compound quietly.",
      },
      { type: "h2", text: "1. Revenue recognised on invoice, not on obligation" },
      {
        type: "p",
        text: "Advances booked as revenue and milestone contracts recognised on billing are the two most frequent restatements we perform.",
      },
      { type: "h2", text: "2. Assets at 'value', depreciation at habit" },
      {
        type: "p",
        text: "Useful lives and residual values must be supportable. Rates copied from tax rules produce books that disagree with both the standard and the asset's reality.",
      },
      { type: "h2", text: "3. Employee benefits left unmeasured" },
      {
        type: "p",
        text: "Gratuity and leave obligations are liabilities even when unfunded. Omitting them overstates equity and surprises lenders.",
      },
      { type: "h2", text: "4. Disclosures treated as boilerplate" },
      {
        type: "p",
        text: "First-time adoption requires an explanation of every material adjustment between the old basis and NFRS. That bridge is the document auditors and boards read first.",
      },
      {
        type: "quote",
        text: "The opening balance sheet is a promise about every future year. Make it deliberately.",
      },
    ],
  },
  {
    slug: "nepal-company-compliance-calendar",
    category: "Compliance Calendar",
    title: "The compliance calendar every Nepali company should keep",
    excerpt:
      "Monthly, quarterly and annual obligations on one page — the calendar we maintain for retainer clients, shared as a starting point.",
    author: "Compliance Desk",
    dateLabel: "30 Sep 2026",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Most penalties we are asked to remove were never caused by disagreement with the law. They were caused by a date nobody owned. A calendar with names against each line removes the entire category of risk.",
      },
      { type: "h2", text: "Monthly" },
      {
        type: "ul",
        items: [
          "VAT return and payment — within 25 days of month-end",
          "TDS deposit on payments and salaries — within 25 days of month-end",
          "SSF / provident contributions — by the 15th of the following month",
        ],
      },
      { type: "h2", text: "Quarterly and periodic" },
      {
        type: "ul",
        items: [
          "Advance income tax instalments as per the Income Tax Act schedule",
          "VAT purchase and sales register reconciliation",
          "Payroll and TDS reconciliation per quarter",
        ],
      },
      { type: "h2", text: "Annual" },
      {
        type: "ul",
        items: [
          "Statutory audit before the annual general meeting",
          "Annual general meeting within six months of financial year-end",
          "Income tax return within three months of year-end (extension on application)",
          "Annual return and statutory filings with the company registrar",
          "Tax clearance certificates where tenders or licences require them",
        ],
      },
      {
        type: "quote",
        text: "A deadline with no owner is not a deadline. It is a future penalty.",
      },
      {
        type: "p",
        text: "Deadlines above are as commonly applied; confirm current practice each year, or let us hold the calendar for you under retainer.",
      },
    ],
  },
  {
    slug: "feasibility-studies-banks-reject",
    category: "Advisory Insight",
    title: "Why credit committees reject feasibility studies — and how to fix yours",
    excerpt:
      "Most rejections are not about the project. They are about the document. Five fixes that change the conversation with your bank.",
    author: "Advisory Desk",
    dateLabel: "12 Aug 2026",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Credit committees rarely reject projects in the first reading. They reject documents they cannot test. The difference between a financed project and a rejected one is usually traceable to five omissions.",
      },
      { type: "h2", text: "1. Assumptions without sources" },
      {
        type: "p",
        text: "Every price, volume and growth rate needs a citation: a contract, a quotation, a published series. Unsourced assumptions are read as optimism.",
      },
      { type: "h2", text: "2. One scenario, no sensitivity" },
      {
        type: "p",
        text: "A single base case tells the committee nothing about downside. Show break-even, and show what happens at 80% of your price and volume assumptions.",
      },
      { type: "h2", text: "3. Working capital ignored" },
      {
        type: "p",
        text: "Projects fail on cash, not on profit. Debtors days, stock days and creditor days must appear in the funding plan, not just in an appendix.",
      },
      { type: "h2", text: "4. Implementation without owners" },
      {
        type: "p",
        text: "A schedule without named responsibilities reads as a wish. Committees fund teams, not timelines.",
      },
      { type: "h2", text: "5. No independent hand on the numbers" },
      {
        type: "p",
        text: "A study prepared and signed by the borrower is evidence of intent; a study reviewed by Chartered Accountants is evidence of arithmetic. Banks price the difference.",
      },
      {
        type: "quote",
        text: "The committee is not asking whether your project is good. It is asking whether your numbers survive contact with reality.",
      },
    ],
  },
];
