import { useState, useEffect } from "react";
import { getSingleBook, reserveBook } from "../API/books";
import { useAuth } from "../../context/AuthContext";

function SingleBook({ selectedBook }) {
  const { token } = useAuth();
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

  async function handleReservation() {
    await reserveBook(token, book.id);
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
        {token ? (
          <button className="reserve-button" onClick={handleReservation}>
            Reserve this Book
          </button>
        ) : (
          <p>Log in to reserve books.</p>
        )}
      </article>
    </section>
  );
}

export default SingleBook;
