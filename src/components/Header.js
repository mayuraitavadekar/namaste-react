import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button className="login-btn">Login</button>
                <button className="logout-btn">Logout</button>
            </div>
        </div>
    )
}

export default Header;
