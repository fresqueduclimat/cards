export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'fr') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '100px';
            });
        }
        if (currentLocale === 'de') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '105px';
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.top = '263px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.top = '263px';
            });
        }
        if (currentLocale === 'es') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '100px';
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.width = '234px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.left = '301px';
            });
        }
    },
};