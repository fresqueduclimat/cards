export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'my') {
            const titleElements = el.querySelectorAll('.title');
            console.log(titleElements)
            titleElements.forEach(title => {
                title.style.top = '49px';    // Modifier la valeur de 'top'
                title.style.left = '21px';   // Modifier la valeur de 'left'
                title.style.width = '651px'; // Modifier la valeur de 'width'
                title.style.height = '44px'; // Modifier la valeur de 'height'
            });
        }
        const permafrostTitleElements = el.querySelectorAll('#card41-label0');
        permafrostTitleElements.forEach(permafrostTitle => {
            console.log(permafrostTitle);
            permafrostTitle.style.left='115px';
            permafrostTitle.style.width='487px';
        });
    },
};