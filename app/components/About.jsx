'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutSection from './AboutSection'


const About = () => {
  // Refs for GSAP animations
  const mainRef = useRef(null)
  const imgRef1 = useRef(null)
  const imgRef2 = useRef(null)
  const textContentRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const emailRef = useRef(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Main timeline for section entry animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Images animation
    if (imgRef1.current && imgRef2.current) {
      tl.fromTo([imgRef1.current, imgRef2.current], 
        { 
          y: 100, 
          opacity: 0
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.3, 
          ease: "power3.out" 
        }
      )
      
      // Add hover effect with GSAP
      const images = [imgRef1.current, imgRef2.current]
      images.forEach(img => {
        img.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.05, opacity: 1, duration: 0.4 })
        })
        img.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, opacity: 0.7, duration: 0.4 })
        })
      })
    }

    // Text content animation
    if (textContentRef.current) {
      tl.fromTo(headingRef.current, 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(paragraphRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(emailRef.current, 
        { x: 20, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.4 },
        "-=0.4"
      )
      
      // // Add pulse animation to email button
      // gsap.to(emailRef.current, {
      //   boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
      //   repeat: -1,
      //   yoyo: true,
      //   duration: 1.5
      // })
    }

    // Parallax effect on scroll
    gsap.to(imgRef1.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: -30,
    })

    gsap.to(imgRef2.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 30,
    })

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main 
      id='about' 
      ref={mainRef}
      className='overflow-hidden my-10 lg:my-20 xl:my-10'
    >
      <section className='flex sm:flex-row sm:justify-center sm:items-center gap-16 m-auto'>
        <div className='hidden sm:block overflow-hidden'>
          <div ref={imgRef1} className="opacity-0">
            <Image 
              src={'/about_1.jpg'} 
              width={600} 
              height={500} 
              alt='about_bg_one' 
              className='opacity-70' 
            />
          </div>
        </div>
        <div className='hidden sm:block overflow-hidden'>
          <div ref={imgRef2} className="opacity-0">
            <Image 
              src={'/about_2.jpg'} 
              width={500} 
              height={500} 
              alt='about_bg_two' 
              className='opacity-70' 
            />
          </div>
        </div>
        <div 
          ref={textContentRef}
          className='sm:w-1/2 flex flex-col gap-3 items-center sm:items-start'
        >
          <div 
            ref={headingRef}
            className='text-7xl flex sm:gap-0 items-center sm:items-start flex-col sm:text-3xl md:text-6xl lg:text-7xl md:pt-10 lg:pt-0'
          >
            <h1>About </h1>
            <h1 className=''>Me</h1>
          </div>
          <div ref={paragraphRef}>
            <p className='text-center sm:text-start'>
              Computer science enthusiast passionate about full-stack web development, artificial intelligence, and app development. I thrive on blending sleek, intuitive design with robust, scalable back-end logic. Driven by curiosity and creativity, I love transforming ideas into polished, real-world applications.
            </p>
          </div>
          <a href="mailto:vairamuththusinthujan@gmail.com?subject=Your%20subject%20Here&body=Your%20Body%20text%20here." 
            ref={emailRef}
            className='rounded-full border border-white p-2 text-center cursor-pointer text-sm hover:bg-white hover:text-black transition-colors duration-300'
          >
            <p>vairamuththusinthujan@gmail.com</p>
          </a>
        </div>
      </section>
      <AboutSection/>
    </main>
  )
}

export default About