import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';


const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get("http://localhost:8000/api/users",
        {
          headers: {
            Authorization: token
          }
        }
      )
      setUsers(response.data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  // logout function
  const Logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  // Delete Function
  const DeleteUser = async (id) => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.delete(`http://localhost:8000/api/delete/${id}`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      setUsers(
        users.filter((user) => (
          user._id !== id
        ))
      )
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    
    <section className="bg-[#843e71] min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded shadow-2xl p-4 md:p-7 overflow-hidden">
        <h1 className="text-[#843e71] text-center text-2xl font-bold my-3">
          Dashboard
        </h1>

        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-[#843e71] text-white px-4 py-2 rounded"
            onClick={Logout}
          >
            Logout
          </button>

          <Link
            to="/Add"
            className="bg-[#843e71] text-white p-2 rounded"
          >
            <FaUserPlus />
          </Link>
        </div>

        {/* Table Responsive */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead className="bg-[#843e71] text-white">
              <tr>
                <th className="p-3">No.</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.address}</td>

                  <td className="p-3">
                    <div className="flex gap-3 text-xl">
                      <Link to={`/edit/${user._id}`}>
                        <FaRegEdit />
                      </Link>

                      <button
                        onClick={() => DeleteUser(user._id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Users


