import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import { getBooks } from "./API/books";
import SingleBook from "./components/SingleBook";
import RegisterForm from "./components/RegisterForm";

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
      <h1>Catalog</h1>
      <RegisterForm />
      {selectedBook ? (
        <SingleBook selectedBook={selectedBook} />
      ) : (
        <BookList books={books} setSelectedBook={setSelectedBook} />
      )}
    </main>
  );
}
