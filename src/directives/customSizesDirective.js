export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'fr') {
            const c9text = el.querySelectorAll('#card9-back-text0');
            c9text.forEach(text => {
                text.style.fontSize = '26.6px';
            });

            const c11text = el.querySelectorAll('#card11-back-text0');
            c11text.forEach(text => {
                text.style.fontSize = '26.6px';
            });

            const c15text = el.querySelectorAll('#card15-back-text0');
            c15text.forEach(text => {
                text.style.fontSize = '25px';
            });

            const c20text = el.querySelectorAll('#card20-back-text0');
            c20text.forEach(text => {
                text.style.fontSize = '25.8px';
            });

            const c27text = el.querySelectorAll('#card27-back-text0');
            c27text.forEach(text => {
                text.style.fontSize = '25.8px';
            });

            const c29text = el.querySelectorAll('#card29-back-text0');
            c29text.forEach(text => {
                text.style.fontSize = '31.8px';
            });

            const c30text = el.querySelectorAll('#card30-back-text0');
            c30text.forEach(text => {
                text.style.fontSize = '29.2px';
            });

            const c34text = el.querySelectorAll('#card34-back-text0');
            c34text.forEach(text => {
                text.style.fontSize = '29.2px';
            });

            const c35text = el.querySelectorAll('#card35-back-text0');
            c35text.forEach(text => {
                text.style.fontSize = '30.9px';
            });

            const c37text = el.querySelectorAll('#card37-back-text0');
            c37text.forEach(text => {
                text.style.fontSize = '30px';
            });

            const c39text = el.querySelectorAll('#card39-back-text0');
            c39text.forEach(text => {
                text.style.fontSize = '30px';
            });
        }
        if (currentLocale === 'en') {
            const c26text = el.querySelectorAll('#card26-back-text0');
            c26text.forEach(text => {
                text.style.fontSize = '28.4px';
            });
            const c41text = el.querySelectorAll('#card41-back-text0');
            c41text.forEach(text => {
                text.style.fontSize = '24px';
            });
        }
    },
};