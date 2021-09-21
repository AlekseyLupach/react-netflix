import React from "react";

function UserForm({ user, handleChange, handleSubmit }) {
  return (
    <form className="userUpdateForm">
      <h1 className="addProductTitle">Edit User</h1>
      <div className="addProductItem">
        <label>Username</label>
        <input
          type="text"
          placeholder={user.username}
          className="userUpdateInput"
          name="username"
          onChange={handleChange}
        />
      </div>
      <div className="addProductItem">
        <label>Email</label>
        <input
          type="text"
          placeholder={user.email}
          className="userUpdateInput"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="addProductItem">
        <label>Password</label>
        <input
          type="password"
          placeholder="********"
          className="userUpdateInput"
          name="password"
          onChange={handleChange}
        />
      </div>
      <button className="userAddButton" onClick={handleSubmit}>
        Update
      </button>
    </form>
  );
}

export default UserForm;
