export default {
    beforeMount(el, binding) {
      const scaleFactor = 1.00;
      const currentLocale = binding.instance?.$i18n?.locale;
      if (currentLocale === 'my') {
            el.querySelectorAll('p').forEach(paragraph => {
            paragraph.style.lineheight = `${2 * scaleFactor}px`;
        });
      }
    },
  };
  