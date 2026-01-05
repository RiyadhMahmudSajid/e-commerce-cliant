import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { ShoppingCart, Search, Menu, Moon, Sun, User, X, ChevronDown } from 'lucide-react';
import { ThemeContext } from '../../../providers/ThemeProvider';

import useUserRole from '../../../hooks/useUserRole';
import Loading from '../../loading/Loading';
import { AuthContex } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import useCategory from '../../../hooks/useCategory';
import useProduct from '../../../hooks/useProduct';
import { CartContext } from '../../../providers/CartProvider';



const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
];

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const { products } = useProduct();
    const { cart } = useContext(CartContext);
    console.log("pro is", products);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { categories } = useCategory()
    console.log("cat is", categories);
    const { user, logOut } = useContext(AuthContex)
    // console.log(user);
    const { role, allLoading } = useUserRole()
    // console.log(role);
    if (allLoading) {
        return <Loading></Loading>
    }

    const handleLogOut = () => {
        toast.success("Logout Successful")
        logOut()
    }
    const activeStyle = "text-accent border-b-2 border-accent pb-1";
    const normalStyle = "text-text-muted hover:text-accent transition-all duration-300 font-medium";

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <nav className="sticky top-0 z-50 bg-surface backdrop-blur-md border-b border-border-color transition-colors duration-300">

            {/* <p>{user?.displayName}</p> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <NavLink to="/" className="flex items-center space-x-2 group">
                        <div className="bg-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">
                            <ShoppingCart className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-text-main">
                            Shop<span className="text-accent italic">Hub</span>
                        </span>
                    </NavLink>

                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => {
                            if (link.name == "Categories") {

                                return (
                                    <div className='relative group'>
                                        <button className="flex items-center gap-1 ">
                                            Categories
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                        </button>
                                        <div className="absolute right-0 top-[98%] w-48 bg-bg-primary border border-border-color rounded-[1rem] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 p-5">
                                            {
                                                categories?.map((cat) => (
                                                    <NavLink to={`category/${cat.category}`} className="flex py-2" key={cat.category}>
                                                        {cat.category}
                                                    </NavLink>
                                                ))
                                            }
                                        </div>

                                    </div>

                                )
                            }
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? `${normalStyle} ${activeStyle}` : normalStyle)}
                                >
                                    {link.name}
                                </NavLink>
                            )

                        })}



                    </div>

                    <div className="hidden md:flex items-center space-x-3">

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setSearch(value)
                                    if (value.length > 0) {
                                        const filterd = products.filter((p) => p.name.toLowerCase().includes(value.toLowerCase())).slice(0, 5);
                                        console.log("fil is", filterd);
                                        setSuggestions(filterd);

                                    } else {
                                        setSuggestions([]);
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && search.trim()) {
                                        navigate(`/search?query=${search}`);
                                        setSearch("");
                                        setSuggestions([]);
                                    }
                                }}
                                className="pl-9 pr-4 py-1.5 rounded-xl border border-border-color bg-bg-secondary text-text-main focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all w-40 focus:w-60"
                            />
                            <Search className="absolute left-3 top-2 w-4 h-4 text-text-muted group-focus-within:text-accent" />
                            {suggestions.length > 0 && (
                                <ul className="absolute w-full bg-bg-primary border border-border-color rounded-xl mt-1 shadow-lg z-50">
                                    {suggestions.map(product => (
                                        <li
                                            key={product._id}
                                            onClick={() => {
                                                navigate(`/search?query=${product.name}`);
                                                setSearch("");
                                                setSuggestions([]);
                                            }}
                                            className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-white"
                                        >
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-xs text-text-muted">
                                                {product.category}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-bg-secondary text-text-main hover:bg-accent-soft hover:text-accent transition-all"
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        <div className="relative group py-4">
                            <button className="flex items-center gap-1 p-2.5 rounded-xl bg-bg-secondary text-text-main hover:bg-accent-soft hover:text-accent transition-all">
                                <User size={18} />
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            <div className="absolute right-0 top-[85%] w-64 bg-bg-primary border border-border-color rounded-[2rem] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 p-5">

                                <div className="mb-4">
                                    <p className="text-sm font-black text-text-main">Welcome Back!</p>
                                    <p className="text-[11px] text-text-muted">Manage your account & store</p>
                                </div>

                                {role == 'admin' && (
                                    <div className="bg-bg-secondary rounded-2xl p-3 mb-3 border border-accent/10">
                                        <p className="text-[10px] font-black text-accent uppercase mb-2 ml-1 tracking-widest">Admin Control</p>
                                        <nav className="space-y-1">
                                            <NavLink to="/dashboard" className="flex items-center px-3 py-2 text-xs font-bold text-text-main hover:bg-accent hover:text-white rounded-xl transition-all">
                                                Dashboard Overview
                                            </NavLink>
                                            <NavLink to="/admin/add-product" className="flex items-center px-3 py-2 text-xs font-bold text-text-main hover:bg-accent hover:text-white rounded-xl transition-all">
                                                Add New Product
                                            </NavLink>
                                        </nav>
                                    </div>
                                )}


                                <div className="border-t border-border-color my-3"></div>

                                <nav className="space-y-1">

                                    {
                                        role == 'user' && (<div>
                                            <NavLink to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-text-main hover:bg-bg-secondary rounded-lg transition-colors">
                                                My Profile
                                            </NavLink>
                                        </div>

                                        )
                                    }

                                    {
                                        user ? <button onClick={handleLogOut} className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-danger hover:bg-danger/10 rounded-lg transition-colors mt-2">
                                            Logout
                                        </button> : <Link to='/login' className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-danger hover:bg-danger/10 rounded-lg transition-colors mt-2">
                                            Login
                                        </Link>
                                    }

                                </nav>

                            </div>
                        </div>

                        <Link to='/cart'>
                            <button className="relative p-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover transition-all shadow-md shadow-accent/20 group">
                                <ShoppingCart size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="absolute -top-1.5 -right-1.5 bg-danger text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-bg-primary">
                                    {totalCount}
                                </span>
                            </button>
                        </Link>


                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-xl bg-bg-secondary text-text-main"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden fixed inset-x-0 top-16 bg-bg-primary border-b border-border-color transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-xl font-semibold transition-all ${isActive ? "bg-accent-soft text-accent" : "text-text-muted hover:bg-bg-secondary"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <div className="pt-4 flex items-center justify-around border-t border-border-color">
                        <button onClick={toggleTheme} className="p-3 bg-bg-secondary rounded-2xl text-text-main">
                            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                        </button>
                        <NavLink to="/login" className="p-3 bg-bg-secondary rounded-2xl text-text-main">
                            <User size={22} />
                        </NavLink>
                        <Link to='/cart'>
                            <button className="relative p-3 bg-accent rounded-2xl text-white">
                                <ShoppingCart size={22} />

                                <span className="absolute top-1 right-1 bg-danger text-[10px] w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-bg-primary">{totalCount}</span>

                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}