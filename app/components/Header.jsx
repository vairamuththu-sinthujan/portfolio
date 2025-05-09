'use client'
import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  // Refs for animation targets
  const headerRef = useRef(null);
  const backgroundRef = useRef(null);
  const nameRef = useRef(null);
  const buttonRef = useRef(null);
  const iconsRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const desktopSidebarRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin - only do this once
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Safety check to ensure DOM elements are mounted
    if (!headerRef.current) return;

    // Create master timeline with safe defaults
    const masterTl = gsap.timeline({
      defaults: { 
        duration: 0.8, 
        ease: "power2.out"
      }
    });
    
    // Initial load animation - smooth and quick
    if (headerRef.current) {
      masterTl.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      );
    }
    
    // Name animation
    if (nameRef.current) {
      masterTl.fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.3"
      );
    }
    
    // Button animation
    if (buttonRef.current) {
      masterTl.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.4"
      );
    }
    
    // Social icons animation
    if (iconsRef.current && iconsRef.current.children.length > 0) {
      masterTl.fromTo(
        iconsRef.current.children,
        { y: 15, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.08,
          duration: 0.5
        },
        "-=0.3"
      );
    }
    
    // Mobile menu animation
    if (mobileMenuRef.current) {
      masterTl.fromTo(
        mobileMenuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.5"
      );
    }
    
    // Desktop sidebar animation
    if (desktopSidebarRef.current) {
      masterTl.fromTo(
        desktopSidebarRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        "-=0.7"
      );
    }

    // Setup hover animations for social icons (if they exist)
    if (iconsRef.current && iconsRef.current.children.length > 0) {
      const icons = iconsRef.current.children;
      const iconHoverEnter = (e) => {
        gsap.to(e.currentTarget, {
          scale: 1.2,
          color: "#fff",
          duration: 0.2
        });
      };
      
      const iconHoverLeave = (e) => {
        gsap.to(e.currentTarget, {
          scale: 1,
          color: "currentColor",
          duration: 0.2
        });
      };
      
      for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("mouseenter", iconHoverEnter);
        icons[i].addEventListener("mouseleave", iconHoverLeave);
      }
      
      // Clean up event listeners
      return () => {
        for (let i = 0; i < icons.length; i++) {
          icons[i].removeEventListener("mouseenter", iconHoverEnter);
          icons[i].removeEventListener("mouseleave", iconHoverLeave);
        }
        
        // Clean up ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  // Setup scroll effects with proper safety checks
  useEffect(() => {
    if (typeof window === 'undefined' || !headerRef.current) return;
    
    // Safety check that ScrollTrigger is registered
    if (!ScrollTrigger) return;
    
    let bgElement = null;
    
    // Find the background element safely
    if (headerRef.current) {
      const elements = headerRef.current.querySelectorAll('[style*="backgroundImage"]');
      if (elements && elements.length > 0) {
        bgElement = elements[0];
      }
    }
    
    // Only create ScrollTrigger if needed elements exist
    const st = ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        // Only animate background if it exists
        if (bgElement) {
          gsap.set(bgElement, {
            y: self.progress * 50
          });
        }
        
        // Only animate icons if they exist
        if (iconsRef.current && iconsRef.current.children && iconsRef.current.children.length > 0) {
          gsap.set(iconsRef.current.children, {
            rotation: self.progress * 180
          });
        }
      }
    });
    
    return () => {
      if (st) st.kill();
    };
  }, []);

  // Button hover animation with safety check
  const handleButtonHover = (isHover) => {
    if (!buttonRef.current) return;
    
    gsap.to(buttonRef.current, {
      scale: isHover ? 1.05 : 1,
      duration: 0.2
    });
  };

  // Hamburger menu animation with safety check
  const animateHamburger = () => {
    if (!hamburgerRef.current) return;
    
    const isActive = hamburgerRef.current.classList.contains('active');
    const spans = hamburgerRef.current.children;
    
    if (!spans || spans.length < 3) return;
    
    if (!isActive) {
      gsap.to(spans[0], { 
        rotation: 45, 
        y: 6, 
        duration: 0.3 
      });
      gsap.to(spans[1], { 
        opacity: 0, 
        duration: 0.2 
      });
      gsap.to(spans[2], { 
        rotation: -45, 
        y: -6, 
        duration: 0.3 
      });
      hamburgerRef.current.classList.add('active');
    } else {
      gsap.to(spans[0], { 
        rotation: 0, 
        y: 0, 
        duration: 0.3 
      });
      gsap.to(spans[1], { 
        opacity: 1, 
        duration: 0.2 
      });
      gsap.to(spans[2], { 
        rotation: 0, 
        y: 0, 
        duration: 0.3 
      });
      hamburgerRef.current.classList.remove('active');
    }
  };

  return (
    <div ref={headerRef} className="w-full flex justify-center h-[90vh] xl:flex-row">
      <div ref={backgroundRef} className="w-full flex flex-col justify-center items-center gap-5 aspect-video bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <h1 ref={nameRef} className='text-2xl sm:text-3xl md:text-6xl lg:text-7xl text-white'>Vairamuththu Sinthujan</h1>
        <a href='/sinthujan.pdf' download={'sinthujan.pdf'}>
        <button 
          ref={buttonRef}
          className='cursor-pointer p-2 px-3 rounded outline-1 sm:outline-2 outline-white hover:bg-white hover:text-black transition-colors ease-in duration-200'
          onMouseEnter={() => handleButtonHover(true)}
          onMouseLeave={() => handleButtonHover(false)}
        >
          Download CV
        </button>
        </a>
        <div ref={iconsRef} className='grid grid-cols-4 gap-4 text-xl sm:text-2xl text-white'>
          <a href="https://www.linkedin.com/in/vairamuththu-sinthujan/">
            <FaLinkedinIn className="cursor-pointer" />
          </a>
          <a href='https://x.com/sinthujan__v'>
            <FaTwitter className="cursor-pointer" />
          </a>
          <a href='https://github.com/vairamuththu-sinthujan'>
            <FaGithub className="cursor-pointer" />
          </a>
          <a href='https://bsky.app/profile/sinthujan.bsky.social'>
            <FaBluesky className="cursor-pointer" />
          </a>
        </div>
        <div 
          ref={mobileMenuRef} 
          className='w-full absolute flex right-0 bottom-10 xl:hidden h-20 justify-around items-center px-10'
        >
          <div 
            ref={hamburgerRef}
            className='w-full h-full flex flex-col justify-center items-center gap-1 pr-1 cursor-pointer'
            onClick={animateHamburger}
          >
            <span className='block h-1 w-full bg-gray-500'></span>
            <span className='block h-1 w-full bg-gray-500'></span>
            <span className='block h-1 w-full bg-gray-500'></span>
          </div>
          <p className='text-sm'>Personal Portfolio</p>
          <p className='text-sm'>2025-NOW</p>
        </div>
      </div>
  
      <div ref={desktopSidebarRef} className='hidden xl:flex w-full h-full flex-col justify-center items-center gap-3'>
        <div>
          <h1>Personal</h1>
          <h1>Portfolio</h1>
        </div>
        <h1>2025-NOW</h1>
        <span className='block h-1/2 w-full bg-gray-500'></span>
      </div>
    </div>
  )
}

export default Header