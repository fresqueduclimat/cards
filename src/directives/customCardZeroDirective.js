export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        // const scaleFactorHeight = 1.029;
        // const scaleFactorWidth = 0.974;
        const scaleFactorHeight = 1.000;
        const scaleFactorWidth = 1.000;
        const mini = process.env.VUE_APP_MINI;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'en' && mini === 'false') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactorHeight}px`;     
                text.style.height = `${56 * scaleFactorHeight}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${277 * scaleFactorHeight}px`;     
                text.style.height = `${51 * scaleFactorHeight}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${125 * scaleFactorHeight}px`;     
                text.style.height = `${72 * scaleFactorHeight}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${183 * scaleFactorHeight}px`;     
                text.style.height = `${46 * scaleFactorHeight}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${207 * scaleFactorHeight}px`;     
                text.style.height = `${56 * scaleFactorHeight}px`;  
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${339 * scaleFactorHeight}px`;     
                text.style.height = `${28 * scaleFactorHeight}px`;  
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
        if (currentLocale === 'us') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactorHeight}px`;     
                text.style.height = `${56 * scaleFactorHeight}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${282 * scaleFactorHeight}px`; 
                text.style.left = `${416 * scaleFactorHeight}px`;     
                text.style.height = `${51 * scaleFactorHeight}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${119 * scaleFactorHeight}px`;     
                text.style.height = `${72 * scaleFactorHeight}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170 * scaleFactorHeight}px`;     
                text.style.height = `${46 * scaleFactorHeight}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${204 * scaleFactorHeight}px`;     
                text.style.height = `${56 * scaleFactorHeight}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label8');
            labelsevenElements.forEach(text => {
                text.style.top = `${339 * scaleFactorHeight}px`;     
                text.style.height = `${30 * scaleFactorHeight}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            // const labeleightElements = el.querySelectorAll('#card0-label8');
            // labeleightElements.forEach(text => {
            //     text.style.fontSize = `${13 * scaleFactor}px`;
            // });
            // const labelnineElements = el.querySelectorAll('#card0-label9');
            // labelnineElements.forEach(text => {
            //     text.style.fontSize = `${13 * scaleFactor}px`;
            // });
        }
        if (currentLocale === 'pt' || currentLocale === 'br') {
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${197 * scaleFactorHeight}px`;     
                text.style.height = `${40 * scaleFactorHeight}px`;  
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${245 * scaleFactorHeight}px`;     
                text.style.height = `${60 * scaleFactorHeight}px`;  
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
                text.style.top = `${182 * scaleFactorHeight}px`;    
                text.style.width = `${484 * scaleFactorWidth}px`;  
                text.style.height = `${40 * scaleFactorHeight}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${200 * scaleFactorHeight}px`;  
                text.style.height = `${52 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'de') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactorHeight}px`;     
                text.style.height = `${34.4 * scaleFactor}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${124 * scaleFactorHeight}px`;     
                text.style.height = `${47 * scaleFactorHeight}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${165 * scaleFactorHeight}px`;     
                text.style.height = `${39.6 * scaleFactor}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${190 * scaleFactorHeight}px`;     
                text.style.height = `${52 * scaleFactorHeight}px`;  
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
                text.style.top = `${98 * scaleFactorHeight}px`;     
                text.style.height = `${34 * scaleFactorHeight}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${141 * scaleFactorHeight}px`;     
                text.style.height = `${53 * scaleFactorHeight}px`;  
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${204 * scaleFactorHeight}px`;     
                text.style.height = `${37 * scaleFactorHeight}px`;  
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${250 * scaleFactorHeight}px`;     
                text.style.height = `${43 * scaleFactorHeight}px`;  
            });
        }
        if (currentLocale === 'nl') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = `${44 * scaleFactorHeight}px`; 
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${274.3 * scaleFactor}px`;  
                text.style.left = `${415 * scaleFactorWidth}px`;  
                text.style.width = `${119 * scaleFactorWidth}px`;  
                text.style.height = `${60 * scaleFactorHeight}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${125.5 * scaleFactor}px`; 
                text.style.height = `${52.5 * scaleFactor}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${167 * scaleFactorHeight}px`; 
                text.style.height = `${39 * scaleFactorHeight}px`;
                text.style.width = `${496 * scaleFactorWidth}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${190 * scaleFactorHeight}px`; 
                text.style.height = `${59 * scaleFactorHeight}px`; 
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${338 * scaleFactorHeight}px`;
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'es' || currentLocale === 'lat'|| currentLocale === 'ca') {
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${273.6 * scaleFactor}px`;  
                text.style.left = `${416.5 * scaleFactor}px`;  
            });
        }
        if (currentLocale === 'vi') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = `${34 * scaleFactorHeight}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${122 * scaleFactorHeight}px`; 
                text.style.height = `${53 * scaleFactorHeight}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${179 * scaleFactorHeight}px`;  
                text.style.height = `${18 * scaleFactorHeight}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${199 * scaleFactorHeight}px`;   
                text.style.height = `${53 * scaleFactorHeight}px`; 
            });
            const verticalElements = el.querySelectorAll('.front-card-label2-position');
            verticalElements.forEach(text => {
                text.style.fontSize = `${11 * scaleFactorHeight}px`; 
            });
        }
        if (currentLocale === 'id') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.height = `${34 * scaleFactorHeight}px`;  
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
                text.style.height = `${53 * scaleFactorHeight}px`; 
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170.4 * scaleFactor}px`;  
                text.style.height = `${30 * scaleFactorHeight}px`; 
                text.style.width = `${484 * scaleFactorWidth}px`; 
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${203.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactorHeight}px`; 
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
                text.style.width = `${484 * scaleFactorWidth}px`; 
                text.style.height = `${37 * scaleFactorHeight}px`; 
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
                text.style.width = `${484 * scaleFactorWidth}px`; 
                text.style.height = `${37 * scaleFactorHeight}px`; 
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
                text.style.top = `${337 * scaleFactorHeight}px`;    
                text.style.height = `${28 * scaleFactorHeight}px`;
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${337 * scaleFactorHeight}px`;    
                text.style.height = `${28 * scaleFactorHeight}px`;
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
                text.style.height = `${60 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${166.4 * scaleFactor}px`;  
                text.style.width = `${484 * scaleFactorWidth}px`; 
                text.style.height = `${40 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${198.5 * scaleFactor}px`;  
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${343 * scaleFactorHeight}px`;    
                text.style.height = `${19 * scaleFactorHeight}px`;
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
                text.style.top = `${158 * scaleFactorHeight}px`; 
                text.style.height = `${40 * scaleFactorHeight}px`; 
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
                text.style.height = `${73 * scaleFactorHeight}px`; 
                text.style.fontSize = `${10 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${121.2 * scaleFactor}px`; 
                text.style.height = `${63 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${168.4 * scaleFactor}px`; 
                text.style.left = `${414.4 * scaleFactor}px`;  
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.width = `${484 * scaleFactorWidth}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${205.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactorHeight}px`; 
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
                text.style.height = `${53 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170.4 * scaleFactor}px`;   
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.width = `${484 * scaleFactorWidth}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${205.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'ru') {
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${122.2 * scaleFactor}px`; 
                text.style.height = `${63 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${173.4 * scaleFactor}px`;   
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${209.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelsixElements = el.querySelectorAll('#card0-label6');
            labelsixElements.forEach(text => {
                text.style.top = `${343 * scaleFactor}px`;   
                // text.style.height = `${53 * scaleFactorHeight}px`; 
                // text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${343 * scaleFactor}px`;   
                // text.style.height = `${53 * scaleFactorHeight}px`; 
                // text.style.fontSize = `${13 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'it') {
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${274.7 * scaleFactor}px`; 
                text.style.left = `${415.5 * scaleFactor}px`;  
            });
        }
        if (currentLocale === 'lt') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${275 * scaleFactorHeight}px`;  
                text.style.left = `${417 * scaleFactorWidth}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${123.2 * scaleFactor}px`; 
                text.style.height = `${63 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${161.4 * scaleFactor}px`;   
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${197.5 * scaleFactor}px`;   
                text.style.height = `${53 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${336 * scaleFactorHeight}px`;   
            });
        }
        if (currentLocale === 'nb') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${276 * scaleFactorHeight}px`;  
                text.style.left = `${417 * scaleFactorWidth}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${122 * scaleFactorHeight}px`; 
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${159 * scaleFactorHeight}px`;   
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${195 * scaleFactorHeight}px`;   
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'ar') {
            //front card
            const ArabicTitleElements = el.querySelectorAll('.front-card-label0-position');
            ArabicTitleElements.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });
            const AdultTitleElements = el.querySelectorAll('.front-card-label1-position');
            AdultTitleElements.forEach(text => {
                text.style.fontSize = `${20 * scaleFactor}px`;
                text.style.top = `${99 * scaleFactorHeight}px`;
            });

            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${276 * scaleFactorHeight}px`;  
                text.style.left = `${417 * scaleFactorWidth}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${125 * scaleFactorHeight}px`; 
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${173 * scaleFactorHeight}px`;   
                text.style.height = `${50 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${200 * scaleFactorHeight}px`;   
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'cs') {
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${278 * scaleFactorHeight}px`;  
                text.style.left = `${417 * scaleFactorWidth}px`;  
            });
        }
        if (currentLocale === 'bg') {
            //front card
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${278 * scaleFactorHeight}px`;  
                text.style.left = `${416 * scaleFactorWidth}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${122 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${162 * scaleFactorHeight}px`;   
                text.style.height = `${20 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${184 * scaleFactorHeight}px`;   
                text.style.height = `${75 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'hr') {
            //front card
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${118 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
                text.style.height = `${55 * scaleFactorHeight}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${204 * scaleFactorHeight}px`;   
                text.style.height = `${75 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
        }

        if (currentLocale === 'co') {
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.fontSize = `${12.7 * scaleFactor}px`;
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${343 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'sr') {
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${119 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${170 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${204 * scaleFactorHeight}px`;   
            });
        }

        if (currentLocale === 'ne') {
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${275 * scaleFactorHeight}px`;  
                text.style.left = `${416 * scaleFactorWidth}px`;  
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                // text.style.top = `${119 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12.7 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${174 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`;
                text.style.fontSize = `${12.7 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${222 * scaleFactorHeight}px`;   
                text.style.fontSize = `${12.7 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'mk') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${84 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${272 * scaleFactorHeight}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${119 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${169 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`;
                text.style.fontSize = `${12 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${202 * scaleFactorHeight}px`;   
                text.style.fontSize = `${12 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'zh') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                text.style.top = `${87 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labeltwoElements = el.querySelectorAll('#card0-label2');
            labeltwoElements.forEach(text => {
                text.style.top = `${280 * scaleFactorHeight}px`;  
                text.style.fontSize = `${11 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${112 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${156 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`;
                text.style.fontSize = `${12 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${181 * scaleFactorHeight}px`;   
                text.style.fontSize = `${12 * scaleFactor}px`; 
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${343 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'et') {
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${121 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12.7 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${174 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`;
                text.style.fontSize = `${12.7 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${211 * scaleFactorHeight}px`;   
                text.style.fontSize = `${12.7 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'ro') {
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${121 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${174 * scaleFactorHeight}px`;   
            });
            const labelsevenElements = el.querySelectorAll('#card0-label7');
            labelsevenElements.forEach(text => {
                text.style.top = `${343 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'el') {
            const labeloneElements = el.querySelectorAll('#card0-label1');
            labeloneElements.forEach(text => {
                // text.style.top = `${87 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${120 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
                text.style.fontSize = `${12 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                text.style.top = `${154 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`;
                text.style.fontSize = `${12 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${188 * scaleFactorHeight}px`;   
                text.style.height = `${70 * scaleFactorHeight}px`;
                text.style.fontSize = `${12 * scaleFactor}px`; 
            });
            // const labelsevenElements = el.querySelectorAll('#card0-label7');
            // labelsevenElements.forEach(text => {
            //     text.style.top = `${343 * scaleFactor}px`; 
            // });
            const labelheightElements = el.querySelectorAll('#card0-label8');
            labelheightElements.forEach(text => {
                text.style.width = `${91 * scaleFactor}px`; 
                text.style.height = `${22 * scaleFactor}px`; 
                text.style.fontSize = `${12.9 * scaleFactor}px`; 
            });
        }

        if (currentLocale === 'ml') {
            // const labeloneElements = el.querySelectorAll('#card0-label1');
            // labeloneElements.forEach(text => {
            //     // text.style.top = `${87 * scaleFactorHeight}px`; 
            //     text.style.fontSize = `${12 * scaleFactor}px`;
            // });
            const labelthreeElements = el.querySelectorAll('#card0-label3');
            labelthreeElements.forEach(text => {
                text.style.top = `${117 * scaleFactorHeight}px`; 
                text.style.height = `${55 * scaleFactorHeight}px`; 
                text.style.fontSize = `${13 * scaleFactor}px`;
            });
            const labelfourElements = el.querySelectorAll('#card0-label4');
            labelfourElements.forEach(text => {
                // text.style.top = `${154 * scaleFactorHeight}px`;   
                text.style.height = `${40 * scaleFactorHeight}px`;
                text.style.fontSize = `${13 * scaleFactor}px`; 
            });
            const labelfiveElements = el.querySelectorAll('#card0-label5');
            labelfiveElements.forEach(text => {
                text.style.top = `${202 * scaleFactorHeight}px`;   
                // text.style.height = `${70 * scaleFactorHeight}px`;
                text.style.fontSize = `${13 * scaleFactor}px`; 
            });
        }
    },
};