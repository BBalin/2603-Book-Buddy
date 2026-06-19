import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import { getBooks } from "./API/books";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadAllBooks() {
      const bookData = await getBooks();
      setBooks(bookData);
    }
    loadAllBooks();
  }, []);

  console.log("books", books);
  return (
    <main>
      <h1>Catalog</h1>
      <BookList books={books} />
    </main>
  );
}
