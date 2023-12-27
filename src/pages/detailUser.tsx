import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../assets/avatar.jpg";
import { deleteUser, detailUser } from "../services/users";
import { UserResultInterface } from "../interfaces/user.interface";
import Swal from "sweetalert2";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>() || {};
  const [user, setUser] = useState<UserResultInterface>({});

  const getDetailUser = (id: string) => {
    detailUser(id)
      .then((response) => {
        setUser(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id) {
      getDetailUser(id);
    }
  }, []);

  const openModal = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
          .then((response) => {
            if (response?.status) {
              Swal.fire({
                title: "Deleted!",
                text: `user with ID : ${id}  has been deleted.`,
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <>
      <div className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full"></div>
      <div className="container mx-auto my-0 relative pt-[85px]">
        <div className="m-6  lg:mt-0 lg:ml-6">
          <div className="flex flex-col lg:flex-row items-center justify-between  content">
            <div className="lg:w-1/3 ">
              <img
                src={Avatar}
                alt={user?.name?.firstname}
                className="rounded-lg shadow-lg h-auto max-h-[500px]"
              />
            </div>
            <div className=" lg:w-2/3 text-white p-5  bg-black bg-opacity-50 backdrop-blur-lg  rounded-lg ">
              <h1 className="text-3xl font-semibold mb-4">{`${user?.name?.firstname} ${user?.name?.lastname}`}</h1>
              <p className="text-gray-300 text-sm mb-2">
                Username: {user?.username}
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Email : {user?.email}
              </p>
              <p className="text-gray-300 text-sm mt-4">
                phone: {user?.phone} minutes
              </p>
              <p className="text-gray-300 text-sm mt-4">
                Address :
                {`${user?.address?.street} ${user?.address?.number} ${user?.address?.city}`}
              </p>

              <div className="flex justify-between">
                <Link to={`/update-user/${user.id}`}>
                  <button className="bg-green-500 text-white  p-2 w-20 mt-3 rounded-full mr-2">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white  p-2 w-20 mt-3  rounded-full mr-2"
                  onClick={() => openModal(user?.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
