import {FaBars, FaTimes} from "react-icons/all";
import Logo from '../assets/logo.svg'
import {useState} from "react";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)
  return (
    <section className={"bg-zinc-300 fixed h-[80px] w-screen drop-shadow-lg"}>
      <div className={"flex justify-between items-center w-full h-full px-2"}>
        <div className={"flex items-center"}>
          <img src={Logo} alt="" style={{width: '50px'}}/>
          <ul className={"hidden md:flex"}>
            <li>
              <Link to={'home'} smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'about'} offset={-200} smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li>
              <Link to={'support'} offset={-50}  smooth={true} duration={1000}>
                Support
              </Link>
            </li>
            <li>
              <Link to={'platform'} offset={-100}  smooth={true} duration={1000}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to={'pricing'} offset={-50}  smooth={true} duration={1000}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className={"hidden md:flex pr-4"}>
          <button className={"border-none bg-transparent text-black mr-4"}>Sign In</button>
          <button className={'px-3 py-3 bg-indigo-600 text-white'}>Sign Up</button>
        </div>

        <div className={'md:hidden cursor-pointer mr-4'} onClick={handleClick}>
          {!nav ? <FaBars className={'text-3xl'}/> : <FaTimes className={'text-3xl'} />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>

        <li className={'border-b-2 border-zinc-300 w-full'}>
          <Link onClick={handleClose} to={'home'} smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className={'border-b-2 border-zinc-300 w-full'}>
          <Link onClick={handleClose} to={'about'} offset={-200} smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className={'border-b-2 border-zinc-300 w-full'}>
          <Link onClick={handleClose} to={'support'} offset={-50}  smooth={true} duration={1000}>
            Support
          </Link>
        </li>
        <li className={'border-b-2 border-zinc-300 w-full'}>
          <Link onClick={handleClose} to={'platform'} offset={-100}  smooth={true} duration={1000}>
            Platforms
          </Link>
        </li>
        <li className={'border-b-2 border-zinc-300 w-full'}>
          <Link onClick={handleClose} to={'pricing'} offset={-50}  smooth={true} duration={1000}>
            Pricing
          </Link>
        </li>

        <div className={'flex flex-col my-4'}>
          <button className={'bg-transparent text-indigo-600 px-8 py-3 mb-4'}>Sign In</button>
          <button className={'px-8 py-3 bg-indigo-600 text-white'}>Sign Up</button>
        </div>
      </ul>
    </section>
  )
}
export default Navbar