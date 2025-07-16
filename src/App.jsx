import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers, addUser, updateUser, deleteUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = () => {
    getUsers().then((res) => setUsers(res.data));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = (data) => {
    if (data.id) {
      updateUser(data.id, data).then(loadUsers);
      setSelectedUser(null);
    } else {
      addUser(data).then(loadUsers);
    }
  };

  const handleDelete = (id) => {
    deleteUser(id).then(loadUsers);
  };

  const handleEdit = (user) => setSelectedUser(user);

  return (
    <div>
      <h2>Quản lý người dùng</h2>
      <UserForm
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
        clearSelection={() => setSelectedUser(null)}
      />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
