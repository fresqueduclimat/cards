import App from "./App.vue";
import ar from "@/locales/ar-AR.json";
import bg from "@/locales/bg-BG.json";
import zh from "@/locales/zh-CN.json";
import textDirectionDirective from "@/directives/textDirectionDirective.js";
import textAlignDirective from "@/directives/textAlignDirective.js"; 
import co2SubscriptDirective from "@/directives/co2SubscriptDirective.js"; 
import lineBreakDirective from "@/directives/lineBreakDirective.js";
import lineSpacingDirective from "@/directives/lineSpacingDirective.js"; 
import customTitleDivDirective from "./directives/customTitleDivDirective.js";
import logoDirective from "./directives/logoDirective.js";
import noBreakDirective from "./directives/noBreakDirective.js"
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import de from "@/locales/de-DE.json";
import en from "@/locales/en.json";
import fr from "@/locales/fr-FR.json";
import ja from "@/locales/ja-JP.json";
import ru from "@/locales/ru-RU.json";
import kh from "@/locales/kh.json";
import lao from "@/locales/lao.json";
import vi from "@/locales/vi-VN.json";
import my from "@/locales/my-MM.json";
import he from "@/locales/he.json";
import pt from "@/locales/pt-PT.json";
import ro from "@/locales/ro-RO.json";
import sv from "@/locales/sv-SE.json";
import fi from "@/locales/fi-FI.json";

const messages = {
  en: en,
  fr: fr,
  ar: ar,
  bg : bg,
  de: de,
  ja: ja,
  zh : zh,
  ru: ru,
  kh: kh,
  lao : lao,
  vi : vi,
  my : my,
  he : he,
  pt : pt,
  ro : ro,
  sv : sv,
  fi : fi,
};

// if we want to have the language as a param when executing the command
// execute VUE_APP_LOCALE=fr npm run serve
// const locale = process.env.VUE_APP_LOCALE || "en";

const i18n = createI18n({
  locale: "ar", // Remplacer par locale si passée en parametre
  fallbackLocale: "en",
  messages,
});


const app = createApp(App)
app.use(i18n);
app.directive('co2-subscript', co2SubscriptDirective);
app.directive('text-direction', textDirectionDirective);
app.directive('text-align', textAlignDirective);
app.directive('linebreak', lineBreakDirective);
app.directive('linespacing', lineSpacingDirective); 
app.directive('customtitlediv', customTitleDivDirective); 
app.directive('logo', logoDirective); 
app.directive('no-break', noBreakDirective); 
app.mount("#app");
