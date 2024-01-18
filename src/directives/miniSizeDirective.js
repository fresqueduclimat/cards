export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const mini = process.env.VUE_APP_MINI;
        const currentLocale = binding.instance?.$i18n?.locale;
        console.log(mini);
        if (mini === 'true') {
            const contentElements = el.querySelectorAll('.content');
            contentElements.forEach(content => {
                content.style.left = `${41.4 * scaleFactor}px`; 
                content.style.width = `${526.2 * scaleFactor}px`;
            });
            const titleElements = el.querySelectorAll('.title');
            titleElements.forEach(title => {
                title.style.left = `${47.1 * scaleFactor}px`;   
                title.style.width = `${506 * scaleFactor}px`; 
            });
            const dateElements = el.querySelectorAll('.front-card-label2-position');
            dateElements.forEach(title => {
                title.style.top = `${206 * scaleFactor}px`;   
                title.style.left = `${416.5 * scaleFactor}px`;   
                title.style.width = `${347 * scaleFactor}px`; 
                title.style.height = `${14 * scaleFactor}px`;   
            });
            const numberElements = el.querySelectorAll('.back-set-container');
            numberElements.forEach(content => {
                content.style.top = `${29 * scaleFactor}px`; 
                content.style.left = `${34.2 * scaleFactor}px`;
            });
            const logoElements = el.querySelectorAll('.logo-container');
            logoElements.forEach(content => {
                content.style.top = `${28 * scaleFactor}px`; 
            });
            if (currentLocale === 'fr') {
                const labeloneElements = el.querySelectorAll('#card0-label1');
                labeloneElements.forEach(text => {
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labeltwoElements = el.querySelectorAll('#card0-label2');
                labeltwoElements.forEach(text => {
                    text.style.top = `${287.7 * scaleFactor}px`;    // Modifier la valeur de 'top'
                });
                const labelthreeElements = el.querySelectorAll('#card0-label3');
                labelthreeElements.forEach(text => {
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labelfourElements = el.querySelectorAll('#card0-label4');
                labelfourElements.forEach(text => {
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labelfiveElements = el.querySelectorAll('#card0-label5');
                labelfiveElements.forEach(text => {
                    text.style.width = `${512 * scaleFactor}px`;
                    text.style.height = `${66.6 * scaleFactor}px`;
                });
                const labelsixElements = el.querySelectorAll('#card0-label6');
                labelsixElements.forEach(text => {
                    text.style.top = `${357 * scaleFactor}px`;
                });
                const labelsevenElements = el.querySelectorAll('#card0-label7');
                labelsevenElements.forEach(text => {
                    text.style.top = `${357 * scaleFactor}px`;  // Modifier la valeur de 'top'
                    text.style.height = `${28 * scaleFactor}px`; // Modifier la valeur de 'height'
                    text.style.fontSize = `${13 * scaleFactor}px`;
                });
                const labeleightElements = el.querySelectorAll('#card0-label8');
                labeleightElements.forEach(text => {
                    text.style.top = `${357 * scaleFactor}px`;
                });
                const labelnineElements = el.querySelectorAll('#card0-label9');
                labelnineElements.forEach(text => {
                    text.style.top = `${357 * scaleFactor}px`;
                });
                const iconsElements = el.querySelectorAll('.icons-container');
                iconsElements.forEach(text => {
                    text.style.top = `${260 * scaleFactor}px`;
                    text.style.left = `${44 * scaleFactor}px`;
                    text.style.width = `${518 * scaleFactor}px`;
                });
                const corpusElements = el.querySelectorAll('#card44-label1');
                corpusElements.forEach(text => {
                    text.style.height = `${175 * scaleFactor}px`;
                });
                const addressElements = el.querySelectorAll('#card44-label2');
                addressElements.forEach(text => {
                    text.style.top = `${240 * scaleFactor}px`;
                });
                const addressngoElements = el.querySelectorAll('#card44-label3');
                addressngoElements.forEach(text => {
                    text.style.top = `${240 * scaleFactor}px`;
                });
                const barcodeElements = el.querySelectorAll('.barcode-container');
                barcodeElements.forEach(text => {
                    text.style.top = `${311 * scaleFactor}px`;
                });
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = `${311 * scaleFactor}px`;
                    logo.style.left = `${200 * scaleFactor}px`;
                    logo.style.width = `${218 * scaleFactor}px`; 
                    logo.style.height = `${58.6 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${363.7 * scaleFactor}px`;
                    outline.style.left = `${240 * scaleFactor}px`;
                });
                const recycledpaperElements = el.querySelectorAll('#card44-label7');
                recycledpaperElements.forEach(text => {
                    text.style.top = `${391 * scaleFactor}px`;
                    text.style.width = `${543 * scaleFactor}px`;
                });
                const qrElements = el.querySelectorAll('.qr-code-siteweb-container');
                qrElements.forEach(text => {
                    text.style.top = `${232 * scaleFactor}px`;
                    text.style.left = `${436 * scaleFactor}px`;
                });
                const scanElements = el.querySelectorAll('#card44-label4');
                scanElements.forEach(text => {
                    text.style.top = `${351 * scaleFactor}px`;
                });
            }
            if (currentLocale === 'en') {
                const labeloneElements = el.querySelectorAll('#card0-label1');
                labeloneElements.forEach(text => {
                    text.style.top = `${84 * scaleFactor}px`;    // Modifier la valeur de 'top'
                    text.style.height = `${56 * scaleFactor}px`; // Modifier la valeur de 'height'
                    text.style.fontSize = `${13 * scaleFactor}px`;
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labeltwoElements = el.querySelectorAll('#card0-label2');
                labeltwoElements.forEach(text => {
                    text.style.top = `${292.7 * scaleFactor}px`;    // Modifier la valeur de 'top'
                });
                const labelthreeElements = el.querySelectorAll('#card0-label3');
                labelthreeElements.forEach(text => {
                    text.style.top = `${125 * scaleFactor}px`;    // Modifier la valeur de 'top'
                    text.style.height = `${72 * scaleFactor}px`; // Modifier la valeur de 'height'
                    text.style.fontSize = `${13 * scaleFactor}px`;
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labelfourElements = el.querySelectorAll('#card0-label4');
                labelfourElements.forEach(text => {
                    text.style.top = `${183 * scaleFactor}px`;    // Modifier la valeur de 'top'
                    text.style.height = `${46 * scaleFactor}px`; // Modifier la valeur de 'height'
                    text.style.fontSize = `${13 * scaleFactor}px`;
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labelfiveElements = el.querySelectorAll('#card0-label5');
                labelfiveElements.forEach(text => {
                    text.style.top = `${207 * scaleFactor}px`;    // Modifier la valeur de 'top'
                    text.style.height = `${56 * scaleFactor}px`; // Modifier la valeur de 'height'
                    text.style.fontSize = `${13 * scaleFactor}px`;
                    text.style.width = `${512 * scaleFactor}px`;
                });
                const labelsixElements = el.querySelectorAll('#card0-label6');
                labelsixElements.forEach(text => {
                    text.style.top = `${360 * scaleFactor}px`;
                });
                const labelsevenElements = el.querySelectorAll('#card0-label7');
                labelsevenElements.forEach(text => {
                    text.style.top = `${354 * scaleFactor}px`;  // Modifier la valeur de 'top'
                    text.style.height = `${28 * scaleFactor}px`; // Modifier la valeur de 'height'
                    text.style.fontSize = `${13 * scaleFactor}px`;
                });
                const labeleightElements = el.querySelectorAll('#card0-label8');
                labeleightElements.forEach(text => {
                    text.style.top = `${357 * scaleFactor}px`;
                });
                const labelnineElements = el.querySelectorAll('#card0-label9');
                labelnineElements.forEach(text => {
                    text.style.top = `${357 * scaleFactor}px`;
                });
                const iconsElements = el.querySelectorAll('.icons-container');
                iconsElements.forEach(text => {
                    text.style.top = `${260 * scaleFactor}px`;
                    text.style.left = `${44 * scaleFactor}px`;
                    text.style.width = `${518 * scaleFactor}px`;
                });
                const corpusElements = el.querySelectorAll('#card44-label1');
                corpusElements.forEach(text => {
                    text.style.top = `${96 * scaleFactor}px`;
                    text.style.height = `${175 * scaleFactor}px`;
                });
                const addressElements = el.querySelectorAll('#card44-label2');
                addressElements.forEach(text => {
                    text.style.top = `${240 * scaleFactor}px`;
                });
                const addressngoElements = el.querySelectorAll('#card44-label3');
                addressngoElements.forEach(text => {
                    text.style.top = `${240 * scaleFactor}px`;
                });
                const barcodeElements = el.querySelectorAll('.barcode-container');
                barcodeElements.forEach(text => {
                    text.style.top = `${311 * scaleFactor}px`;
                });
                const logocontainerElements = el.querySelectorAll('.logo-container-big');
                logocontainerElements.forEach(logo => {
                    logo.style.top = `${286 * scaleFactor}px`;
                    logo.style.left = `${199 * scaleFactor}px`;
                    logo.style.width = `${218 * scaleFactor}px`; 
                    logo.style.height = `${83 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${363.7 * scaleFactor}px`;
                    outline.style.left = `${260 * scaleFactor}px`;
                    outline.style.width = `${185 * scaleFactor}px`;
                });
                const recycledpaperElements = el.querySelectorAll('#card44-label7');
                recycledpaperElements.forEach(text => {
                    text.style.top = `${391 * scaleFactor}px`;
                    text.style.width = `${543 * scaleFactor}px`;
                });
                const qrElements = el.querySelectorAll('.qr-code-siteweb-container');
                qrElements.forEach(text => {
                    text.style.top = `${232 * scaleFactor}px`;
                    text.style.left = `${436 * scaleFactor}px`;
                });
                const scanElements = el.querySelectorAll('#card44-label4');
                scanElements.forEach(text => {
                    text.style.top = `${351 * scaleFactor}px`;
                });
            }
        }
    }
};