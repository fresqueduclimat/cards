export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
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
                url.style.fontSize = `${14 * scaleFactor}px`;
            });
            //front page
            const logofrontContainerElements = el.querySelectorAll('.logo-container-front');
            logofrontContainerElements.forEach(logo => {
                logo.style.top = `${155 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${461 * scaleFactor}px`;
                logo.style.height = `${128 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = `${170 * scaleFactor}px`;
                logo.style.top = `${268 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
                //last page
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${286 * scaleFactor}px`;
                    logo.style.left = `${106 * scaleFactor}px`;
                    logo.style.width = `${213 * scaleFactor}px`; 
                    logo.style.height = `${64 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${343 * scaleFactor}px`;
                    outline.style.left = `${156 * scaleFactor}px`; 
                    outline.style.fontSize = `${11 * scaleFactor}px`;
                });
            }
            //small logos on each side of cards
            const logoContainerElements = el.querySelectorAll('.logo-container');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${33 * scaleFactor}px`; 
                logo.style.left = `${434 * scaleFactor}px`; 
                logo.style.width = `${125.6 * scaleFactor}px`; 
                logo.style.height = `${34.4 * scaleFactor}px`; 
            });
            //small climatefresk logo should not appear on front page
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = `${1000 * scaleFactor}px`;
            });
            //small climatefresk logo should not appear on front page
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = `${1000 * scaleFactor}px`;
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
                logo.style.top = `${1000 * scaleFactor}px`;
            });
            //small climatefresk logo should not appear
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = `${1000 * scaleFactor}px`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${148 * scaleFactor}px`;
                logo.style.left = `${67 * scaleFactor}px`;
                logo.style.width = `${428 * scaleFactor}px`;
                logo.style.height = `${180 * scaleFactor}px`; 
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.left = `${196 * scaleFactor}px`;
                logo.style.top = `${300 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${277 * scaleFactor}px`;
                    logo.style.left = `${115 * scaleFactor}px`;
                    logo.style.width = `${204 * scaleFactor}px`;
                    logo.style.height = `${87 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${352 * scaleFactor}px`;
                    outline.style.left = `${175 * scaleFactor}px`;
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
                logo.style.top = `${151 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${455 * scaleFactor}px`;
                logo.style.height = `${172 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${273 * scaleFactor}px`;
                logo.style.left = `${181 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${282 * scaleFactor}px`;
                    logo.style.left = `${111 * scaleFactor}px`;
                    logo.style.width = `${224 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${344 * scaleFactor}px`;
                    outline.style.left = `${166 * scaleFactor}px`; 
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
                logo.style.top = `${151 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${455 * scaleFactor}px`;
                logo.style.height = `${152 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${273 * scaleFactor}px`;
                logo.style.left = `${181 * scaleFactor}px`;
                logo.style.fontSize = `${24 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
                //last page
                const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${282 * scaleFactor}px`;
                    logo.style.height = `${77 * scaleFactor}px`;
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${348 * scaleFactor}px`;
                    outline.style.left = `${188 * scaleFactor}px`; 
                });
            }
        }

        // PT-PT
        if (currentLocale === 'pt' || currentLocale === 'br') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-pt.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${145.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${455 * scaleFactor}px`;
                logo.style.height = `${144 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${273 * scaleFactor}px`;
                logo.style.left = `${181 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${282 * scaleFactor}px`;
                    logo.style.left = `${111 * scaleFactor}px`;
                    logo.style.width = `${224 * scaleFactor}px`; 
                    logo.style.height = `${71 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${344 * scaleFactor}px`;
                    outline.style.left = `${170 * scaleFactor}px`; 
                });
            }
        }
        // FI-FI
        if (currentLocale === 'fi') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-fi.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${167.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${470 * scaleFactor}px`;
                logo.style.height = `${96 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${235 * scaleFactor}px`;
                logo.style.left = `${141.7 * scaleFactor}px`;
                logo.style.width = `${370 * scaleFactor}px`;
                logo.style.fontSize = `${19 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${292 * scaleFactor}px`;
                    logo.style.left = `${111 * scaleFactor}px`;
                    logo.style.width = `${242 * scaleFactor}px`; 
                    logo.style.height = `${49 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${326 * scaleFactor}px`;
                    outline.style.left = `${150 * scaleFactor}px`; 
                });
            }
        }
        // TR-TR
        if (currentLocale === 'tr') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-tr.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${145.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${422 * scaleFactor}px`;
                logo.style.height = `${144 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${256 * scaleFactor}px`;
                logo.style.left = `${165 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${282 * scaleFactor}px`;
                    logo.style.left = `${121 * scaleFactor}px`;
                    logo.style.width = `${209 * scaleFactor}px`; 
                    logo.style.height = `${71 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${337 * scaleFactor}px`;
                    outline.style.left = `${173 * scaleFactor}px`; 
                });
            }
        }
        // ZH-TPE
        if (currentLocale === 'tpe') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-ch.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${158.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${422 * scaleFactor}px`;
                logo.style.height = `${104 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${256 * scaleFactor}px`;
                logo.style.left = `${165 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${282 * scaleFactor}px`;
                    logo.style.left = `${121 * scaleFactor}px`;
                    logo.style.width = `${209 * scaleFactor}px`; 
                    logo.style.height = `${50 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${337 * scaleFactor}px`;
                    outline.style.left = `${173 * scaleFactor}px`; 
                });
            }
        }
        // HU-HU
        if (currentLocale === 'hu') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-hu.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${146.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${570 * scaleFactor}px`;
                logo.style.height = `${196 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${292 * scaleFactor}px`;
                logo.style.left = `${182 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${275 * scaleFactor}px`;
                    logo.style.left = `${133 * scaleFactor}px`;
                    logo.style.width = `${230 * scaleFactor}px`; 
                    logo.style.height = `${87 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${337 * scaleFactor}px`;
                    outline.style.left = `${173 * scaleFactor}px`; 
                });
            }
        }
        // PL-PL
        if (currentLocale === 'pl') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-pl.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${146.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${470 * scaleFactor}px`;
                logo.style.height = `${141 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${252 * scaleFactor}px`;
                logo.style.left = `${161 * scaleFactor}px`;
                logo.style.fontSize = `${18 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${283 * scaleFactor}px`;
                    logo.style.left = `${124 * scaleFactor}px`;
                    logo.style.width = `${230 * scaleFactor}px`; 
                    logo.style.height = `${69 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${337 * scaleFactor}px`;
                    outline.style.left = `${173 * scaleFactor}px`; 
                });
            }
        }
        // SV-SE
        if (currentLocale === 'sv') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-sv.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${145.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${455 * scaleFactor}px`;
                logo.style.height = `${144 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.top = `${273 * scaleFactor}px`;
                logo.style.left = `${189 * scaleFactor}px`;
                logo.style.width = `${300 * scaleFactor}px`;
                logo.style.fontSize = `${21.5 * scaleFactor}px`;
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${282 * scaleFactor}px`;
                    logo.style.left = `${111 * scaleFactor}px`;
                    logo.style.width = `${224 * scaleFactor}px`; 
                    logo.style.height = `${71 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.top = `${344 * scaleFactor}px`;
                    outline.style.left = `${170 * scaleFactor}px`; 
                });
            }
        }
        // AR-AR
        if (currentLocale === 'ar') { 
            const logoElements = el.querySelectorAll('.local-logo');
            logoElements.forEach(logo => {
                logo.style.backgroundImage = `url(${require('@/assets/logo-ar.png')})`;
            });
            //front page
            const logoContainerElements = el.querySelectorAll('.logo-container-front');
            logoContainerElements.forEach(logo => {
                logo.style.top = `${164.6 * scaleFactor}px`;
                logo.style.left = `${62 * scaleFactor}px`;
                logo.style.width = `${474 * scaleFactor}px`;
                logo.style.height = `${144 * scaleFactor}px`;
            });
            const outlineContainerElements = el.querySelectorAll('.outline-container');
            outlineContainerElements.forEach(logo => {
                logo.style.display = 'none';
            });
            if (print === 'false') { //if print is true, the position is defined in the logoDirective
            //last page
            const logoBigContainerElements = el.querySelectorAll('.logo-container-big');
                logoBigContainerElements.forEach(logo => {
                    logo.style.top = `${293 * scaleFactor}px`;
                    logo.style.left = `${111 * scaleFactor}px`;
                    logo.style.width = `${224 * scaleFactor}px`; 
                    logo.style.height = `${71 * scaleFactor}px`; 
                });
                const outlineBackContainerElements = el.querySelectorAll('.outline-container-back');
                outlineBackContainerElements.forEach(outline => {
                    outline.style.display = 'none';
                });
            }
        }
        //when local logos are displayed, we add a small climatefresk logo on front page
        if (currentLocale === 'de' || 
            currentLocale === 'es' ||
            currentLocale === 'fi' || 
            currentLocale === 'tr' || 
            currentLocale === 'tpe' || 
            currentLocale === 'hu' || 
            currentLocale === 'pl' || 
            currentLocale === 'br' || 
            currentLocale === 'sv' || 
            currentLocale === 'ar' || 
            currentLocale === 'pt') { 
            //small climatefresk logo should not appear on the front page
            const logoSmallContainerElements = el.querySelectorAll('.logo-container-small');
            logoSmallContainerElements.forEach(logo => {
                logo.style.top = `${95 * scaleFactor}px`;
            });
            //small climatefresk logo should not appear on the front page
            const logofrontSmallContainerElements = el.querySelectorAll('.logo-container-front-small');
            logofrontSmallContainerElements.forEach(logo => {
                logo.style.top = `${61 * scaleFactor}px`;
            });
        }
    },
};