import React, { useContext } from "react";
import './Header.scss';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Header () {
    const navigate = useNavigate();
    const { user, isAuth, isAdmin, logout } = useContext(AuthContext);

    const redirects = {
        home: () => navigate('/home'),
        dashboard: () => navigate('/dashboard'),
        houses: () => navigate('/houses'),
        login: () => navigate('/login'),
        register: () => navigate('/register'),
        profile: (id) => navigate('/profile/' + id),
    }

    const isUser = isAuth ? <li className="link nav-link" onClick={() => logout()}>Log out</li>
    : <li className="link nav-link" onClick={() => redirects.register()}>Sign up</li>;

    const isUsername = isAuth ? <li className="link nav-link position-relative" onClick={() => redirects.profile(user.id)}>{user.username}</li>
    : <li className="link nav-link" onClick={() => redirects.login()}>Sign in</li>;

    const isAdminUser = isAdmin ? <a className="link nav-link" onClick={() => redirects.dashboard()}>Dashboard</a> : '';

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="header-container container-fluid">
                    <div className="logo" onClick={() => redirects.home()}>
                        <img src="/assets/Logo.png" alt="logo"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNav" aria-controls="headerNav" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar_list collapse navbar-collapse" id="headerNav">
                        <ul className="nav_list navbar-nav">
                            {/* <li className="link nav-link" onClick={() => redirects.home()}>Home</li> */}
                            {/* <li className="link nav-link" onClick={() => redirects.houses()}>Houses</li> */}
                            {isAdminUser}
                            {isUsername}
                            {isUser} 
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}