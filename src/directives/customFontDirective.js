export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'tpe') {
            el.style.fontFamily = "'Noto Sans TC', sans-serif";
        }
        if (currentLocale === 'fa') {
            el.style.fontFamily = "'Vazirmatn', sans-serif";
        }
        if (currentLocale === 'ar') {
            el.style.fontFamily = "'Noto Sans Arabic', sans-serif";
            el.style.fontWeight = "400";
        }
    },
};