import React, { useState } from 'react';


const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    addUser(user);

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className='flex items-center justify-center pr-[140px] pt-10'>
      <h2 className='relative bottom-[100px] left-[240px] underline font-[Lucida Console]  bg-gradient-to-br from-fuchsia-300 via-zinc-900 to-amber-500 bg-clip-text text-[20px]'>Add User</h2>
      <form className='pt-5' onSubmit={handleSubmit}>
        <label className='text-2xl text-violet-900'>
          Name:
          <input className='rounded-[10px] ml-2 pl-3 text-sm w-[300px]'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className='text-2xl text-violet-900'>
          Email:
          <input className='rounded-[10px] ml-4 mt-2 pl-3  text-sm w-[300px]'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className='text-2xl text-violet-900'>
          Phone:
          <input className='rounded-[10px] ml-1 mt-2  pl-3 text-sm w-[300px]'
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button className='relative left-[110px] mt-4 rounded-full bg-indigo-500 w-[170px] h-[50px] text-white hover:bg-orange-500' type="submit">Add user</button>
       
      </form>
    </div>
  );
};

export default UserForm;
