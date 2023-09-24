import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li> <NavLink className="text-lg mr-3" to={'/'}>Home</NavLink> </li>
        <li> <NavLink className="text-lg" to={'/appliedjobs'}>Applied Jobs</NavLink> </li>
        <li> <NavLink className="text-lg ml-3" to={'/blog'}>Blog</NavLink> </li>
    </>

    return (
        <>
            <header>
                <div className="navbar container mx-auto px-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link className="normal-case text-2xl font-semibold" to={'/'}>CareerHub</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="btn bg-gradient-to-r from-primary0 to-primary100 text-white" to={'/'}>Star Applying</Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;


