var TextAnalyzer = require('../src/atropa-TextAnalyzer.js');

try {
    Object.keys(TextAnalyzer).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = TextAnalyzer[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-TextAnalyzer.js');
}

Object.keys(TextAnalyzer.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = TextAnalyzer.data[prop];
    }
);
