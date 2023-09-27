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
                logo.style.top = '200px';
                logo.style.left = '3415px';
                logo.style.width = '1000px';
                logo.style.height = '285px';
            });
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
            logoBigContainerElements.forEach(logo => {
                logo.style.top = '2150px';
                logo.style.left = '615px';
                logo.style.width = '2000px';
                logo.style.height = '550px';
            });
            const logoFrontContainerElements = el.querySelectorAll('.logo-container-front');
            logoFrontContainerElements.forEach(logo => {
                logo.style.top = '1230px';
                logo.style.left = '450px';
                logo.style.width = '3790px';
                logo.style.height = '1050px';
            });
            const outlineElements = el.querySelectorAll('.outline');
            outlineElements.forEach(outline => {
                outline.textContent = "Vous avez toutes les cartes en main";
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = '2140px';
                logo.style.left = '1300px';
                logo.style.fontSize='170px';
            });
        }
    },
};

// logo.style.top = '2150px';
//                 logo.style.left = '615px';
//                 logo.style.width = '2000px';
//                 logo.style.height = '550px';