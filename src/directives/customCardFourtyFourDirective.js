export default {
    beforeMount(el, binding) {
        const scaleFactor = 0.721;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${96 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'de') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${90 * scaleFactor}px`;
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
        if (currentLocale === 'es') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${93 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
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
    },
};