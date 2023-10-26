import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar({animes,children}){

    return (
    <nav className="nav-bar">
        <Logo/>
        {/* <Search animes={animes}/>         */}
        {children}
      </nav>
    );
}