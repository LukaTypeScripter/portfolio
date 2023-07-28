import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import HamBurgerMenu from '../assets/menu-icon.svg'
import CloseHamBurgerMenu from '../assets/close-icon.svg'
const Link = ({page,selectedPage,setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
        hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >{page}</AnchorLink>
    )
}

const Navbar = ({selectedPage,setSelectedPage,isTopOfPage}) => {
    const [isMenuToggled,setIsMenuToggled] = useState(false)
    const isAboveSmallScrenns = useMediaQuery('(min-width:768px)')
    const navbarBackground =  isTopOfPage ? '' : 'bg-red'
    return (
        <nav className={`${navbarBackground}z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">lS</h4>

                {/**dekstop Nav */}

                {isAboveSmallScrenns ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Testemonials"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                ): (
                    <button
                    className="rounded-full bg-red p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src={HamBurgerMenu} alt="menu"  />
                    </button>
                )}

                {/**mobile pop up */}
                {!isAboveSmallScrenns && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] z-10">
                        <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src={CloseHamBurgerMenu} alt="close-icon" />
                        </button>
                        </div>

                        {/**menu items */}

                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                        <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Testemonials"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                         <Link 
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;