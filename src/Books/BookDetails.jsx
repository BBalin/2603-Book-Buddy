import "./BookDetails.css";

function BookDetails({ book, setSelectedBook }) {
  return (
    <li className="book-details">
      <figure className="book-img">
        <img src={book.coverimage} alt={book.title} />
      </figure>
      <article>
        <h1 onClick={() => setSelectedBook(book.id)}>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
      </article>
    </li>
  );
}

export default BookDetails;
