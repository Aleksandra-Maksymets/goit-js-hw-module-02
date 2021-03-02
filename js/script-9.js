// Модуль 2  задача 21/32

// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string) и возвращает
// самое длинное слово в этой строке.

function findLongestWord(string) {
    // Пиши код ниже этой строки
    if (!string) { 
return 'Error!'
    }
    const words = string.split(' ');
    let longestWord = words[0];
    console.log(words);

    for (const word of words) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }

    return longestWord;
  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord());


