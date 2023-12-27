export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;
        if (currentLocale !== 'fr') { 
            const logoElements = el.querySelectorAll('.logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-en.png')})`;
            });
            const logoContainerElements = el.querySelectorAll('.logo-container');
            logoContainerElements.forEach(logo => {
                logo.style.top = '18px'; 
                logo.style.left = '506px'; 
                logo.style.width = '143px'; 
                logo.style.height = '55px'; 
            });
            if (print === 'false') { //for printing version, the elements positions are defined in printDirective.js
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '304px';
                    logo.style.left = '141px';
                    logo.style.width = '296px';
                    logo.style.height = '111px';
                });
            }
            const logoFrontContainerElements = el.querySelectorAll('.logo-container-front');
            logoFrontContainerElements.forEach(logo => {
                logo.style.top = '160px';
                logo.style.left = '72px';
                logo.style.width = '529px';
                logo.style.height = '210px'; 
            });
            const urlElements = el.querySelectorAll('.url');
            urlElements.forEach(url => {
                url.textContent = "climatefresk.org";
                url.style.fontSize = '19px';
            });
            const outlineElements = el.querySelectorAll('.outline');
            outlineElements.forEach(outline => {
                outline.textContent = "All the cards are in your hands!";
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = '347px';
                logo.style.left = '202px';
                logo.style.fontSize='30px';
            });
            const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
            outlineBackContainerElements.forEach(outline => {
                outline.style.top = '404px';
                outline.style.left = '206px';
                outline.style.fontSize='14px';
            });
        }
    },
};