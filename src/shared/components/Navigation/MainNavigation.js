import React, {useState} from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

import "./MainNavigation.css"
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = props => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerOpen(true)
    };

    const closeDrawerHandler = () => {
        setDrawerOpen(false);
    }

    return(
<React.Fragment>
    {drawerOpen && <Backdrop onClick={closeDrawerHandler} />}
    <SideDrawer show={drawerOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
            <NavLinks />
        </nav>
    </SideDrawer>
    <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
        </button>
        <Link to="/"><h1 className="main-navigation__title">WanderShare</h1></Link>
        <nav className="main-navigation__header-nav">
            <NavLinks></NavLinks>
        </nav>
    </MainHeader>
</React.Fragment>
    );
};

export default MainNavigation;