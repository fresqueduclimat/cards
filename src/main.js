import App from "./App.vue";
import ar from "@/locales/ar.json";
import br from "@/locales/br.json";
import cn from "@/locales/cn.json";
import cnt from "@/locales/cn-traditional.json";
import textDirectionDirective from "@/directives/textDirectionDirective.js";
import textAlignDirective from "@/directives/textAlignDirective.js"; 
import co2SubscriptDirective from "@/directives/co2SubscriptDirective.js"; // Import the directive
import lineBreakDirective from "@/directives/lineBreakDirective.js"; // Import the directive
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import de from "@/locales/de.json";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import jp from "@/locales/jp.json";
import ru from "@/locales/ru.json";
import kh from "@/locales/kh.json";
import lao from "@/locales/lao.json";
import vt from "@/locales/vt.json";
import my from "@/locales/my.json";
import he from "@/locales/he.json";

const messages = {
  en: en,
  fr: fr,
  ar: ar,
  br : br,
  de: de,
  jp: jp,
  cn: cn,
  cnt : cnt,
  ru: ru,
  kh: kh,
  lao : lao,
  vt : vt,
  my : my,
  he : he,
};

// if we want to have the language as a param when executing the command
// execute VUE_APP_LOCALE=fr npm run serve
// const locale = process.env.VUE_APP_LOCALE || "en";

const i18n = createI18n({
  locale: "ru", // Remplacer par locale si passée en parametre
  fallbackLocale: "en",
  messages,
});


const app = createApp(App)
app.use(i18n);
app.directive('co2-subscript', co2SubscriptDirective);
app.directive('text-direction', textDirectionDirective);
app.directive('text-align', textAlignDirective);
app.directive('linebreak', lineBreakDirective); // Register the directive
app.mount("#app");
