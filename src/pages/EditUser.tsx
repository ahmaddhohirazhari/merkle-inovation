import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { EditUser, detailUser } from "../services/users";
// import { UserResultInterface } from "../interfaces/user.interface";
import Header from "../components/header";
import { useNavigate, useParams } from "react-router-dom";
import { UserResultInterface } from "../interfaces/user.interface";

export default function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [street, setStreet] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserResultInterface>({});

  const getDetailUser = (id: any) => {
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

  const handleEmail = (e: any) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleUsername = (e: any) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePhone = (e: any) => {
    setUser({ ...user, phone: e.target.value });
  };
  const handlePassword = (e: any) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleFirstName = (e: any) => {
    const updatedFirstName = e.target.value;
    setFirstname(updatedFirstName);
    setUser({
      ...user,
      name: {
        ...user.name,
        firstname: firstname,
      },
    });
  };
  const handleLastName = (e: any) => {
    const updatedLastName = e.target.value;
    setLastname(updatedLastName);

    setUser({
      ...user,
      name: {
        ...user.name,
        lastname: lastname,
      },
    });
  };
  const handleCity = (e: any) => {
    const updatedCity = e.target.value;
    setCity(updatedCity);
    setUser({
      ...user,
      address: {
        ...user.address,
        city: city,
      },
    });
  };
  const handleStreet = (e: any) => {
    const updatedStreet = e.target.value;
    setStreet(updatedStreet);

    setUser({
      ...user,
      address: {
        ...user.address,
        street: street,
      },
    });
  };
  const handleNumber = (e: any) => {
    const updatedNumber = e.target.value;
    setNumber(updatedNumber);
    setUser({
      ...user,
      address: {
        ...user.address,
        number: number,
      },
    });
  };
  const handleZipCode = (e: any) => {
    const updatedZipcode = e.target.value;
    setZipcode(updatedZipcode);

    setUser({
      ...user,
      address: {
        ...user.address,
        zipcode: zipcode,
      },
    });
  };

  const handleSubmit = () => {
    if (user) {
      EditUser(user?.id, user)
        .then((response) => {
          setLoading(false);
          if (response) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Edit Data Success",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              navigate("/");
            }, 1500);
          }
        })
        .catch((error) => {
          setLoading(false);

          const message = error.response.data;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
          });
        });
    }
  };

  return (
    <>
      <Header />
      <div className="max-h-full my-10 md:mx-60  md:mt-24 bg-slate-400 rounded-xl p-5 shadow-md">
        <h1 className="font-bold text-lg mt-10">Edit Data User</h1>
        <div className="mt-3 grid md:grid-cols-2 gap-3">
          <div>
            <label className=" mt-5">Frist Name</label>
            <input
              onChange={handleFirstName}
              value={user?.name?.firstname}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
            <label>Username</label>
            <input
              onChange={handleUsername}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="username"
              value={user?.username}
              id="username"
              placeholder="Username"
            />
            <label>Phone</label>
            <input
              onChange={handlePhone}
              value={user?.phone}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
            <label>City</label>
            <input
              onChange={handleCity}
              value={user?.address?.city}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="city"
              id="city"
              placeholder="City"
            />
            <label>Number</label>
            <input
              onChange={handleNumber}
              value={user?.address?.number}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="number"
              name="number"
              id="number"
              placeholder="Number"
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              onChange={handleLastName}
              value={user?.name?.lastname}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
            <label>Email</label>
            <input
              onChange={handleEmail}
              value={user?.email}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
            <label>Password</label>
            <input
              onChange={handlePassword}
              value={user?.password}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <label>Street</label>
            <input
              onChange={handleStreet}
              value={user?.address?.street}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="street"
              id="street"
              placeholder="Street"
            />
            <label>Zip Code</label>
            <input
              onChange={handleZipCode}
              value={user?.address?.zipcode}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="zipcode"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-green-600 rounded p-2 w-40"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}
