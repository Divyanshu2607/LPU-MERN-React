import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookByIsbnNo, updateBook } from "../api/endpoints/book";

const BookScreen = () => {
  const [book, setBook] = useState({});
  const [bookAfterUpdate, setBookAfterUpdate] = useState({});
  const [status, setStatus] = useState({ message: "", status: "unknown" });
  const [isLoading, setIsLoading] = useState(true);

  const { bookIsbnNo } = useParams();

  const values = ["Fiction", "Non-Fiction"];

  const showMessage = () => {
    let toReturn = null;
    if (status.status === "unknown") {
      return;
    } else if (status.status === true) {
      toReturn = (
        <div className="ui form success" style={{ marginTop: "1vh" }}>
          <div className="ui success message">
            <div className="header">Success</div>
            <p>{status.message}</p>
          </div>
        </div>
      );
    } else {
      toReturn = (
        <div className="ui form error" style={{ marginTop: "1vh" }}>
          <div className="ui error message">
            <div className="header">Error</div>
            <p>{status.message}</p>
          </div>
        </div>
      );
    }
    setTimeout(() => setStatus({ message: "", status: "unknown" }), 5000);
    return toReturn;
  };

  /**
   * Task: Fetch the book from the database and show its info on the screen
   * We will come back at 9:00 PM
   */

  useEffect(() => {
    setBookAfterUpdate(book);
  }, [book]);

  useEffect(() => {
    try {
      const fetchBook = async () => {
        const { data: fetchedBook } = await getBookByIsbnNo(bookIsbnNo);
        setBook(fetchedBook);
      };
      fetchBook();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChange = (e) =>
    setBookAfterUpdate({ ...bookAfterUpdate, [e.target.name]: e.target.value });

  if (isLoading) {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
  return (
    <>
      <h1>Book: {book.title}</h1>
      <form
        className="ui form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await updateBook(bookAfterUpdate);
            setBook(bookAfterUpdate);
            setStatus({ status: true, message: "Successfully saved book" });
          } catch (err) {
            console.error(err);
            setStatus({
              status: false,
              message: "There was an error saving the book",
            });
          }
        }}
      >
        <h4 className="ui dividing header">Book Information</h4>
        <div className="field">
          <label>Title</label>
          <div className="field">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={bookAfterUpdate.title}
              onChange={handleChange}
            />
          </div>
          <label>Author</label>
          <div className="field">
            <input
              type="text"
              name="author"
              placeholder="Book Author"
              value={bookAfterUpdate.author}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label>ISBN</label>
          <input
            type="text"
            name="isbn"
            placeholder="Book ISBN Number"
            value={bookAfterUpdate.isbn}
            onChange={handleChange}
          />
        </div>
        <label>Price</label>
        <div className="four wide field">
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={bookAfterUpdate.price}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Category</label>
          <select
            className="ui fluid dropdown"
            value={bookAfterUpdate.category}
            name="category"
            onChange={handleChange}
          >
            <option value="">Category</option>
            {values.map((el) => (
              <option selected={el === bookAfterUpdate.category} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Count</label>
          <input
            type="number"
            name="count"
            placeholder="Count"
            value={bookAfterUpdate.count}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
        {showMessage()}
      </form>
    </>
  );
};
export default BookScreen;
