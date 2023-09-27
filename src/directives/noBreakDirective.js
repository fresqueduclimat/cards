export default {
    beforeMount(el) {
        var regex = /မသင့်တော်သောနေရာများအဖြစ/g;
        var replacement = '<nobr>မသင့်တော်သောနေရာများအဖြစ</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /စိုက်ပျိုးရေးအထွက်နှုန်းကျဆင်းလာခြင်းတို့ကြောင/g;
        replacement = '<nobr>စိုက်ပျိုးရေးအထွက်နှုန်းကျဆင်းလာခြင်းတို့ကြောင</nobr>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);        
    },
};

