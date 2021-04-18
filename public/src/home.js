

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows.find((borrow) => !borrow.returned)).length;
}
//helper function for most common genre, pop book and pop author:
function topFiveSort(array) {
  return array.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, 5);
}
function getMostCommonGenres(books) {
  // loop throuh books and look at genres, return most popular genres in descending order of count with max amount of 5 objects
  //{...name of genre, ...total count of genre}
  // const genres = Object.keys(counts[book.genre]++)sort((a, b) => counts[b] - counts[a])

  // books.forEach((book) => counts[book.genre]++)
  
  let genreList = books.reduce((count, subject) => {
    const key = subject['genre'];
    if(!count[key]) {
        count[key] = 0
    }
    count[key] ++;
    return count;
},[])

//take genreList and assign key and value names 'genre:' and 'count:'
let completeList = [];
for (let genre in genreList) {
  const count = genreList[genre];
  completeList.push({name: `${genre}`, count: count});
}
//use helper function to sort and return top five only
return topFiveSort(completeList);
 
}

function getMostPopularBooks(books) {
  let result = [];
  books.forEach((book) => result.push({name: book.title, count: book.borrows.length}))
  return topFiveSort(result);
}

function getMostPopularAuthors(books, authors) {
  //create empty array and use for of loops to loop through values
  authorArray = [];

 for (let author of authors) {
   const authorName = `${author.name.first} ${author.name.last}`;
   let count = 0;
   for (let book of books) {
     if (author.id === book.authorId) {
       count += book.borrows.length;
     }
   }
   const authorObj = { name: authorName, count: count};
   authorArray.push(authorObj);
 }
 return topFiveSort(authorArray);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


