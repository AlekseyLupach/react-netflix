import "./ListForm.css";
import React from "react";

function ListForm({
  handleChange,
  handleSelect,
  handleSubmit,
  movies,
  list,
  pageTitle,
}) {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">{pageTitle}</h1>
      </div>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder={list ? list.title : "List title"}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <select name="genre" id="genre" onChange={handleChange}>
              <option>Genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Dramas">TV Dramas</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem content">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option value={movie._id} key={movie._id}>
                  {movie.title}, ({movie.genre})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="formButton">
          <button className="submitButton" onClick={handleSubmit}>
            {list ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ListForm;
