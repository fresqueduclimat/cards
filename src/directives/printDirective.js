export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const mini = process.env.VUE_APP_MINI;
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;
        if (print === 'true' && mini =='false') {
            // change top variable to reveal the barcode container
            const barcodeElements = el.querySelectorAll('.barcode-container');
                barcodeElements.forEach(code => {
                    code.style.top = `${292 * scaleFactor}px`;
                });
            if (currentLocale === 'en') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = `${277 * scaleFactor}px`;
                    logo.style.left = `${198 * scaleFactor}px`;
                    logo.style.width = `${204 * scaleFactor}px`;
                    logo.style.height = `${87 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${352 * scaleFactor}px`;
                    outline.style.left = `${257 * scaleFactor}px`;
                 });
            }
            if (currentLocale === 'fr') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = `${286 * scaleFactor}px`;
                    logo.style.left = `${200 * scaleFactor}px`;
                    logo.style.width = `${218 * scaleFactor}px`; 
                    logo.style.height = `${58.6 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${342 * scaleFactor}px`;
                    outline.style.left = `${240 * scaleFactor}px`;
                });
                const recycledpaperElements = el.querySelectorAll('#card44-label7');
                recycledpaperElements.forEach(text => {
                    text.style.top = `${374 * scaleFactor}px`;
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
                    text.style.top = `${371 * scaleFactor}px`;
                });
            }
                // add en logo & qr code 
                if (currentLocale === 'nl') {
                // the logo should be on the right side to leave some space to barcode
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${277 * scaleFactor}px`;
                    logo.style.left = `${198 * scaleFactor}px`;
                    logo.style.width = `${204 * scaleFactor}px`;
                    logo.style.height = `${87 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${352 * scaleFactor}px`;
                    outline.style.left = `${257 * scaleFactor}px`;
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
                    text.style.top = `${372 * scaleFactor}px`;
                });
            }
            // add es logo & qr code
            if (currentLocale === 'es') {
                    // the logo should be on the right side to leave some space to barcode
                    const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                    logoBigContainerElements.forEach(logo => {
                        logo.style.top = `${281 * scaleFactor}px`;
                        logo.style.left = `${190 * scaleFactor}px`;
                        logo.style.width = `${223 * scaleFactor}px`; 
                    });
                    const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                    outlineBackContainerElements.forEach(outline => {
                        outline.style.top = `${344 * scaleFactor}px`;
                        outline.style.left = `${242 * scaleFactor}px`; 
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
                    text.style.top = `${372 * scaleFactor}px`; 
                });
            }
            // add de logo & qr code
            if (currentLocale === 'de') {
                // the logo should be on the right side to leave some space to barcode
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${280 * scaleFactor}px`;
                    logo.style.left = `${192 * scaleFactor}px`;
                    logo.style.width = `${224 * scaleFactor}px`; 
                    logo.style.height = `${75.6 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${344 * scaleFactor}px`;
                    outline.style.left = `${251 * scaleFactor}px`; 
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
                    text.style.top = `${372 * scaleFactor}px`; 
                });
            } 
    }      
    },
};