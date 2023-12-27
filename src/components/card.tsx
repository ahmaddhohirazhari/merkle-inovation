/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/avatar.jpg";
import { UserResultInterface } from "../interfaces/user.interface";

const Card: React.FC<UserResultInterface> = ({
  address,
  id,
  name,
  email,
  phone,
}) => {
  const navigate = useNavigate();
  const detailAddress = `${address?.street}, ${address?.number} , ${address?.city}, ${address?.zipcode}`;
  const truncatedAddress =
    detailAddress && window.innerWidth <= 768
      ? detailAddress.slice(0, 65) + "..."
      : window.innerWidth <= 1024
      ? detailAddress?.slice(0, 100) + "..."
      : detailAddress;

  const detailName = `${name?.firstname} ${name?.lastname}`;

  const truncatedName =
    detailName && detailName.length >= 25
      ? detailName.slice(0, 22) + "..."
      : detailName;
  return (
    <div
      className={
        " w-[350px] h-[450px] md:w-[300px] md:h-[500px] rounded overflow-hidden shadow-xl  mb-4 "
      }
    >
      <img
        src={Avatar}
        alt={detailName}
        className={"h-60 w-full bg-slate-400"}
      />
      <div className="px-6 py-4">
        <p
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
          className="font-bold text-lg md:text-xl mb-2 underline cursor-pointer"
        >
          {truncatedName || "lorem ipsum dolor sir amet"}
        </p>
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
        <p className="text-gray-700 text-base">
          Address :{" "}
          {truncatedAddress
            ? truncatedAddress.length >= 120
              ? truncatedAddress?.slice(0, 120) + "..."
              : truncatedAddress
            : "lorem ipsum"}
        </p>

        <button
          onClick={() => {
            navigate(`/users/${id}`);
          }}
          className=" bg-blue-500 p-2 mt-10 rounded-md h-10 w-20 font-bold"
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
