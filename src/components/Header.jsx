import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className=" pt-5 pb-3.5 print:hidden">
      <Container>
        <h1 className=" text-2xl font-bold">Voucher App</h1>
        <h3 className=" text-xl font-bold text-stone-600">MMS Software</h3>
      </Container>
    </header>
  );
};

export default Header;
