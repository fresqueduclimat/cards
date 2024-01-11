export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;
        if (print === 'true') {
            // change top variable to reveal the barcode container
            const barcodeElements = el.querySelectorAll('.barcode-container');
                barcodeElements.forEach(code => {
                    code.style.top = '292px';
                });
            if (currentLocale === 'en') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = '277px';
                    logo.style.left = '198px';
                    logo.style.width = '204px';
                    logo.style.height = '87px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '352px';
                    outline.style.left = '257px';
                 });
            }
            if (currentLocale === 'fr') {
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = '286px';
                    logo.style.left = '200px';
                    logo.style.width = '218px'; 
                    logo.style.height = '58.6px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '342px';
                    outline.style.left = '240px';
                });
                const recycledpaperElements = el.querySelectorAll('#card44-label7');
                recycledpaperElements.forEach(text => {
                    text.style.top = '374px';
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
                    text.style.top = '371px';
                });
            }
                // add en logo & qr code 
                if (currentLocale === 'nl') {
                // the logo should be on the right side to leave some space to barcode
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '277px';
                    logo.style.left = '198px';
                    logo.style.width = '204px';
                    logo.style.height = '87px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '352px';
                    outline.style.left = '257px';
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
                    text.style.top = '372px';
                });
            }
            // add es logo & qr code
            if (currentLocale === 'es') {
                    // the logo should be on the right side to leave some space to barcode
                    const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                    logoBigContainerElements.forEach(logo => {
                        logo.style.top = '281px';
                        logo.style.left = '190px';
                        logo.style.width = '223px'; 
                    });
                    const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                    outlineBackContainerElements.forEach(outline => {
                        outline.style.top = '344px';
                        outline.style.left = '242px'; 
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
                    text.style.top = '372px'; 
                });
            }
            // add de logo & qr code
            if (currentLocale === 'de') {
                // the logo should be on the right side to leave some space to barcode
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '280px';
                    logo.style.left = '192px';
                    logo.style.width = '224px'; 
                    logo.style.height = '75.6px'; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '344px';
                    outline.style.left = '251px'; 
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
                    text.style.top = '372px'; 
                });
            } 
    }      
    },
};