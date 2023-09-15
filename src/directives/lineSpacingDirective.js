export default {
    beforeMount(el, binding) {
      const currentLocale = binding.instance?.$i18n?.locale;
      if (currentLocale === 'my') {
            // Apply the 'Padauk' font to <p> elements within the element
            el.querySelectorAll('p').forEach(paragraph => {
            paragraph.style.fontFamily = 'Padauk, sans-serif';
            // You can also set additional styling if needed
            paragraph.style.lineHeight = '2';
        });
      }
    },
  };
  