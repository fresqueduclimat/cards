export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'ar' || currentLocale === 'he' || currentLocale === 'fa') {
          el.setAttribute('dir', 'rtl');
          const elements = el.querySelectorAll('.label');
            elements.forEach((element) => {
                element.style.textAlign = 'right';
            });
        }
        //adapt some div to rtl direction
        if (currentLocale === 'ar' || currentLocale === 'fa') {
          const card7label2Elements = el.querySelectorAll('#card7-label2');
          card7label2Elements.forEach(text => {
            text.style.width = `${112 * scaleFactor}px`;
          });
          const card7label3Elements = el.querySelectorAll('#card7-label3');
          card7label3Elements.forEach(text => {
            text.style.width = `${112 * scaleFactor}px`;
          });
        }

        if (currentLocale === 'fa') {
          var regex = /cm/g;
          var replacement = '<nobr>سانتی‌متر</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);

          regex = /ppm/g;
          replacement = '<nobr>پی‌پی‌ام</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);

          regex = /1\/2/g;
          replacement = '<nobr>۱/۲</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);

          regex = /1\/4/g;
          replacement = '<nobr>۱/۴</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);
        }
    },
};
