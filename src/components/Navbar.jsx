import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* left side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl px-2">
                    Best <span className="font-bold text-orange-600">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-300 p-1 rounded-full text-[14px]">
                    <p className="bg-orange-600 p-2 rounded-full text-white">
                        Delivery
                    </p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* search input */}
            <div className="bg-gray-200 rounded-full px-2 flex items-center w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={22} className="text-orange-600" />
                <input
                    className="bg-transparent p-2 w-full focus:outline-none"
                    type="text"
                    placeholder="Search foods"
                />
            </div>

            {/* cart button */}
            <button className="bg-orange-600 text-white hidden md:flex items-center py-2 gap-2 rounded-full outline-none border-none">
                <BsFillCartFill size={20} />
                Cart
            </button>

            {/* moblie menu */}
            {/* overlay */}

            {nav ? (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            ) : (
                ""
            )}

            {/* side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <div>
                    <AiOutlineClose
                        size={25}
                        className="absolute right-4 top-4 cursor-pointer"
                        onClick={() => setNav(!nav)}
                    />
                </div>
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold text-orange-600">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex">
                            <TbTruckDelivery
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Orders
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdFavorite
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Favorites
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaWallet
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Wallet
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdHelp
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Help
                        </li>
                        <li className="text-xl py-4 flex">
                            <AiFillTag
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Promotions
                        </li>
                        <li className="text-xl py-4 flex">
                            <BsFillSaveFill
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Best One
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaUserFriends
                                size={25}
                                className="mr-4 text-orange-600"
                            />{" "}
                            Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
