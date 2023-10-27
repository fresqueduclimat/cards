export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = '98px';    // Modifier la valeur de 'top'
                text.style.height = '34px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = '322px';    // Modifier la valeur de 'top'
                text.style.height = '59px'; // Modifier la valeur de 'height'
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '138px';    // Modifier la valeur de 'top'
                text.style.height = '55px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '184px';    // Modifier la valeur de 'top'
                text.style.height = '35px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '210px';    // Modifier la valeur de 'top'
                text.style.height = '60px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = '394px';    // Modifier la valeur de 'top'
                text.style.height = '32px'; // Modifier la valeur de 'height'
                text.style.fontSize = '14px';
            });
            const labeleightElements = el.querySelectorAll('#card0-label8');
            labeleightElements.forEach(text => {
                text.style.fontSize = '14px';
            });
            const labelnineElements = el.querySelectorAll('#card0-label9');
            labelnineElements.forEach(text => {
                text.style.fontSize = '14px';
            });
        }
        if (currentLocale === 'pt') {
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '197px';    // Modifier la valeur de 'top'
                text.style.height = '40px'; // Modifier la valeur de 'height'
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '245px';    // Modifier la valeur de 'top'
                text.style.height = '60px'; // Modifier la valeur de 'height'
            });
        }
        if (currentLocale === 'de') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = '98px';    // Modifier la valeur de 'top'
                text.style.height = '40px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '140px';    // Modifier la valeur de 'top'
                text.style.height = '55px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '204px';    // Modifier la valeur de 'top'
                text.style.height = '46px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '253px';    // Modifier la valeur de 'top'
                text.style.height = '60px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
        }
        if (currentLocale === 'fi') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = '98px';    // Modifier la valeur de 'top'
                text.style.height = '34px'; // Modifier la valeur de 'height'
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '141px';    // Modifier la valeur de 'top'
                text.style.height = '53px'; // Modifier la valeur de 'height'
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '204px';    // Modifier la valeur de 'top'
                text.style.height = '37px'; // Modifier la valeur de 'height'
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '250px';    // Modifier la valeur de 'top'
                text.style.height = '43px'; // Modifier la valeur de 'height'
            });
        }
    },
};