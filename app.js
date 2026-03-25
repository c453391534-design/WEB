const STORAGE_KEY = "odds-simulator-language";
const SUPPORTED_LANGUAGES = ["en", "zh"];

const translations = {
  home: {
    en: {
      "meta.title": "SOCIAL-LAB",
      "meta.description": "SOCIAL-LAB project index with links to active product support pages.",
      "brand.aria": "SOCIAL-LAB home",
      "brand.name": "SOCIAL-LAB",
      "brand.subhead": "Project Index",
      "nav.aria": "Primary navigation",
      "nav.home": "Home",
      "nav.odds": "Odds Simulator",
      "nav.privacy": "Privacy Policy",
      "header.contact": "Contact",
      "home.dateLabel": "24 Mar 2026",
      "home.clientLabel": "[Studio Index]",
      "home.stamp": "DIRECTORY",
      "home.title": "[SOCIAL-LAB]",
      "home.codeLabel": "Archive",
      "home.codeValue": "VOL.01",
      "home.intro": "A document-led landing page for active products, support routes, and public-facing policy links.",
      "home.tableItem": "Project",
      "home.tableScope": "Scope",
      "home.tableRoute": "Route",
      "home.oddsScope": "Support page, feedback intake, privacy access, and user guidance.",
      "home.oddsLink": "Open Odds Simulator",
      "home.privacyTitle": "Privacy Policy",
      "home.privacyScope": "Legal and data-handling reference for the current product release.",
      "home.privacyLink": "Open Privacy Policy",
      "home.summaryTitle": "Summary",
      "home.summary1": "One public homepage for project navigation",
      "home.summary2": "Dedicated Odds Simulator support page",
      "home.summary3": "Shared contact modal on top navigation",
      "home.contactTitle": "Primary Contact",
      "home.contactButton": "View Contact",
      "footer.languageAria": "Language switcher",
      "footer.language": "Language",
      "footer.copyright": "© 2026 SOCIAL-LAB. All rights reserved.",
      "modal.kicker": "Contact",
      "modal.title": "Get in touch",
      "modal.body": "Use this email for project questions, support requests, and privacy-related communication.",
      "modal.button": "Send Email"
    },
    zh: {
      "meta.title": "SOCIAL-LAB",
      "meta.description": "SOCIAL-LAB 项目首页，包含活跃产品及支持页面入口。",
      "brand.aria": "SOCIAL-LAB 首页",
      "brand.name": "SOCIAL-LAB",
      "brand.subhead": "项目索引",
      "nav.aria": "主导航",
      "nav.home": "首页",
      "nav.odds": "Odds Simulator",
      "nav.privacy": "隐私政策",
      "header.contact": "联系",
      "home.dateLabel": "2026 年 3 月 24 日",
      "home.clientLabel": "[项目索引]",
      "home.stamp": "目录",
      "home.title": "[SOCIAL-LAB]",
      "home.codeLabel": "归档",
      "home.codeValue": "第 01 卷",
      "home.intro": "一个文档风格的首页，用来承接活跃产品、支持入口和公开政策链接。",
      "home.tableItem": "项目",
      "home.tableScope": "说明",
      "home.tableRoute": "入口",
      "home.oddsScope": "支持页面、反馈入口、隐私访问和用户说明。",
      "home.oddsLink": "进入 Odds Simulator",
      "home.privacyTitle": "隐私政策",
      "home.privacyScope": "当前产品版本的法律与数据处理说明。",
      "home.privacyLink": "查看隐私政策",
      "home.summaryTitle": "摘要",
      "home.summary1": "一个统一的公开首页用于项目导航",
      "home.summary2": "独立的 Odds Simulator 支持页面",
      "home.summary3": "顶部导航共用联系方式弹窗",
      "home.contactTitle": "主要联系方式",
      "home.contactButton": "查看联系方式",
      "footer.languageAria": "语言切换",
      "footer.language": "语言",
      "footer.copyright": "© 2026 SOCIAL-LAB. 保留所有权利。",
      "modal.kicker": "联系",
      "modal.title": "联系方式",
      "modal.body": "如有项目咨询、支持请求或隐私相关问题，请使用此邮箱联系。",
      "modal.button": "发送邮件"
    }
  },
  support: {
    en: {
      "meta.title": "Odds Simulator Support",
      "meta.description": "Official support page for Odds Simulator, including contact, response expectations, and privacy resources.",
      "brand.aria": "Odds Simulator home",
      "brand.subhead": "Support Console",
      "nav.aria": "Primary navigation",
      "nav.home": "Home",
      "nav.odds": "Odds Simulator",
      "nav.privacy": "Privacy Policy",
      "header.contact": "Contact",
      "hero.kicker": "iOS App Support / Operational Surface",
      "hero.title": "SUPPORT<br />SYSTEM",
      "hero.lead": "Direct access for bug reports, feature requests, account questions, and privacy documentation for Odds Simulator.",
      "hero.email": "Open Contact",
      "hero.privacy": "View Privacy Policy",
      "hero.metaAria": "Support metadata",
      "meta.coverageLabel": "Coverage",
      "meta.coverageValue": "ISSUES_04",
      "meta.coverageBody": "Support, privacy, feedback, and diagnostics.",
      "matrix.title": "REQUEST_MATRIX.log",
      "matrix.count": "QUEUE TYPES: 04",
      "row1.title": "Bug Reports",
      "row1.body": "Share device model, iOS version, app version, and steps to reproduce.",
      "row1.tag": "Priority triage",
      "row2.title": "Feature Requests",
      "row2.body": "Send the workflow you want to improve and the exact pain point.",
      "row2.tag": "Product review",
      "row3.title": "Account Questions",
      "row3.body": "Use the contact email for access or purchase-related clarifications.",
      "row3.tag": "Direct follow-up",
      "row4.title": "General Feedback",
      "row4.body": "Tell us what feels slow, confusing, or missing in the current build.",
      "row4.tag": "Ongoing review",
      "protocol.kicker": "Support Protocol",
      "protocol.title": "Send precise details.",
      "protocol.body": "The fastest way to get a useful answer is to include the relevant context in the first message.",
      "protocol.item1": "Device model",
      "protocol.item2": "iOS version",
      "protocol.item3": "App version",
      "protocol.item4": "Issue summary",
      "protocol.item5": "Screenshots if relevant",
      "contact.kicker": "Contact Node",
      "contact.body": "We read all incoming messages and usually respond within 1 to 3 business days depending on issue complexity.",
      "contact.button": "Open Contact",
      "summary.kicker": "Quick Access",
      "summary.title": "What this page covers",
      "summary.item1": "Support contact for Odds Simulator",
      "summary.item2": "Expected response timing",
      "summary.item3": "Issue reporting guidance",
      "summary.item4": "Privacy policy access",
      "cta.kicker": "Policy",
      "cta.title": "Need legal or data-handling details?",
      "cta.body": "The privacy page explains how support emails, diagnostics, and limited usage information may be handled.",
      "cta.button": "Read Privacy Policy",
      "footer.languageAria": "Language switcher",
      "footer.language": "Language",
      "footer.copyright": "© 2026 Odds Simulator. All rights reserved.",
      "modal.kicker": "Contact",
      "modal.title": "Get in touch",
      "modal.body": "Use this email for project questions, support requests, and privacy-related communication.",
      "modal.button": "Send Email"
    },
    zh: {
      "meta.title": "Odds Simulator 支持",
      "meta.description": "Odds Simulator 官方支持页面，包含联系方式、响应时间和隐私政策入口。",
      "brand.aria": "Odds Simulator 首页",
      "brand.subhead": "支持控制台",
      "nav.aria": "主导航",
      "nav.home": "首页",
      "nav.odds": "Odds Simulator",
      "nav.privacy": "隐私政策",
      "header.contact": "联系",
      "hero.kicker": "iOS 应用支持 / 运营界面",
      "hero.title": "支持<br />系统",
      "hero.lead": "集中处理错误反馈、功能建议、账户问题，以及 Odds Simulator 的隐私相关说明。",
      "hero.email": "查看联系方式",
      "hero.privacy": "查看隐私政策",
      "hero.metaAria": "支持元信息",
      "meta.coverageLabel": "范围",
      "meta.coverageValue": "事项_04",
      "meta.coverageBody": "支持、隐私、反馈与诊断问题。",
      "matrix.title": "请求矩阵",
      "matrix.count": "队列类型：04",
      "row1.title": "错误反馈",
      "row1.body": "请附上设备型号、iOS 版本、应用版本以及复现步骤。",
      "row1.tag": "优先分诊",
      "row2.title": "功能建议",
      "row2.body": "请说明你想优化的使用流程，以及当前的具体痛点。",
      "row2.tag": "产品评估",
      "row3.title": "账户问题",
      "row3.body": "如需咨询访问权限或购买相关问题，请直接发送邮件。",
      "row3.tag": "直接跟进",
      "row4.title": "一般反馈",
      "row4.body": "欢迎告诉我们当前版本里哪些地方偏慢、难懂或缺失。",
      "row4.tag": "持续评审",
      "protocol.kicker": "支持协议",
      "protocol.title": "尽量提供完整信息。",
      "protocol.body": "在首封邮件中带上关键上下文，通常能更快得到有效回复。",
      "protocol.item1": "设备型号",
      "protocol.item2": "iOS 版本",
      "protocol.item3": "应用版本",
      "protocol.item4": "问题摘要",
      "protocol.item5": "相关截图",
      "contact.kicker": "联系节点",
      "contact.body": "我们会阅读所有来信，并根据问题复杂度通常在 1 到 3 个工作日内回复。",
      "contact.button": "查看联系方式",
      "summary.kicker": "快速入口",
      "summary.title": "本页包含内容",
      "summary.item1": "Odds Simulator 支持联系方式",
      "summary.item2": "预计响应时间",
      "summary.item3": "问题反馈建议",
      "summary.item4": "隐私政策入口",
      "cta.kicker": "政策",
      "cta.title": "需要查看法律或数据处理说明？",
      "cta.body": "隐私页面说明了支持邮件、诊断信息和有限使用数据可能如何被处理。",
      "cta.button": "阅读隐私政策",
      "footer.languageAria": "语言切换",
      "footer.language": "语言",
      "footer.copyright": "© 2026 Odds Simulator. 保留所有权利。",
      "modal.kicker": "联系",
      "modal.title": "联系方式",
      "modal.body": "如有项目咨询、支持请求或隐私相关问题，请使用此邮箱联系。",
      "modal.button": "发送邮件"
    }
  },
  privacy: {
    en: {
      "meta.title": "Odds Simulator Privacy Policy",
      "meta.description": "Privacy Policy for Odds Simulator.",
      "brand.aria": "Odds Simulator home",
      "brand.subhead": "Privacy Policy",
      "nav.aria": "Primary navigation",
      "nav.home": "Home",
      "nav.odds": "Odds Simulator",
      "nav.privacy": "Privacy Policy",
      "header.contact": "Contact",
      "policy.code": "Legal / Data Handling",
      "policy.heroTitle": "PRIVACY<br />POLICY",
      "policy.effective": "Effective date: March 2026",
      "policy.overview": "This page explains how Odds Simulator may handle support emails, diagnostics, and limited technical information needed to keep the app reliable.",
      "meta.contactLabel": "Contact",
      "meta.contactBody": "Use this address for support and privacy-related requests.",
      "meta.scopeLabel": "Scope",
      "meta.scopeValue": "SECTIONS_09",
      "meta.scopeBody": "Summary of collection, usage, retention, and contact terms.",
      "sec1.title": "1. Introduction",
      "sec1.body": "Odds Simulator respects your privacy. This Privacy Policy explains how information may be handled when you use the app or contact us for support.",
      "sec2.title": "2. Information We Collect",
      "sec2.intro": "We may collect limited information in the following situations:",
      "sec2.item1": "Information you provide directly, such as your email address and anything included in a support message.",
      "sec2.item2": "Technical or usage-related information, such as device type, operating system version, app version, crash logs, or diagnostics.",
      "sec2.item3": "Basic usage or performance information processed by platform or infrastructure providers to help maintain app stability.",
      "sec2.outro": "We do not require account registration to use the app.",
      "sec3.title": "3. How We Use Information",
      "sec3.item1": "To provide user support",
      "sec3.item2": "To respond to feedback or inquiries",
      "sec3.item3": "To diagnose technical issues and improve app performance",
      "sec3.item4": "To maintain app security, reliability, and functionality",
      "sec3.item5": "To comply with legal obligations where required",
      "sec4.title": "4. Third-Party Services",
      "sec4.body1": "The app may rely on third-party platforms or infrastructure providers, such as Apple, Expo, analytics, hosting, or diagnostic services. These providers may process limited technical data according to their own privacy policies.",
      "sec4.body2": "We do not sell personal information to third parties.",
      "sec5.title": "5. Data Retention",
      "sec5.body1": "We retain information only for as long as reasonably necessary to provide support, resolve issues, comply with legal obligations, or maintain app operations.",
      "sec5.body2": "If you contact us by email, we may keep related communications for customer support and record-keeping purposes.",
      "sec6.title": "6. Children's Privacy",
      "sec6.body": "Odds Simulator is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information, contact us so we can take appropriate action.",
      "sec7.title": "7. Your Rights",
      "sec7.body1": "Depending on your location, you may have rights regarding your personal information, including the right to request access, correction, or deletion of information you have provided to us.",
      "sec7.body2a": "To make such a request, contact us at",
      "sec8.title": "8. Changes to This Policy",
      "sec8.body": "We may update this Privacy Policy from time to time. If changes are made, the updated version will be posted on this page with a revised effective date.",
      "sec9.title": "9. Contact Us",
      "sec9.body": "If you have any questions about this Privacy Policy or the app, please contact us at",
      "footer.languageAria": "Language switcher",
      "footer.language": "Language",
      "footer.copyright": "© 2026 Odds Simulator. All rights reserved.",
      "modal.kicker": "Contact",
      "modal.title": "Get in touch",
      "modal.body": "Use this email for project questions, support requests, and privacy-related communication.",
      "modal.button": "Send Email"
    },
    zh: {
      "meta.title": "Odds Simulator 隐私政策",
      "meta.description": "Odds Simulator 的隐私政策页面。",
      "brand.aria": "Odds Simulator 首页",
      "brand.subhead": "隐私政策",
      "nav.aria": "主导航",
      "nav.home": "首页",
      "nav.odds": "Odds Simulator",
      "nav.privacy": "隐私政策",
      "header.contact": "联系",
      "policy.code": "法律 / 数据处理",
      "policy.heroTitle": "隐私<br />政策",
      "policy.effective": "生效日期：2026 年 3 月",
      "policy.overview": "本页面说明 Odds Simulator 在应用支持、诊断信息和有限技术数据方面可能采用的数据处理方式。",
      "meta.contactLabel": "联系邮箱",
      "meta.contactBody": "如有支持或隐私相关请求，请使用该邮箱联系。",
      "meta.scopeLabel": "范围",
      "meta.scopeValue": "章节_09",
      "meta.scopeBody": "涵盖收集、使用、保留及联系条款的摘要。",
      "sec1.title": "1. 引言",
      "sec1.body": "Odds Simulator 尊重你的隐私。本隐私政策说明当你使用应用或联系我们获取支持时，相关信息可能会如何被处理。",
      "sec2.title": "2. 我们收集的信息",
      "sec2.intro": "在以下情况下，我们可能会收集有限的信息：",
      "sec2.item1": "你直接提供的信息，例如你的邮箱地址以及支持邮件中包含的内容。",
      "sec2.item2": "技术或使用相关信息，例如设备类型、系统版本、应用版本、崩溃日志或诊断信息。",
      "sec2.item3": "由平台或基础设施服务商处理的基础使用或性能信息，用于帮助维持应用稳定性。",
      "sec2.outro": "使用本应用无需注册账户。",
      "sec3.title": "3. 我们如何使用信息",
      "sec3.item1": "用于提供用户支持",
      "sec3.item2": "用于回复反馈或咨询",
      "sec3.item3": "用于诊断技术问题并改善应用性能",
      "sec3.item4": "用于维护应用的安全性、可靠性和功能性",
      "sec3.item5": "用于在必要时履行法律义务",
      "sec4.title": "4. 第三方服务",
      "sec4.body1": "本应用可能依赖第三方平台或基础设施服务商，例如 Apple、Expo，以及分析、托管或诊断服务。这些服务商可能会依据各自的隐私政策处理有限的技术数据。",
      "sec4.body2": "我们不会向第三方出售个人信息。",
      "sec5.title": "5. 数据保留",
      "sec5.body1": "我们仅在为提供支持、解决问题、履行法律义务或维持应用运营所合理需要的期间内保留信息。",
      "sec5.body2": "如果你通过电子邮件联系我们，我们可能会保留相关通信记录，用于客户支持和归档。",
      "sec6.title": "6. 儿童隐私",
      "sec6.body": "Odds Simulator 并非面向 13 岁以下儿童。我们不会故意收集儿童的个人信息。如果你认为儿童向我们提供了个人信息，请联系我们以便采取适当措施。",
      "sec7.title": "7. 你的权利",
      "sec7.body1": "根据你所在地区的法律，你可能享有与个人信息相关的权利，包括请求访问、更正或删除你向我们提供的信息。",
      "sec7.body2a": "如需提出此类请求，请通过以下邮箱联系我们：",
      "sec8.title": "8. 政策变更",
      "sec8.body": "我们可能会不时更新本隐私政策。如有变更，更新后的版本将发布在本页面，并附带修订后的生效日期。",
      "sec9.title": "9. 联系我们",
      "sec9.body": "如果你对本隐私政策或本应用有任何疑问，请通过以下邮箱联系我们：",
      "footer.languageAria": "语言切换",
      "footer.language": "语言",
      "footer.copyright": "© 2026 Odds Simulator. 保留所有权利。",
      "modal.kicker": "联系",
      "modal.title": "联系方式",
      "modal.body": "如有项目咨询、支持请求或隐私相关问题，请使用此邮箱联系。",
      "modal.button": "发送邮件"
    }
  }
};

function getPreferredLanguage() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }

  const browserLanguages =
    Array.isArray(window.navigator.languages) && window.navigator.languages.length
      ? window.navigator.languages
      : [window.navigator.language || "en"];

  return browserLanguages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh" : "en";
}

function updateTextNodes(dictionary) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const mappings = element.dataset.i18nAttr
      .split(";")
      .map((value) => value.trim())
      .filter(Boolean);

    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":").map((value) => value.trim());
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });
}

function updateMetadata(dictionary, language) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  if (dictionary["meta.title"]) {
    document.title = dictionary["meta.title"];
  }

  const description = document.querySelector('meta[name="description"]');
  if (description && dictionary["meta.description"]) {
    description.setAttribute("content", dictionary["meta.description"]);
  }
}

function updateLanguageOptions(language) {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyLanguage(language) {
  const page = document.body.dataset.page;
  const pageTranslations = translations[page];
  if (!pageTranslations) {
    return;
  }

  const dictionary = pageTranslations[language] || pageTranslations.en;
  updateMetadata(dictionary, language);
  updateTextNodes(dictionary);
  updateLanguageOptions(language);
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.langOption;
      if (!SUPPORTED_LANGUAGES.includes(language)) {
        return;
      }

      window.localStorage.setItem(STORAGE_KEY, language);
      applyLanguage(language);
    });
  });
}

function setupContactModal() {
  const modal = document.querySelector("[data-contact-modal]");
  if (!modal) {
    return;
  }

  const openButtons = document.querySelectorAll("[data-open-contact]");
  const closeButtons = modal.querySelectorAll("[data-close-contact]");

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const openModal = () => {
    modal.hidden = false;
    document.body.classList.add("modal-open");
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function setupPageTransitions() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let isNavigating = false;

  const shouldHandleLink = (link) => {
    if (!link || link.target || link.hasAttribute("download")) {
      return false;
    }

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return false;
    }

    const destination = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);
    const isSameDocument =
      destination.pathname === current.pathname &&
      destination.search === current.search &&
      destination.hash === current.hash;

    return destination.origin === current.origin && destination.pathname.endsWith(".html") && !isSameDocument;
  };

  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        prefersReducedMotion ||
        isNavigating ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !shouldHandleLink(link)
      ) {
        return;
      }

      isNavigating = true;
      event.preventDefault();
      document.body.classList.add("is-page-leaving");

      window.setTimeout(() => {
        window.location.href = link.href;
      }, 420);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const language = getPreferredLanguage();
  applyLanguage(language);
  setupLanguageSwitcher();
  setupContactModal();
  setupPageTransitions();
});
