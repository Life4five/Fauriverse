const translations = {
  ru: {
    section_skills: "Навыки"
  },
  en: {
    section_skills: "Skills"
  }
};

function setLanguage(lang) {
  const elements = [...document.querySelectorAll("[data-i18n]")];
  const cvLink = document.getElementById("cv_link");
  const langButtons = document.querySelectorAll(".lang-toggle");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });

  if (cvLink) {
    cvLink.href = lang === "ru" ? "./res/cv_ru.pdf" : "./res/cv_en.pdf";
  }

  langButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}