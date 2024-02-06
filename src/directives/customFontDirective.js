export default {
    mounted(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        let fontFamily;

        if (currentLocale === 'tpe') {
            fontFamily = "'Noto Sans TC', sans-serif";
            // Update the global CSS variables for font
            document.documentElement.style.setProperty('--r-main-font', fontFamily);
            document.documentElement.style.setProperty('--r-heading-font', fontFamily);
        }
        if (currentLocale === 'fa') {
            fontFamily = "'Vazirmatn', sans-serif";
            document.documentElement.style.setProperty('--r-main-font', fontFamily);
            document.documentElement.style.setProperty('--r-heading-font', fontFamily);
        }
        if (currentLocale === 'ar') {
            fontFamily = "'Noto Sans Arabic', sans-serif";
            document.documentElement.style.setProperty('--r-main-font', fontFamily);
            document.documentElement.style.setProperty('--r-heading-font', fontFamily);
        }
        if (currentLocale === 'ja' || currentLocale === 'vi') {
            fontFamily = "'Noto Sans JP', sans-serif";
            document.documentElement.style.setProperty('--r-main-font', fontFamily);
            document.documentElement.style.setProperty('--r-heading-font', fontFamily);
        }
        if (currentLocale === 'my') {
            fontFamily = "'Padauk', sans-serif";
            document.documentElement.style.setProperty('--r-main-font', fontFamily);
            document.documentElement.style.setProperty('--r-heading-font', fontFamily);
        }
        
    },
};
