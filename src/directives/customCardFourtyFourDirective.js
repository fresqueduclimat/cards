export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const mini = process.env.VUE_APP_MINI;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en' && mini==='true') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${96 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'de') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${90 * scaleFactor}px`;
                text.style.height = `${165 * scaleFactor}px`;
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.top = `${230 * scaleFactor}px`;
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.top = `${230 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'es' || currentLocale === 'lat'|| currentLocale === 'ca') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${93 * scaleFactor}px`;
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.width = `${201 * scaleFactor}px`;
                text.style.height = `${57 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.left = `${228 * scaleFactor}px`;
                text.style.width = `${188 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'ca') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${85 * scaleFactor}px`;
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'nl') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.width = `${382 * scaleFactor}px`;
                text.style.height = `${168 * scaleFactor}px`;
                text.style.top = `${86 * scaleFactor}px`;
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.top = `${235 * scaleFactor}px`;
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.top = `${235 * scaleFactor}px`;
                text.style.width = `${198 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'pt' || currentLocale === 'br') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${93 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'tpe') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${111 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'hu') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${98 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'pl') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${90 * scaleFactor}px`;
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.width = `${206 * scaleFactor}px`;
                text.style.height = `${60.6 * scaleFactor}px`;
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.left = `${268 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'ar') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${114 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'it') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${94 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'ru') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${98 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'lt') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'sv') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.top = `${217 * scaleFactor}px`;
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.top = `${217 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'id') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const addressElements = el.querySelectorAll('#card44-label2');
            addressElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const addressngoElements = el.querySelectorAll('#card44-label3');
            addressngoElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'nb') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'fa') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'us') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${82 * scaleFactor}px`;
                text.style.height = `${145 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
    },
};