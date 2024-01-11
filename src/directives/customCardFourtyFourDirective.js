export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '96px';
            });
        }
        if (currentLocale === 'de') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '90px';
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.top = '230px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.top = '230px';
            });
        }
        if (currentLocale === 'es') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = '93px';
                text.style.fontSize = '12px';
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.width = '201px';
                text.style.height = '57px';
                text.style.fontSize = '12px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.left = '228px';
                text.style.width = '188px';
                text.style.fontSize = '12px';
            });
        }
        if (currentLocale === 'nl') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.width = '382px';
                text.style.height = '168px';
                text.style.top = '86px';
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.width = '198px';
            });
        }
    },
};