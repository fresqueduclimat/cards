export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'de') {
            // const cardtwoElements = el.querySelectorAll('#card2-back-label0');
            // cardtwoElements.forEach(text => {
            //     text.style.left = '52px';    
            //     text.style.width = '599px'; 
            // });
        }
    },
};