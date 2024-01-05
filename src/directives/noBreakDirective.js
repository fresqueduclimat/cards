export default {
    beforeMount(el) {
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

        regex = /3,8 W[/]m²/g;
        replacement = '<nobr>3,8 W/m²</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /3.8 W[/]m2/g;
        replacement = '<nobr>3.8 W/m2</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /3.8 W[/]m²/g;
        replacement = '<nobr>3.8 W/m²</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /3,8 W[/]m2/g;
        replacement = '<nobr>3,8 W/m2</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /2,8 W[/]m²/g;
        replacement = '<nobr>2,8 W/m²</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /2.8 W[/]m2/g;
        replacement = '<nobr>2.8 W/m2</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /2.8 W[/]m²/g;
        replacement = '<nobr>2.8 W/m²</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /2,8 W[/]m2/g;
        replacement = '<nobr>2,8 W/m2</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

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

        regex = /40 %/g;
        replacement = '<nobr>40 %</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /20 %/g;
        replacement = '<nobr>20 %</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /im Vergleich/g;
        replacement = '<nobr>im Vergleich</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

    },
};

