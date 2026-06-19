import "./BookList.css";
import BookDetails from "./BookDetails";

function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return <BookDetails key={book.id} book={book} />;
      })}
    </ul>
  );
}

export default BookList;
