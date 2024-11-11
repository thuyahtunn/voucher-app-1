import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import ProductCreateForm from "../components/ProductCreateForm";

const CreateProductPage = () => {
  return (
    <Container>
      <BreadCrumb
        pageTitle={"Create Product"}
        links={[{ currentPageTitle: "Product", pathName: "/product" }]}
      />
      <ProductCreateForm />
    </Container>
  );
};

export default CreateProductPage;
