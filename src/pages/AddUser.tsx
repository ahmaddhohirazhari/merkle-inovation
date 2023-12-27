import { useState } from "react";
import Swal from "sweetalert2";
import { addUser } from "../services/users";
// import { UserResultInterface } from "../interfaces/user.interface";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { UserResultInterface } from "../interfaces/user.interface";

export default function FormUser() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [street, setStreet] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData: UserResultInterface = {
      name: {
        firstname,
        lastname,
      },
      username,
      email,
      phone,
      password,
      address: {
        city,
        street,
        zipcode,
        number,
      },
    };

    addUser(formData)
      .then((response) => {
        setLoading(true);
        console.log(loading);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Success Add New User ID : ${response.data.id}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <Header />
      <div className="max-h-full my-10 md:mx-60  md:mt-24  bg-slate-400 rounded-xl p-5 shadow-md">
        <h1 className="font-bold text-lg mt-10">Create New User</h1>
        <div className="mt-3 grid md:grid-cols-2 gap-3">
          <div>
            <label className=" mt-5">Frist Name</label>
            <input
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
            <label>Username</label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <label>Phone</label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
            <label>City</label>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="city"
              id="city"
              placeholder="City"
            />
            <label>Number</label>
            <input
              onChange={(e) => {
                setNumber(e.target.valueAsNumber);
              }}
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
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
            <label>Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
            <label>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <label>Street</label>
            <input
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              className="w-full mb-3 border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="street"
              id="street"
              placeholder="Street"
            />
            <label>Zip Code</label>
            <input
              onChange={(e) => {
                setZipcode(e.target.value);
              }}
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
