export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'fr') {
            const logoElements = el.querySelectorAll('.logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-fr.png')})`;
            });
            const logoContainerElements = el.querySelectorAll('.logo-container');
            logoContainerElements.forEach(logo => {
                logo.style.top = '30px';
                logo.style.left = '505px';
                logo.style.width = '148px';
                logo.style.height = '40px';
            });
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
            logoBigContainerElements.forEach(logo => {
                logo.style.top = '329px';
                logo.style.left = '152px';
                logo.style.width = '296px';
                logo.style.height = '82px';
            });
            const logoFrontContainerElements = el.querySelectorAll('.logo-container-front');
            logoFrontContainerElements.forEach(logo => {
                logo.style.top = '187px';
                logo.style.left = '96px';
                logo.style.width = '519px';
                logo.style.height = '149px'; 
            });
            const urlElements = el.querySelectorAll('.url');
            urlElements.forEach(url => {
                url.textContent = "fresqueduclimat.org";
                url.style.fontSize = '17px';
            });
            const outlineElements = el.querySelectorAll('.outline');
            outlineElements.forEach(outline => {
                outline.textContent = "Vous avez toutes les cartes en main";
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = '317px';
                logo.style.left = '192px';
                logo.style.fontSize='25px';
            });
            const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
            outlineBackContainerElements.forEach(outline => {
                outline.style.top = '400px';
                outline.style.left = '209px';
                outline.style.fontSize='14px';
            });
        }
    },
};