export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'ar' || currentLocale === 'he' || currentLocale === 'fa') {
          el.setAttribute('dir', 'rtl');
        }
        //adapt some div to rtl direction
        if (currentLocale === 'ar') {
          const card7label2Elements = el.querySelectorAll('#card7-label2');
          card7label2Elements.forEach(text => {
            text.style.width = `${112 * scaleFactor}px`;
          });
          const card7label3Elements = el.querySelectorAll('#card7-label3');
          card7label3Elements.forEach(text => {
            text.style.width = `${112 * scaleFactor}px`;
          });
        }
    },
};
