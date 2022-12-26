console.log('');
console.log('tsk 3.1');
/*
Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального світу - користувача, книги, продукту магазину, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

Для оголошення використовуються фігурні дужки {} - літерал об'єкта. При створенні об'єкта можна додати властивості, кожна з яких описується парами ключ:значення. Ключ ще називають ім'ям властивості і це завжди рядок. Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо. Властивості розділяються комою.

*/

/*
Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

    imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
    descr - опис, значення "Spacious apartment in the city center";
    rating - рейтинг, значення 4;
    price - ціна, значення 2153;
    tags - метаінформація, масив ["premium", "promoted", "top"].

    Оголошена змінна apartment
    Значення змінної apartment - це об'єкт
    Об'єкт містить властивість imgUrl
    Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
    Об'єкт містить властивість descr
    Значення властивості descr - це рядок "Spacious apartment in the city center"
    Об'єкт містить властивість rating
    Значення властивості rating - це число 4
    Об'єкт містить властивість price
    Значення властивості price - це число 2153
    Об'єкт містить властивість tags
    Значення властивості tags - це масив ["premium", "promoted", "top"]

*/

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};

console.log(apartment);
console.log(apartment.imgUrl);
console.log(apartment.descr);
console.log(apartment.rating);
console.log(apartment.price);
console.log(apartment.tags[0], apartment.tags[1], apartment.tags[2]);