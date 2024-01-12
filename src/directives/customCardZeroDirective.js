export default {
    beforeMount(el, binding) {
        const scaleFactor = 0.720;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${56 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${277 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${51 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${125 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${72 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${183 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${46 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${207 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${56 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${339 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${28 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labeleightElements = el.querySelectorAll('#card0-label8');
            labeleightElements.forEach(text => {
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelnineElements = el.querySelectorAll('#card0-label9');
            labelnineElements.forEach(text => {
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'pt') {
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${197 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${40 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${245 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${60 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
        }
        if (currentLocale === 'de') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${34.4 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${124 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${47 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${165 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${39.6 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${190 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${52 * scaleFactor}px`; // Modifier la valeur de 'height'
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelsixElements = el.querySelectorAll('#card0-label6');
            labelsixElements.forEach(text => {
                text.style.fontSize = `${9.5 * scaleFactor}px`;
                text.style.height = "28.4px";
                text.style.top = "339px";
            });
            const labeleightElements = el.querySelectorAll('#card0-label8');
            labeleightElements.forEach(text => {
                text.style.fontSize = `${9.5 * scaleFactor}px`;
                text.style.height = "28.4px";
                text.style.top = "339px";
            });
            const labelnineElements = el.querySelectorAll('#card0-label9');
            labelnineElements.forEach(text => {
                text.style.fontSize = `${9.5 * scaleFactor}px`;
            });
            const labelsetoneElements = el.querySelectorAll('.set-one');
            labelsetoneElements.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            });
            const labelsettwoElements = el.querySelectorAll('.set-two');
            labelsettwoElements.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            });
            const labelsetthreeElements = el.querySelectorAll('.set-three');
            labelsetthreeElements.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            });
            const labelsetfourElements = el.querySelectorAll('.set-four');
            labelsetfourElements.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            });
            const labelsetfiveElements = el.querySelectorAll('.set-five');
            labelsetfiveElements.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'fi') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${98 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${34 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${141 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${53 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${204 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${37 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${250 * scaleFactor}px`;    // Modifier la valeur de 'top'
                text.style.height = `${43 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
        }
        if (currentLocale === 'nl') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = `${44 * scaleFactor}px`; 
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${274.3 * scaleFactor}px`;  
                text.style.left = `${418 * scaleFactor}px`;  
                text.style.width = `${119 * scaleFactor}px`;  
                text.style.height = `${60 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${125.5 * scaleFactor}px`; 
                text.style.height = `${52.5 * scaleFactor}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${167 * scaleFactor}px`; 
                text.style.height = `${39 * scaleFactor}px`;
                text.style.width = `${496 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${190 * scaleFactor}px`; 
                text.style.height = `${59 * scaleFactor}px`; 
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${338 * scaleFactor}px`;
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'es') {
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${276.6 * scaleFactor}px`;  
                text.style.left = `${423.5 * scaleFactor}px`;  
            });
        }
        if (currentLocale === 'vi') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = `${34 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${141 * scaleFactor}px`; 
                text.style.height = `${53 * scaleFactor}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${201 * scaleFactor}px`;  
                text.style.height = `${18 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${227 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactor}px`; 
            });
        }
    },
};