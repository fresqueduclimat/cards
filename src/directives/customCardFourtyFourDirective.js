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
                text.style.left = `${251 * scaleFactor}px`;
                text.style.width = `${185 * scaleFactor}px`;
                text.style.height = `${46 * scaleFactor}px`;
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
                text.style.top = `${79 * scaleFactor}px`;
                text.style.height = `${145 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            // const ccElements = el.querySelectorAll('.cc-container');
            // ccElements.forEach(text => {
            //     text.style.height = `${40 * scaleFactor}px`;
            // });
            // const qrElements = el.querySelectorAll('.qr-code-siteweb-container');
            // qrElements.forEach(text => {
            //     text.style.height = `${106 * scaleFactor}px`;
            // });
            const adressNgoElements = el.querySelectorAll('#card44-label3');
            adressNgoElements.forEach(text => {
                text.style.top = `${223 * scaleFactor}px`;
                text.style.width = `${192 * scaleFactor}px`;
                text.style.height = `${49 * scaleFactor}px`;
                // text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const adressElements = el.querySelectorAll('#card44-label2');
            adressElements.forEach(text => {
                text.style.top = `${223 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'bg') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${87 * scaleFactor}px`;
                text.style.height = `${145 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'hr') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${92 * scaleFactor}px`;
                text.style.height = `${135 * scaleFactor}px`;
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'co') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${83 * scaleFactor}px`;
                text.style.height = `${155 * scaleFactor}px`;
                // text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const adressNgoElements = el.querySelectorAll('#card44-label3');
            adressNgoElements.forEach(text => {
                text.style.top = `${233 * scaleFactor}px`;
            });
            const adressElements = el.querySelectorAll('#card44-label2');
            adressElements.forEach(text => {
                text.style.top = `${233 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'sr') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${83 * scaleFactor}px`;
                text.style.height = `${155 * scaleFactor}px`;
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'ne') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${91 * scaleFactor}px`;
                text.style.height = `${135 * scaleFactor}px`;
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'mk') {
            const headerElements = el.querySelectorAll('#card44-label0');
            headerElements.forEach(text => {
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${90 * scaleFactor}px`;
                text.style.width = `${387 * scaleFactor}px`;
                text.style.height = `${135 * scaleFactor}px`;
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'zh') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${102 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'ro') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'el') {
            const corpusElements = el.querySelectorAll('#card44-label1');
            corpusElements.forEach(text => {
                text.style.top = `${98 * scaleFactor}px`;
                text.style.height = `${155 * scaleFactor}px`;
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
        }
    },
};