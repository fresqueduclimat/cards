export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'fr') {
            const barcodeElements = el.querySelectorAll('.barcode');
            barcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/barcode/adults-fr.png')})`;
            });
            const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
            qrcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-fr.png')})`;
            });
        }
        if (currentLocale === 'es') {
            const barcodeElements = el.querySelectorAll('.barcode');
            barcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/barcode/adults-es.png')})`;
            });
            const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
            qrcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-es.png')})`;
            });
        }
        if (currentLocale === 'de') {
            const barcodeElements = el.querySelectorAll('.barcode');
            barcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/barcode/adults-de.png')})`;
            });
            const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
            qrcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-de.png')})`;
            });
        }
    },
};