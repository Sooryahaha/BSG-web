export interface ServiceSection {
  heading: string;
  content?: string;
  type: 'text' | 'list' | 'steps' | 'table';
  items?: string[];
  steps?: { title: string; desc: string }[];
  tableContent?: { headers: string[]; rows: string[][] };
}

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeIcon: string;
  heroDesc: string;
  heroImage?: string;
  timeline?: string;
  sections: ServiceSection[];
  documents?: string[];
  stats?: { number: string; label: string }[];
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {

  // ─── BUSINESS SETUP — INDIAN OWNER ───────────────────────────────────────

  'sole-proprietorship': {
    slug: 'sole-proprietorship',
    title: 'Sole Proprietorship Registration',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'A sole proprietorship is a legal entity owned, managed, and controlled by a single individual — the simplest and most cost-effective way to start a business in India.',
    timeline: '2–3 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is Sole Proprietorship?',
        content: 'Most small and micro enterprises in India operate under the sole proprietorship structure. It allows you to start operations and receive payments without the burden of extensive registrations. The proprietor and the business are the same legal entity, making it the quickest structure to set up.',
      },
      {
        type: 'list',
        heading: 'Why Choose Sole Proprietorship?',
        items: [
          'Start operations immediately without complex registrations',
          'Minimal compliance requirements — focus on your business',
          'Cost-effective setup with BizSetupGlobal',
          'Full control and independent decision-making',
          'Easy transition to complex structures like Pvt Ltd later',
          'Lower taxation compared to companies',
        ],
      },
      {
        type: 'list',
        heading: 'What BizSetupGlobal Does For You',
        items: [
          'Registration assistance and document preparation',
          'MSME / Udyam registration',
          'GST registration and returns',
          'TAN registration and TDS filing',
          'Import Export Code (IEC)',
          'Current account opening support',
          'Annual compliance — ITR, financial statements',
        ],
      },
    ],
    documents: [
      'PAN card copy of proprietor',
      'Aadhaar card of proprietor',
      'Rental agreement / sale deed of business premises',
      'Passport size photograph',
      'Bank account details / cancelled cheque',
    ],
  },

  'partnership-firm': {
    slug: 'partnership-firm',
    title: 'Partnership Firm Registration',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'A partnership firm is a dynamic business entity created by individuals who come together to share profits and losses — ideal for small enterprises seeking simplicity and minimal regulatory compliance.',
    timeline: '2–4 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is a Partnership Firm?',
        content: 'According to the Indian Partnership Act 1932, the crucial criterion to commence a partnership is the finalisation and execution of a Partnership Deed between the partners. Partnership firms can be formed within 2 to 4 days with an unregistered deed. Registering the deed provides additional benefits and safeguards.',
      },
      {
        type: 'list',
        heading: 'Benefits of Partnership',
        items: [
          'Faster decision-making — no need for board resolutions',
          'Minimal compliance requirements for most firms',
          'Partners collectively own and manage the firm',
          'Streamlined process with minimal fees and paperwork',
          'Easy to raise funds compared to sole proprietorship',
          'Flexible profit/loss sharing as per partnership deed',
        ],
      },
      {
        type: 'list',
        heading: 'Key Registration Services Included',
        items: [
          'MSME / Udyog Aadhaar registration',
          'TAN registration for TDS compliance',
          'GST registration and return filing',
          'Shop & Establishment license',
          'FSSAI registration (if applicable)',
          'Current account opening',
          'PAN of partnership firm',
        ],
      },
    ],
    documents: [
      'PAN cards of all partners',
      'Aadhaar cards of all partners',
      'Passport size photographs of partners',
      'Address proof of business premises',
      'Partnership deed (drafted by us)',
      'Bank account details',
    ],
  },

  'llp': {
    slug: 'llp',
    title: 'Limited Liability Partnership (LLP) Registration',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'LLP combines the flexibility of a partnership with the limited liability protection of a company — one of India\'s most popular business structures since 2008 with over 1.2 lakh registered LLPs.',
    timeline: '10–15 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'Decoding LLP',
        content: 'The 2008 Limited Liability Partnership Act introduced LLP in India. LLPs are better than traditional partnerships because one partner is not liable for another\'s misconduct or negligence. LLP owners have limited liability for the LLP\'s debts. Post FDI changes in 2015, 100% FDI in LLP is permitted under the automatic route.',
      },
      {
        type: 'list',
        heading: 'Key Benefits of LLP',
        items: [
          'Separate legal entity — partners can sue each other if needed',
          'Perpetual succession — business continues even if partners leave',
          'Flexible LLP agreement — customise profit/loss sharing',
          'No audit required if capital < ₹25L and turnover < ₹40L',
          'LLP can own or acquire property in its name',
          'No owner/manager distinction like in companies',
          '100% FDI permitted under automatic route',
        ],
      },
      {
        type: 'steps',
        heading: 'LLP Registration Process',
        steps: [
          { title: 'Obtain DSC & DIN', desc: 'Digital Signature Certificate and Director Identification Number for proposed partners.' },
          { title: 'Name Approval', desc: 'Apply for LLP name reservation with the Registrar of Companies (ROC).' },
          { title: 'Incorporation Certificate', desc: 'File incorporation documents and receive the Certificate of Incorporation from MCA.' },
          { title: 'LLP Agreement', desc: 'Draft and execute the LLP Agreement within 30 days of incorporation.' },
          { title: 'PAN, TAN & Bank Account', desc: 'Apply for PAN, TAN, and open a current bank account in the LLP name.' },
        ],
      },
    ],
    documents: [
      'PAN card of all partners',
      'Aadhaar card / Passport of all partners',
      'Passport size photographs',
      'Address proof (electricity bill / bank statement)',
      'Proof of registered office address',
      'Digital Signature Certificate (DSC)',
    ],
  },

  'opc': {
    slug: 'opc',
    title: 'One Person Company (OPC) Registration',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'One Person Company allows a single entrepreneur to enjoy the benefits of a private limited company with limited liability — perfect for solo founders who want corporate credibility.',
    timeline: '10–15 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is an OPC?',
        content: 'An OPC is a hybrid between a sole proprietorship and a private limited company. It was introduced under the Companies Act, 2013 to support solo entrepreneurs. Only one member is required, along with a nominee director. The sole member enjoys full limited liability protection while maintaining complete ownership and control.',
      },
      {
        type: 'list',
        heading: 'Benefits of OPC',
        items: [
          'Single owner with full control over the company',
          'Limited liability — personal assets are protected',
          'Separate legal entity with perpetual existence',
          'Easy access to bank loans and funding',
          'Credibility of a Pvt Ltd company with less compliance',
          'No need for AGM (Annual General Meeting)',
          'Easier conversion to Pvt Ltd when business grows',
        ],
      },
      {
        type: 'steps',
        heading: 'Registration Process',
        steps: [
          { title: 'Obtain DSC & DIN', desc: 'Get Digital Signature and Director Identification Number for the sole director.' },
          { title: 'Name Availability', desc: 'Apply for company name approval with the Registrar of Companies.' },
          { title: 'File MOA & AOA', desc: 'Submit Memorandum and Articles of Association with ROC.' },
          { title: 'Certificate of Incorporation', desc: 'ROC issues CoI with PAN and TAN of the company.' },
          { title: 'Post-Incorporation', desc: 'Open bank account, obtain MSME, GST, and other registrations as needed.' },
        ],
      },
    ],
    documents: [
      'PAN card of director and nominee',
      'Aadhaar card of director and nominee',
      'Passport size photographs',
      'Address proof of registered office',
      'Electricity bill / NOC from property owner',
      'Consent of nominee (Form INC-3)',
    ],
  },

  'private-limited': {
    slug: 'private-limited',
    title: 'Private Limited Company Registration',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'Private Limited Company is India\'s most popular corporate form — governing over 12 lakh active companies. Limited liability, easy fundraising, and perpetual existence make it the preferred choice for startups and growing businesses.',
    timeline: '10–15 Working Days',
    stats: [
      { number: '20L+', label: 'Registered Companies' },
      { number: '12L+', label: 'Active Companies' },
      { number: '100%', label: 'FDI Permitted' },
      { number: '2', label: 'Min. Directors' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'What is a Private Limited Company?',
        content: 'Under Section 2(68) of the Companies Act 2013, a private company restricts the right to transfer its shares, limits members to 200, and prohibits public subscription. It is governed by MCA and offers the best combination of limited liability, credibility, and fundraising potential. It continues to exist legally even in case of death, bankruptcy, or insolvency of its members.',
      },
      {
        type: 'list',
        heading: 'Benefits of Pvt Ltd',
        items: [
          'Limited liability — shareholders\' personal assets are protected',
          'Easy fundraising from angel investors, VCs, and PEs',
          'Separate legal entity with perpetual existence',
          'High credibility with vendors, lenders, and employees',
          'Shares can be transferred to any legal entity or person',
          'Can borrow more than LLPs with debenture and convertible instruments',
          'Better brand value — attracts top talent and investors',
        ],
      },
      {
        type: 'steps',
        heading: 'Registration Process',
        steps: [
          { title: 'Obtain DSC & DIN', desc: 'Digital Signature Certificate and Director Identification Number for all directors.' },
          { title: 'Name Availability', desc: 'Apply for company name approval through MCA\'s name reservation system.' },
          { title: 'File MOA & AOA', desc: 'Submit Memorandum and Articles of Association to the ROC.' },
          { title: 'Certificate of Incorporation', desc: 'ROC issues CoI along with CIN, PAN, and TAN of the company.' },
          { title: 'Post-Incorporation Registrations', desc: 'MSME, GST, IEC, TAN, FSSAI, Shop & Establishment as applicable.' },
        ],
      },
    ],
    documents: [
      'PAN card of all directors and shareholders',
      'Aadhaar / Passport / Voter ID of directors',
      'Passport size photographs',
      'Latest electricity bill / telephone bill of registered office',
      'Rental agreement / NOC from property owner',
      'Bank statement of directors (last 2 months)',
    ],
  },

  'producer-company': {
    slug: 'producer-company',
    title: 'Producer Company Registration',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'Producer Company is a unique legal entity designed for farmers, agricultural producers, and rural cooperatives — combining the benefits of a cooperative with the governance structure of a Private Limited Company.',
    timeline: '15–20 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What does a Producer Company do?',
        content: 'Producer Companies can handle production, harvesting, procurement, grading, pooling, handling, marketing, and export of primary produce. They can also provide technical assistance, consulting, training, R&D, and financial services to members. Any 10 or more individuals who are producers, or two or more producer organisations, can incorporate a Producer Company.',
      },
      {
        type: 'list',
        heading: 'Key Features',
        items: [
          'Members are primary producers — farmers, fishermen, artisans',
          'No cap on number of members (unlike Pvt Ltd)',
          'Structured like Pvt Ltd but governed by cooperative principles',
          'Can provide credit facilities and financial services to members',
          'Eligible for various government subsidies and schemes',
          'Name must end with "Producer Limited Company"',
          'Can generate, transmit, and distribute power for members',
        ],
      },
      {
        type: 'steps',
        heading: 'Registration Process',
        steps: [
          { title: 'Obtain DSC & DIN', desc: 'Apply for DSC and DIN for the initial directors of the Producer Company.' },
          { title: 'Name Reservation', desc: 'Apply to the ROC to reserve the company name.' },
          { title: 'File Incorporation Documents', desc: 'Submit the prescribed format application along with MOA and AOA.' },
          { title: 'Certificate of Incorporation', desc: 'If approved, the Registrar issues the Certificate of Incorporation.' },
          { title: 'Post-Incorporation', desc: 'PAN, TAN, GST, MSME, and other registrations as applicable.' },
        ],
      },
    ],
    documents: [
      'PAN card of shareholders and directors',
      'Latest passport size photographs',
      'Aadhaar card / Voter ID / Passport / Driving License',
      'Latest telephone / electricity / bank statement',
      'Electricity bill of registered office address',
    ],
  },

  'section-8-company': {
    slug: 'section-8-company',
    title: 'Section 8 Company Registration (NGO / NPO)',
    subtitle: 'Business Setup › Indian Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'Section 8 Company is the ideal structure for NGOs, charitable trusts, and non-profit organisations — offering tax exemptions, credibility, and the regulatory structure of a Private Limited Company.',
    timeline: '20–25 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is a Section 8 Company?',
        content: 'Section 8 Companies pursue non-profit goals like trade, arts, charity, education, religion, environment protection, social welfare, and sports. Profits cannot be distributed as dividends — all income is reinvested in the company\'s objectives. It is the same as the Section 25 Company under the old Companies Act, 1956.',
      },
      {
        type: 'list',
        heading: 'Benefits of Section 8 Company',
        items: [
          'Tax exemptions under Section 12A and 80G of the Income Tax Act',
          'Donors receive tax deductions for contributions',
          'No stamp duty on MOA and AOA',
          'No minimum capital requirement',
          'Can use names like "Foundation", "Society", "Institute", "Academy"',
          'Separate legal entity with perpetual existence',
          'CARO requirements do not apply',
          'Can raise equity capital from investors',
        ],
      },
      {
        type: 'list',
        heading: 'Funding Sources',
        items: [
          'Domestic donations — no limit, proper records required',
          'Equity funding — issue shares at higher value',
          'Foreign donations — requires FCRA registration (after 3 years)',
          'Prior permission from Commissioner for urgent foreign donations',
          'Government grants and CSR funds',
        ],
      },
    ],
    documents: [
      'Aadhaar / Voter ID / Passport / Driver\'s License of directors',
      'Latest bank statement / electricity / mobile bill',
      'Passport size photograph',
      'Electricity / gas bill of registered office (not older than 2 months)',
      'Notarised rental agreement in English',
      'No-objection certificate from property owner',
      'Sale deed / property deed (if owned property)',
    ],
  },

  // ─── BUSINESS SETUP — FOREIGN OWNER ──────────────────────────────────────

  'wos': {
    slug: 'wos',
    title: 'Wholly Owned Subsidiary (WOS) in India',
    subtitle: 'Business Setup › Foreign Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'When a foreign company makes 100% FDI into an Indian Private Limited Company, it becomes a Wholly Owned Subsidiary — treated as a domestic company under Indian tax law with full operational rights.',
    timeline: '15–20 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is a WOS?',
        content: 'A WOS is an Indian Private Limited Company where 100% of shares are held by a foreign parent company. It is governed by the Companies Act, 2013 and is treated as a domestic entity for tax purposes. 100% FDI is permitted under the automatic route in most sectors — no RBI prior approval needed.',
      },
      {
        type: 'list',
        heading: 'Key Features',
        items: [
          '100% FDI permitted under automatic route in most sectors',
          'Treated as a domestic company under Income Tax Law',
          'Limited liability protection for foreign parent',
          'Can undertake all activities including manufacturing and trading',
          'Eligible for all exemptions and benefits as any Indian company',
          'Funding through share capital and inter-company loans',
          'Strong brand value and market credibility in India',
        ],
      },
      {
        type: 'steps',
        heading: 'Registration Process',
        steps: [
          { title: 'Name Availability', desc: 'Apply for company name availability with MCA.' },
          { title: 'File MOA & AOA', desc: 'Submit incorporation documents to the Registrar of Companies.' },
          { title: 'PAN & TAN', desc: 'Apply for PAN and TAN of the newly incorporated company.' },
          { title: 'Post-Incorporation', desc: 'MSME, GST, IEC, FSSAI, Shop & Establishment as required.' },
          { title: 'Commencement of Business', desc: 'Deposit capital in bank and obtain commencement certificate from MCA within 180 days.' },
        ],
      },
    ],
    documents: [
      'Certificate of Incorporation of foreign parent company (apostilled)',
      'MOA / Charter documents of foreign parent (apostilled)',
      'Board resolution from foreign parent for WOS formation',
      'PAN card and proof of address of directors',
      'Passport of foreign directors (apostilled / notarised)',
      'Address proof of registered office in India',
    ],
  },

  'branch-office': {
    slug: 'branch-office',
    title: 'Branch Office Registration in India',
    subtitle: 'Business Setup › Foreign Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'A Branch Office allows a foreign company to conduct specific permitted business activities in India — suitable for equipment suppliers providing after-sales services and manufacturing companies.',
    timeline: '20–30 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is a Branch Office?',
        content: 'A Branch Office is an extension of the foreign parent company in India. It requires RBI approval and is governed by FEMA regulations. The Indian resident head manages the branch. Unlike a WOS, the branch office cannot hire employees to provide services to the parent company, and it has stringent setup requirements.',
      },
      {
        type: 'list',
        heading: 'Permitted Activities',
        items: [
          'Export / import of goods',
          'Rendering professional or consultancy services',
          'Research work in areas where parent is engaged',
          'Promoting technical and financial collaboration',
          'Rendering services in IT and software development',
          'Providing technical support for parent\'s products',
          'Acting as a buying / selling agent for parent',
        ],
      },
      {
        type: 'list',
        heading: 'Requirements & Compliance',
        items: [
          'RBI approval required under FEMA regulations',
          'Must appoint an Indian resident as the head',
          'Annual Activity Certificate from CA required',
          'Annual filings with RBI and ROC',
          'Cannot undertake retail trading or manufacturing directly',
          'Profits can be remitted abroad subject to tax compliance',
        ],
      },
    ],
    documents: [
      'Certificate of Incorporation of foreign company (apostilled)',
      'MOA / Charter documents (apostilled)',
      'Audited financial statements of parent (last 3–5 years)',
      'Board resolution for establishing branch in India',
      'Passport and address proof of branch head',
      'Address proof of proposed branch office in India',
    ],
  },

  'project-office': {
    slug: 'project-office',
    title: 'Project Office Registration in India',
    subtitle: 'Business Setup › Foreign Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'A Project Office is a temporary establishment in India set up by a foreign company to execute a specific project — ideal for construction, infrastructure, and engineering companies with Indian contracts.',
    timeline: '15–25 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is a Project Office?',
        content: 'A Project Office is established solely for executing a specific project in India. It is permitted by RBI under the General Permission where the foreign company has secured a contract for a project in India. The office must be closed once the project is completed and can only undertake activities related to the specific project.',
      },
      {
        type: 'list',
        heading: 'Eligibility',
        items: [
          'Foreign company has secured a contract from an Indian entity',
          'Project is funded by inward remittance from abroad',
          'Project is funded by bilateral or multilateral international financing agency',
          'Indian company has been granted term loan from a public financial institution',
          'No prior RBI approval if general permission conditions are met',
        ],
      },
      {
        type: 'list',
        heading: 'Compliance Requirements',
        items: [
          'Annual Activity Certificate from a CA required',
          'Annual report to the AD Bank within 60 days of year end',
          'Cannot undertake activities beyond the specific project',
          'Bank account in India permitted for project expenses',
          'Surplus funds must be remitted after completing the project',
        ],
      },
    ],
    documents: [
      'Contract agreement with Indian entity',
      'Certificate of Incorporation of foreign company (apostilled)',
      'Board resolution for establishing project office',
      'Audited financial statements of parent',
      'Proof of foreign currency inflow / financing arrangement',
      'Address proof of project office location in India',
    ],
  },

  'liaison-office': {
    slug: 'liaison-office',
    title: 'Liaison Office Registration in India',
    subtitle: 'Business Setup › Foreign Owner',
    badge: 'Business Setup',
    badgeIcon: 'Building2',
    heroDesc: 'A Liaison Office acts as a communication channel between a foreign parent company and Indian customers — the simplest way for a foreign company to establish a presence in India without conducting commercial activities.',
    timeline: '20–30 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is a Liaison Office?',
        content: 'Also known as a Representative Office, a Liaison Office can only undertake liaison activities — it cannot carry out any commercial, trading, or industrial activity and cannot earn income in India. All expenses must be funded through inward foreign currency remittances from the parent company. An Indian resident must head the office.',
      },
      {
        type: 'list',
        heading: 'Permitted Activities',
        items: [
          'Representing the parent company in India',
          'Promoting export / import between India and abroad',
          'Promoting technical and financial collaborations',
          'Acting as communication channel between parent and Indian customers',
          'Collecting and transmitting business information',
          'Cannot undertake any commercial / trading activity',
        ],
      },
      {
        type: 'list',
        heading: 'Requirements',
        items: [
          'RBI approval required under FEMA regulations',
          'Parent company must have a profitable track record',
          'Annual Activity Certificate from CA required',
          'Annual filing with RBI through the AD Bank',
          'All expenses funded through inward remittances',
          'Must appoint Indian resident as head of liaison office',
        ],
      },
    ],
    documents: [
      'Certificate of Incorporation of foreign company (apostilled)',
      'MOA / Charter documents (apostilled)',
      'Audited financial statements for the last 3 years',
      'Board resolution for establishing liaison office',
      'Proof of net worth (> USD 50,000 typically)',
      'Address proof of proposed liaison office',
    ],
  },

  // ─── BUSINESS SETUP — REGISTRATION ───────────────────────────────────────

  'dsc': {
    slug: 'dsc',
    title: 'Digital Signature Certificate (DSC)',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'A Digital Signature Certificate (DSC) is mandatory for company incorporation, MCA filings, income tax returns, GST, and e-tenders. Class 3 DSC is the most widely used.',
    timeline: '1–2 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Types of DSC',
        items: [
          'Sign DSC — for document signing (ITR, MCA, PDF files)',
          'Encrypt DSC — encrypts documents for tender portals',
          'Encrypt & Sign DSC — signs and encrypts; fills government forms',
          'Class 3 DSC — highest assurance level, required for company filings',
        ],
      },
      {
        type: 'list',
        heading: 'Benefits of DSC',
        items: [
          'Legally recognised digital signature under IT Act 2000',
          'Enhances accuracy and security of personal information',
          'Digitally signed documents cannot be altered — data security',
          'Faster than signing paper documents and scanning to email',
          'Government agencies accept DSC for all business transactions',
          'Saves time and cost compared to physical document processing',
        ],
      },
      {
        type: 'steps',
        heading: 'DSC Processing Methods',
        steps: [
          { title: 'Online Aadhaar-Based Paperless', desc: 'Fastest method — completed using Aadhaar-linked OTP or biometric authentication.' },
          { title: 'PAN-Based Mode', desc: 'Verification using PAN card details for non-Aadhaar holders.' },
          { title: 'Online Mode', desc: 'Standard online application with document upload and video verification.' },
        ],
      },
    ],
    documents: [
      'PAN card',
      'Aadhaar card (for Aadhaar-based DSC)',
      'Passport size photograph',
      'Email ID and mobile number',
      'Passport / Voter ID (for non-Aadhaar holders)',
    ],
  },

  'msme': {
    slug: 'msme',
    title: 'Udyam MSME Registration',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'Udyam MSME Registration gives your business access to government subsidies, priority lending, tax exemptions, and exclusive trade opportunities — mandatory for MSMEs to avail all government benefits.',
    timeline: '2–5 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Benefits of MSME Registration',
        items: [
          'Discounts when obtaining loans from registered banks',
          'Subsidy on industrial promotion and patent registration',
          'Overdraft facility with interest rate exclusion',
          'ISO certification cost reimbursement',
          'Discounts on electricity bills',
          'Advantage in government contracts and tenders',
          'Access to exclusive government trade portals and international fairs',
          'Unique exemptions from direct tax laws',
        ],
      },
      {
        type: 'list',
        heading: 'MSME Classification',
        items: [
          'Micro: Investment ≤ ₹1 crore and Turnover ≤ ₹5 crore',
          'Small: Investment ≤ ₹10 crores and Turnover ≤ ₹50 crores',
          'Medium: Investment ≤ ₹50 crores and Turnover ≤ ₹250 crores',
          'Manufacturing, service, wholesale, and retail businesses eligible',
          'Individuals, sole proprietors, Pvt Ltd, LLP, SHGs, and cooperatives can register',
        ],
      },
      {
        type: 'list',
        heading: 'How BizSetupGlobal Helps',
        items: [
          'Our specialists handle your entire MSME registration process',
          'Submit MSME registration on Udyam portal',
          'You receive MSME Certificate in 2–5 working days',
          'We also assist with GST registration bundled with MSME',
          'Document verification and compliance support included',
        ],
      },
    ],
    documents: [
      'Aadhaar card of owner / partner / director',
      'PAN card of business entity',
      'Bank account details / cancelled cheque',
      'Business registration / incorporation certificate',
      'Address proof of place of business',
    ],
  },

  'iec': {
    slug: 'iec',
    title: 'Import Export Code (IEC) Registration',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'Every Indian business engaging in import or export requires a 10-digit IEC code issued by DGFT (Ministry of Commerce). It is a lifetime certificate — no renewal required.',
    timeline: '3–5 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is IEC?',
        content: 'The Director-General of Foreign Trade (DGFT), Ministry of Commerce, issues the IEC code. Importers need IEC to clear customs and transfer money to foreign banks. Exporters need IEC to ship goods and receive foreign bank funds. The validity is lifetime — no renewal or update needed after obtaining.',
      },
      {
        type: 'list',
        heading: 'Who Needs IEC?',
        items: [
          'Any business importing or exporting goods / services',
          'E-commerce sellers on Amazon, Flipkart (for international sales)',
          'Businesses planning to import machinery, raw materials',
          'Service exporters (IT, consulting, design firms)',
          'Businesses seeking foreign currency payments',
        ],
      },
      {
        type: 'list',
        heading: 'Exemptions (IEC Not Required)',
        items: [
          'Personal imports/exports not connected to trade',
          'Nepal/Myanmar imports below ₹25,000 per consignment',
          'Central and State Government ministries/departments',
          'Non-commercial PSUs (use permanent IEC numbers)',
        ],
      },
    ],
    documents: [
      'Valid PAN card (mandatory)',
      'Bank account in entity name (cancelled cheque)',
      'Incorporation certificate / partnership deed',
      'Applicant PAN and Aadhaar card',
      'Address proof of office (electricity bill / rent agreement)',
    ],
  },

  'professional-tax': {
    slug: 'professional-tax',
    title: 'Professional Tax Registration',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'Professional Tax is a state government levy on all employed professionals and businesses. Registration is mandatory for all companies and firms within 30 days of commencement, with a maximum of ₹2,500 per annum.',
    timeline: '3–7 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is Professional Tax?',
        content: 'State governments charge professional tax on all salaried workers, lawyers, doctors, and chartered accountants. The maximum professional tax is ₹2,500 annually. Business owners are responsible for registration, deduction from employee salaries, and payment to the government. Two certificates are required: PTEC (for the entity) and PTRC (for deducting from employees).',
      },
      {
        type: 'list',
        heading: 'Exemptions',
        items: [
          'Parents of children with mental or permanent disability',
          'Members of the armed forces',
          'Individuals with permanent physical disability',
          'Women exclusively working as agents under directorate of small savings',
          'Badli workers in the textile industry',
          'Senior citizens (age differs state-wise)',
        ],
      },
      {
        type: 'list',
        heading: 'Applicability',
        items: [
          'All firms, LLPs, companies, societies, HUFs, associations',
          'All branches treated as separate individuals for PT purposes',
          'Registration within 30 days of incorporation (PTEC)',
          'PTRC required within 30 days of employing first staff member',
          'Failure to register results in significant penalties',
          'Deduction to be made from employee salaries and remitted monthly/quarterly',
        ],
      },
    ],
    documents: [
      'Certificate of incorporation / MOA and AOA / LLP agreement',
      'PAN card of company / LLP (attested by director)',
      'Proof of office location with NOC from premises owner',
      'Bank statement and cancelled cheque',
      'Passport size photograph and ID proof of directors',
      'Board resolution / consent of partners',
      'Shop and establishment certificate',
    ],
  },

  'pf-registration': {
    slug: 'pf-registration',
    title: 'PF (Provident Fund) Registration',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'EPF registration is mandatory for all establishments with 20 or more employees, ensuring retirement savings for employees under the Employees\' Provident Funds and Miscellaneous Provisions Act, 1952.',
    timeline: '5–10 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Benefits of EPF Registration',
        items: [
          'Pension coverage — employer contribution includes Employee Pension Scheme',
          'Risk coverage — assists dependents in case of illness, death, or retirement',
          'Single EPF account — transferable via UAN when changing jobs',
          'Emergency fund — withdrawable for illness, weddings, education',
          'Employee Deposit Linked Insurance Scheme (EDLIS) — 0.5% premium',
          'Helps achieve long-term goals like property purchase',
          'EEE tax status — contributions are tax-deductible',
        ],
      },
      {
        type: 'list',
        heading: 'Eligibility',
        items: [
          'Mandatory for organisations with 20 or more employees',
          'Optional for organisations with less than 20 employees (with employee consent)',
          'Employees earning < ₹15,000/month must join EPF',
          'Employees earning > ₹15,000/month may opt in voluntarily',
        ],
      },
      {
        type: 'list',
        heading: 'Contribution Rates',
        items: [
          '12% of employee\'s basic salary for both employer and employee',
          '10% contribution for establishments with < 20 employees',
          'Employer contribution split: 8.33% to EPS + balance to EPF',
          'Monthly returns due by 15th of following month',
        ],
      },
    ],
    documents: [
      'Name and address of company',
      'Certificate of incorporation / PAN card of establishment',
      'Cross cancelled cheque of establishment',
      'Address proof in name of establishment',
      'DSC registration of accepted applicant',
      'Specimen signature of directors and authorised signatories',
      'Salary register and employee details',
    ],
  },

  'esi-registration': {
    slug: 'esi-registration',
    title: 'ESI (Employee State Insurance) Registration',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'ESI Registration is mandatory for establishments with 10 or more employees earning up to ₹21,000/month, providing comprehensive social security including medical, sickness, maternity, and disablement benefits.',
    timeline: '5–10 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'What is ESIC?',
        content: 'The Employees\' State Insurance Corporation (ESIC) is a statutory body under the Ministry of Labour and Employment. It provides a comprehensive social security scheme to workers. ESI registration must be obtained when employee count reaches 10 (in some states, 20). Once registered, the employer contributes 3.25% and the employee contributes 0.75% of gross wages.',
      },
      {
        type: 'list',
        heading: 'Benefits under ESI',
        items: [
          'Medical benefit — complete medical care for employee and family',
          'Sickness benefit — cash compensation during illness',
          'Maternity benefit — paid leave for female employees',
          'Disablement benefit — for employment injury or occupational disease',
          'Dependent benefit — financial support to family in case of death',
          'Funeral expenses reimbursement',
        ],
      },
      {
        type: 'list',
        heading: 'Compliance Requirements',
        items: [
          'Monthly ESI return filing by 15th of subsequent month',
          'Maintain attendance and wages registers',
          'Half-yearly returns in Form 6',
          'Inspection book to be maintained at establishment',
          'Employee registration on ESIC portal within 3 months of joining',
        ],
      },
    ],
    documents: [
      'PAN card of establishment',
      'Certificate of incorporation / registration certificate',
      'Address proof of establishment',
      'Bank account details (cancelled cheque)',
      'Employee details — name, salary, date of joining',
      'List of directors / partners with their details',
    ],
  },

  'shops-establishment': {
    slug: 'shops-establishment',
    title: 'Shop & Establishment Registration',
    subtitle: 'Business Setup › Registration',
    badge: 'Registration',
    badgeIcon: 'FileText',
    heroDesc: 'Shop & Establishment registration is mandatory for every business operating from commercial premises — granting legal status, enabling bank account opening, and ensuring compliance with state labour laws.',
    timeline: '3–7 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Benefits',
        items: [
          'Legal right to conduct business in the jurisdiction',
          'Required to open a business bank current account',
          'Access to government schemes for small businesses',
          'Eligibility for low-interest bank loans and financial plans',
          'Strengthens market position with legal entity status',
          'Hassle-free inspections — cannot be harassed by enforcement',
          'Attract newer consumers with official registration proof',
        ],
      },
      {
        type: 'list',
        heading: 'Matters Regulated under the Act',
        items: [
          'Work hours, annual leave, weekly holidays',
          'Compensation and wages payment',
          'Employment of children — strictly prohibited',
          'Night shift restrictions for women and young persons',
          'Inspection and enforcement provisions',
          'Employers\' record keeping requirements',
        ],
      },
      {
        type: 'list',
        heading: 'Eligibility',
        items: [
          'All shops, commercial establishments, hotels, restaurants',
          'Theatres, public entertainment or amusement places',
          'Offices (including software companies and BPOs)',
          'Any premises used for trade, business, or profession',
          'Even home-based businesses may need registration in some states',
        ],
      },
    ],
    documents: [
      'Identity proof of owner (Voter ID / PAN / Aadhaar)',
      'Address proof of shop / business premises',
      'Partnership deed / ROC filing (proof of formation)',
      'Photograph of the owner',
      'Additional business licences as applicable',
    ],
  },

  // ─── GLOBAL INCORPORATION ─────────────────────────────────────────────────

  'singapore': {
    slug: 'singapore',
    title: 'Company Incorporation in Singapore',
    subtitle: 'Global Incorporation › Singapore',
    badge: 'Global Incorporation',
    badgeIcon: 'Globe2',
    heroDesc: 'Singapore is Asia\'s premier business hub — offering a transparent legal system, low tax rates, and a world-class regulatory environment. Incorporate in days with BizSetupGlobal\'s end-to-end support.',
    timeline: '3–5 Working Days',
    stats: [
      { number: '17%', label: 'Corporate Tax Rate' },
      { number: '1 Day', label: 'Typical Incorporation' },
      { number: 'S$1', label: 'Minimum Capital' },
      { number: '#1', label: 'Ease of Doing Business' },
    ],
    sections: [
      {
        type: 'steps',
        heading: 'Incorporation Process',
        steps: [
          { title: 'Name Reservation', desc: 'Reserve company name through ACRA (BizFile+). Application fee: S$15. Valid for 60 days.' },
          { title: 'Registered Address', desc: 'A local Singapore physical address is mandatory. We arrange this for you.' },
          { title: 'Directors & Shareholders', desc: 'Minimum 1 director (must be Singapore resident), minimum 1 shareholder. No nationality restriction for shareholders.' },
          { title: 'Company Secretary', desc: 'Must appoint a qualified Singapore-resident company secretary within 6 months of incorporation.' },
          { title: 'Register & Receive CoI', desc: 'Submit all documents to ACRA. Receive registration number and Certificate of Incorporation via email.' },
          { title: 'Business Profile', desc: 'Download Company Business Profile from BizFile+ — required for bank account opening and business activities.' },
        ],
      },
      {
        type: 'list',
        heading: 'Fees Involved',
        items: [
          'Name reservation fee: S$15',
          'Incorporation fee: S$300 (standard)',
          'Certificate of Incorporation (printed copy): S$50',
          'Company Business Profile download fee: nominal',
          'Company Secretary annual fee: S$300–S$600/year',
        ],
      },
    ],
    documents: [
      'PAN card of shareholders and directors',
      'Passport (scanned copy — front and back)',
      'Proof of overseas residential address (utility bill / bank statement)',
      'Company name and SSIC (business activity) code',
      'Particulars of all shareholders, directors, and company secretary',
      'Memorandum and Articles of Association (M&AA)',
    ],
  },

  'uk': {
    slug: 'uk',
    title: 'Company Incorporation in UK',
    subtitle: 'Global Incorporation › United Kingdom',
    badge: 'Global Incorporation',
    badgeIcon: 'Globe2',
    heroDesc: 'The UK offers one of the fastest and most flexible company incorporation processes in the world — register with Companies House in as little as 24 hours with a £12 electronic filing fee.',
    timeline: '1–5 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Steps to Incorporate',
        steps: [
          { title: 'Choose Business Name', desc: 'Name must be unique and end with "Limited" or "Ltd". Check availability on Companies House website.' },
          { title: 'Choose Jurisdiction', desc: 'Incorporate in England, Wales, Scotland, or Northern Ireland. No concept of states in UK.' },
          { title: 'Registered Address', desc: 'Must have a physical UK address in the country of registration. Can appoint a registered agent.' },
          { title: 'Articles of Association', desc: 'Draft and file Articles of Association (or adopt model articles). Filing fee: £10–£40.' },
          { title: 'Appoint Directors & Shareholders', desc: 'Register all directors, PSCs (beneficial owners), and shareholders with Companies House.' },
          { title: 'File with Companies House', desc: 'Submit Form IN01 with £12 electronic fee. Receive Certificate of Incorporation within 24 hours.' },
        ],
      },
      {
        type: 'list',
        heading: 'Documents Required',
        items: [
          'Application to register company (Form IN01)',
          'Memorandum of Association (generated by Companies House)',
          'Articles of Association (custom or model articles)',
          'SIC code (Standard Industrial Classification — up to 4 codes)',
          'PSC (Person with Significant Control) details',
          'Director and shareholder identification documents',
        ],
      },
    ],
    documents: [
      'Proof of identity for all directors and shareholders (passport)',
      'UK registered address (physical address)',
      'SIC code for business activity',
      'Articles of Association',
      'PSC information (person owning > 25% shares or voting rights)',
    ],
  },

  'usa': {
    slug: 'usa',
    title: 'Company Incorporation in USA',
    subtitle: 'Global Incorporation › United States',
    badge: 'Global Incorporation',
    badgeIcon: 'Globe2',
    heroDesc: 'Incorporate in Delaware, Nevada, or Wyoming for maximum legal flexibility and investor-friendliness. The US offers the world\'s largest investor ecosystem — C-Corp is standard for startup fundraising.',
    timeline: '5–10 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Steps to Incorporate',
        steps: [
          { title: 'Choose Entity Type', desc: 'Understand S Corp, C Corp, LLC differences. C-Corp is preferred for VC-backed startups; LLC for small businesses.' },
          { title: 'Choose a State', desc: 'Delaware is most popular for corporations; Nevada and Wyoming for LLCs. Each has different rules and costs.' },
          { title: 'Choose Business Name', desc: 'Name must be unique. Check availability through the state\'s Secretary of State website. Reserve for 30–90 days.' },
          { title: 'File Articles of Incorporation', desc: 'Submit to Secretary of State. Filing fee: $100–$300 depending on state.' },
          { title: 'Obtain EIN', desc: 'Apply for Employer Identification Number from IRS — free. Required for bank accounts, employees, and tax filing.' },
          { title: 'Trademark Registration', desc: 'Register trademark via TEAS (Trademark Electronic Application System) to protect your brand.' },
        ],
      },
      {
        type: 'list',
        heading: 'Best For',
        items: [
          'C-Corp: Startups seeking VC funding, employees with stock options',
          'LLC: Small businesses seeking tax advantages and flexibility',
          'S-Corp: Small businesses with US resident owners avoiding double taxation',
          'Delaware: Flexible corporate law, strong legal precedents, investor preference',
        ],
      },
    ],
    documents: [
      'Articles of Incorporation',
      'Corporate Bylaws',
      'Registered Agent appointment letter',
      'Passport / government-issued ID of all directors',
      'US address (registered agent can provide)',
      'EIN application details',
    ],
  },

  'dubai': {
    slug: 'dubai',
    title: 'Company Incorporation in Dubai',
    subtitle: 'Global Incorporation › Dubai, UAE',
    badge: 'Global Incorporation',
    badgeIcon: 'Globe2',
    heroDesc: 'Dubai offers 0% personal income tax, 9% corporate tax, and world-class infrastructure. Choose from Mainland, Free Zone, or Offshore structures depending on your business model and market.',
    timeline: '7–14 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Incorporation Process',
        steps: [
          { title: 'Determine Jurisdiction', desc: 'Choose between Dubai Mainland, Free Zone (100+ options), or Offshore. Depends on target market, activity, and expansion plans.' },
          { title: 'Choose Trade Name', desc: 'Select a unique trade name and get approval from the Department of Economic Development (DED).' },
          { title: 'Define Business Activities', desc: 'Specify permitted business activities — this determines the license type and jurisdiction.' },
          { title: 'Obtain Approvals & Legal Docs', desc: 'Prepare and submit MOA, AOA, and other legal documentation. Obtain initial and final approvals.' },
          { title: 'Secure Business Location', desc: 'Obtain physical office space, flexi-desk, or virtual office depending on jurisdiction.' },
          { title: 'Obtain Trade License', desc: 'Apply for the Trade License from DED or Free Zone authority. Cost varies by activity and jurisdiction.' },
          { title: 'Open Corporate Bank Account', desc: 'Open UAE corporate bank account. Minimum balance requirements and compliance costs apply.' },
        ],
      },
      {
        type: 'list',
        heading: 'Fees Involved',
        items: [
          'Trade License Fee: AED 10,000–AED 30,000+ depending on activity',
          'Registration & Incorporation Fees: AED 5,000–AED 15,000',
          'Office / Flexi-Desk: AED 10,000–AED 30,000/year',
          'Visa and Immigration Fees: AED 3,000–AED 7,000 per visa',
          'Corporate Bank Account: No fixed fee; minimum balance applies',
        ],
      },
    ],
    documents: [
      'Passport copies of all shareholders and directors',
      'UAE entry stamp / visa copy',
      'Proof of residential address',
      'Business plan / activity description',
      'NOC from current UAE employer (if applicable)',
      'Bank reference letter',
    ],
  },

  'thailand': {
    slug: 'thailand',
    title: 'Company Incorporation in Thailand',
    subtitle: 'Global Incorporation › Thailand',
    badge: 'Global Incorporation',
    badgeIcon: 'Globe2',
    heroDesc: 'Thailand offers a strategic ASEAN gateway, competitive costs, and a growing economy. A Thai LLC (Private Limited Company) requires a minimum of 3 promoters and 2 million THB in registered capital.',
    timeline: '14–21 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Incorporation Process',
        steps: [
          { title: 'Name Reservation', desc: 'Reserve company name online at DBD (Department of Business Development). Valid for 30 days. Name must end with "Limited".' },
          { title: 'File MOA', desc: 'Prepare Memorandum and Articles of Association (Bi-laws). Register business activities, promoters, and share capital details.' },
          { title: 'Convene Statutory Meeting', desc: 'Hold statutory meeting with directors, shareholders. Finalise share structure, appoint directors and auditor, pass Articles of Association.' },
          { title: 'Company Registration', desc: 'File on same day as MOA registration at Ministry of Commerce. Must be within 90 days of statutory meeting. Fee: 500 THB per 100,000 THB capital.' },
          { title: 'Tax & VAT Registration', desc: 'Obtain Tax ID and VAT certificate at Central Filing Office within 60 days. Required if annual turnover > 1.8 million THB.' },
          { title: 'Open Bank Account', desc: 'Open corporate bank account with board meeting minutes, business registration, and ID documents of shareholders and directors.' },
        ],
      },
      {
        type: 'list',
        heading: 'Requirements',
        items: [
          'Minimum 3 promoters / shareholders',
          'Commercial address in Thailand',
          'Minimum 1 director (first director must be Thai national)',
          'Minimum capital: 2,000,000 THB',
          '51% shares must be held by Thai juristic persons',
          '49% can be held by foreigners',
        ],
      },
    ],
    documents: [
      'Passport copies of all shareholders and directors',
      'Proof of residential address (overseas)',
      'Power of Attorney (if using representative)',
      'Bank reference letter',
      'Business plan / description of activities',
    ],
  },

  // ─── STARTUP SERVICES ─────────────────────────────────────────────────────

  'startup-india': {
    slug: 'startup-india',
    title: 'Startup India Registration (DPIIT Recognition)',
    subtitle: 'Startup Services › Startup India',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'Startup India Registration (DPIIT Recognition) unlocks tax exemptions, angel tax relief, faster IP protection, and government funding access — building the foundation for India\'s startup ecosystem.',
    timeline: '3–5 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Eligibility Criteria',
        items: [
          'Company must be an LLP or Private Limited Company',
          'Incorporated or registered in India',
          'Less than 10 years old from date of incorporation',
          'Annual turnover not exceeding ₹100 crore in any financial year',
          'Working towards innovation, development, or improvement of products/services',
          'Not formed by splitting up or reconstruction of existing business',
        ],
      },
      {
        type: 'list',
        heading: 'Key Benefits',
        items: [
          'Tax holiday for 3 consecutive years out of first 10 years (Sec 80-IAC)',
          'Angel Tax Exemption under Section 56(2)(viib) on equity investment',
          'Self-compliance for 6 labour laws — no inspections for 3 years',
          '80% rebate on patent filing fee + fast-track processing',
          'Trademark registration fee rebate',
          'Access to government funding schemes (SFAC, Stand-Up India, etc.)',
          'Easy winding up within 90 days under IBC 2016',
          'Easier participation in government procurement on GeM portal',
        ],
      },
      {
        type: 'steps',
        heading: 'Registration Process',
        steps: [
          { title: 'Provide Business Details', desc: 'Submit business information, team details, and innovative idea description on the Startup India portal.' },
          { title: 'Choose Package & Pay', desc: 'Select your package and pay online. Multiple payment modes available.' },
          { title: 'Expert Review & Application', desc: 'Our professional examines DPIIT criteria and submits the application.' },
          { title: 'Follow-up with Government', desc: 'We track your application and follow up with DPIIT for certificate issuance.' },
          { title: 'Receive Certificate', desc: 'Download and receive your Startup India Certificate upon successful examination.' },
        ],
      },
    ],
    documents: [
      'Certificate of Incorporation / LLP agreement',
      'PAN of company',
      'Brief description of business innovation / unique idea',
      'Details of core team (qualifications, roles)',
      'Details of funding received (if any)',
      'IPR details (if applicable)',
      'Number of employees',
    ],
  },

  'term-sheet': {
    slug: 'term-sheet',
    title: 'Term Sheet Drafting',
    subtitle: 'Startup Services › Legal Documents',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'A Term Sheet is the foundation of any investment deal — outlining key terms between founder and investor before a formal agreement is drafted. Clear term sheets prevent costly disputes later.',
    sections: [
      {
        type: 'text',
        heading: 'What is a Term Sheet?',
        content: 'A term sheet is a non-binding document that outlines the key terms and conditions of a proposed investment contract. It provides a starting point for negotiations, saving time by letting both parties agree on key issues before expensive legal drafting begins. Typically used in VC/angel investment rounds, M&A transactions, and business partnerships.',
      },
      {
        type: 'list',
        heading: 'Key Features',
        items: [
          'Non-binding — parties can negotiate and modify freely',
          'First step towards the final investment contract',
          'Subject to modification at any time before signing',
          'Outlines valuation, equity stake, investment amount',
          'Specifies governance rights — board seats, veto rights',
          'Includes anti-dilution protection and liquidation preferences',
        ],
      },
      {
        type: 'list',
        heading: 'Benefits of a Proper Term Sheet',
        items: [
          'Clear communication of expectations between founder and investor',
          'Time-saving — avoids misunderstandings during expensive drafting',
          'Flexibility — iterative negotiations improve relationships',
          'Interest protection for both parties',
          'Reduces risk of disputes during investment process',
          'Lays out equity distribution and vesting timelines clearly',
        ],
      },
    ],
  },

  'sha': {
    slug: 'sha',
    title: 'Shareholders Agreement (SHA)',
    subtitle: 'Startup Services › Legal Documents',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'A Shareholders Agreement (SHA) is a legally binding contract that protects the rights of all shareholders, defines decision-making, and prevents disputes before they become costly legal battles.',
    sections: [
      {
        type: 'text',
        heading: 'What is a SHA?',
        content: 'The Shareholders Agreement is an optional but critical agreement between part or all of a company\'s shareholders. Unlike company by-laws required by the Companies Act, SHA is a contractual arrangement exclusively binding on the parties. A well-prepared SHA maintains good relationships between shareholders and investors.',
      },
      {
        type: 'list',
        heading: 'Benefits',
        items: [
          'Protects rights of all shareholders including minorities',
          'Clearly defines roles, duties, and obligations of shareholders',
          'Planned dispute resolution — saves money, time, and energy',
          'Defines company management structure and decision-making',
          'Prevents minority shareholders from transferring shares to competitors',
          'Right of First Refusal (ROFR) — protects existing shareholders',
          'Drag-along and tag-along rights clearly defined',
        ],
      },
      {
        type: 'list',
        heading: 'Key Clauses',
        items: [
          'Party details and shareholding percentages',
          'Right of First Refusal (ROFR) on share transfers',
          'Drag-along rights — majority can force minority to sell',
          'Tag-along rights — minority can participate in majority sale',
          'Anti-dilution protection for existing shareholders',
          'Confidentiality obligations on non-public information',
          'Non-compete covenants during and after shareholding period',
          'Arbitration clause for dispute resolution',
        ],
      },
    ],
  },

  'founders-agreement': {
    slug: 'founders-agreement',
    title: 'Founders Agreement',
    subtitle: 'Startup Services › Legal Documents',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'A Founders Agreement is the most critical document for any startup with multiple co-founders — clearly defining roles, equity, vesting, decision-making, and exit procedures before disputes arise.',
    sections: [
      {
        type: 'text',
        heading: 'Why Every Startup Needs a Founders Agreement',
        content: 'The founders\' agreement prevents business disputes that may occur between co-founders over time. It deals with unforeseeable events like the death or resignation of a co-founder. All co-founders sign the agreement when the firm is formed, establishing rules that bind their behaviour and protect the business.',
      },
      {
        type: 'list',
        heading: 'Key Sections',
        items: [
          'Co-founder identification — names, roles, and responsibilities',
          'Equity ownership structure and percentage held by each founder',
          'Vesting schedule — typically 4 years with 1-year cliff',
          'Decision-making structure and voting rights',
          'Intellectual property — ownership of IP created for the company',
          'Confidentiality obligations for company secrets',
          'Termination provisions and buyout clauses',
          'Dispute resolution — mediation and arbitration procedure',
        ],
      },
      {
        type: 'list',
        heading: 'Benefits',
        items: [
          'Establishes vision, mission, and short/long-term goals clearly',
          'Defines co-founder compensation and remuneration plans',
          'Prevents overlapping roles — clear division of labour',
          'Includes second confidentiality clause — no sharing of business secrets',
          'Sets up proper procedure for removing a co-founder for cause',
          'Protects company in case of co-founder exit or unexpected events',
        ],
      },
    ],
    documents: [
      'Address verification for all co-founders',
      'Proof of identity for all co-founders',
      'Witness identification',
      'Well-defined company goal and equity breakdown',
      'Total amount and percentage of shares per co-founder',
    ],
  },

  'nda': {
    slug: 'nda',
    title: 'Non-Disclosure Agreement (NDA)',
    subtitle: 'Startup Services › Legal Documents',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'An NDA is your first line of protection when sharing confidential business information — protecting trade secrets, client data, proprietary technology, and business strategies before partnerships or hiring.',
    sections: [
      {
        type: 'text',
        heading: 'What is an NDA?',
        content: 'A Non-Disclosure Agreement (NDA) is a legally binding contract establishing a confidential relationship between parties. It ensures that sensitive information shared between parties remains private and is not disclosed to third parties. NDAs are commonly used before investment discussions, hiring employees, onboarding vendors, or entering into business partnerships.',
      },
      {
        type: 'list',
        heading: 'Types of NDA',
        items: [
          'Unilateral NDA — one party shares confidential information with another',
          'Bilateral / Mutual NDA — both parties share confidential information',
          'Multilateral NDA — three or more parties involved',
          'Employee NDA — executed at the time of hiring',
          'Vendor / Supplier NDA — before sharing business processes',
        ],
      },
      {
        type: 'list',
        heading: 'Key Clauses',
        items: [
          'Definition of confidential information — what is covered',
          'Obligations of receiving party — non-disclosure, non-use',
          'Duration of confidentiality obligation',
          'Exclusions — information already in public domain',
          'Return or destruction of confidential information',
          'Remedies for breach — injunctive relief and damages',
          'Governing law and jurisdiction',
        ],
      },
    ],
  },

  'sla': {
    slug: 'sla',
    title: 'Service Level Agreement (SLA)',
    subtitle: 'Startup Services › Legal Documents',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'A Service Level Agreement defines the standards, metrics, and obligations for service delivery — protecting both service provider and client and preventing disputes through clear performance benchmarks.',
    sections: [
      {
        type: 'list',
        heading: 'Types of SLA',
        items: [
          'Customer SLA — between service provider and external clients',
          'Internal SLA — between departments or teams within a company',
          'Multilevel SLA — multiple service levels with performance indicators',
        ],
      },
      {
        type: 'list',
        heading: 'Key Components',
        items: [
          'Introduction — parties, launch date, broad service description',
          'Service description — all services, turnaround times, conditions',
          'Performance metrics and measurement methodology',
          'Penalties / remedies if SLA metrics are not met',
          'Roles and responsibilities of each party',
          'Security measures — NDA, IT security, anti-poaching',
          'Cancellation conditions and notice periods',
          'Disaster recovery and risk management plan',
          'Review and amendment procedure for the SLA',
        ],
      },
      {
        type: 'list',
        heading: 'Who Needs an SLA?',
        items: [
          'IT service providers and managed service providers',
          'Cloud service providers',
          'Internet service providers',
          'Any business providing recurring services to clients',
          'Internal departments with service dependencies',
        ],
      },
    ],
  },

  'msa': {
    slug: 'msa',
    title: 'Master Service Agreement (MSA)',
    subtitle: 'Startup Services › Legal Documents',
    badge: 'Startup Services',
    badgeIcon: 'Rocket',
    heroDesc: 'A Master Service Agreement sets the framework for all future service engagements — saving time and legal costs on every new contract by establishing pre-agreed terms that govern all work.',
    sections: [
      {
        type: 'text',
        heading: 'What is an MSA?',
        content: 'A Master Service Agreement is a contract that sets the terms and conditions for all future service transactions between two parties. Once the MSA is in place, future agreements only need to address project-specific details in a Statement of Work (SOW), dramatically reducing negotiation time and legal costs.',
      },
      {
        type: 'list',
        heading: 'Advantages',
        items: [
          'Faster process than standard contract negotiations',
          'Protection for both parties — rights and obligations clearly defined',
          'Blueprint for all future agreements — reduces per-project legal costs',
          'Reduces ambiguity and risk of disputes',
          'Establishes confidentiality, IP ownership, and dispute resolution upfront',
        ],
      },
      {
        type: 'list',
        heading: 'Key Clauses',
        items: [
          'Scope of services and deliverables',
          'Duration and termination conditions',
          'Pricing, payment terms, and late payment penalties',
          'Intellectual property ownership and licensing',
          'Confidentiality obligations',
          'Indemnification and limitation of liability',
          'Dispute resolution — arbitration clause',
          'Governing law and jurisdiction',
          'Amendment and modification procedures',
        ],
      },
    ],
  },

  // ─── COMPLIANCES ──────────────────────────────────────────────────────────

  'private-ltd-compliance': {
    slug: 'private-ltd-compliance',
    title: 'Private Limited Company Annual Compliance',
    subtitle: 'Compliances › Private Ltd',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Private Limited Companies must meet a comprehensive set of MCA, income tax, and ROC compliance requirements every year. Non-compliance attracts significant penalties and disqualification of directors.',
    sections: [
      {
        type: 'list',
        heading: 'Mandatory Annual Compliances',
        items: [
          'Commencement of Business certificate — within 180 days of incorporation',
          'Statutory Auditor appointment — within 30 days of incorporation',
          'Income Tax Return filing — on or before 30th October',
          'MCA Form AOC-4 (Financial Statements) — on or before 29th October',
          'MCA Form MGT-7 (Annual Return) — on or before 28th November',
          'DIN eKYC (DIR-3 eKYC) — by 30th September annually',
          'Annual General Meeting — mandatory once a year',
          'Director\'s Report — as per Section 134',
          'Share Certificate issuance — within 2 months of share allotment',
          'Maintain 7–8 mandatory statutory registers',
        ],
      },
      {
        type: 'list',
        heading: 'Post-Incorporation Compliance',
        items: [
          'Deposit paid-up capital in bank account',
          'Commencement certificate from MCA within 180 days',
          'File GST returns if GST registered',
          'Preparation of Financial Statements per Schedule III',
          'TDS deduction, deposit, and return filing as applicable',
        ],
      },
    ],
  },

  'llp-compliance': {
    slug: 'llp-compliance',
    title: 'LLP Annual Compliance',
    subtitle: 'Compliances › LLP',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'LLPs have fewer compliance requirements than private limited companies, but key MCA filings, income tax returns, and audits must be completed on time to avoid penalties.',
    sections: [
      {
        type: 'list',
        heading: 'Mandatory Annual Compliances',
        items: [
          'Form 11 (Annual Return) — within 60 days of end of financial year (by 30th May)',
          'Form 8 (Statement of Accounts & Solvency) — by 30th October',
          'Income Tax Return — by 31st July (non-audit) / 31st October (audit)',
          'Tax Audit — mandatory if turnover > ₹40L or contribution > ₹25L',
          'GST returns — if GST registered',
          'DIN eKYC — annually by 30th September',
          'TDS returns — if TDS deducted',
        ],
      },
      {
        type: 'text',
        heading: 'Penalty Mitigation Architecture',
        content: 'Our compliance framework is designed for zero tolerance toward delays. We utilize a dual-track verification system where internal auditors review filings 48 hours before the statutory deadline, ensuring that technical glitches or MCA server downtimes never result in dynamic penalties for your LLP.',
      },
      {
        type: 'list',
        heading: 'Strategic Secretarial Support',
        items: [
           'Advisory on profit-sharing ratio optimization',
           'Management of designated partner structural changes',
           'Maintenance of electronic statutory registers',
           'Liaison with jurisdictional ROC for technical queries',
           'Quarterly health-check audits for regulatory gaps',
           'Strategic guidance on LLP-to-Company conversions'
        ]
      },
      {
        type: 'text',
        heading: 'LLP Tax Audit',
        content: 'LLPs must get accounts audited by a practising Chartered Accountant if annual turnover exceeds ₹40 lakhs or contribution exceeds ₹25 lakhs. The LLP financials must include a statement from partners acknowledging their responsibility to comply with accounting requirements.',
      },
    ],
  },

  'opc-compliance': {
    slug: 'opc-compliance',
    title: 'OPC (One Person Company) Annual Compliance',
    subtitle: 'Compliances › OPC',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'One Person Companies must meet similar compliance requirements to Private Limited Companies — with slightly relaxed timelines. Stay compliant to protect your limited liability protection.',
    sections: [
      {
        type: 'list',
        heading: 'Mandatory Compliances for OPC',
        items: [
          'Commencement of Business certificate — within 180 days of incorporation',
          'Statutory Auditor appointment — within 30 days of incorporation',
          'Income Tax Return — on or before 30th September of the financial year',
          'MCA Form AOC-4 — on or before 27th September',
          'MCA Form MGT-7 — on or before 26th November',
          'DIN eKYC (DIR-3 eKYC) — annually by 30th September',
          'Annual General Meeting — not required for OPC (exempted)',
          'Director\'s Report — under Section 134',
          'Share Certificate — within 2 months of share allotment',
          'Maintain 7–8 mandatory statutory registers',
        ],
      },
      {
        type: 'steps',
        heading: 'Our Process',
        steps: [
          { title: 'Fill the Form', desc: 'Fill out a simple form on our website to initiate the compliance process.' },
          { title: 'Expert Call', desc: 'Our Legal expert connects with you, prepares all required documents.' },
          { title: 'ROC Compliance', desc: 'We handle all timely reminders, documentation, and ROC filings on your behalf.' },
        ],
      },
    ],
  },

  'wos-compliance': {
    slug: 'wos-compliance',
    title: 'WOS (Wholly Owned Subsidiary) Compliance',
    subtitle: 'Compliances › WOS',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'A Wholly Owned Subsidiary in India must comply with both Indian company law (MCA / ROC) and FEMA / RBI reporting requirements for FDI — double compliance that requires expert management.',
    sections: [
      {
        type: 'list',
        heading: 'Annual MCA / ROC Compliances',
        items: [
          'Statutory Auditor appointment — within 30 days of incorporation',
          'Annual Return (MGT-7) — by 31st October',
          'Financial Statements (AOC-4) — by 30th September',
          'Income Tax Return (ITR-6) — by 31st October',
          'DIN eKYC — annually',
          'Commencement of Business certificate — within 180 days',
          'Director\'s Report under Section 134',
        ],
      },
      {
        type: 'list',
        heading: 'FEMA / RBI Reporting',
        items: [
          'FC-GPR (Foreign Currency — Gross Provisional Return) after allotment of shares',
          'FC-TRS (Foreign Currency — Transfer of Shares) on any share transfer',
          'Annual return on Foreign Liabilities and Assets (FLA)',
          'Reporting of FDI received within 30 days to RBI',
          'Repatriation of dividend / profits — comply with FEMA guidelines',
        ],
      },
    ],
  },

  'add-director': {
    slug: 'add-director',
    title: 'Add a Director to a Company',
    subtitle: 'Compliances › Director Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Adding a director requires obtaining consent, DIN, and filing with MCA — our experts complete the entire process in 3–5 working days while you focus on your business.',
    timeline: '3–5 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Types of Directors',
        items: [
          'Managing Director — overall management and control of the company',
          'Whole-time / Executive Director — full-time employment with the company',
          'Ordinary Director — attends board meetings, non-executive',
          'Additional Director — appointed between two AGMs',
          'Independent Director — no relationship with company management',
          'Nominee Director — appointed by financial institutions or investors',
        ],
      },
      {
        type: 'steps',
        heading: 'Process to Add a Director',
        steps: [
          { title: 'Obtain Consent (Form DIR-2)', desc: 'Proposed director must give written consent before appointment. Form DIR-2 is required.' },
          { title: 'DSC and DIN', desc: 'If proposed director lacks DSC or DIN, obtain them first. DIN once allocated is valid for a lifetime.' },
          { title: 'Board Resolution', desc: 'Pass board resolution approving the appointment. This resolution is attached to Form DIR-3.' },
          { title: 'File with ROC', desc: 'File Form DIR-12 with the ROC within 30 days of appointment. Submit all consent and resolution documents.' },
        ],
      },
    ],
  },

  'remove-director': {
    slug: 'remove-director',
    title: 'Remove / Resign a Director',
    subtitle: 'Compliances › Director Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Whether a director wants to resign or the board wants to remove one, proper MCA filings and compliance with the Companies Act 2013 is mandatory to avoid legal complications.',
    timeline: '3–5 Working Days',
    sections: [
      {
        type: 'text',
        heading: 'Director Resignation Process',
        content: 'A Director may resign from a company after giving written notice to the company. The Board is required to notify the ROC in Form DIR-12 within 30 days. If the Director desires, he may also use Form DIR-11 to send a copy of the resignation letter and reasons to the ROC directly.',
      },
      {
        type: 'list',
        heading: 'Post-Resignation Liability',
        items: [
          'Once the Board accepts resignation, director is not liable for future company liabilities',
          'Director remains liable for offences committed while serving',
          'Companies Act 2013 Section 168 governs resignation procedure',
          'Director should ensure DIR-11 is filed to protect their interests',
        ],
      },
      {
        type: 'steps',
        heading: 'Process',
        steps: [
          { title: 'Resignation Letter', desc: 'Director sends written resignation letter to company board.' },
          { title: 'Board Acceptance', desc: 'Board meets and accepts the resignation by passing a resolution.' },
          { title: 'File DIR-12', desc: 'Company files Form DIR-12 with ROC within 30 days of acceptance.' },
          { title: 'File DIR-11 (Optional)', desc: 'Resigning director may file DIR-11 directly to ROC with resignation letter.' },
        ],
      },
    ],
  },

  'add-designated-partner': {
    slug: 'add-designated-partner',
    title: 'Add a Designated Partner in LLP',
    subtitle: 'Compliances › LLP Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Adding a designated partner in an LLP requires meeting eligibility criteria, obtaining DIN and DSC, amending the partnership deed, and filing with MCA — our experts complete it in 3–7 working days.',
    timeline: '3–7 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Eligibility Criteria',
        items: [
          'Must be at least 18 years old',
          'Any individual or corporate body can be eligible',
          'Must have a unique identification number (Aadhaar card)',
          'Every LLP must have minimum 2 designated partners',
          'Person must be of sound mind',
          'Should not have been adjudged bankrupt in last 5 years',
          'At least one designated partner must be an Indian national residing in India',
          'No maximum limit for number of partners',
        ],
      },
      {
        type: 'steps',
        heading: 'Process',
        steps: [
          { title: 'Obtain DIN & DSC', desc: 'Designated Partner Identification Number (DPIN) and Digital Signature Certificate for the new partner.' },
          { title: 'Resolution & Supplementary Deed', desc: 'Partners meet and pass a resolution approving the new partner. Name added to the supplementary partnership deed.' },
          { title: 'File Form 4 & Form 3', desc: 'Form 4 for change in designated partners + Form 3 for amendment in LLP Agreement — both filed within 30 days of appointment.' },
          { title: 'MCA Update', desc: 'New designated partner\'s name appears on MCA website after successful processing.' },
        ],
      },
    ],
  },

  'winding-up': {
    slug: 'winding-up',
    title: 'Winding Up of a Company',
    subtitle: 'Compliances › Company Closure',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Winding up a Private Limited Company requires formal legal procedures — either voluntary by members or compulsory by Tribunal order. Our experts handle the entire process to ensure clean dissolution.',
    sections: [
      {
        type: 'steps',
        heading: 'Voluntary Winding Up Process',
        steps: [
          { title: 'Board Meeting', desc: 'Directors pass a resolution declaring the company has no debts or will pay them from asset sales.' },
          { title: 'General Meeting', desc: 'Issue notices and pass ordinary or special resolution (3/4 majority) for winding up.' },
          { title: 'Creditors Meeting', desc: 'If 2/3rd creditors agree, company can be wound up voluntarily. Conduct on same day or next day.' },
          { title: 'Appoint Liquidator', desc: 'File notice for liquidator appointment with Registrar within 10 days of resolution.' },
          { title: 'Liquidator\'s Account', desc: 'Wind up affairs, prepare and get audited the liquidator\'s account.' },
          { title: 'Final Meeting & Dissolution', desc: 'Call final general meeting, pass special resolution, file with Tribunal in Form STK-2. Tribunal dissolves company within 60 days.' },
        ],
      },
      {
        type: 'list',
        heading: 'Compulsory Winding Up — Grounds',
        items: [
          'Unable to pay debts',
          'Tribunal believes it is just and equitable to wind up',
          'Company not conducting business for a year after incorporation',
          'Default in filing financial statements for 5+ consecutive years',
          'Fraudulent or unlawful business activities',
          'National security or public interest grounds',
        ],
      },
    ],
  },

  'closing-llp': {
    slug: 'closing-llp',
    title: 'Closing / Striking Off a LLP',
    subtitle: 'Compliances › LLP Closure',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'LLPs that have ceased operations can apply for voluntary strike-off using LLP Form 24. BSG helps you complete all pre-requisites and file correctly to ensure clean closure with MCA.',
    sections: [
      {
        type: 'steps',
        heading: 'Steps to Close an LLP (Form 24)',
        steps: [
          { title: 'Cease Commercial Activity', desc: 'LLP must stop all commercial activities before applying for strike-off. Cessation date to be specified.' },
          { title: 'Close Bank Accounts', desc: 'Close all LLP bank accounts. Obtain bank closure letter as LLPs without bank accounts can file Form 24.' },
          { title: 'Prepare Affidavits', desc: 'Designated Partners sign affidavit (joint or several) declaring LLP has not conducted business since a specified date.' },
          { title: 'Prepare Documents', desc: 'Compile LLP deed, latest ITR acknowledgement, and nil assets/liabilities statement.' },
          { title: 'File Pending Returns', desc: 'File all overdue Form 8 and Form 11 returns for the year in which LLP ceased operations.' },
          { title: 'CA Certificate', desc: 'Obtain Chartered Accountant certificate for statement of accounts with NIL assets and NIL liabilities within 30 days of filing Form 24.' },
          { title: 'File LLP Form 24', desc: 'Submit Form 24 to MCA. If approved, Registrar publishes dissolution notice in official gazette.' },
        ],
      },
    ],
  },

  'increase-share-capital': {
    slug: 'increase-share-capital',
    title: 'Increase Authorised Share Capital',
    subtitle: 'Compliances › Capital Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Increasing authorised share capital requires board approval, shareholder resolution, and ROC filing — our team handles the entire process including AOA amendments and Form SH7 filing.',
    timeline: '5–7 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Process to Increase Share Capital',
        steps: [
          { title: 'Verify AOA', desc: 'Check Articles of Association to ensure it includes a provision for increasing capital. Amend AOA if no such provision exists.' },
          { title: 'Convene Board Meeting', desc: 'Directors convene board meeting and pass resolution approving the increase in authorised share capital.' },
          { title: 'Extraordinary General Meeting (EGM)', desc: 'Schedule EGM to get shareholder approval for the increase and change in MOA. Issue proper notices to all stakeholders.' },
          { title: 'Pass Ordinary Resolution', desc: 'Conduct EGM and get shareholders to pass ordinary resolution approving the increased capital.' },
          { title: 'File Form SH7 with ROC', desc: 'File Form SH7 within 30 days of EGM resolution with: EGM notice, certified copy of resolution, and amended MOA. Pay applicable government fees.' },
        ],
      },
    ],
  },

  'remove-designated-partner': {
    slug: 'remove-designated-partner',
    title: 'Remove Designated Partner from LLP',
    subtitle: 'Compliances › LLP Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Removing a designated partner from an LLP requires written consent, supplementary deed amendment, and MCA filings within 30 days — the process takes 3–7 working days.',
    timeline: '3–7 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Reasons for Removal',
        items: [
          'Negligence in roles and responsibilities',
          'Bankruptcy or insolvency of the partner',
          'Change in scope of work of LLP',
          'Retirement or resignation of a partner',
          'Breach of financial data or confidentiality',
          'Inability to perform obligations per the LLP agreement',
        ],
      },
      {
        type: 'steps',
        heading: '3-Step Procedure',
        steps: [
          { title: 'Pass Resolution', desc: 'Existing partners meet and pass a written resolution authorising one partner to carry out the legal formalities on behalf of the LLP.' },
          { title: 'Execute Supplementary Agreement', desc: 'Amend the LLP Agreement through a Supplementary Agreement signed by all existing partners and the removing partner.' },
          { title: 'File Form 4 & Form 3', desc: 'File Form 4 (change in partners) and Form 3 (LLP Agreement amendment) with MCA within 30 days. Late fee of ₹100/day applies for delay.' },
        ],
      },
    ],
    documents: [
      'Existing LLP Agreement',
      'Resolution for removal of partner (on LLP letterhead)',
      'DIN & DSC of authorised partner',
      'Resignation letter from removing partner',
      'Supplementary LLP Agreement',
    ],
  },

  'share-certificate': {
    slug: 'share-certificate',
    title: 'Share Certificate Issuance',
    subtitle: 'Compliances › Share Management',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Companies Act 2013 requires share certificates to be issued within 2 months of incorporation and allotment. Non-compliance attracts penalties up to ₹5 lakh for the company.',
    sections: [
      {
        type: 'text',
        heading: 'What is a Share Certificate?',
        content: 'A share certificate is a document issued by a company evidencing ownership of company shares. Companies Act 2013 requires companies to issue share certificates post-incorporation. The certificate must be in Form SH-1 or similar format and signed by authorised directors with the company seal.',
      },
      {
        type: 'list',
        heading: 'Details Required on Share Certificate',
        items: [
          'CIN (Corporate Identity Number) of the company',
          'Registered office of the company',
          'Name of the shareholders (owners of shares)',
          'Folio number of the member',
          'Number of shares represented by the certificate',
          'Amount paid on the shares',
          'Distinctive numbers of shares',
          'Share certificate number',
        ],
      },
      {
        type: 'list',
        heading: 'Timelines',
        items: [
          'On incorporation — within 2 months from date of incorporation',
          'On fresh allotment — within 2 months from date of allotment',
          'On transfer of shares — within 1 month from receipt of transfer instrument',
        ],
      },
    ],
  },

  'changes-in-llp': {
    slug: 'changes-in-llp',
    title: 'Changes in LLP Agreement',
    subtitle: 'Compliances › LLP Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Any change in an LLP\'s name, objectives, profit-sharing ratio, management, or partner details requires a formal amendment to the LLP Agreement and filing with MCA within 30 days.',
    timeline: '5–7 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Types of Changes Possible',
        items: [
          'Change in business activities',
          'Change in profit/loss sharing ratio between partners',
          'Change in duties and rights of partners',
          'Restricting authority of partner(s)',
          'Changing management or administration procedures',
          'Indemnity clause modifications',
          'Changes in partner details (name, address, DIN)',
        ],
      },
      {
        type: 'steps',
        heading: 'Process',
        steps: [
          { title: 'Partners Meeting & Resolution', desc: 'All partners meet and pass a resolution consenting to the amendment. One partner is authorised to sign and file.' },
          { title: 'Stamp Duty & Execution', desc: 'Execute LLP Agreement amendment after paying applicable stamp duty. Signed by partners and attested by 2 witnesses.' },
          { title: 'File Form 3', desc: 'File Form 3 with the Registrar within 30 days of the resolution. Attach modified LLP Agreement, resolution, and supporting documents.' },
          { title: 'File Form 4 (if partner changes)', desc: 'File Form 4 simultaneously if the amendment involves changes in designated partner details.' },
        ],
      },
    ],
  },

  'name-change': {
    slug: 'name-change',
    title: 'Company / LLP Name Change',
    subtitle: 'Compliances › Corporate Changes',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Changing your company or LLP name requires MCA approval, board and shareholder resolutions, and ROC filing. The new name must be unique and comply with the Companies Act 2013 naming guidelines.',
    timeline: '7–15 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Process for Company Name Change',
        steps: [
          { title: 'Name Availability Check', desc: 'Verify that the proposed new name is available and compliant with MCA naming guidelines.' },
          { title: 'Board Resolution', desc: 'Convene board meeting and pass resolution approving the new name and authorising the filing.' },
          { title: 'Special Resolution (EGM)', desc: 'Hold Extraordinary General Meeting. Shareholders pass special resolution approving the name change.' },
          { title: 'File Form INC-24 / RUN', desc: 'Apply for name change approval from the Central Government via Form INC-24 with required attachments.' },
          { title: 'Receive New CoI', desc: 'After approval, ROC issues a fresh Certificate of Incorporation with the new name.' },
          { title: 'Update Records', desc: 'Update PAN, GST, bank account, signboards, letterheads, and contracts with the new name.' },
        ],
      },
      {
        type: 'list',
        heading: 'Documents Required',
        items: [
          'Board resolution approving name change',
          'Special resolution of shareholders (EGM minutes)',
          'Latest Certificate of Incorporation',
          'MOA and AOA of the company',
          'Proof of registered office address',
          'NOC if required for sensitive words in new name',
        ],
      },
    ],
  },

  'share-transfer': {
    slug: 'share-transfer',
    title: 'Share Transfer in Private Limited Company',
    subtitle: 'Compliances › Share Management',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Share transfers in a Pvt Ltd company require proper documentation, stamp duty payment, board approval, and updated Register of Members — our experts complete the process end-to-end.',
    timeline: '5–10 Working Days',
    sections: [
      {
        type: 'steps',
        heading: 'Procedure for Share Transfer',
        steps: [
          { title: 'Share Transfer Deed (Form SH-4)', desc: 'Obtain share transfer deed in Form SH-4. Signed and duly stamped by both transferor and transferee.' },
          { title: 'Offer to Existing Members', desc: 'Transferor requests company to transfer shares. Company notifies existing members (Right of First Refusal). If no member is interested, transferor can sell to outsider.' },
          { title: 'Stamp Transfer Deed', desc: 'Stamp the transfer deed as per Indian Stamp Act, 1899. Attach share certificate and transfer deed.' },
          { title: 'Board Approval', desc: 'Board of Directors approve the transfer by passing a resolution at a board meeting.' },
          { title: 'Register Transfer', desc: 'Enter the transferee\'s name in the Register of Members. Transfer effective only upon registration.' },
          { title: 'Issue New Share Certificate', desc: 'Issue new share certificate to the transferee within 1 month of receiving the instrument of transfer.' },
        ],
      },
      {
        type: 'list',
        heading: 'Penalties for Non-Compliance',
        items: [
          'Minimum penalty of ₹25,000 and maximum of ₹5,00,000 on the company',
          'Minimum ₹10,000 and maximum ₹1,00,000 on each defaulting officer',
          'Company cannot register transfer within 60 days of execution without proper instrument',
        ],
      },
    ],
  },

  'gst-registration': {
    slug: 'gst-registration',
    title: 'GST Registration',
    subtitle: 'Compliances › GST',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'GST registration is mandatory once your business crosses the turnover threshold — or immediately for e-commerce, inter-state supply, and certain other categories. Get your GSTIN in 3–5 working days.',
    heroImage: '/service-4.jpg',
    timeline: '3–5 Working Days',
    sections: [
      {
        type: 'list',
        heading: 'Who Must Register for GST?',
        items: [
          'Service providers with annual turnover > ₹20 lakh (₹10L in special category states)',
          'Goods suppliers with annual turnover > ₹40 lakh',
          'Inter-state suppliers — regardless of turnover',
          'E-commerce sellers on Amazon, Flipkart, etc. — regardless of turnover',
          'Casual taxable persons with temporary operations',
          'Agents of a supplier, TDS deductors, Non-resident taxable persons',
          'Voluntary registration — surrenderable at any time',
        ],
      },
      {
        type: 'list',
        heading: 'Documents Required',
        items: [
          'PAN card of the business',
          'Identity proof with photographs of promoters',
          'Address proof of promoter (passport, driving license, Aadhaar)',
          'Business registration document (partnership deed / CoI / MOA)',
          'Proof of business premises (electricity bill / rent agreement)',
          'Bank account proof (cancelled cheque / first page of passbook)',
        ],
      },
    ],
  },

  'gst-return-filing': {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    subtitle: 'Compliances › GST',
    badge: 'Compliances',
    badgeIcon: 'Shield',
    heroDesc: 'Regular and accurate GST return filing is mandatory for all GST-registered businesses. Missed deadlines attract late fees and interest — let BSG\'s experts handle every return on time.',
    heroImage: '/service-4.jpg',
    sections: [
      {
        type: 'list',
        heading: 'GST Returns & Due Dates',
        items: [
          'GSTR-1 (Outward supplies) — 11th of subsequent month',
          'GSTR-3B (Summary return) — 20th of subsequent month',
          'CMP-08 (Composition scheme) — 18th of month after quarter',
          'GSTR-4 (Composition annual) — 30th April',
          'GSTR-5 (Non-resident taxable person) — 20th of subsequent month',
          'GSTR-7 (TDS) — 10th of subsequent month',
          'GSTR-8 (E-commerce operators) — 10th of subsequent month',
          'GSTR-9 (Annual return) — 31st December of fiscal year',
          'GSTR-9C (Reconciliation statement) — 31st December of fiscal year',
          'GSTR-10 (Cancellation return) — within 3 months of cancellation',
        ],
      },
      {
        type: 'list',
        heading: 'Letter of Undertaking (LUT) for Exporters',
        items: [
          'LUT required for exports without payment of IGST',
          'Filed in Form GST RFD-11 under Rule 96A',
          'Valid for 12 months from date of submission',
          'Eligible for all GST-registered exporters except those prosecuted for tax evasion > ₹250L',
          'Export Bond required if not eligible for LUT',
          'BSG helps with both LUT filing and export bond filing',
        ],
      },
    ],
  },

  // ─── TAX RETURNS ──────────────────────────────────────────────────────────

  'income-tax-filing': {
    slug: 'income-tax-filing',
    title: 'Income Tax Return Filing',
    subtitle: 'Tax Returns › ITR',
    badge: 'Tax Returns',
    badgeIcon: 'Receipt',
    heroDesc: 'Expert ITR filing for individuals, HUFs, firms, LLPs, and companies. Our CAs ensure maximum legitimate deductions, zero penalties, and timely filing for every applicable ITR form.',
    heroImage: '/service-4.jpg',
    stats: [
      { number: '7', label: 'ITR Forms' },
      { number: '0', label: 'Late Penalties' },
      { number: '99.8%', label: 'On-time Rate' },
      { number: '11+', label: 'Years Experience' },
    ],
    sections: [
      {
        type: 'list',
        heading: 'ITR Forms & Applicability',
        items: [
          'ITR-1 (SAHAJ) — Resident individual with income up to ₹50L from salary, one house, other sources',
          'ITR-2 — Individual & HUF without business/profession income',
          'ITR-3 — Individual & HUF with income from business or profession',
          'ITR-4 (SUGAM) — Individual, HUF, Firm (not LLP) with presumptive income',
          'ITR-5 — LLP, AOP, BOI, AJP, cooperative societies, trusts',
          'ITR-6 — Indian Companies (other than claiming exemption u/s 11)',
          'ITR-7 — Persons / companies required to file u/s 139(4A) to 139(4D) — charitable trusts, political parties',
        ],
      },
      {
        type: 'list',
        heading: 'What We Handle',
        items: [
          'ITR filing for individuals, salaried employees, NRIs',
          'Business income and professional income computation',
          'Capital gains from shares, mutual funds, property',
          'Foreign income reporting and DTAA benefits',
          'Advance tax calculation and payment',
          'Tax audit report preparation (Form 3CA/3CB/3CD)',
          'Revised return filing for errors in original return',
          'Scrutiny assessment support and representation',
        ],
      },
    ],
  },
};
