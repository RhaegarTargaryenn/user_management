import React, { useState } from 'react';
import UserForm from './Components/userForm';
import UserList from './Components/userList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (userId, updatedUser) => {
    setUsers(users.map((user) => {
      if (user.id === userId) {
        return { ...user, ...updatedUser };
      }
      return user;
    }));
  };

  return (
    <div className='bg-gradient-to-r from-teal-200 to-teal-500' >
      <h1 className='flex justify-center tracking-[30px] text-[60px]  font-[Lucida Console] animate-pulse bg-gradient-to-br from-fuchsia-300 via-zinc-900 to-amber-500 bg-clip-text text-transparent'>USER MANAGEMENT</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
    </div>
  );
};

export default App;
