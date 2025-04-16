import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import AuthButtons from "./AuthButtons";

function Header() {
  return (
    <header className="bg-[#F5F7FA] w-full h-[84px] fixed top-0 z-[50] shadow-md flex items-center justify-between px-8">
      <Logo />
      <Nav />
      <AuthButtons />
    </header>
  );
}

export default Header;
