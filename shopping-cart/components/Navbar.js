import react from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand"> SAHE Store</a>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button>
        </nav>
    );
};

export default Navbar;