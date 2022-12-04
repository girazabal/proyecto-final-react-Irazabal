import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Categories from "../Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <Link to='/' className="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse">
        <Categories/>
        <Form/>
    </div>
    <CartWidget/>
    </div>
</nav>
    );
}

export default Navbar;
