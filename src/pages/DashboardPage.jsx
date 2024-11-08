import React from "react";
import ModuleBtn from "../components/ModuleBtn";
import { HiCircleStack } from "react-icons/hi2";
import { HiTv } from "react-icons/hi2";
import { HiDocumentDuplicate } from "react-icons/hi2";
import Container from "../components/Container";
import Logout from "../components/Logout";

const DashboardPage = () => {
  return (
    <Container className=" h-full flex flex-col justify-start">
      <div className="grid  grid-cols-1 md:grid-cols-3 px-10 md:px-0 gap-5 py-10">
        <ModuleBtn
          name={"Product Module"}
          url={"/product"}
          icon={<HiCircleStack className=" size-10" />}
        />
        <ModuleBtn
          name={"Sale Module"}
          url={"/sale"}
          icon={<HiTv className=" size-10" />}
        />
        <ModuleBtn
          name={"Voucher Module"}
          url={"/voucher"}
          icon={<HiDocumentDuplicate className=" size-10" />}
        />
      </div>
      <Logout />
    </Container>
  );
};

export default DashboardPage;
