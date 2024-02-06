export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'fr') {
            const c9text = el.querySelectorAll('#card9-back-text0');
            c9text.forEach(text => {
                text.style.fontSize = `${26.6 * scaleFactor}px`;
            });

            const c11text = el.querySelectorAll('#card11-back-text0');
            c11text.forEach(text => {
                text.style.fontSize = `${26.6 * scaleFactor}px`;
            });

            const c15text = el.querySelectorAll('#card15-back-text0');
            c15text.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });

            const c20text = el.querySelectorAll('#card20-back-text0');
            c20text.forEach(text => {
                text.style.fontSize = `${25.8 * scaleFactor}px`;
            });

            const c27text = el.querySelectorAll('#card27-back-text0');
            c27text.forEach(text => {
                text.style.fontSize = `${25.8 * scaleFactor}px`;
            });

            const c29text = el.querySelectorAll('#card29-back-text0');
            c29text.forEach(text => {
                text.style.fontSize = `${31.8 * scaleFactor}px`;
            });

            const c30text = el.querySelectorAll('#card30-back-text0');
            c30text.forEach(text => {
                text.style.fontSize = `${29.2 * scaleFactor}px`;
            });

            const c34text = el.querySelectorAll('#card34-back-text0');
            c34text.forEach(text => {
                text.style.fontSize = `${29.2 * scaleFactor}px`;
            });

            const c35text = el.querySelectorAll('#card35-back-text0');
            c35text.forEach(text => {
                text.style.fontSize = `${30.9 * scaleFactor}px`;
            });

            const c37text = el.querySelectorAll('#card37-back-text0');
            c37text.forEach(text => {
                text.style.fontSize = `${30 * scaleFactor}px`;
            });

            const c39text = el.querySelectorAll('#card39-back-text0');
            c39text.forEach(text => {
                text.style.fontSize = `${30 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'en') {
            const c26text = el.querySelectorAll('#card26-back-text0');
            c26text.forEach(text => {
                text.style.fontSize = `${28.4 * scaleFactor}px`;
            });
            const c41text = el.querySelectorAll('#card41-back-text0');
            c41text.forEach(text => {
                text.style.fontSize = `${24 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'fa') {
            const c11text1 = el.querySelectorAll('#card11-fixed-text1');
            c11text1.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c11text2 = el.querySelectorAll('#card11-fixed-text2');
            c11text2.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c11text3 = el.querySelectorAll('#card11-fixed-text3');
            c11text3.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c11text4 = el.querySelectorAll('#card11-fixed-text4');
            c11text4.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c19text2 = el.querySelectorAll('#card19-text2');
            c19text2.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });
            const c19text3 = el.querySelectorAll('#card19-text3');
            c19text3.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });
            const c22text1 = el.querySelectorAll('#card22-fixed-text1');
            c22text1.forEach(text => {
                text.style.fontSize = `${16 * scaleFactor}px`;
            });
            const c22text2 = el.querySelectorAll('#card22-fixed-text2');
            c22text2.forEach(text => {
                text.style.fontSize = `${16 * scaleFactor}px`;
            });
            const c22text3 = el.querySelectorAll('#card22-fixed-text3');
            c22text3.forEach(text => {
                text.style.fontSize = `${16 * scaleFactor}px`;
            });
            const c21text1 = el.querySelectorAll('#card21-text6');
            c21text1.forEach(text => {
                text.style.fontSize = `${16.5 * scaleFactor}px`;
            });
            const c21text2 = el.querySelectorAll('#card21-text7');
            c21text2.forEach(text => {
                text.style.fontSize = `${16.5 * scaleFactor}px`;
            });
            const c21text3 = el.querySelectorAll('#card21-text8');
            c21text3.forEach(text => {
                text.style.fontSize = `${16.5 * scaleFactor}px`;
            }); 
        }
        if (currentLocale === 'us') {
            const c21text7 = el.querySelectorAll('#card21-text7');
            c21text7.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            }); 
        }
    },
};