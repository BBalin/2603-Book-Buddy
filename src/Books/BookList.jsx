import "./BookList.css";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList({ books, setSelectedBook }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const searchText = searchTerm.toLowerCase();
    return book.title.toLowerCase().includes(searchText);
  });
  return (
    <section>
      <div id="search-bar">
        <h1>Catalog</h1>
        <form action="">
          <label htmlFor="search" className="search-field">
            Search Books
          </label>
          <input
            type="search"
            name="search"
            placeholder="Search by Name"
            id="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          ></input>
          <button>Search</button>
        </form>
      </div>

      <p>
        Showing {filteredBooks.length} of {books.length}
      </p>

      {filteredBooks.length ? (
        <ul>
          {filteredBooks.map((book) => {
            return (
              <BookDetails
                key={book.id}
                book={book}
                setSelectedBook={setSelectedBook}
              />
            );
          })}
        </ul>
      ) : (
        <p>No books match "{searchTerm}"</p>
      )}
    </section>
  );
}

export default BookList;
