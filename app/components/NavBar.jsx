'use client'
import React, { useState } from 'react'
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import Link from "next/link";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    };

    return (
        <main id='home' className='overflow-hidden'>
            <nav className='flex flex-row justify-between items-center text-xl sm:text-2xl'>
                <Link href='/'>
                    <Image
                        src={'/logo.png'}
                        width={40}
                        height={40}
                        alt='logo'
                        className='py-2 rounded-full animate-fade-in-down'
                    />
                </Link>
                <button
                    className='flex flex-row gap-1 justify-center items-center cursor-pointer py-2 transition-all duration-200 hover:scale-90 animate-fade-in-down animation-delay-300'
                    onClick={openMenu}
                >
                    <span
                        className={`${open ? 'bg-[#00c9a7]' : 'bg-white'} block rounded-full w-2.5 h-2.5 transition-all duration-300 ${open ? 'scale-125' : ''}`}
                    ></span>
                    <h1>Menu</h1>
                </button>
            </nav>

            <section
                className={`
                    fixed top-0 w-full h-full z-50 
                    pl-5 sm:pl-0 sm:px-10 flex flex-col 
                    backdrop-blur-md bg-black/80
                    border border-white/5
                    transition-all duration-500 ease-out
                    ${open ? 'left-0 opacity-100' : '-left-full opacity-0'}
                `}
            >
                <div className='flex flex-col gap-10 sm:gap-0 sm:flex-row sm:justify-between h-full'>
                    <section className='pl-5 sm:pl-10'>
                        <ul className="text-4xl flex flex-col gap-4">
                            <li
                                className={`pt-4 sm:pt-8 cursor-pointer transition-all duration-300 hover:-translate-x-1 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '0ms' }}
                                onClick={openMenu}
                            >
                                <GoArrowLeft />
                            </li>
                            <li
                                className={`group relative transition-all duration-300 hover:scale-105 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '100ms' }}
                            >
                                <Link
                                    href="#home"
                                    className="inline-block"
                                    onClick={openMenu}
                                >
                                    Home
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </Link>
                            </li>
                            <li
                                className={`group relative transition-all duration-300 hover:scale-105 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '200ms' }}
                            >
                                <Link
                                    href="#about"
                                    className="inline-block"
                                    onClick={openMenu}
                                >
                                    About
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </Link>
                            </li>
                            <li
                                className={`group relative transition-all duration-300 hover:scale-105 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '300ms' }}
                            >
                                <Link
                                    href="#works"
                                    className="inline-block"
                                    onClick={openMenu}
                                >
                                    Works
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </Link>
                            </li>
                            <li
                                className={`group relative transition-all duration-300 hover:scale-105 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '400ms' }}
                            >
                                <Link
                                    href="#skills"
                                    className="inline-block"
                                    onClick={openMenu}
                                >
                                    Skills
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </Link>
                            </li>
                            <li
                                className={`group relative transition-all duration-300 hover:scale-105 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '500ms' }}
                                onClick={openMenu}
                            >
                                <Link
                                    href="/learn"
                                    className="inline-block"
                                >
                                    Learn
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </Link>
                            </li>
                            <li
                                className={`group relative transition-all duration-300 hover:scale-105 ${open ? 'animate-slide-in-up' : ''}`}
                                style={{ animationDelay: '600ms' }}
                            >
                                <Link
                                    href="#contact"
                                    className="inline-block"
                                    onClick={openMenu}
                                >
                                    Contact
                                    <span className="hidden sm:block absolute w-0 h-0.5 bg-current left-0 -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                </Link>
                            </li>
                        </ul>
                    </section>
                    <section className='flex flex-col h-full justify-around pl-5 sm:pl-0'>
                        <ul className='flex flex-col gap-2 sm:text-2xl'>
                            <li
                                className={`flex flex-row gap-1 items-center cursor-pointer transition-all duration-300 hover:translate-x-1 group ${open ? 'animate-slide-in-left' : ''}`}
                                style={{ animationDelay: '200ms' }}
                            >
                                <Link href='https://www.linkedin.com/in/vairamuththu-sinthujan'
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className='flex flex-row gap-1 items-center'>
                                    <p>Linkedin</p>
                                    <GoArrowUpRight className='transition-all duration-300 group-hover:rotate-45 group-hover:scale-125' />
                                </Link>
                            </li>
                            <li
                                className={`flex flex-row gap-1 items-center cursor-pointer transition-all duration-300 hover:translate-x-1 group ${open ? 'animate-slide-in-left' : ''}`}
                                style={{ animationDelay: '300ms' }}
                            >
                                <Link href='https://x.com/sinthujan__v'
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className='flex flex-row gap-1 items-center'>
                                    <p>Twitter</p>
                                    <GoArrowUpRight className='transition-all duration-300 group-hover:rotate-45 group-hover:scale-125' />
                                </Link>
                            </li>
                            <li
                                className={`flex flex-row gap-1 items-center cursor-pointer transition-all duration-300 hover:translate-x-1 group ${open ? 'animate-slide-in-left' : ''}`}
                                style={{ animationDelay: '400ms' }}
                            >
                                <Link href='https://github.com/vairamuththu-sinthujan'
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className='flex flex-row gap-1 items-center'>
                                    <p>Github</p>
                                    <GoArrowUpRight className='transition-all duration-300 group-hover:rotate-45 group-hover:scale-125' />
                                </Link>
                            </li>
                            <li
                                className={`flex flex-row gap-1 items-center cursor-pointer transition-all duration-300 hover:translate-x-1 group ${open ? 'animate-slide-in-left' : ''}`}
                                style={{ animationDelay: '500ms' }}
                            >
                                <Link href='https://bsky.app/profile/sinthujan.bsky.social'
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className='flex flex-row gap-1 items-center'>
                                    <p>Bluesky</p>
                                    <GoArrowUpRight className='transition-all duration-300 group-hover:rotate-45 group-hover:scale-125' />
                                </Link>
                            </li>
                        </ul>
                        <div className={`pb-5 ${open ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '400ms' }}>
                            <h1 className='relative inline-block cursor-pointer transition-all duration-300'>
                                Email
                            </h1>
                            <p className='cursor-pointer transition-all duration-300 hover:translate-x-1'>
                                vairamuththusinthujan@gmail.com
                            </p>
                        </div>
                    </section>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

            `}</style>
        </main>
    )
}

export default NavBar