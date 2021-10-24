import { Link } from "react-router-dom";



const Nav = () => (
    <nav className="w-screen relative mb-5 flex bg-gradient-to-r from-purple-800 to-purple-600">
        <div className="p-5 dark:text-white">
            <Link to="/">
                Pokemon Dict
            </Link>
        </div>
        <div className="p-5 dark:text-white">
            <Link to="/info">
                Info
            </Link>
        </div>
    </nav>
);


export default Nav;