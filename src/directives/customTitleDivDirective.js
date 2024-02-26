export default {
    beforeMount(el, binding) {
        // const scaleFactor = 1.00;
        const scaleFactorHeight = 1.029;
        const scaleFactorWidth = 0.974;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'my') {
            const titleElements = el.querySelectorAll('.title');
            titleElements.forEach(title => {
                title.style.top = `${49 * scaleFactorHeight}px`;    // Modifier la valeur de 'top'
                title.style.left = `${21 * scaleFactorWidth}px`;   // Modifier la valeur de 'left'
                title.style.width = `${651 * scaleFactorWidth}px`; // Modifier la valeur de 'width'
                title.style.height = `${44 * scaleFactorHeight}px`; // Modifier la valeur de 'height'
            });
        }
        const titleElements = el.querySelectorAll('#card41-label0');
            titleElements.forEach(title => {
                title.style.left = `${88 * scaleFactorWidth}px`;   // Modifier la valeur de 'left'
                title.style.width = `${437 * scaleFactorWidth}px`; // Modifier la valeur de 'width'
            });
    },
};