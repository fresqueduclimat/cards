export default {
    beforeMount(el, binding) {
        const currentLocale = binding.instance?.$i18n?.locale;
        var regex = /မသင့်တော်သောနေရာများအဖြစ/g;
        var replacement = '<nobr>မသင့်တော်သောနေရာများအဖြစ</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /စိုက်ပျိုးရေးအထွက်နှုန်းကျဆင်းလာခြင်းတို့ကြောင/g;
        replacement = '<nobr>စိုက်ပျိုးရေးအထွက်နှုန်းကျဆင်းလာခြင်းတို့ကြောင</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement); 
        
        regex = /-1 W[/]m²/g;
        replacement = '<nobr>-1 W/m²</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /-1 W[/]m2/g;
        replacement = '<nobr>-1 W/m2</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /3,8 W[/]m²/g;
        // replacement = '<nobr>3,8 W/m²</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /3.8 W[/]m2/g;
        // replacement = '<nobr>3.8 W/m2</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /3.8 W[/]m²/g;
        // replacement = '<nobr>3.8 W/m²</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /3,8 W[/]m2/g;
        // replacement = '<nobr>3,8 W/m2</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /2,8 W[/]m²/g;
        // replacement = '<nobr>2,8 W/m²</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /2.8 W[/]m2/g;
        // replacement = '<nobr>2.8 W/m2</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /2.8 W[/]m²/g;
        // replacement = '<nobr>2.8 W/m²</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        // regex = /2,8 W[/]m2/g;
        // replacement = '<nobr>2,8 W/m2</nobr>';
        // el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /7 m/g;
        replacement = '<nobr>7 m</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /7m/g;
        replacement = '<nobr>7m</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /54 m/g;
        replacement = '<nobr>54 m</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /54m/g;
        replacement = '<nobr>54m</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /120 m/g;
        replacement = '<nobr>120 m</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /120m/g;
        replacement = '<nobr>120m</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /40%/g;
        replacement = '<nobr>40%</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /20%/g;
        replacement = '<nobr>20%</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /15%/g;
        replacement = '<nobr>15%</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /40 %/g;
        replacement = '<nobr>40 %</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /20 %/g;
        replacement = '<nobr>20 %</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /15 %/g;
        replacement = '<nobr>15 %</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /im Vergleich/g;
        replacement = '<nobr>im Vergleich</nobr>';
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

