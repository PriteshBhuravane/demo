import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    axios.get("https://demo-dc75.onrender.com/captains/login", {
        headers: {
            Authorization: `Bearer ${token}`
        }
        }).then((response) => {
            if(response.status === 200){
                localStorage.removeItem('token')
                navigate('/login')
            }
        }).catch((error) => {
            console.error(error)
        })

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout