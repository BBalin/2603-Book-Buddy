import { useState, useEffect } from "react";
import { getSingleBook } from "../API/books";

function SingleBook({ selectedBook }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function loadSingleBook() {
      const bookData = await getSingleBook(selectedBook);
      setBook(bookData);
    }
    loadSingleBook();
  }, [selectedBook]);

  if (!book) {
    return <p>Loading book...</p>;
  }

  return (
    <section className="book-details">
      <figure className="book-img">
        <img src={book.coverimage} alt={book.title} />
      </figure>
      <article>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
      </article>
    </section>
  );
}

export default SingleBook;
