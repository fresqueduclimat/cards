export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const mini = process.env.VUE_APP_MINI;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en' && mini === 'false') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactor}px`;     
                text.style.height = `${56 * scaleFactor}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${277 * scaleFactor}px`;     
                text.style.height = `${51 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${125 * scaleFactor}px`;     
                text.style.height = `${72 * scaleFactor}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${183 * scaleFactor}px`;     
                text.style.height = `${46 * scaleFactor}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${207 * scaleFactor}px`;     
                text.style.height = `${56 * scaleFactor}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${339 * scaleFactor}px`;     
                text.style.height = `${28 * scaleFactor}px`;  
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
        if (currentLocale === 'pt' || currentLocale === 'br') {
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${197 * scaleFactor}px`;     
                text.style.height = `${40 * scaleFactor}px`;  
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${245 * scaleFactor}px`;     
                text.style.height = `${60 * scaleFactor}px`;  
            });
        }
        if (currentLocale === 'br') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${118.2 * scaleFactor}px`;     
                text.style.height = `${64.4 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${182 * scaleFactor}px`;    
                text.style.width = `${484 * scaleFactor}px`;  
                text.style.height = `${40 * scaleFactor}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${200 * scaleFactor}px`;  
                text.style.height = `${52 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'de') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactor}px`;     
                text.style.height = `${34.4 * scaleFactor}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${124 * scaleFactor}px`;     
                text.style.height = `${47 * scaleFactor}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${165 * scaleFactor}px`;     
                text.style.height = `${39.6 * scaleFactor}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${190 * scaleFactor}px`;     
                text.style.height = `${52 * scaleFactor}px`;  
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
                text.style.top = `${98 * scaleFactor}px`;     
                text.style.height = `${34 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${141 * scaleFactor}px`;     
                text.style.height = `${53 * scaleFactor}px`;  
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${204 * scaleFactor}px`;     
                text.style.height = `${37 * scaleFactor}px`;  
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${250 * scaleFactor}px`;     
                text.style.height = `${43 * scaleFactor}px`;  
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
                text.style.top = `${273.6 * scaleFactor}px`;  
                text.style.left = `${421.5 * scaleFactor}px`;  
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
        if (currentLocale === 'id') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = `${34 * scaleFactor}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${274.7 * scaleFactor}px`;  
                text.style.left = `${416.5 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${120.2 * scaleFactor}px`; 
                text.style.height = `${53 * scaleFactor}px`; 
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170.4 * scaleFactor}px`;  
                text.style.height = `${30 * scaleFactor}px`; 
                text.style.width = `${484 * scaleFactor}px`; 
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${203.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactor}px`; 
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'pt') {
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${120.2 * scaleFactor}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${158.4 * scaleFactor}px`;  
                text.style.width = `${484 * scaleFactor}px`; 
                text.style.height = `${37 * scaleFactor}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${198.5 * scaleFactor}px`;   
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'fi') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${85.3 * scaleFactor}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${276.7 * scaleFactor}px`;  
                text.style.left = `${416.5 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${118.2 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${166.4 * scaleFactor}px`;  
                text.style.width = `${484 * scaleFactor}px`; 
                text.style.height = `${37 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${198.5 * scaleFactor}px`;   
                text.style.height = `${67.6 * scaleFactor}px`;   
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelsixElements = el.querySelectorAll('#card0-label6');
            labelsixElements.forEach(text => {
                text.style.top = `${337 * scaleFactor}px`;    
                text.style.height = `${28 * scaleFactor}px`;
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${337 * scaleFactor}px`;    
                text.style.height = `${28 * scaleFactor}px`;
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const labeleightElements = el.querySelectorAll('#card0-label8');
            labeleightElements.forEach(text => {
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const labelnineElements = el.querySelectorAll('#card0-label9');
            labelnineElements.forEach(text => {
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'tr') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${82.3 * scaleFactor}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${275.7 * scaleFactor}px`;  
                text.style.left = `${416.5 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${116.2 * scaleFactor}px`; 
                text.style.height = `${60 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${166.4 * scaleFactor}px`;  
                text.style.width = `${484 * scaleFactor}px`; 
                text.style.height = `${40 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${198.5 * scaleFactor}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${343 * scaleFactor}px`;    
                text.style.height = `${19 * scaleFactor}px`;
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
        if (currentLocale === 'pl') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.left = `${416.5 * scaleFactor}px`; 
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${120.2 * scaleFactor}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${158 * scaleFactor}px`; 
                text.style.height = `${40 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'hu') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${270.7 * scaleFactor}px`;  
                text.style.height = `${73 * scaleFactor}px`; 
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${121.2 * scaleFactor}px`; 
                text.style.height = `${63 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${168.4 * scaleFactor}px`; 
                text.style.left = `${414.4 * scaleFactor}px`;  
                text.style.height = `${50 * scaleFactor}px`; 
                text.style.width = `${484 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${205.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'sv') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${269.2 * scaleFactor}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${119.2 * scaleFactor}px`; 
                text.style.height = `${53 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170.4 * scaleFactor}px`;   
                text.style.height = `${50 * scaleFactor}px`; 
                text.style.width = `${484 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${205.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactor}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
    },
};