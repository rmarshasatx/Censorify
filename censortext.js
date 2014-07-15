/**
 * Created by robemars on 7/14/2014.
 */

var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx],"****");
        }
    return inStr;
}
function addCensoredWords(word) {
    customCensoredWords.push(word);
}
function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWords;
exports.getCensoredWords = getCensoredWords;