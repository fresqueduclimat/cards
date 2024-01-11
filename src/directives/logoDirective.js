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
                url.style.fontSize = '14px';
            });
            //front page
            const logofrontContainerElements = el.querySelectorAll('.logo-container-front');
            logofrontContainerElements.forEach(logo => {
                logo.style.top = '155px';
                logo.style.left = '62px';
                logo.style.width = '461px';
                logo.style.height = '128px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '170px';
                logo.style.top = '268px';
                logo.style.fontSize = '21.5px'
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
                //last page
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '286px';
                    logo.style.left = '106px';
                    logo.style.width = '219px'; 
                    logo.style.height = '64px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '343px';
                    outline.style.left = '156px'; 
                    outline.style.fontSize = '11px';
                });
            }
            //small logos on each side of cards
            const logoContainerElements = el.querySelectorAll('.logo-container');
            logoContainerElements.forEach(logo => {
                logo.style.top = '25.8px'; 
                logo.style.left = '434px'; 
                logo.style.width = '127px'; 
                logo.style.height = '34.4px'; 
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
                logo.style.top = '148px';
                logo.style.left = '67px';
                logo.style.width = '428px';
                logo.style.height = '180px'; 
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = '196px';
                logo.style.top = '300px';
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '277px';
                    logo.style.left = '115px';
                    logo.style.width = '204px';
                    logo.style.height = '87px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '352px';
                    outline.style.left = '175px';
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
                logo.style.top = '151px';
                logo.style.left = '62px';
                logo.style.width = '455px';
                logo.style.height = '172px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = '273px';
                logo.style.left = '181px';
                logo.style.fontSize = '21.5px';
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '282px';
                    logo.style.left = '111px';
                    logo.style.width = '224px'; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '344px';
                    outline.style.left = '166px'; 
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
                logo.style.top = '151px';
                logo.style.left = '62px';
                logo.style.width = '455px';
                logo.style.height = '152px';
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = '273px';
                logo.style.left = '181px';
                logo.style.fontSize = '24px';
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
                //last page
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = '282px';
                    logo.style.height = '77px';
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = '348px';
                    outline.style.left = '188px'; 
                });
            }
        }
        //when local logos are displayed, we add a small climatefresk logo on front page
        if (currentLocale === 'de' || currentLocale === 'es') { 
            //small climatefresk logo should not appear on the front page
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = '95px';
            });
            //small climatefresk logo should not appear on the front page
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = '61px';
            });
        }
    },
};