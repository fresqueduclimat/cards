export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = '84px';    // Modifier la valeur de 'top'
                text.style.height = '56px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = '277px';    // Modifier la valeur de 'top'
                text.style.height = '51px'; // Modifier la valeur de 'height'
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '125px';    // Modifier la valeur de 'top'
                text.style.height = '72px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '183px';    // Modifier la valeur de 'top'
                text.style.height = '46px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '207px';    // Modifier la valeur de 'top'
                text.style.height = '56px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = '339px';    // Modifier la valeur de 'top'
                text.style.height = '28px'; // Modifier la valeur de 'height'
                text.style.fontSize = '13px';
            });
            const labeleightElements = el.querySelectorAll('#card0-label8');
            labeleightElements.forEach(text => {
                text.style.fontSize = '13px';
            });
            const labelnineElements = el.querySelectorAll('#card0-label9');
            labelnineElements.forEach(text => {
                text.style.fontSize = '13px';
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
                text.style.top = '84px';    // Modifier la valeur de 'top'
                text.style.height = '34.4px'; // Modifier la valeur de 'height'
                text.style.fontSize = '11px';
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '124px';    // Modifier la valeur de 'top'
                text.style.height = '47px'; // Modifier la valeur de 'height'
                text.style.fontSize = '11px';
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '165px';    // Modifier la valeur de 'top'
                text.style.height = '39.6px'; // Modifier la valeur de 'height'
                text.style.fontSize = '11px';
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '190px';    // Modifier la valeur de 'top'
                text.style.height = '52px'; // Modifier la valeur de 'height'
                text.style.fontSize = '11px';
            });
            const labelsixElements = el.querySelectorAll('#card0-label6');
            labelsixElements.forEach(text => {
                text.style.fontSize = '9.5px';
                text.style.height = "28.4px";
                text.style.top = "339px";
            });
            const labeleightElements = el.querySelectorAll('#card0-label8');
            labeleightElements.forEach(text => {
                text.style.fontSize = '9.5px';
                text.style.height = "28.4px";
                text.style.top = "339px";
            });
            const labelnineElements = el.querySelectorAll('#card0-label9');
            labelnineElements.forEach(text => {
                text.style.fontSize = '9.5px';
            });
            const labelsetoneElements = el.querySelectorAll('.set-one');
            labelsetoneElements.forEach(text => {
                text.style.fontSize = '15.5px';
            });
            const labelsettwoElements = el.querySelectorAll('.set-two');
            labelsettwoElements.forEach(text => {
                text.style.fontSize = '15.5px';
            });
            const labelsetthreeElements = el.querySelectorAll('.set-three');
            labelsetthreeElements.forEach(text => {
                text.style.fontSize = '15.5px';
            });
            const labelsetfourElements = el.querySelectorAll('.set-four');
            labelsetfourElements.forEach(text => {
                text.style.fontSize = '15.5px';
            });
            const labelsetfiveElements = el.querySelectorAll('.set-five');
            labelsetfiveElements.forEach(text => {
                text.style.fontSize = '15.5px';
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
        if (currentLocale === 'nl') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = '44px'; 
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = '274.3px';  
                text.style.left = '418px';  
                text.style.width = '119px';  
                text.style.height = '60px';  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '125.5px'; 
                text.style.height = '52.5px'; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '167px'; 
                text.style.height = '39px';
                text.style.width = '496px';
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '190px'; 
                text.style.height = '59px'; 
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = '338px';
                text.style.fontSize = '13px';
            });
        }
        if (currentLocale === 'es') {
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = '276.6px';  
                text.style.left = '423.5px';  
            });
        }
        if (currentLocale === 'vi') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = '34px';  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = '141px'; 
                text.style.height = '53px'; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = '201px';  
                text.style.height = '18px'; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = '227px';   
                text.style.height = '53px'; 
            });
        }
    },
};