export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'ar' || currentLocale === 'he') {
          el.setAttribute('dir', 'rtl');
        }
    },
};
