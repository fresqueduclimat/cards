export default {
    beforeMount(el) {
        const regex = /\n/g;
        const replacement = '<br>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);
    },
};
