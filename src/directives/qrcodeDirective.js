export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;
        if (print === 'false') {
            if (currentLocale === '') {
                const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
                qrcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-en.png')})`;
                });
            }
            if (currentLocale === 'en') {
                const qrcodeKeyElements = el.querySelectorAll('.qr-code-key');
                qrcodeKeyElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-code-key-en.png')})`;
                });
            }
            if (currentLocale === 'fr' || currentLocale === 'co') {
                const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
                qrcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-fr.png')})`;
                });
            }
            // ES-ES
            if (currentLocale === 'es' || currentLocale === 'lat') {
                const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
                qrcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-es.png')})`;
                });

                const qrcodeKeyElements = el.querySelectorAll('.qr-code-key');
                qrcodeKeyElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-code-key-en.png')})`;
                });
            }
            // DE-DE
            if (currentLocale === 'de') {
                const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
                qrcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-de.png')})`;
                });

                // const qrcodeKeyElements = el.querySelectorAll('.qr-code-key');
                // qrcodeKeyElements.forEach(code => {
                //     code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-code-key-en.png')})`;
                // });
            } 
            // NL-NL
            if (currentLocale === 'nl') {
                const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
                qrcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-en.png')})`;
                });

                const qrcodeKeyElements = el.querySelectorAll('.qr-code-key');
                qrcodeKeyElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-code-key-en.png')})`;
                });
            } 
        }        
    
    },
};