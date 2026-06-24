import { useEffect, useState } from "react";
import BookList from "../src/Books/BookList";
import { getBooks } from "./API/books";
import SingleBook from "./Books/SingleBook";
import AuthPanel from "./components/AuthPanel";
import { Routes, Route } from "react-router";

export default function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function loadAllBooks() {
      const bookData = await getBooks();
      setBooks(bookData);
    }
    loadAllBooks();
  }, []);

  return (
    <main>
      {/* <AuthPanel /> */}
      {selectedBook ? (
        <SingleBook selectedBook={selectedBook} />
      ) : (
        <BookList books={books} setSelectedBook={setSelectedBook} />
      )}
    </main>
  );
}
