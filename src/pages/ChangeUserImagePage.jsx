import React, { useRef } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import userPlaceholder from "../assets/user-placeholder.png";
import { useForm } from "react-hook-form";

import useUserDataStore from "../store/useUserDataStore";
import { Link } from "react-router-dom";
import { HiCamera } from "react-icons/hi2";
import { apiUrl } from "../api/constant";
import reactUseCookie from "react-use-cookie";

//user image change loh ma ya thy bu.

const ChangeUserImagePage = () => {
  const {
    userStore: { profile_image },
  } = useUserDataStore();

  const fileInputRef = useRef();
  const { register, handleSubmit, reset } = useForm();
  const [userToken] = reactUseCookie("token");
  const [userData, setUserData] = reactUseCookie("user");
  const { userStore, setUserStore } = useUserDataStore();

  const handleCameraBtn = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleUpdateImage = async (event) => {
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);
    const res = await fetch(`${apiUrl}/user-profile/change-profile-image`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(res);
    const json = await res.json();
    console.log(json);
    if (res.ok) {
      setUserData(JSON.stringify(json.user));
      setUserStore(json.user);
    } else {
      console.log("a sin ma pyay pr");
    }
  };

  return (
    <Container>
      <BreadCrumb
        pageTitle={"Change Profile Image"}
        links={[
          {
            pathName: "/dashboard/user-profile",
            currentPageTitle: "User Profile",
          },
        ]}
      />
      <div className=" border p-8 shadow-sm flex justify-start">
        <form className=" flex flex-col w-3/5 items-start gap-5">
          <div className=" relative">
            <img
              src={profile_image ? profile_image : userPlaceholder}
              alt="user-image"
              className=" size-28 rounded border-stone-50"
            />
            <button
              onClick={handleCameraBtn}
              className=" absolute bottom-0 right-0 transform translate-x-2 translate-y-2 size-7 flex items-center justify-center border bg-blue-500 border-stone-50 rounded-full "
            >
              <HiCamera className=" text-stone-50 size-4 " />
            </button>
          </div>
          <input
            className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
            id="file_input"
            ref={fileInputRef}
            onChange={handleUpdateImage}
            type="file"
          />
        </form>
      </div>
    </Container>
  );
};

export default ChangeUserImagePage;

// import React, { useRef } from "react";
// import { HiCamera } from "react-icons/hi";

// function ImageUploader() {
//   const fileInputRef = useRef(null);

//   const handleUpdateImage = (event) => {
//     console.log("File selected");
//   };
//   const handleCameraBtn = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <>
//       <input
//         className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
//         id="file_input"
//         ref={fileInputRef}
//         onChange={handleUpdateImage}
//         type="file"
//       />
//       {/* <input
// //             className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
// //             id="file_input"
// //             ref={fileInputRef}
// //             onChange={handleUpdateImage}
// //             type="file"
// //           /> */}
//       <button
//         onClick={handleCameraBtn}
//         className="  bottom-0 right-0 transform translate-x-2 translate-y-2 size-7 flex items-center justify-center border bg-blue-500 border-stone-50 rounded-full "
//       >
//         <HiCamera className=" text-stone-50 size-4 " />
//       </button>
//     </>
//   );
// }

// export default ImageUploader;
