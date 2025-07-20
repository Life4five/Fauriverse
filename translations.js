const resumeUpdateDate = "20.04.2025";

const translations = {
  ru: {
    section_skills: "Навыки",
    section_projects: "Проекты",
    section_contacts: "Контакты",
    cv_title: "Резюме",
    cv_text: "Здесь можно скачать резюме",
    cv_download: "Скачать резюме (RU)",
    footer_text: "© 2025 Life4five. Сделано с ❤",
    nav_about: "О себе",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_contacts: "Контакты",
    about_text: "Я студент по Data Science, изучаю Python и хочу развиваться в AI.",
    lorem: "Пока модель не уверена, что эта секция имеет значение. Она предсказывает контент с вероятностью 56.2% - этого недостаточно для продакшна. Зато я уже сделал красивую рамку.",
    cv_update: "Обновлено: " + resumeUpdateDate,
    project_1_title: "Проект 1",
    project_1_desc: "Описание проекта 1",
    project_1_date: "Обновлено: 01.01.2025",
    project_2_title: "Проект 2",
    project_2_desc: "Описание проекта 2",
    project_2_date: "Обновлено: 01.02.2025",
    project_3_title: "Проект 3",
    project_3_desc: "Описание проекта 3",
    project_3_date: "Обновлено: 01.03.2025",
    project_4_title: "Проект 4",
    project_4_desc: "Описание проекта 4",
    project_4_date: "Обновлено: 01.04.2025",
    project_5_title: "Проект 5",
    project_5_desc: "Описание проекта 5",
    project_5_date: "Обновлено: 01.05.2025",
    project_6_title: "Проект 6",
    project_6_desc: "Описание проекта 6",
    project_6_date: "Обновлено: 01.06.2025",
    project_update_date: "Обновлено: " + resumeUpdateDate
  },
  en: {
    section_skills: "Skills",
    section_projects: "Projects",
    section_contacts: "Contacts",
    cv_title: "CV",
    cv_text: "You can download the resume here",
    cv_download: "Download resume (EN)",
    footer_text: "© 2025 Life4five. Made with ❤",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contacts: "Contacts",
    about_text: "I'm a Data Science student learning Python and aiming to grow in AI.",
    lorem: "The model isn’t confident this section matters - only a 56.2% prediction score. That’s below production threshold. But hey, the border looks nice already.",
    cv_update: "Updated: " + resumeUpdateDate,
    project_1_title: "Project 1",
    project_1_desc: "Description of Project 1",
    project_1_date: "Updated: 01.01.2025",
    project_2_title: "Project 2",
    project_2_desc: "Description of Project 2",
    project_2_date: "Updated: 01.02.2025",
    project_3_title: "Project 3",
    project_3_desc: "Description of Project 3",
    project_3_date: "Updated: 01.03.2025",
    project_4_title: "Project 4",
    project_4_desc: "Description of Project 4",
    project_4_date: "Updated: 01.04.2025",
    project_5_title: "Project 5",
    project_5_desc: "Description of Project 5",
    project_5_date: "Updated: 01.05.2025",
    project_6_title: "Project 6",
    project_6_desc: "Description of Project 6",
    project_6_date: "Updated: 01.06.2025",
    project_update_date: "Updated: "
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