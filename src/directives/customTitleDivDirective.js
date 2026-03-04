export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const currentLocale = binding.instance?.$i18n?.locale;
        // if (currentLocale === 'my') {
        //     const titleElements = el.querySelectorAll('.title');
        //     titleElements.forEach(title => {
        //         title.style.top = `${49 * scaleFactorHeight}px`;    // Modifier la valeur de 'top'
        //         title.style.left = `${21 * scaleFactorWidth}px`;   // Modifier la valeur de 'left'
        //         title.style.width = `${651 * scaleFactorWidth}px`; // Modifier la valeur de 'width'
        //         title.style.height = `${44 * scaleFactorHeight}px`; // Modifier la valeur de 'height'
        //     });
        // }
        if (currentLocale === 'nl') {
            const titleSevenElements = el.querySelectorAll('#card10-text0');
            titleSevenElements.forEach(title => {
                title.style.fontSize = `${21 * scaleFactor}px`;  
            });
            const titleSevenBackElements = el.querySelectorAll('#card10-titleback-text0');
            titleSevenBackElements.forEach(title => {
                title.style.fontSize = `${21 * scaleFactor}px`;  
            });
        }
        
    },
};