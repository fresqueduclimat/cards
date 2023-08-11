export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'my') {
            const titleElements = el.querySelectorAll('.title');
            titleElements.forEach(title => {
                title.style.top = '333px';    // Modifier la valeur de 'top'
                title.style.left = '140px';   // Modifier la valeur de 'left'
                title.style.width = '4400px'; // Modifier la valeur de 'width'
                title.style.height = '300px'; // Modifier la valeur de 'height'
            });
        }
    },
};