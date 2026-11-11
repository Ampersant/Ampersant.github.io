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
    de: {
      "nav.skills": "Skills",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Kontakt",
      "hero.title": "ICH <span>Yaroslav Mankivskyi</span>",
      "hero.role": "Full-Stack-Webentwickler & DevOps",
      "hero.contact": "Kontakt",
      "about.title": "Über mich",
      "about.body": "Hallo! Ich heiße Yaroslav, <span>ich bin Full-Stack-Webentwickler mit DevOps-Erfahrung.</span> Neben meiner Stelle suche ich Kunden und übernehme gern jede Aufgabe im Web — eine Website, eine Anwendung, eine Integration oder die Veröffentlichung eines Projekts. Ich übernehme Verantwortung gegenüber Team und Kunde und finde leicht einen Zugang zu unterschiedlichen Menschen. Neue Technologien lerne ich schnell, und Herausforderungen mag ich, weil ich daran wachse.",
      "skills.title": "Meine Skills",
      "portfolio.title": "Portfolio",
      "portfolio.itemTitle": "Projekttitel",
      "portfolio.itemText": "Projektbeschreibung",
      "portfolio.soon": "Folgt bald..",
      "experience.title": "Erfahrung",
      "exp.nova.role": "Webentwickler",
      "exp.nova.intro": "In dieser Zeit habe ich Folgendes gemacht:",
      "exp.nova.list": "<li>An Websites mit Drupal, WordPress und Magento gearbeitet.</li><li>RAG-Anwendungen und Chatbots entwickelt.</li><li>3D-Spiele und Grafik mit JavaScript und React umgesetzt.</li><li>An Legacy-Projekten gearbeitet und Anwendungskerne neu aufgebaut.</li><li>Produkte mit Laravel entwickelt.</li>",
      "exp.free.role": "PHP-Webentwickler",
      "exp.free.intro": "In dieser Zeit habe ich Folgendes gemacht:",
      "exp.free.list": "<li>An Webanwendungen und ihren Teilen gearbeitet (Datenbanken, APIs usw.): Landingpages und mehrseitige Projekte für unterschiedliche Aufgaben. Dabei Muster wie REST und MVC eingesetzt.</li><li>Authentifizierung mit OAuth2, Sessions und Tokens umgesetzt.</li><li>Administrationsoberflächen gebaut sowie Fernadministration über die Telegram Bot API.</li><li>Projekte auf Server ausgerollt (unter anderem mit Termius) und Panels für eine bequeme Konfiguration eingerichtet.</li>",
      "feedback.title": "Referenz",
      "feedback.body": "Ich hatte das Vergnügen, mit <span>Yaroslav Mankivskyi</span> zu arbeiten, und kann mit Überzeugung sagen, dass er ein <span>Full-Stack-Webentwickler</span> mit einem starken Können und einer verlässlichen Arbeitsweise ist. Seine Erfahrung mit PHP, Laravel und MySQL, zusammen mit Python und JavaScript, macht ihn zu einem vielseitigen und wertvollen Mitglied jedes Teams.",
      "feedback.role": "Python-Backend-Entwickler",
      "contact.title": "Kontakt",
      "search.placeholder": "Suchen..."
    }
  };

  var listeners = [];
  var saved = localStorage.getItem("site-lang");
  var lang = dict[saved] ? saved : "en";

  function t(key) {
    var pack = dict[lang] || dict.en;
    return pack[key] != null ? pack[key] : (dict.en[key] || "");
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.setAttribute("data-lang", lang);
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
    if (!dict[next] || next === lang) return;
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
