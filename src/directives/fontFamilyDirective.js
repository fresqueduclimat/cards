export default {
    beforeMount(el, binding) {

        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200;400;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'bg' || currentLocale === 'ru' || currentLocale === 'vi') {
                el.querySelectorAll('p').forEach(paragraph => {
                paragraph.style.fontFamily = 'Noto Sans';
                });
            }
        if (currentLocale === 'ja') {
            el.querySelectorAll('p').forEach(paragraph => {
            paragraph.style.fontFamily = 'Noto Sans JP';
            });
        }
        if (currentLocale === 'my') {
                el.querySelectorAll('p').forEach(paragraph => {
                paragraph.style.fontFamily = 'Padauk, sans-serif';
                });
            }
        },
};
  