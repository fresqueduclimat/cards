export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'ar' || currentLocale === 'he'|| currentLocale === 'fa') {
            el.style.textAlign = 'right';
        }
    },
};