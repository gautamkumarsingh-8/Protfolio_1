import React, { useState } from 'react';
import mohit from "../img/mohit.png";
import { Link } from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (

        <nav className='fixed top-0 w-[100%] p-2 border-b bg-background/95 backdrop-blur supports-[background-filter]:bg-background/60'>
            <div className='max-w-[1240px] items-center mx-auto flex justify-between text-[21px]
                '>
                <div className='w-52'>
                    <img src={mohit} />
                </div>
                {
                    toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className='block text-3xl md:hidden' />

                        :
                        <CgMenuRightAlt onClick={() => setToggle(!toggle)} className='block text-3xl md:hidden' />


                }

                <ul className='hidden gap-5 md:flex'>

                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>

                    <li>
                        <Link to="/#project">Project</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

                {/* Responsive Menu */}
                <ul className={` duration-400 md:hidden gap-5  bg-[#ffffffd7] fixed 
                top-[60px] w-full text-center h-screen  ${toggle ? 'left-[0]' : 'left-[-100%]'} `}  >


                    <li className='p-7'>

                        <Link to="/skills">Skills</Link>
                    </li>

                    <li className='p-7'>
                        <Link to="/#project">Project</Link>
                    </li>
                    <li className='p-7'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='p-7'>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </nav >

    )
}

export default Navbar