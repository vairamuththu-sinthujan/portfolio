'use client'
import React, { useEffect, useRef, useState } from 'react'
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';
import Image from 'next/image';



const NavBar = () => {

    const handleClick = async () => {
        openMenu()
  };

    const [open, setOpen] = React.useState(false);
    const menuRef = useRef(null);
    const navItemsRef = useRef([]);
    const socialItemsRef = useRef([]);
    const menuCircleRef = useRef(null);
    const menuTextRef = useRef(null);
    const logoRef = useRef(null);
    const emailSectionRef = useRef(null);

    // Animation timelines
    const menuTl = useRef(null);
    const hoverTl = useRef(null);

    // Initialize GSAP animations
    useEffect(() => {
        // Main menu animation timeline
        menuTl.current = gsap.timeline({ paused: true });
        
        // Animate the menu background
        menuTl.current.fromTo(menuRef.current, 
            { left: '-100%', opacity: 0 }, 
            { left: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
        
        // Stagger animate the nav items
        menuTl.current.fromTo(navItemsRef.current, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)' },
            "-=0.2"
        );
        
        // Stagger animate the social items
        menuTl.current.fromTo(socialItemsRef.current, 
            { x: -20, opacity: 0 }, 
            { x: 0, opacity: 1, stagger: 0.1, duration: 0.3, ease: 'power2.out' },
            "-=0.4"
        );
        
        // Animate the email section
        menuTl.current.fromTo(emailSectionRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
            "-=0.2"
        );

        // Initial animation for the logo
        gsap.fromTo(logoRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.75)', delay: 0.2 }
        );

        // Menu button animation
        gsap.fromTo(menuTextRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.75)', delay: 0.3 }
        );

        return () => {
            // Cleanup animations
            if (menuTl.current) menuTl.current.kill();
            if (hoverTl.current) hoverTl.current.kill();
        };
    }, []);

    // Handle menu open/close
    const openMenu = () => {
        setOpen(!open);
        
        if (!open) {
            if (menuTl.current) {
                menuTl.current.play();
            }
        } else {
            if (menuTl.current) {
                menuTl.current.reverse();
            }
        }

        // Animate the menu circle - add null check
        if (menuCircleRef.current) {
            gsap.to(menuCircleRef.current, {
                scale: open ? 1 : 1.2,
                duration: 0.3,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 1
            });
        }
    };

    // Function to handle hover animations for nav items
    const handleHover = (e, isEntering) => {
        // Add null check for e.target
        if (!e.target) return;
        
        if (isEntering) {
            gsap.to(e.target, {
                scale: 1.5,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            gsap.to(e.target, {
                scale: 1,
                color: 'white',
                duration: 0.3,
                ease: 'power2.in'
            });
        }
    };

    // Function to handle hover animations for social links
    const handleSocialHover = (e, isEntering) => {
        // Add null checks
        if (!e.currentTarget) return;
        
        const target = e.currentTarget;
        const icon = target.querySelector('svg');
        
        if (isEntering) {
            gsap.to(target, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Add null check for icon
            if (icon) {
                gsap.to(icon, {
                    rotate: 45,
                    scale: 1.2,
                    duration: 0.3,
                    ease: 'back.out'
                });
            }
        } else {
            gsap.to(target, {
                x: 0,
                color: 'white',
                duration: 0.3,
                ease: 'power2.in'
            });
            
            // Add null check for icon
            if (icon) {
                gsap.to(icon, {
                    rotate: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        }
    };

    return (
        <main id='home' className='overflow-hidden'>
            <nav className='flex flex-row justify-between items-center text-xl sm:text-2xl'>
                <a href='/'>
                <Image src={'/logo.png'} width={40} height={40} alt='logo' className='py-2 rounded-full' ref={logoRef}/>
                </a>
                <button 
                    className='flex flex-row gap-1 justify-center items-center cursor-pointer py-2  transition-colors ease-in duration-200'
                    onClick={handleClick}
                    onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, {
                            scale: 0.7,
                            duration: 0.3,
                            ease: 'back.out'
                        });
                    }}
                    onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.in'
                        });
                    }}
                >
                    <span 
                        ref={menuCircleRef}
                        className={`${open ? 'bg-[#00c9a7]' : 'bg-white'} block rounded-full w-2.5 h-2.5 transition-colors ease-in duration-300`}
                    ></span>
                    <h1 ref={menuTextRef}>Menu</h1>
                </button>
            </nav>
            <section
                ref={menuRef}
                className={`
                    fixed top-0 w-full h-full z-50 
                    pl-5 sm:pl-0 sm:px-10 flex flex-col 
                    transition-all ease-in duration-300
                    backdrop-blur-md bg-black/80
                    border border-white/5
                `}
                style={{ left: '-100%' }} // Initially hidden
            >
                <div className='flex flex-col gap-10 sm:gap-0 sm:flex-row sm:justify-between h-full'>
                    <section className=' pl-5 sm:pl-10'>
                        <ul className="text-4xl flex flex-col gap-4">
                            <li 
                                className="pt-4 sm:pt-8 cursor-pointer" 
                                onClick={() => {
                                    // Add null checks before animations
                                    if (menuTl.current) {
                                        // Reverse the menu animation
                                        menuTl.current.reverse();
                                    }
                                    
                                    // Animate the menu circle back with null check
                                    if (menuCircleRef.current) {
                                        gsap.to(menuCircleRef.current, {
                                            backgroundColor: 'white',
                                            scale: 1,
                                            duration: 0.3,
                                            ease: 'power2.inOut'
                                        });
                                    }
                                    
                                    // Update state after animation completes
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 500); // Match this with your animation duration
                                }}
                                ref={el => navItemsRef.current[0] = el}
                                onMouseEnter={(e) => {
                                    if (e.currentTarget) {
                                        gsap.to(e.currentTarget, {
                                            x: -5,
                                            duration: 0.3,
                                            ease: 'power2.out'
                                        });
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (e.currentTarget) {
                                        gsap.to(e.currentTarget, {
                                            x: 0,
                                            color: 'white',
                                            duration: 0.3,
                                            ease: 'power2.in'
                                        });
                                    }
                                }}
                            >
                                <GoArrowLeft />
                            </li>
                            <li 
                                className="group relative" 
                                onClick={openMenu}
                                ref={el => navItemsRef.current[1] = el}
                            >
                                <a 
                                    href="#home" 
                                    className="inline-block"
                                    onMouseEnter={(e) => handleHover(e, true)}
                                    onMouseLeave={(e) => handleHover(e, false)}
                                >
                                    Home
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </a>
                            </li>
                            <li 
                                className="group relative" 
                                onClick={openMenu}
                                ref={el => navItemsRef.current[2] = el}
                            >
                                <a 
                                    href="#about" 
                                    className="inline-block"
                                    onMouseEnter={(e) => handleHover(e, true)}
                                    onMouseLeave={(e) => handleHover(e, false)}
                                >
                                    About
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </a>
                            </li>
                            <li 
                                className="group relative" 
                                onClick={openMenu}
                                ref={el => navItemsRef.current[3] = el}
                            >
                                <a 
                                    href="#works" 
                                    className="inline-block"
                                    onMouseEnter={(e) => handleHover(e, true)}
                                    onMouseLeave={(e) => handleHover(e, false)}
                                >
                                    Works
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </a>
                            </li>
                            <li 
                                className="group relative" 
                                onClick={openMenu}
                                ref={el => navItemsRef.current[4] = el}
                            >
                                <a 
                                    href="#contact" 
                                    className="inline-block"
                                    onMouseEnter={(e) => handleHover(e, true)}
                                    onMouseLeave={(e) => handleHover(e, false)}
                                >
                                    Contact
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className='flex flex-col h-full justify-around pl-5 sm:pl-0'>
                        <ul className='flex flex-col gap-2 sm:text-2xl'>
                            <li 
                                className='flex flex-row gap-1 items-center cursor-pointer'
                                ref={el => socialItemsRef.current[0] = el}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <a href='https://www.linkedin.com/in/vairamuththu-sinthujan' className='flex flex-row gap-1 items-center'>
                                <p>Linkedin</p>
                                <GoArrowUpRight />
                                </a>
                            </li>
                            <li 
                                className='flex flex-row gap-1 items-center cursor-pointer'
                                ref={el => socialItemsRef.current[1] = el}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <a href='https://x.com/sinthujan__v' className='flex flex-row gap-1 items-center'>
                                <p>Twitter</p>
                                <GoArrowUpRight />
                                </a>
                            </li>
                            <li 
                                className='flex flex-row gap-1 items-center cursor-pointer'
                                ref={el => socialItemsRef.current[2] = el}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <a href='https://github.com/vairamuththu-sinthujan' className='flex flex-row gap-1 items-center'>
                                <p>Github</p>
                                <GoArrowUpRight />
                                </a>
                            </li>
                            <li 
                                className='flex flex-row gap-1 items-center cursor-pointer'
                                ref={el => socialItemsRef.current[3] = el}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <a href='https://bsky.app/profile/sinthujan.bsky.social' className='flex flex-row gap-1 items-center'>
                                <p>Bluesky</p>
                                <GoArrowUpRight />
                                </a>
                            </li>
                        </ul>
                        <div className='pb-5' ref={emailSectionRef}>
                            <h1 className='relative inline-block cursor-pointer'
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        color: 'white',
                                        duration: 0.3,
                                        ease: 'power2.in'
                                    });
                                }}
                            >Email</h1>
                            <p className='cursor-pointer'
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        x: 5,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        x: 0,
                                        color: 'white',
                                        duration: 0.3,
                                        ease: 'power2.in'
                                    });
                                }}
                            >vairamuththusinthujan@gmail.com</p>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default NavBar