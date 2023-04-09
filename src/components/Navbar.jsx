import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../images/logo_transp.png'
import { useState } from 'react';

const NavbarItem =({title, classProps})=>{
    return(<li className={'mx-4 cursor-pointer ${classProps} '}>
        {title}
    </li>)
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav className='banner'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt = 'logo' height='100' className='logo'></img>
            </div>

            <ul className='items'>
                {["Découvrez le projet", "Découvrez l'équipe"].map((item, index)=>(
                    <NavbarItem key = {item+index} title={item}/>
                ))}

                <li className='circle'>
                    Login
                </li>
            </ul>

            <div className='flex relative'>
                {toggleMenu
                ? <AiOutlineClose fontSize={40} className='text-black md:hidden cursor-pointer' onClick={()=> setToggleMenu(false)}/>
            :<HiMenuAlt4 fontSize={40} className='text-black md:hidden cursor-pointer' onClick={()=> setToggleMenu(true)}/>}
            {toggleMenu && (
                <ul style={{ listStyleType: 'none' }}>
                    {["Découvrez le projet", "Découvrez l'équipe"].map((item, index)=>(
                    <NavbarItem key = {item+index} title={item} classProps="my-2 text-lg"/>
                ))}
                </ul>
            )}
            
            </div>
            
        </nav>
    );
}

export default Navbar;