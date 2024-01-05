export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '112px';
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
                text.style.top = '108px';
                text.style.fontSize = '14px';
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.width = '234px';
                text.style.height = '66px';
                text.style.fontSize = '14px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.left = '265px';
                text.style.width = '218px';
                text.style.fontSize = '14px';
            });
        }
        if (currentLocale === 'nl') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.width = '465px';
                text.style.height = '167px';
                text.style.top = '106px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.width = '230px';
            });
        }
    },
};