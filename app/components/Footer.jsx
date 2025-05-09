'use client'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { Dancing_Script } from 'next/font/google'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaBluesky } from 'react-icons/fa6'
import { gsap } from 'gsap'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.footer-item')
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: i * 0.2,
          ease: 'power2.out',
        })
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} id='contact' className='flex flex-col gap-4'>
      <main className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-10'>
        <section className='footer-item'>
          <div className='flex flex-col gap-5 h-auto w-auto overflow-hidden'>
            <Image
              src="/contact.jpg"
              alt="contact"
              width={400}
              height={400}
              className='hidden sm:block opacity-50 hover:opacity-55 transition-all duration-300 w-auto h-auto hover:scale-105 cursor-pointer'
            />
            <h1 className='text-7xl'>Contact Me</h1>
          </div>
        </section>

        <section className='footer-item flex flex-col gap-5 justify-center'>
          <div>
            <p>Email:</p>
            <p>vairamuththusinthujan@gmail</p>
          </div>
          <div>
            <p>Phone Number:</p>
            <p>+94 78 5800 715</p>
          </div>
          <div>
            <p>Address:</p>
            <p>Main St., Valaichenai, batticaloa.</p>
          </div>
          <a className='h-auto w-auto overflow-hidden' href='https://maps.app.goo.gl/RrSuPJTvd4XTZ5MT7'>
            <Image
              src="/map.jpg"
              alt="map"
              width={400}
              height={400}
              className='opacity-50 hover:opacity-55 transition-all duration-300 h-auto w-auto hover:scale-105 cursor-pointer'
            />
          </a>
          <div className='footer-item flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-1'>
              <h1 className={`${dancingScript.className} text-5xl`}>sinthujan</h1>
              <p className='text-sm'>Full Stack Developer</p>
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <div className='flex gap-3 justify-center items-center'>
                <a href="https://www.linkedin.com/in/vairamuththu-sinthujan/"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/vairamuththu-sinthujan/"><FaLinkedin /></a>
                <a href="https://x.com/sinthujan__v"><FaTwitter /></a>
                <a href="https://bsky.app/profile/sinthujan.bsky.social"><FaBluesky /></a>
              </div>
              <p className='text-sm'>Get in Touch</p>
            </div>
          </div>
        </section>
      </main>
      <section className='footer-item'>
        <hr className='opacity-50'/>
        <p className='text-center text-xs sm:text-sm py-5 sm:py-10'>
          developed by sinthujan &copy; {new Date().getFullYear()} | All Rights Reserved.
        </p>
      </section>
    </footer>
  )
}

export default Footer
