const STATIC_PATH = "/i18n";

function getSystemLanguage() {
  return navigator.language.slice(0, 2);
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadLocale(lang) {
  try {
    const response = await fetch(`${STATIC_PATH}/${lang}.json`);
    if (!response.ok) throw new Error("Failed to load locale");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

function applyTranslations(localeData) {
  document.getElementById("title").innerHTML =
    localeData["Get Unlimited <br>Access"];
  document.getElementById("text__unlimited-art").innerHTML =
    localeData["Unlimited Art <br>Creation"];
  document.getElementById("text__exclusive-styles").innerHTML =
    localeData["Exclusive <br>Styles"];
  document.getElementById("text__magic-avatars").innerHTML =
    localeData["Magic Avatars <br>With 20% Off"];
  document.getElementById("subscription__year-title").textContent =
    localeData["YEARLY ACCESS"];
  document.getElementById("subscription_best-offer").textContent =
    localeData["BEST OFFER"];
  document.getElementById("subscription__year-subtitle").innerHTML = localeData[
    "Just {{price}} per year"
  ].replace("{{price}}", "$39.99");
  document.getElementById("subscription__week-title").textContent =
    localeData["WEEKLY ACCESS"];
  document.getElementById("subscription__year-price").innerHTML = localeData[
    "{{price}} <br>per week"
  ].replace("{{price}}", "$0.48");
  document.getElementById("subscriptions__week-price").innerHTML = localeData[
    "{{price}} <br>per week"
  ].replace("{{price}}", "$6.99");
  document.getElementById("subscriptions__continue-btn").textContent =
    localeData["Continue"];
  document.getElementById("terms").textContent = localeData["Terms of Use"];
  document.getElementById("privacy").textContent = localeData["Privacy Policy"];
  document.getElementById("restore").textContent = localeData["Restore"];
}

async function setLanguage() {
  const chosenLang = getQueryParam("lang") || getSystemLanguage();
  let localeData = await loadLocale(chosenLang);

  if (!localeData) {
    console.warn(
      `Locale for language '${chosenLang}' not found. Falling back to English.`
    );
    localeData = await loadLocale("en");
  }

  if (localeData) {
    applyTranslations(localeData);
    document.documentElement.lang = chosenLang;
  }
}

setLanguage();
