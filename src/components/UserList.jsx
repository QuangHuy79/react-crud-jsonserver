import React from "react";

const UserList = ({ users, onEdit, onDelete }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        {user.name} - {user.email}
        <button onClick={() => onEdit(user)}>Sửa</button>
        <button onClick={() => onDelete(user.id)}>Xoá</button>
      </li>
    ))}
  </ul>
);

export default UserList;
