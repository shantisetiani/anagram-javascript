function printAnagram(words) {
    let anagram = {}, checkedWords = [], currIdx=0;
    
    for(let i=currIdx+1; i<words.length; i++) {
        if(!checkedWords.includes(words[currIdx])){
            anagram[currIdx] = [];
            anagram[currIdx].push(words[currIdx]);
            checkedWords.push(words[currIdx]);
        }
        
        if(!checkedWords.includes(words[i])
            && words[currIdx].length === words[i].length
            && checkAnagram(words[currIdx], words[i])) {
                anagram[currIdx].push(words[i]);
                checkedWords.push(words[i]);
        }
        
        if(i === words.length-1){
            currIdx++;
            if(currIdx === words.length-1) {
                i=currIdx-1;
            } else{
                i=currIdx;
            }
        }
    }

    for(let key in anagram) {
        console.log(anagram[key]);
    }
}

function checkAnagram(word1, word2) {
    for(let i=0; i<word2.length; i++) {
        if(!word1.includes(word2[i])) {
            return false;
        }
    }
    return true;
}

printAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])