import React from "react";
import { Nav as NavBar, NavItem, NavLink } from "reactstrap"

function Nav() {
    return (
    <NavBar>
        <NavItem>
            <NavLink active href="#" >
                ToDo
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" >
                Profile
            </NavLink>
        </NavItem>
    </NavBar>
    )
}

export default Nav 