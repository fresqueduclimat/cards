export default {
    beforeMount(el) {
        var regex = /CO2/g;
        var replacement = 'CO<sub>2</sub>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /H2CO3/g;
        replacement = 'H<sub>2</sub>CO<sub>3</sub>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /HCO3/g;
        replacement = 'HCO<sub>3</sub>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /CH4/g;
        replacement = 'CH<sub>4</sub>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /N2O/g;
        replacement = 'N<sub>2</sub>O';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /H2O/g;
        replacement = 'H<sub>2</sub>O';
        el.innerHTML = el.innerHTML.replace(regex, replacement);

        regex = /O3/g;
        replacement = 'O<sub>3</sub>O';
        el.innerHTML = el.innerHTML.replace(regex, replacement);
    },
};
