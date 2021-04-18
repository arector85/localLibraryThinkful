function findAuthorById(authors, id) {
  /*authors is an array. takes ID and matches it to ID in authors and returns 
  author that matches ID.
   */
  return authors.find((author) =>author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // create two empty arrays to push borrowed and available list in either
let available = [];
let borrowed = [];
books.forEach((book) => book.borrows[0].returned ? available.push(book) : borrowed.push(book));
return [borrowed, available]
}

function getBorrowersForBook(book, accounts) {
  // return array of all book's borrows keys and include account information (use map), only up to 10 borrows.
  const listOfBorrows = book.borrows.map((borrow) => {
    const account = accounts.find((acc) => acc.id === borrow.id)
    return {...borrow, ...account}
  });
// shorten array to the length of ten items/borrows
  return listOfBorrows.slice(0,10)

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
