export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'ar' || currentLocale === 'he' || currentLocale === 'fa') {
          el.setAttribute('dir', 'rtl');
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
          const card15label14Elements = el.querySelectorAll('#card15-label14');
          card15label14Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card14label1Elements = el.querySelectorAll('#card14-label1');
          card14label1Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card14label2Elements = el.querySelectorAll('#card14-label2');
          card14label2Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card14label3Elements = el.querySelectorAll('#card14-label3');
          card14label3Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card14label4Elements = el.querySelectorAll('#card14-label4');
          card14label4Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card15label15Elements = el.querySelectorAll('#card15-label15');
          card15label15Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card15label6Elements = el.querySelectorAll('#card15-fixed-text6');
          card15label6Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card22label1Elements = el.querySelectorAll('#card22-fixed-text1');
          card22label1Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card22label2Elements = el.querySelectorAll('#card22-fixed-text2');
          card22label2Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card22label3Elements = el.querySelectorAll('#card22-fixed-text3');
          card22label3Elements.forEach(text => {
            text.setAttribute('dir','ltr')
          });
          const card0label1Elements = el.querySelectorAll('.front-card-label0-position');
          card0label1Elements.forEach(text => {
            text.style.width = `${220 * scaleFactor}px`;
          });
          const card19label1FixedElements = el.querySelectorAll('.card19-label1-position');
          card19label1FixedElements.forEach(text => {
            text.style.left = `${113 * scaleFactor}px`;
            text.style.width = `${254 * scaleFactor}px`;
            text.style.fontSize = `${12 * scaleFactor}px`;
          });
          const card19label1Elements = el.querySelectorAll('.card19-fixed-label1-position');
          card19label1Elements.forEach(text => {
            text.style.fontSize = `${22 * scaleFactor}px`;
          });
          const card19label2Elements = el.querySelectorAll('.card19-fixed-label2-position');
          card19label2Elements.forEach(text => {
            text.style.fontSize = `${22 * scaleFactor}px`;
          });
          const card5label8Elements = el.querySelectorAll('.card5-fixed-label8-position');
          card5label8Elements.forEach(text => {
            text.style.left = `${418 * scaleFactor}px`;
          });
          const card5label9Elements = el.querySelectorAll('.card5-fixed-label9-position');
          card5label9Elements.forEach(text => {
            text.style.left = `${451.5 * scaleFactor}px`;
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

          regex = /91%/g;
          replacement = '<nobr>۹۱٪</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);

          regex = /3%/g;
          replacement = '<nobr>۵٪</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);

          regex = /5%/g;
          replacement = '<nobr>۳٪</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);

          regex = /1%/g;
          replacement = '<nobr>۱٪</nobr>';
          el.innerHTML = el.innerHTML.replace(regex, replacement);
        }
    },
};
