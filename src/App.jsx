import { useEffect, useState } from "react";
import BookList from "../src/Books/BookList";
import { getBooks } from "./API/books";
import SingleBook from "./Books/SingleBook";
import { Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import AccountPage from "./components/AccountPage";

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
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              selectedBook ? (
                <SingleBook selectedBook={selectedBook} />
              ) : (
                <BookList books={books} setSelectedBook={setSelectedBook} />
              )
            }
          />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/register" element={<RegisterForm />} />
          <Route path="/users/me" element={<AccountPage />} />
        </Route>
      </Routes>
    </>
  );
}
