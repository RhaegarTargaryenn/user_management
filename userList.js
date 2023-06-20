import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  const [editedUser, setEditedUser] = useState(null);

  const handleDelete = (userId) => {
    onDeleteUser(userId);
  };

  const handleEdit = (user) => {
    setEditedUser(user);
  };

  const handleCancelEdit = () => {
    setEditedUser(null);
  };

  const handleSaveEdit = (userId) => {
    onEditUser(userId, editedUser);
    setEditedUser(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: 'New User',
      email: 'newuser@example.com',
      phone: '1234567890',
    };
    setEditedUser(newUser);
    users.unshift(newUser);
  };

  return (
    <div>
      <h2 className="underline font-[Lucida Console] bg-gradient-to-br from-fuchsia-300 via-zinc-900 to-amber-500 bg-clip-text text-[40px]">User List</h2>
      <div className="flex flex-wrap">
        {users.map((user) => (
          <div key={user.id} className="w-[400px] bg-gray-100 rounded-md p-4 m-2 hover:shadow-lg transition duration-300">
            {editedUser && editedUser.id === user.id ? (
              <>
                <div>
                  <strong className="text-base text-violet-900">Name:</strong>
                  <input className="rounded-[10px] ml-4 mt-2 pl-3 text-sm w-[90%]" type="text" name="name" value={editedUser.name} onChange={handleInputChange} />
                </div>
                <div>
                  <strong className="text-base text-violet-900">Email:</strong>
                  <input className="rounded-[10px] ml-4 mt-2 pl-3 text-sm w-[90%]" type="text" name="email" value={editedUser.email} onChange={handleInputChange} />
                </div>
                <div>
                  <strong className="text-base text-violet-900">Phone:</strong>
                  <input className="rounded-[10px] ml-4 mt-2 pl-3 text-sm w-[90%]" type="text" name="phone" value={editedUser.phone} onChange={handleInputChange} />
                </div>
                <div className="flex justify-center mt-4">
                  <button className="rounded-full bg-indigo-300 w-[50px] h-[30px] text-white hover:bg-indigo-500 text-[10px] mb-3" onClick={() => handleSaveEdit(user.id)}>Save</button>
                  <button className="rounded-full bg-red-300 w-[50px] h-[30px] text-white hover:bg-red-700 text-[10px] ml-3 mb-3" onClick={handleCancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <strong className="text-base text-violet-900">Name:</strong> {user.name}
                </div>
                <div>
                  <strong className="text-base text-violet-900">Email:</strong> {user.email}
                </div>
                <div>
                  <strong className="text-base text-violet-900">Phone:</strong> {user.phone}
                </div>
                <div className="flex justify-center mt-4">
                  <button className="rounded-full bg-red-300 w-[50px] h-[30px] text-white hover:bg-red-700 text-[10px] mb-3 flex items-center hover:animate-bounce" onClick={() => handleDelete(user.id)}>
                    <FaTrash className="ml-1 mr-1" />
                    Delete
                  </button>
                  <button className="rounded-full bg-indigo-300 w-[50px] h-[30px] text-white hover:bg-indigo-500 text-[10px] ml-3 mb-3 flex items-center hover:animate-bounce" onClick={() => handleEdit(user)}>
                    <FaEdit className="ml-1 mr-1" />
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default UserList;

