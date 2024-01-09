export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;

        // FRENCH FR-FR
        if (currentLocale === 'fr') { 
            //small logo
            const logoElements = el.querySelectorAll('.logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-fr.png')})`;
            });
            //big logo
            const locallogoElements = el.querySelectorAll('.local-logo');
            locallogoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-fr.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = '180px';
                logo.style.left = '72px';
                logo.style.width = '536px';
                logo.style.height = '149px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '197px';
                logo.style.top = '311px';
            });
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
            logoBigContainerElements.forEach(logo => {
                logo.style.top = '328px';
                logo.style.left = '227px';
                logo.style.width = '254px'; 
                logo.style.height = '74px';
            });
            const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
            outlineBackContainerElements.forEach(outline => {
                outline.style.top = '393px';
                outline.style.left = '281px'; 
                outline.style.fontSize = '12.5px';
            });
            //small climatefresk logo should not appear
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
            //small climatefresk logo should not appear
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
        }

        // DUTCH NL-NL
        if (currentLocale === 'nl') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-en.png')})`;
            });
            //small climatefresk logo should not appear
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
            //small climatefresk logo should not appear
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = '172px';
                logo.style.left = '78px';
                logo.style.width = '498px';
                logo.style.height = '210px'; 
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '228px';
                logo.style.top = '347px';
            });
            //last page
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
        }

        // SPANISH ES-ES
        if (currentLocale === 'es') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-es.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = '175px';
                logo.style.left = '72px';
                logo.style.width = '529px';
                logo.style.height = '200px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '210px';
            });
            //last page
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
        }

        // GERMAN DE-DE
        if (currentLocale === 'de') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-de.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = '175px';
                logo.style.left = '72px';
                logo.style.width = '529px';
                logo.style.height = '177px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '210px';
            });
            //last page
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
        }
        //ENGLISH EN-EN
        if (currentLocale === 'en') { 
            //front page
            const logoFrontContainerElements = el.querySelectorAll('.logo-container-front');
            logoFrontContainerElements.forEach(logo => {
                logo.style.top = '160px';
                logo.style.left = '72px';
                logo.style.width = '529px';
                logo.style.height = '210px'; 
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = '347px';
                logo.style.left = '202px';
                logo.style.fontSize='30px';
            });
            //small climatefresk logo should not appear
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
            //small climatefresk logo should not appear
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
            if (print === 'false') { //for printing version, the elements positions are defined in printDirective.js
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '409px';
                    outline.style.left = '203px';
                    outline.style.fontSize='13px';
                });
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '314px';
                    logo.style.left = '155px';
                    logo.style.width = '268px'; //296
                    logo.style.height = '101px'; //111
                });
            }
        }
        //ALL BUT FRENCH
        if (currentLocale !== 'fr') { 
            const logoElements = el.querySelectorAll('.logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-en.png')})`;
            });
            const urlElements = el.querySelectorAll('.url');
            urlElements.forEach(url => {
                url.textContent = "climatefresk.org";
                url.style.fontSize = '19px';
            });
            const logoContainerElements = el.querySelectorAll('.logo-container');
            logoContainerElements.forEach(logo => {
                logo.style.top = '18px'; 
                logo.style.left = '506px'; 
                logo.style.width = '143px'; 
                logo.style.height = '55px'; 
            });
        }
    },
};