import "./BookDetails.css";

function BookDetails({ book }) {
  return (
    <li className="book-details">
      <figure className="book-img">
        <img src={book.coverImage} alt={book.title} />
      </figure>
      <article>
        <h1>{book.title}</h1>
        <h2 className="author">{book.author}</h2>
        <p>{book.description}</p>
      </article>
    </li>
  );
}

export default BookDetails;
