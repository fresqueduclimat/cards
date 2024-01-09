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
            if (currentLocale === 'en') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = '322px';
                    logo.style.left = '230px';
                    logo.style.width = '237px';
                    logo.style.height = '101px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '409px';
                    outline.style.left = '299px';
                 });
            }
            if (currentLocale === 'fr') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = '333px';
                    logo.style.left = '232px';
                    logo.style.width = '254px'; 
                    logo.style.height = '74px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '399px';
                    outline.style.left = '279px';
                });
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
                    text.style.top = '432px';
                });
            }
                // add en logo & qr code 
                if (currentLocale === 'nl') {
                // the logo should be on the right side to leave some space to barcode
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '322px';
                    logo.style.left = '230px';
                    logo.style.width = '237px';
                    logo.style.height = '101px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '409px';
                    outline.style.left = '299px';
                });
                const barcodeElements = el.querySelectorAll('.barcode');
                barcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/barcode/adults-nl.png')})`;
                });
                const qrcodeElements = el.querySelectorAll('.qr-code-siteweb');
                qrcodeElements.forEach(code => {
                    code.style.backgroundImage = `url(${require('@/assets/qr-code/qr-siteweb-en.png')})`;
                });
                const recycledpaperElements = el.querySelectorAll('#card44-label7');
                recycledpaperElements.forEach(text => {
                    text.style.top = '432px';
                });
            }
            // add es logo & qr code
            if (currentLocale === 'es') {
                    // the logo should be on the right side to leave some space to barcode
                    const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                    logoBigContainerElements.forEach(logo => {
                        logo.style.top = '327px';
                        logo.style.left = '222px';
                        logo.style.width = '260px'; 
                    });
                    const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                    outlineBackContainerElements.forEach(outline => {
                        outline.style.top = '400px';
                        outline.style.left = '281px'; 
                    });
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
                // the logo should be on the right side to leave some space to barcode
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '326px';
                    logo.style.left = '224px';
                    logo.style.width = '261px'; 
                    logo.style.height = '88px'; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '400px';
                    outline.style.left = '292px'; 
                });
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
    }      
    },
};