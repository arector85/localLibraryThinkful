const { getBooksBorrowedCount } = require("./home");

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.filter((book) => book.borrows.find((borrow) => borrow.id === account.id)).length;
} //.map instead of length and .map((book) => book.title to return array of just titles).

function getBooksPossessedByAccount(account, books, authors) {
  /*filter books to get books checked out by account*/
// filter borrows for match account and book id, use map to embed authorlist of matching authorid to book author id in borrows array
  let borrowedBooks = books.filter(({borrows}) => (borrows[0].id === account.id && !borrows[0].returned))
   .map((book) => {
      const author = authors.find((auth) => auth.id === book.authorId);
      return {...book, author};
   })

   return borrowedBooks;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
