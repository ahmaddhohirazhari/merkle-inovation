import Header from "../components/header";
import { UserResultInterface } from "../interfaces/user.interface";
import { useEffect, useState } from "react";
import { allUser } from "../services/users";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";

export default function home() {
  const [users, setUsers] = useState<UserResultInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const limit = 10;

  const getAllUser = () => {
    setLoading(true);
    allUser(limit)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <Header />
      <div className="mt-20">
        <div className="mb-12 " id="trending">
          <div className="container flex justify-between items-center mx-auto px-10 mb-10 ">
            <h1 className="text-[30px] font-bold">Our Team</h1>
            <button
              className=" border-blue-500 border text-blue-500 rounded-md p-2 cursor-pointer"
              onClick={(e) => {
                navigate("/add-user");
              }}
            >
              Add New Member
            </button>
          </div>
          {loading ? (
            <div className="pb-5 px-5 d-flex justify-content-center align-items-center ">
              <div className="lds-ring"></div>
            </div>
          ) : (
            <div className="container-fluid mx-auto px-0">
              <div className="flex overflow-x-scroll  gap-7 md:gap-14 scrollbar-hide">
                {users.map((item, index) => (
                  <div
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ${
                      index === 0 ? "ml-4 md:ml-24" : ""
                    }`}
                    key={item.id}
                  >
                    <Card
                      id={item?.id}
                      name={item?.name}
                      email={item?.email}
                      phone={item?.phone}
                      address={item?.address}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
