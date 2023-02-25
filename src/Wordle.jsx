import wordBank from './WordBank.txt';
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];
// export const wordList = [];
export const generateWordSet = async()=> {
    let wordSet;
    // let todaysWord;
    await fetch (wordBank)
    .then( (response)=> response.text())
    .then( (result)=>{
        const wordArr = result.split("\r\n")
        // todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordSet)
        console.log(wordArr)
    });
    return {wordSet};
}