export default {
    beforeMount(el, binding) {
      const currentLocale = binding.instance?.$i18n?.locale;
      if (currentLocale === 'my') {
            el.querySelectorAll('p').forEach(paragraph => {
            paragraph.style.lineHeight = '2';
        });
      }
    },
  };
  