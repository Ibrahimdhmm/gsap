'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Link from 'next/link';
import { brainwaveSymbol } from '../assets/'
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header';
import { usePathname } from 'next/navigation';
import { navigation } from '../constants';


const Navbar = () => {

  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {

    if (openNavigation) { 
      setOpenNavigation(false);
      enablePageScroll();
    }
    
    if (!openNavigation) {
      setOpenNavigation(true);
      disablePageScroll();
     }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }
  
  // console.log(pathname)
  // console.log(navigation.map((item) => console.log(item.url)));


  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8
    ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm' }
    `}>

      <div className='lg:px-7.5 xl:px-10 max-lg:py-4 px-5 items-center flex'>
         <Link href='/' className='block w-[12rem] xl:mr-8'>
          <Image src={brainwaveSymbol} alt='logo' width={40} height={40} />
        </Link>
      
      <nav className={`${openNavigation ? 'flex' : 'hidden'}
      bg-n-8 fixed bottom-0 left-0 right-0 top-[5rem] lg:static lg:mx-auto lg:flex lg:bg-transparent
      `}>
      <div className='z-2 relative m-auto lg:flex items-center justify-center'>
         {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={handleClick}
            className={`font-code text-n-1 hover:text-color-1 relative block text-xl uppercase transition-colors
            lg:-mr-0.25 px-6 py-6 md:py-8 lg:text-xs lg:font-semibold
            lg:hover:text-n-1 lg:leading-5 xl:px-22
            ${item.onlyMobile ? 'lg:hidden' : '' }
            ${true ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
            `}>
            {item.title}
          </a>
        ))}    
       </div>
        <HamburgerMenu />
      </nav>

       <a
        href='#signup'
        className='text-n-1/50 hover:text-n-1 button mr-8 hidden transition-colors lg:block'
      >
        New account  
       </a>
      
       <Button className='hidden lg:flex' href='#login'>
          Sign in
        </Button>
      
       <Button className='ml-auto lg:hidden' px='px-3' onClick={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
      </Button>

      </div>
    </div>
  );
};

export default Navbar;

