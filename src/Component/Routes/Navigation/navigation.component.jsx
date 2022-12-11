import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as  Logo} from '../../Assets/crown.svg'
import './navigation.styles.scss'
// OUTLET used for parent element to render its children

const Navbar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link> <Link className="nav-link" to="/SignIn">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
