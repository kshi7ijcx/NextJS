'use client'

import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(name, email, password);
    let response = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    if(!response.ok){
      alert('user added successfully')
    }else{
      alert('an error occured')
    }
  }

  return (
    <div className="flex flex-col w-60 gap-3 m-4 text-black">
      <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className='bg-blue-500' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default Page