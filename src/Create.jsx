import { useState } from "react"
import { addUser } from "./userReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id + 1, name: name, email: email}))
        navigate('/')
    }

  return (
    <div className='flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h1>Add New User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='enter name' 
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='entre email'
                    onChange={e => setEmail(e.target.value)}
                     />
                </div> <br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}
