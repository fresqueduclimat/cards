export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        const print = process.env.VUE_APP_PRINT;
        console.log(print)

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
            const urlElements = el.querySelectorAll('.url');
            urlElements.forEach(url => {
                url.textContent = "fresqueduclimat.org";
                url.style.fontSize = '17px';
            });
            //front page
            const logofrontContainerElements = el.querySelectorAll('.logo-container-front');
            logofrontContainerElements.forEach(logo => {
                logo.style.top = '180px';
                logo.style.left = '72px';
                logo.style.width = '536px';
                logo.style.height = '149px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '197px';
                logo.style.top = '311px';
                logo.style.fontSize = '25px'
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
                //last page
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '333px';
                    logo.style.left = '123px';
                    logo.style.width = '254px'; 
                    logo.style.height = '74px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '398px';
                    outline.style.left = '181px'; 
                    outline.style.fontSize = '12.5px';
                });
            }
            //small logos on each side of cards
            const logoContainerElements = el.querySelectorAll('.logo-container');
            logoContainerElements.forEach(logo => {
                logo.style.top = '30px'; 
                logo.style.left = '505px'; 
                logo.style.width = '148px'; 
                logo.style.height = '40px'; 
            });
            //small climatefresk logo should not appear on front page
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = '1000px';
            });
            //small climatefresk logo should not appear on front page
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
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '322px';
                    logo.style.left = '134px';
                    logo.style.width = '237px';
                    logo.style.height = '101px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '409px';
                    outline.style.left = '203px';
                });
            }
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
                logo.style.top = '317px';
                logo.style.left = '210px';
                logo.style.fontSize = '25px';
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '327px';
                    logo.style.left = '130px';
                    logo.style.width = '260px'; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '400px';
                    outline.style.left = '193px'; 
                });
            }
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
                logo.style.top = '317px';
                logo.style.left = '210px';
                logo.style.fontSize = '28px';
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
                //last page
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '328px';
                    logo.style.height = '89px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '404px';
                    outline.style.left = '218px'; 
                });
            }
        }
        //when local logos are displayed, we add a small climatefresk logo on front page
        if (currentLocale === 'de' || currentLocale === 'es') { 
            //small climatefresk logo should not appear on the front page
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = '110px';
            });
            //small climatefresk logo should not appear on the front page
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = '71px';
            });
        }
    },
};