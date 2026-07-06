export interface LegalSection {
  id: string;
  heading: string;
  body: string;
}

export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "legal-disclaimer",
    title: "Legal Disclaimer",
    lastUpdated: "July 6, 2026",
    intro: "This Legal Disclaimer governs your use of the DHGsoft website and its content. By accessing this website, you accept this disclaimer in full.",
    sections: [
      {
        id: "general-information",
        heading: "1. General information only",
        body: "The content on this website is provided for general information about DHGsoft and its services. It does not constitute professional, technical, legal, financial, or engineering advice, and should not be relied upon as such."
      },
      {
        id: "no-warranties",
        heading: "2. No warranties",
        body: "This website and its content are provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including accuracy, completeness, fitness for a particular purpose, or non-infringement."
      },
      {
        id: "accuracy-and-updates",
        heading: "3. Accuracy and updates",
        body: "While we aim to keep information current and correct, we make no guarantee that content is accurate, complete, or up to date, and we may change or remove content at any time without notice."
      },
      {
        id: "limitation-of-liability",
        heading: "4. Limitation of liability",
        body: "To the fullest extent permitted by law, DHGsoft shall not be liable for any loss or damage arising from the use of, or inability to use, this website or its content, including direct, indirect, or consequential loss. [Adjust to your jurisdiction and counsel's guidance.]"
      },
      {
        id: "external-links",
        heading: "5. External links",
        body: "This website may link to third-party websites. We do not control and are not responsible for their content, availability, or practices. Links do not imply endorsement."
      },
      {
        id: "intellectual-property",
        heading: "6. Intellectual property",
        body: "All content on this website is owned by or licensed to DHGsoft and is protected by applicable intellectual property laws. See our Legal Notices for details."
      },
      {
        id: "governing-law",
        heading: "7. Governing law",
        body: "This disclaimer is governed by the laws of [Jurisdiction]. [Confirm with counsel.]"
      },
      {
        id: "contact",
        heading: "8. Contact",
        body: "Questions about this disclaimer can be sent to [legal@dhgsoft.com]."
      }
    ]
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "July 6, 2026",
    intro: "This Cookie Policy explains how DHGsoft uses cookies and similar technologies on this website, and how you can manage them.",
    sections: [
      {
        id: "what-are-cookies",
        heading: "1. What are cookies",
        body: "Cookies are small text files placed on your device when you visit a website. They help the site function, remember preferences, and understand how it is used."
      },
      {
        id: "how-we-use-cookies",
        heading: "2. How we use cookies",
        body: "We use cookies to operate the website, remember your settings, measure performance, and improve your experience."
      },
      {
        id: "types-of-cookies",
        heading: "3. Types of cookies we use",
        body: "Strictly necessary cookies (required for the site to work); Performance/analytics cookies (help us understand usage); Functional cookies (remember preferences); Targeting/advertising cookies (used to deliver relevant content, where applicable). [List the specific cookies you actually use.]"
      },
      {
        id: "third-party-cookies",
        heading: "4. Third-party cookies",
        body: "Some cookies may be set by third-party services we use (for example, analytics providers). These providers have their own privacy and cookie policies."
      },
      {
        id: "managing-cookies",
        heading: "5. Managing cookies",
        body: "You can accept or reject non-essential cookies via our cookie banner, and control cookies through your browser settings. Disabling some cookies may affect how the website works."
      },
      {
        id: "consent",
        heading: "6. Consent",
        body: "Where required by law, we ask for your consent before setting non-essential cookies. You can withdraw consent at any time."
      },
      {
        id: "changes",
        heading: "7. Changes",
        body: "We may update this Cookie Policy from time to time. The \"last updated\" date reflects the latest version."
      },
      {
        id: "contact",
        heading: "8. Contact",
        body: "For questions about cookies, contact [privacy@dhgsoft.com]."
      }
    ]
  },
  {
    slug: "legal-notices",
    title: "Legal Notices",
    lastUpdated: "July 6, 2026",
    intro: "These Legal Notices provide information about DHGsoft and the legal terms applying to this website.",
    sections: [
      {
        id: "company-information",
        heading: "1. Company information",
        body: "[Legal entity name], [company registration number], registered office at [registered address], [country]. [Add any regulatory or VAT details as applicable.]"
      },
      {
        id: "contact",
        heading: "2. Contact",
        body: "[email] · [phone] · [address]."
      },
      {
        id: "copyright",
        heading: "3. Copyright",
        body: "© [Year] DHGsoft. All rights reserved. The content, design, text, graphics, and layout of this website are owned by or licensed to DHGsoft and protected by copyright and other laws."
      },
      {
        id: "trademarks",
        heading: "4. Trademarks",
        body: "\"DHGsoft\", the DHGsoft logo, and related marks are trademarks of DHGsoft [or its licensors]. All other trademarks and trade names are the property of their respective owners."
      },
      {
        id: "intellectual-property",
        heading: "5. Intellectual property",
        body: "You may view and print content for personal, non-commercial use only. You may not reproduce, distribute, modify, or reuse content without our prior written permission."
      },
      {
        id: "third-party-content",
        heading: "6. Third-party content",
        body: "Some content or logos may belong to third parties and are used with permission or under licence. Their rights remain with their owners."
      },
      {
        id: "disclaimer-liability",
        heading: "7. Disclaimer & liability",
        body: "Use of this website is subject to our Legal Disclaimer and Terms and Conditions."
      },
      {
        id: "governing-law",
        heading: "8. Governing law",
        body: "These notices are governed by the laws of [Jurisdiction]. [Confirm with counsel.]"
      }
    ]
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "July 6, 2026",
    intro: "This Privacy Policy explains how DHGsoft collects, uses, shares, and protects personal data when you use our website or interact with us. We are committed to handling your data responsibly.",
    sections: [
      {
        id: "who-we-are",
        heading: "1. Who we are",
        body: "DHGsoft ([legal entity name]) is the data controller. Contact: [privacy@dhgsoft.com] · [address]. [Add DPO details if applicable.]"
      },
      {
        id: "data-we-collect",
        heading: "2. Data we collect",
        body: "Contact details you provide (name, email, phone, company); information you submit via forms (e.g., enquiries, CV/application data); technical data (IP address, device, browser); and usage data (pages visited, interactions)."
      },
      {
        id: "how-we-collect-it",
        heading: "3. How we collect it",
        body: "Directly from you (forms, email, applications), automatically (cookies and similar technologies), and occasionally from third parties (e.g., recruitment partners)."
      },
      {
        id: "how-we-use-data",
        heading: "4. How we use your data",
        body: "To respond to enquiries; provide and improve our services and website; process recruitment applications; send communications you request; ensure security; and comply with legal obligations."
      },
      {
        id: "legal-bases",
        heading: "5. Legal bases",
        body: "We process personal data on the bases of consent, performance of a contract, legitimate interests, and legal obligation, as applicable. [Confirm bases with counsel, e.g., under GDPR.]"
      },
      {
        id: "sharing-data",
        heading: "6. Sharing your data",
        body: "We may share data with service providers who process it on our behalf, professional advisers, and authorities where legally required. We do not sell your personal data."
      },
      {
        id: "international-transfers",
        heading: "7. International transfers",
        body: "Where data is transferred across borders, we use appropriate safeguards as required by law. [Detail mechanisms with counsel.]"
      },
      {
        id: "data-retention",
        heading: "8. Data retention",
        body: "We keep personal data only as long as necessary for the purposes described or as required by law."
      },
      {
        id: "security",
        heading: "9. Security",
        body: "We use appropriate technical and organizational measures to protect personal data. No method of transmission is completely secure."
      },
      {
        id: "your-rights",
        heading: "10. Your rights",
        body: "Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing of your data, and to data portability and withdrawing consent. To exercise these, contact [privacy@dhgsoft.com]. [Confirm applicable rights with counsel.]"
      },
      {
        id: "cookies",
        heading: "11. Cookies",
        body: "We use cookies as described in our Cookie Policy."
      },
      {
        id: "third-party-links",
        heading: "12. Third-party links",
        body: "Our website may link to third-party sites with their own privacy practices, for which we are not responsible."
      },
      {
        id: "childrens-privacy",
        heading: "13. Children's privacy",
        body: "Our website is not directed at children, and we do not knowingly collect their personal data."
      },
      {
        id: "changes",
        heading: "14. Changes",
        body: "We may update this Privacy Policy from time to time; the \"last updated\" date shows the current version."
      },
      {
        id: "contact",
        heading: "15. Contact",
        body: "For any privacy questions or complaints, contact [privacy@dhgsoft.com]. You may also have the right to complain to a data protection authority."
      }
    ]
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    lastUpdated: "July 6, 2026",
    intro: "These Terms and Conditions govern your use of the DHGsoft website. By using this website, you agree to these terms. If you do not agree, please do not use the website.",
    sections: [
      {
        id: "use-of-website",
        heading: "1. Use of the website",
        body: "You may use this website for lawful purposes only. You agree not to misuse it or interfere with its operation or security."
      },
      {
        id: "intellectual-property",
        heading: "2. Intellectual property",
        body: "All content is owned by or licensed to DHGsoft and protected by law. You may not copy, reproduce, distribute, or create derivative works without our prior written permission."
      },
      {
        id: "acceptable-use",
        heading: "3. Acceptable use",
        body: "You must not use the website to transmit harmful code, attempt unauthorized access, scrape or harvest data, or engage in any unlawful or disruptive activity."
      },
      {
        id: "submissions",
        heading: "4. Submissions",
        body: "If you submit information (e.g., an enquiry or CV), you confirm it is accurate and that you have the right to share it. Our handling of personal data is described in our Privacy Policy."
      },
      {
        id: "disclaimers",
        heading: "5. Disclaimers",
        body: "The website and its content are provided \"as is\" without warranties, as further described in our Legal Disclaimer."
      },
      {
        id: "limitation-liability",
        heading: "6. Limitation of liability",
        body: "To the fullest extent permitted by law, DHGsoft is not liable for any loss or damage arising from your use of the website. [Adjust with counsel and jurisdiction.]"
      },
      {
        id: "indemnification",
        heading: "7. Indemnification",
        body: "You agree to indemnify DHGsoft against claims arising from your misuse of the website or breach of these terms. [Confirm with counsel.]"
      },
      {
        id: "third-party-links",
        heading: "8. Third-party links",
        body: "We are not responsible for third-party websites linked from ours."
      },
      {
        id: "changes",
        heading: "9. Changes",
        body: "We may update these terms at any time. Continued use of the website after changes constitutes acceptance."
      },
      {
        id: "governing-law",
        heading: "10. Governing law",
        body: "These terms are governed by the laws of [Jurisdiction], and disputes are subject to the courts of [Jurisdiction]. [Confirm with counsel.]"
      },
      {
        id: "severability",
        heading: "11. Severability",
        body: "If any provision is found unenforceable, the remaining provisions continue in effect."
      },
      {
        id: "contact",
        heading: "12. Contact",
        body: "Questions about these terms can be sent to [legal@dhgsoft.com]."
      }
    ]
  }
];
