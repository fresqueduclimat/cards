export default {
    beforeMount(el, binding) {
        const scaleFactor = 0.721;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'my') {
            const titleElements = el.querySelectorAll('.title');
            console.log(titleElements)
            titleElements.forEach(title => {
                title.style.top = `${49 * scaleFactor}px`;    // Modifier la valeur de 'top'
                title.style.left = `${21 * scaleFactor}px`;   // Modifier la valeur de 'left'
                title.style.width = `${651 * scaleFactor}px`; // Modifier la valeur de 'width'
                title.style.height = `${44 * scaleFactor}px`; // Modifier la valeur de 'height'
            });
        }
        const titleElements = el.querySelectorAll('#card41-label0');
            titleElements.forEach(title => {
                title.style.left = `${88 * scaleFactor}px`;   // Modifier la valeur de 'left'
                title.style.width = `${437 * scaleFactor}px`; // Modifier la valeur de 'width'
            });
    },
};