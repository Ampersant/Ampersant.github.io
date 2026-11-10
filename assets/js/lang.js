(function () {
  var dict = {
    en: {
      "nav.skills": "Skills",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "hero.title": "I'M <span>Yaroslav Mankivskyi</span>",
      "hero.role": "Full-Stack Web Developer & DevOps",
      "hero.contact": "Contact Me",
      "about.title": "About",
      "about.body": "Hi! My name is Yaroslav, <span>I’m a full-stack web developer with DevOps experience.</span> Alongside my job I’m looking for clients, and I’ll be glad to take on any web task — a site, an application, an integration, or getting a project into production. I’m ready to take responsibility before the team and the client, and I find an approach to different people easily. I learn new technologies quickly and like challenges, because they are a chance to grow.",
      "skills.title": "My Skills",
      "portfolio.title": "Portfolio",
      "portfolio.itemTitle": "The header for item",
      "portfolio.itemText": "Description of item",
      "portfolio.soon": "Will be soon..",
      "experience.title": "Experience",
      "exp.nova.role": "Web Developer",
      "exp.nova.intro": "During this period of time I’ve done next things:",
      "exp.nova.list": "<li>Worked on websites built with Drupal, WordPress, and Magento.</li><li>Created RAG applications and chatbots.</li><li>Made 3D games and graphics with JavaScript and React.</li><li>Worked on legacy projects and rebuilt application cores.</li><li>Developed products on Laravel.</li>",
      "exp.free.role": "PHP Web-developer",
      "exp.free.intro": "During this period of time I’ve done next things:",
      "exp.free.list": "<li>Worked with several web applications and their parts(including DBs, APIs etc.), such as landing pages and multi-page applications on different topics and with different needs. Implemented different patterns such as REST and MVC.</li><li>Did strong user authentication using OAuth2, Sessions and Tokens.</li><li>Made web-based administrative panels, as well as remote administration service using Telegram Bot API.</li><li>Deployed projects to web servers using remote access software(e.g., Termius) and set up server admin panels for easy configuration of the application</li>",
      "feedback.title": "Testimonial",
      "feedback.body": "I had the pleasure of working with <span>Yaroslav Mankivskyi</span>, and I can confidently say that he is a <span>full-stack Web Developer</span> with a remarkable skill set and a strong work ethic. Yaroslav's expertise in PHP, Laravel, and MySQL, combined with his proficiency in Python and JavaScript, makes him a versatile and invaluable member of any development team.",
      "feedback.role": "Python Backend Developer",
      "contact.title": "Contact Me",
      "search.placeholder": "Search..."
    },
    ru: {
      "nav.skills": "Навыки",
      "nav.portfolio": "Портфолио",
      "nav.contact": "Контакты",
      "hero.title": "Я <span>Yaroslav Mankivskyi</span>",
      "hero.role": "Веб-разработчик, фулстек и DevOps",
      "hero.contact": "Связаться",
      "about.title": "Обо мне",
      "about.body": "Привет! Меня зовут Ярослав, <span>я веб-разработчик полного цикла с опытом DevOps.</span> Параллельно с основной работой ищу клиентов и буду рад взяться за любую задачу в вебе — сайт, приложение, интеграцию или вывод проекта в продакшен. Готов отвечать за результат перед командой и заказчиком и легко нахожу подход к разным людям. Быстро осваиваю новые технологии и люблю сложные задачи: на них я расту.",
      "skills.title": "Мои навыки",
      "portfolio.title": "Портфолио",
      "portfolio.itemTitle": "Заголовок проекта",
      "portfolio.itemText": "Описание проекта",
      "portfolio.soon": "Скоро будет..",
      "experience.title": "Опыт",
      "exp.nova.role": "Веб-разработчик",
      "exp.nova.intro": "За это время я сделал следующее:",
      "exp.nova.list": "<li>Работал над сайтами на Drupal, WordPress и Magento.</li><li>Делал RAG-приложения и чат-ботов.</li><li>Делал 3D-игры и графику на JavaScript и React.</li><li>Работал с легаси-проектами и перестраивал ядра приложений.</li><li>Разрабатывал продукты на Laravel.</li>",
      "exp.free.role": "PHP веб-разработчик",
      "exp.free.intro": "За это время я сделал следующее:",
      "exp.free.list": "<li>Работал с веб-приложениями и их частями (базы, API и т.д.): лендинги и многостраничные проекты под разные задачи. Применял паттерны вроде REST и MVC.</li><li>Делал аутентификацию через OAuth2, сессии и токены.</li><li>Собирал административные панели и удалённое администрирование через Telegram Bot API.</li><li>Выкладывал проекты на серверы (в том числе через Termius) и настраивал панели для удобной конфигурации.</li>",
      "feedback.title": "Отзыв",
      "feedback.body": "Мне посчастливилось работать с <span>Ярославом Маньковским</span>, и я могу уверенно сказать, что это <span>веб-разработчик полного цикла</span> с сильным набором навыков и ответственным подходом к делу. Опыт Ярослава в PHP, Laravel и MySQL вместе со знанием Python и JavaScript делает его разносторонним и ценным человеком в команде.",
      "feedback.role": "Python-разработчик бэкенда",
      "contact.title": "Связаться",
      "search.placeholder": "Поиск..."
    }
  };

  var listeners = [];
  var lang = localStorage.getItem("site-lang") === "ru" ? "ru" : "en";

  function t(key) {
    var pack = dict[lang] || dict.en;
    return pack[key] != null ? pack[key] : (dict.en[key] || "");
  }

  function apply() {
    document.documentElement.lang = lang === "ru" ? "ru" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    listeners.forEach(function (fn) { fn(lang); });
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-set-lang]");
    if (!btn) return;
    var next = btn.getAttribute("data-set-lang");
    if (next !== "en" && next !== "ru") return;
    if (next === lang) return;
    lang = next;
    localStorage.setItem("site-lang", lang);
    apply();
  });

  window.siteI18n = {
    t: t,
    get lang() { return lang; },
    onChange: function (fn) { listeners.push(fn); }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
