import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] justify-center flex items-center gap-2">
      <img src={logo} className="w-[20px]" alt="joki koding" />
      <h1 className="text-white font-medium text-[20px]">MeshCode.id</h1>
    </div>
  );
};

export default Navbar;
