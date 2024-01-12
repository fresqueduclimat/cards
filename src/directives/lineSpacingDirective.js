export default {
    beforeMount(el, binding) {
      const scaleFactor = 0.720;
      const currentLocale = binding.instance?.$i18n?.locale;
      if (currentLocale === 'my') {
            el.querySelectorAll('p').forEach(paragraph => {
            paragraph.style.lineheight = `${2 * scaleFactor}px`;
        });
      }
    },
  };
  