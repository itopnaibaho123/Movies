import React from "react";
import Search from "./Search/Search";


function Header() {
    return (
        <div className="Header">
            <div className="Name">
                FinProH8
            </div>
            <div className="input">
                <Search/>
                
            </div>
            
        </div>
    )
}
export default Header;