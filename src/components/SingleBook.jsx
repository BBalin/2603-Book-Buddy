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

  console.log("book", book);

  return (
    <section className="single-book">
      <figure>
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
