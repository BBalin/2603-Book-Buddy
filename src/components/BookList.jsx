import "./BookList.css";
import BookDetails from "./BookDetails";

function BookList({ books, setSelectedBook }) {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <BookDetails
            key={book.id}
            book={book}
            setSelectedBook={setSelectedBook}
          />
        );
      })}
    </ul>
  );
}

export default BookList;
