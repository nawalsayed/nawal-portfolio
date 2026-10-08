/**
 * ALL the site content lives here. Edit this file only.
 * Every text is bilingual: { en: "...", ar: "..." }.
 */
export type L = { en: string; ar: string };

export const profile = {
  name: { en: "Nawal Sayed Ahmed", ar: "نوال سيد أحمد" } as L,
  role: { en: "Junior Frontend Developer", ar: "مطوّرة واجهات أمامية" } as L,
  roles: [
    { en: "Frontend Developer", ar: "مطوّرة واجهات أمامية" },
    { en: "React & Next.js Engineer", ar: "مطوّرة React وNext.js" },
    { en: "Bilingual UI Builder", ar: "بانية واجهات ثنائية اللغة" },
  ] as L[],
  lead: {
    en: "I build fast, responsive interfaces with React and Next.js, in English and Arabic, left-to-right and right-to-left.",
    ar: "أبني واجهات سريعة ومتجاوبة باستخدام React وNext.js، بالعربية والإنجليزية، من اليسار لليمين ومن اليمين لليسار.",
  } as L,
  about: [
    {
      en: "I have one year of professional experience working remotely with a Saudi-based team. I build reusable components, connect REST APIs, ship multilingual apps and automate releases with GitHub Actions.",
      ar: "لدي سنة من الخبرة المهنية في العمل عن بُعد مع فريق سعودي. أبني مكوّنات قابلة لإعادة الاستخدام، وأربط واجهات REST API، وأطلق تطبيقات متعددة اللغات، وأؤتمت الإصدارات عبر GitHub Actions.",
    },
    {
      en: "I studied sociology at Ain Shams University, then completed a Frontend Development Diploma at Route Academy.",
      ar: "درست علم الاجتماع في جامعة عين شمس، ثم أكملت دبلومة تطوير الواجهات الأمامية في Route Academy.",
    },
  ] as L[],
  location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" } as L,
  email: "nawalsayed245@gmail.com",
  github: "https://github.com/nawalsayed",
  linkedin: "https://www.linkedin.com/in/nawal-sayed-79aab7244",
  cv: "/Nawal_Sayed_Frontend_CV.pdf", // file lives in /public
  availability: { en: "Open to work", ar: "متاحة للعمل" } as L,
};

export const experience = [
  {
    title: { en: "Frontend Developer", ar: "مطوّرة واجهات أمامية" } as L,
    company: "Sanad Company",
    period: { en: "1 year · Remote, Saudi Arabia", ar: "سنة واحدة · عن بُعد، السعودية" } as L,
    points: [
      { en: "Built responsive, cross-browser interfaces with React.js and Next.js.", ar: "بناء واجهات متجاوبة تعمل على مختلف المتصفحات باستخدام React.js وNext.js." },
      { en: "Created a library of reusable Material UI components that sped up development and kept the design consistent.", ar: "إنشاء مكتبة مكوّنات Material UI قابلة لإعادة الاستخدام، سرّعت التطوير وحافظت على اتساق التصميم." },
      { en: "Integrated RESTful APIs for dynamic, data-driven features.", ar: "ربط واجهات RESTful API لتقديم ميزات ديناميكية تعتمد على البيانات." },
      { en: "Added multilingual support with i18n so the app serves users across regions.", ar: "إضافة دعم متعدد اللغات عبر i18n ليخدم التطبيق مستخدمين من مناطق مختلفة." },
      { en: "Set up CI/CD with GitHub Actions to automate builds, tests and deployment.", ar: "إعداد CI/CD عبر GitHub Actions لأتمتة البناء والاختبار والنشر." },
      { en: "Worked with remote, cross-functional teams through Git branching and code reviews.", ar: "العمل مع فرق عن بُعد ومتعددة التخصصات عبر فروع Git ومراجعات الكود." },
    ] as L[],
  },
];

export const projects = [
  {
    title: { en: "E-commerce storefront", ar: "متجر إلكتروني" } as L,
    desc: {
      en: "An online store with product catalog, search and filters, cart and a multi-step checkout. Products and orders come from REST APIs, and the interface switches between Arabic and English.",
      ar: "متجر يضم كتالوج المنتجات والبحث والتصفية والسلة وعملية دفع من عدة خطوات. تأتي المنتجات والطلبات من واجهات REST، وتتبدل الواجهة بين العربية والإنجليزية.",
    } as L,
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    github: "https://github.com/nawalsayed", // replace with the repo link
    live: "", // add the live demo link
  },
  {
    title: { en: "Admin analytics dashboard", ar: "لوحة تحليلات للإدارة" } as L,
    desc: {
      en: "A dashboard with reusable data tables, interactive charts and role-based views. A GitHub Actions pipeline builds, tests and deploys every change.",
      ar: "لوحة تحكم بجداول بيانات قابلة لإعادة الاستخدام، ورسوم بيانية تفاعلية، وعروض حسب الصلاحيات. يبني خط GitHub Actions كل تغيير ويختبره وينشره.",
    } as L,
    stack: ["Next.js", "TypeScript", "Material UI", "GitHub Actions"],
    github: "https://github.com/nawalsayed",
    live: "",
  },
  {
    title: { en: "Personal portfolio", ar: "موقعي الشخصي" } as L,
    desc: {
      en: "A fully responsive site with smooth animation and SEO optimization.",
      ar: "موقع متجاوب بالكامل مع حركات سلسة وتحسين لمحركات البحث.",
    } as L,
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/nawalsayed",
    live: "",
  },
];

export const skills = [
  { label: { en: "Languages", ar: "اللغات البرمجية" } as L, items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { label: { en: "Frameworks", ar: "الأطر" } as L, items: ["React.js", "Next.js", "Framer Motion"] },
  { label: { en: "Styling", ar: "التنسيق" } as L, items: ["Material UI", "Tailwind CSS", "Bootstrap 5", "Responsive Design" , "shadcn Ui"] },
  { label: { en: "Workflow", ar: "سير العمل" } as L, items: ["Git & GitHub", "REST APIs", "i18n"] },
  { label: { en: "Delivery", ar: "النشر" } as L, items: ["GitHub Actions", "CI/CD", "Automated deployment"] },
];

export const ui = {
  nav: {
    about: { en: "About", ar: "نبذة" } as L,
    experience: { en: "Experience", ar: "الخبرة" } as L,
    projects: { en: "Projects", ar: "المشاريع" } as L,
    skills: { en: "Skills", ar: "المهارات" } as L,
    contact: { en: "Contact", ar: "تواصل" } as L,
  },
  switchTo: { en: "العربية", ar: "English" } as L,
  viewProjects: { en: "View projects", ar: "عرض المشاريع" } as L,
  downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" } as L,
  code: { en: "Code", ar: "الكود" } as L,
  live: { en: "Live demo", ar: "معاينة مباشرة" } as L,
  contactTitle: { en: "Let's work together", ar: "لنعمل معًا" } as L,
  contactText: { en: "I'm looking for a frontend role. Send me a message and I'll reply soon.", ar: "أبحث عن فرصة عمل كمطوّرة واجهات أمامية. راسلني وسأرد قريبًا." } as L,
  copy: { en: "Copy email", ar: "نسخ الإيميل" } as L,
  copied: { en: "Copied!", ar: "تم النسخ!" } as L,
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." } as L,
};
