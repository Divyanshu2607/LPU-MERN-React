import { useEffect, useState } from "react";
import { getAllBooks } from "../api/endpoints/book";
import { currencyFormat } from "../utils/currency.util";
import { Link } from "react-router-dom";

const BookListScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data: fetchedBooks } = await getAllBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h1>Book List Screen</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Book ISBN</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Bought On</th>
            <th>Price</th>
            <th>Count</th>
          </tr>
        </thead>
        {books.map((book, index) => (
          <tr key={index * 2}>
            <td>
              <Link to={`/admin/books/${book.isbn}`}>{book.isbn} </Link>
            </td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{new Date(book.boughtOn).toLocaleDateString()}</td>
            <td>{currencyFormat(book.price)}</td>
            <td>{book.count}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default BookListScreen;
