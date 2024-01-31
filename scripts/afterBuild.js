const fs = require('fs');
const path = require('path');

const locales = ['de', 'en', 'fr', 'ja', 'kh', 'lao', 'vi', 'my', 'he', 'pt', 'ro', 'sv', 'fi', 'nl', 'es', 'lat', 'fa', 'id', 'tr', 'hu', 'br', 'pl', 'ca', 'it', 'ru', 'lt', 'nb', 'ar', 'bg', 'zh', 'tpe']
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
        replaceStringInFile(path.join(localDirJs, file), `{locale:"fr`, `{locale:"` + locale)
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