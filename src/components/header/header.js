import React from "react";
import {HeaderWrap} from "./headerStyles";

function Header() {
    return (
        <HeaderWrap>
            <h1>BulldogInsta
                <img className="dog_icon" src = {require("/Users/denyskukishev/WebstormProjects/first_website/src/components/content/imgs/dog_icon.png")} width="70px" height="50px"/>
            </h1>
        </HeaderWrap>
    )
};

export default Header;