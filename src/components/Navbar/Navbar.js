import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<Link to="/">
				<button>Home</button>
			</Link>

			<Link to="/about">
				<button>About</button>
			</Link>

			<Link to="/companies/add">
				<button>Add Company</button>
			</Link>
		</nav>
	);
}

export default Navbar;
