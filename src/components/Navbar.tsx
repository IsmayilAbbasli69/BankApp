import React,{useState} from 'react'
import { close,logo,menu } from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
    
 const [toggle,setToggle]=useState<boolean>(true);

 const [active, setActive] = useState<string>("Home");
    
  return (
<nav className='w-full flex py-6 justify-between items-center navbar'>
<img src={logo} className='w-[120px] h-[30px]' />

<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
{
    navLinks.map((nav,index)=>(
        <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
    ))
}
</ul>
<div className='sm:hidden justify-end items-center flex flex-1'>
<img src={toggle? menu : close} onClick={()=>setToggle(!toggle)} className='w-[28px] h-[28px] object-contain' />
</div>
<div
className={`${toggle? 'hidden':'flex'} p-6 bg-black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
>
<ul className='list-none flex justify-end items-center flex-1 flex-col'>
{
    navLinks.map((nav,index)=>(
        <li
        key={nav.id}
        className={`font-poppins font-medium cursor-pointer text-[16px] ${
          active === nav.title ? "text-white" : "text-dimWhite"
        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
        onClick={() => setActive(nav.title)}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))
}
</ul>
    
</div>
</nav>
  )
}

export default Navbar
