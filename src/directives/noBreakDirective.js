export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        var regex = /1°C/g;
        var replacement = '<nobr>1°C</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /1.5°C/g;
        replacement = '<nobr>1.5°C</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /5°C/g;
        replacement = '<nobr>5°C</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /1,2 °C/g;
        replacement = '<nobr>1,2 °C</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /1,5 °C/g;
        replacement = '<nobr>1,5 °C</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /5 °C/g;
        replacement = '<nobr>5 °C</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);



        if (currentLocale === 'fa') {
            regex = /0 /g;
            replacement = '۰';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            // regex = /1 /g;
            // replacement = '۱';
            // el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /2 /g;
            replacement = '۲';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /3 /g;
            replacement = '۳';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /4 /g;
            replacement = '۴';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /5 /g;
            replacement = '۵';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /1.5 /g;
            replacement = '۱٫۵';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /0.5 /g;
            replacement = '۰٫۵';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /20 /g;
            replacement = '۲۰';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /80 /g;
            replacement = '۸۰';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /50 /g;
            replacement = '۵۰';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /1200 /g;
            replacement = '۱۲۰۰';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /1000 /g;
            replacement = '۱۰۰۰';
            el.innerHTML = el.innerHTML.replace(regex, replacement);
            
            regex = /15°C /g;
            replacement = '۱۵°C';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

            regex = /18°C /g;
            replacement = '-۱۸°C';
            el.innerHTML = el.innerHTML.replace(regex, replacement);

        }

        // regex = /(например делтата на Нил)./g;
        // replacement = '<nobr>(например делтата на Нил).</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);
        
        let content = el.innerHTML;

        const regexStart = /nbstart/g;
        const regexEnd = /nbend/g;
        const replacementStart = '<nobr>';
        const replacementEnd = '</nobr>';

        // Appliquer les remplacements pour nbstart
        content = content.replace(regexStart, replacementStart);

        // Appliquer les remplacements pour nbend
        content = content.replace(regexEnd, replacementEnd);

        // Affectez le contenu modifié à innerText
        el.innerHTML = content;
        
    },
};

