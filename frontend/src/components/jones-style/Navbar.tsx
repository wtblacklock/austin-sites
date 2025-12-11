"use client";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { bbq } from "@/config/bbq.config";

export function NavbarComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animate in on load
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar 
      fluid 
      rounded 
      className={`bg-[#db4439] fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[125px] [&>div]:h-full [&>div]:flex [&>div]:items-center scroll-fade-in ${
        isLoaded ? "visible" : ""
      }`}
      style={{ 
        backgroundColor: '#db4439',
        opacity: isVisible ? 0.9 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        height: '125px'
      }}
    >
      <NavbarBrand href="/" className="flex items-center">
        <Image
          src="/images/logo_black.png"
          alt="Logo"
          width={216}
          height={72}
          className="h-[72px] w-auto"
          style={{ filter: 'brightness(0) saturate(100%) invert(96%) sepia(5%) saturate(200%) hue-rotate(330deg) brightness(98%) contrast(92%)' }}
        />
      </NavbarBrand>
      <div className="flex md:order-2 gap-4 items-center">
        <Link href={`tel:${bbq.phone.replace(/\D/g, '')}`}>
          <Button 
            className="inline-block text-center uppercase border-0 relative flex items-center justify-center"
            style={{
              backgroundColor: 'rgb(241, 232, 219)',
              color: 'rgb(219, 68, 57)',
              borderRadius: '300px',
              boxShadow: 'rgb(118, 40, 36) -8px 8px 0px 0px',
              fontFamily: 'Anton',
              fontSize: '19.6096px',
              fontStyle: 'normal',
              fontWeight: 400,
              letterSpacing: '0.392192px',
              paddingTop: '24px',
              paddingBottom: '24px',
              paddingLeft: '40.08px',
              paddingRight: '40.08px',
              textTransform: 'uppercase',
              textAlign: 'center',
              transition: 'opacity 0.1s linear',
              WebkitFontSmoothing: 'antialiased',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            ORDER AHEAD
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#visit" className="font-chunky text-[20px] text-[#F1E7DA] hover:text-[#8B2E26]" style={{ color: '#F1E7DA' }}>
          MENU
        </NavbarLink>
        <NavbarLink href="#reviews" className="font-chunky text-[20px] text-[#F1E7DA] hover:text-[#8B2E26]" style={{ color: '#F1E7DA' }}>
          REVIEWS
        </NavbarLink>
        <NavbarLink href="#info" className="font-chunky text-[20px] text-[#F1E7DA] hover:text-[#8B2E26]" style={{ color: '#F1E7DA' }}>
          INFO
        </NavbarLink>
        <NavbarLink href="#contact" className="font-chunky text-[20px] text-[#F1E7DA] hover:text-[#8B2E26]" style={{ color: '#F1E7DA' }}>
          CONTACT
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

