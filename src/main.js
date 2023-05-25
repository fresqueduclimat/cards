import App from "./App.vue";
import ar from "@/locales/ar.json";
import br from "@/locales/br.json";
import cn from "@/locales/cn.json";
import cnt from "@/locales/cn-traditional.json";
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
};

const i18n = createI18n({
  locale: "en", // Set the initial locale, e.g., 'en'
  fallbackLocale: "fr",
  messages,
});

const app = createApp(App).use(i18n);
app.directive('co2-subscript', co2SubscriptDirective);
app.directive('linebreak', lineBreakDirective); // Register the directive
app.mount("#app");
