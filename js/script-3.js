// Модуль 2  задача 11/32
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
// в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message)
// и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
    let words = [];
    let wordsQuantity = 0;
    let totalPrice = 0;

    words = message.split(' ');
    
    for (const word of words) { 
        wordsQuantity += 1;      
    } 

    totalPrice = wordsQuantity * pricePerWord;
    return totalPrice;
  // Пиши код выше этой строки
}

console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));