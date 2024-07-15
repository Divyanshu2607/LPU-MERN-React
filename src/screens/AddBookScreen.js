import { useState } from "react";
import { addBook } from "../api/endpoints/book";

const AddBookScreen = () => {
  const [bookToAdd, setBookToAdd] = useState({});
  const [status, setStatus] = useState({ message: "", status: "unknown" });

  const values = ["Fiction", "Non-Fiction"];

  const handleChange = (e) =>
    setBookToAdd({ ...bookToAdd, [e.target.name]: e.target.value });

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

  return (
    <>
      <h1>Add Book</h1>
      <form
        className="ui form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await addBook(bookToAdd);
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
              value={bookToAdd.title}
              onChange={handleChange}
            />
          </div>
          <label>Author</label>
          <div className="field">
            <input
              type="text"
              name="author"
              placeholder="Book Author"
              value={bookToAdd.author}
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
            value={bookToAdd.isbn}
            onChange={handleChange}
          />
        </div>
        <label>Price</label>
        <div className="four wide field">
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={bookToAdd.price}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Category</label>
          <select
            className="ui fluid dropdown"
            value={bookToAdd.title}
            name="category"
            onChange={handleChange}
          >
            <option value="">Category</option>
            {values.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
        {showMessage()}
      </form>
    </>
  );
};

export default AddBookScreen;
