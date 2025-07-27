import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUser } from './userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Update() {
  const users = useSelector((state) => state.users)
  const {id} = useParams();
  const existingUser = users.filter(f => f.id == id)
  const {name, email} = existingUser[0] 
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate() 


  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateUser({
      id: id,
      name: uname, 
      email: uemail,
    }))
    navigate('/')
  }

  return (
    <div className='flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='enter name' 
                    value={uname} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='entre email'
                    value={uemail} onChange={e => setEmail(e.target.value)} />
                </div> <br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}
