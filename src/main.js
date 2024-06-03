import App from "./App.vue";
import co2SubscriptDirective from "@/directives/co2SubscriptDirective.js";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import customCardFourtyFourDirective from "./directives/customCardFourtyFourDirective.js";
import customCardZeroDirective from "./directives/customCardZeroDirective.js";
import customFont from "@/directives/customFontDirective";
import customSizesDirective from "./directives/customSizesDirective.js";
import customTitleDivDirective from "./directives/customTitleDivDirective.js";
import lineBreakDirective from "@/directives/lineBreakDirective.js";
import lineSpacingDirective from "@/directives/lineSpacingDirective.js";
import logoDirective from "./directives/logoDirective.js";
import miniSizeDirective from "./directives/miniSizeDirective";
import noBreakDirective from "./directives/noBreakDirective.js";
import printDirective from "./directives/printDirective.js";
import qrcodeDirective from "./directives/qrcodeDirective";
import textAlignDirective from "@/directives/textAlignDirective.js";
import textDirectionDirective from "@/directives/textDirectionDirective.js";

// Function to fetch JSON data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    return null;
  }
}

async function fetchLanguageData(languageCode) {
  const url = `./locales/${languageCode}.json`;
  return fetchData(url);
}

const locales = [
  'de-DE',
  'en-GB',
  'fr-FR',
  'ja-JP',
  'vi-VN',
  'my-MM',
  'pt-PT',
  'ro-RO',
  'sv-SE',
  'fi-FI',
  'nl-NL',
  'es-ES',
  'es-LAT',
  'fa-IR',
  'id-ID',
  'tr-TR',
  'hu-HU',
  'pt-BR',
  'pl-PL',
  'ca-ES',
  'it-IT',
  'ru-RU',
  'lt-LT',
  'nb-NO',
  'ar-AR',
  'bg-BG',
  'zh-CN',
  'zh-TPE',
  'cs-CZ',
  'en-US',
  'hy-AM',
  'mf-MU',
  'hr-HR',
  'co-FR',
  'sr-SB',
  'ne-NP',
  'mk-MK',
  "et-EE",
  "hi-IN",
  "el-GR",
  "ml-IN",
  "th-TH",
  "eo-EO",
  "km-kh",
]

const fetchPromises = locales.map((lang) => {
  return fetchLanguageData(lang);
});



Promise.all(fetchPromises)
  .then((languageDataArray) => {
    const messages = {};

    locales.forEach((lang, index) => {
      messages[lang] = languageDataArray[index] || {};
    });
    // Create the i18n instance only after fetching data
    const i18n = createI18n({
      locale: "fr-FR", // Replace with the desired default locale
      fallbackLocale: "fr-Fr",
      messages: messages,
    });

    // Create Vue app with i18n instance
    const app = createApp(App);
    app.use(i18n);
    app.directive('co2-subscript', co2SubscriptDirective);
    app.directive('text-direction', textDirectionDirective);
    app.directive('text-align', textAlignDirective);
    app.directive('linebreak', lineBreakDirective);
    app.directive('linespacing', lineSpacingDirective);
    app.directive('customtitlediv', customTitleDivDirective);
    app.directive('logo', logoDirective);
    app.directive('print', printDirective);
    app.directive('qr-code', qrcodeDirective);
    app.directive('no-break', noBreakDirective);
    app.directive('card-zero', customCardZeroDirective);
    app.directive('card-fourtyfour', customCardFourtyFourDirective);
    app.directive('custom-size', customSizesDirective);
    app.directive('mini-size', miniSizeDirective);
    app.directive('custom-font', customFont);
    app.mount("#app");
  })
  .catch((error) => {
    console.error('Error fetching language data:', error);
  });
