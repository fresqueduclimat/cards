import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import br from "@/locales/br.json";
import de from "@/locales/de.json";
import jp from "@/locales/jp.json";
import cn from "@/locales/cn.json";
import co2SubscriptDirective from "@/directives/co2SubscriptDirective.js"; // Import the directive

const messages = {
  en: en,
  fr: fr,
  ar: ar,
  br: br,
  de: de,
  jp: jp,
  cn: cn,
};

const i18n = createI18n({
  locale: "cn", // Set the initial locale, e.g., 'en'
  fallbackLocale: "fr",
  messages,
});

const app = createApp(App).use(i18n);
app.directive('co2-subscript', co2SubscriptDirective); // Register the directive
app.mount("#app");
