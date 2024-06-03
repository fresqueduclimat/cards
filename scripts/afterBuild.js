const fs = require('fs');
const path = require('path');

const locales = [
    'de-DE',
    'en-GB',
    'fr-FR',
    'ja-JP',
    'vi-VN',
    'my-MM',
    'pt-PT',
    'ro-RO',
    'sv-SE',
    'fi-FI',
    'nl-NL',
    'es-ES',
    'es-LAT',
    'fa-IR',
    'id-ID',
    'tr-TR',
    'hu-HU',
    'pt-BR',
    'pl-PL',
    'ca-ES',
    'it-IT',
    'ru-RU',
    'lt-LT',
    'nb-NO',
    'ar-AR',
    'bg-BG',
    'zh-CN',
    'zh-TPE',
    'cs-CZ',
    'en-US',
    'hy-AM',
    'mf-MU',
    'hr-HR',
    'co-FR',
    'sr-SB',
    'ne-NP',
    'mk-MK',
    "et-EE",
    "hi-IN",
    "el-GR",
    "ml-IN",
    "th-TH",
    "eo-EO",
    "km-kh",
]

const indexFilePath = './dist/index.html';
const jsFilePath = './dist/js/';

locales.forEach(locale => {
    const localeDir = "./dist/" + locale
    const localDirJs = "./dist/" + locale + "/js"
    fs.mkdirSync(localeDir);
    fs.mkdirSync(localDirJs);
    fs.copyFileSync(indexFilePath, path.join(localeDir, path.basename(indexFilePath)));
    replaceStringInFile(path.join(localeDir, path.basename(indexFilePath)), "/js", "./js")
    replaceStringInFile(path.join(localeDir, path.basename(indexFilePath)), "/css", "../css")
    replaceStringInFile(path.join(localeDir, path.basename(indexFilePath)), "/favicon.ico", "../favicon.ico")
    const files = fs.readdirSync(jsFilePath);
    files.forEach((file) => {
        fs.copyFileSync(jsFilePath + file, path.join(localDirJs, file));
        replaceStringInFile(path.join(localDirJs, file), `{l.p="/"}`, `{l.p="../"}`)
        replaceStringInFile(path.join(localDirJs, file), `./locales/`, `../locales/`)
        replaceStringInFile(path.join(localDirJs, file), `{locale:"fr-FR`, `{locale:"` + locale)
    });

});

fs.unlinkSync(indexFilePath)
fs.rmSync(jsFilePath, { recursive: true, force: true });

fs.copyFileSync("index.html", indexFilePath);
const subPages = locales.map(locale => {
    return {
        name: locale,
        url: `${locale}/#/`
    };
});
replaceStringInFile(indexFilePath, `"toreplace"`, JSON.stringify(subPages))

function replaceStringInFile(filePath, searchString, replacementString) {
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        const searchRegex = new RegExp(searchString, 'g');
        const modifiedContent = data.replace(searchRegex, replacementString);
        fs.writeFileSync(filePath, modifiedContent, 'utf8');
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}