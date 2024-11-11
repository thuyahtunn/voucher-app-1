import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import { apiUrl } from "../api/constant";
import useUserDataStore from "../store/useUserDataStore";

const ChangeUserNamePage = () => {
  const { register, reset, handleSubmit } = useForm();
  const [userToken, setUserToken] = useCookie("token");
  const [userData, setUserData] = useCookie("user");
  const { userStore, setUserStore } = useUserDataStore();

  const handleForm = async (data) => {
    console.log(userToken);
    const res = await fetch(`${apiUrl}/user-profile/change-name`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    // console.log(res);
    const json = await res.json();
    // console.log(json);
    if (res.ok) {
      setUserData(JSON.stringify(json.user)); //changed cookie
      setUserStore(json.user); //changed global state
      reset();
    } else {
      console.log("d mhr d mhr");
    }
  };
  // console.log(userData);
  // console.log(userStore);
  return (
    <Container>
      <BreadCrumb
        pageTitle={"Change Name"}
        links={[
          {
            pathName: "/dashboard/user-profile",
            currentPageTitle: "User Profile",
          },
        ]}
      />
      <div className=" border p-8 shadow-sm flex justify-center">
        <form
          onSubmit={handleSubmit(handleForm)}
          className=" flex gap-1 w-3/5  justify-between items-center"
        >
          <input
            {...register("name")}
            type="text"
            className=" px-4 py-2 border-2 bg-stone-50 border-stone-500 text-sm font-semibold flex-grow"
          />
          <button
            type="submit"
            className=" border-2 border-blue-500 px-5 text-stone-50 bg-blue-500 rounded py-2 font-semibold"
          >
            Change Password
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ChangeUserNamePage;
