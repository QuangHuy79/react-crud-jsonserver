import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, selectedUser, clearSelection }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Tên"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">{selectedUser ? "Cập nhật" : "Thêm mới"}</button>
      {selectedUser && <button onClick={clearSelection}>Huỷ</button>}
    </form>
  );
};

export default UserForm;
