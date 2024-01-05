export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;
        if (print === 'true') {
            // change top variable to reveal the barcode container
            const barcodeElements = el.querySelectorAll('.barcode-container');
                barcodeElements.forEach(code => {
                    code.style.top = '339px';
                });
            // the logo should be on the right side to leave some space to barcode
            if (currentLocale !== 'fr') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = '313px';
                    logo.style.left = '218px';
                    logo.style.width = '264px';
                    logo.style.height = '101px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '409px';
                    outline.style.left = '266px';
                 });
            }
            if (currentLocale === 'fr') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = '329px';
                    logo.style.left = '210px';
                    logo.style.width = '280px';
                    logo.style.height = '75px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.left = '255px';
                });
            }
        }
        // add en logo & qr code 
        if (currentLocale === 'en') {
            // const barcodeElements = el.querySelectorAll('.barcode');
            // barcodeElements.forEach(code => {
            //     code.style.backgroundImage = `url(${require('@/assets/barcode/adults-en.png')})`;
            // });
            const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
            qrcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-en.png')})`;
            });
            const recycledpaperElements = el.querySelectorAll('#card44-label7');
            recycledpaperElements.forEach(text => {
                text.style.top = '600px';
            });
        }
        // add es logo & qr code
        if (currentLocale === 'es') {
            // const barcodeElements = el.querySelectorAll('.barcode');
            // barcodeElements.forEach(code => {
            //     code.style.backgroundImage = `url(${require('@/assets/barcode/adults-fr.png')})`;
            // });
            const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
            qrcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-es.png')})`;
            });
            const recycledpaperElements = el.querySelectorAll('#card44-label7');
            recycledpaperElements.forEach(text => {
                text.style.top = '432px'; 
            });
        }
        // add de logo & qr code
        if (currentLocale === 'de') {
            const barcodeElements = el.querySelectorAll('.barcode');
            barcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/barcode/adults-de.png')})`;
            });
            const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
            qrcodeElements.forEach(code => {
                code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-de.png')})`;
            });
            const recycledpaperElements = el.querySelectorAll('#card44-label7');
            recycledpaperElements.forEach(text => {
                text.style.top = '432px'; 
            });
        }       
    },
};