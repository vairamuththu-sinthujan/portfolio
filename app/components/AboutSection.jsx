'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutSection = () => {
  // Create refs for the elements we want to animate
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const paragraphRef = useRef(null)
  const interestsRef = useRef(null)
  const interestItemsRef = useRef([])
  const imageRef = useRef(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Only proceed if the section ref exists
    if (!sectionRef.current) return
    
    // Create a timeline for our animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
    
    // Animate the heading elements if they exist
    if (titleRef.current && subtitleRef.current) {
      tl.from(subtitleRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(titleRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
    }
    
    // Animate the paragraph if it exists
    if (paragraphRef.current) {
      tl.from(paragraphRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
    }
    
    // Animate the interests section header if it exists
    if (interestsRef.current) {
      tl.from(interestsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2")
    }
    
    // Animate each interest item with a stagger effect
    if (interestItemsRef.current.length > 0) {
      tl.from(interestItemsRef.current, {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
    }
    
    // Animate the image on mobile if it exists
    if (imageRef.current) {
      tl.from(imageRef.current, {
        x: 25,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
      }, "-=0.5")
    }
    
    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  // Function to add interest items to the ref array
  const addToInterestRefs = (el) => {
    if (el && !interestItemsRef.current.includes(el)) {
      interestItemsRef.current.push(el)
    }
  }

  return (
    <section 
      ref={sectionRef}
      className='flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-20 gap-4 sm:gap-0'
    >
        <div className='sm:w-1/2 flex flex-col gap-3 sm:gap-4'>
            <div className='flex flex-col items-center sm:items-start'>
                <h2 
                  ref={subtitleRef}
                  className='text-xl md:text-2xl xl:text-4xl opacity-50'
                >
                  Vairamuththu Sinthujan
                </h2>
                <h1 
                  ref={titleRef}
                  className='text-3xl md:text-4xl xl:text-6xl'
                >
                  Full Stack Developer
                </h1>
            </div>
            <div className=''>
                <p 
                  ref={paragraphRef}
                  className='text-center sm:text-start'
                >
                  From responsive single-page React apps to cross-platform React Native builds,
                  I'm committed to writing elegant code, adhering to best practices, and
                  continuously learning the latest technologies
                </p>
            </div>
        </div>
        <div className='flex-1 justify-center sm:items-center w-full'>
            <div className='flex flex-row-reverse sm:flex-col gap-2 sm:gap-0 justify-center sm:items-center text-start'>
                <ul className='flex flex-col justify-around sm:justify-start sm:gap-0.5'>
                    <li 
                      ref={interestsRef}
                      className='opacity-70 text-lg flex items-center gap-1 py-1'
                    >
                        <span className='w-6 h-[2px] bg-white inline-block rounded-4xl'></span>
                        <p>Interests</p>
                    </li>
                    <li ref={addToInterestRefs}>Web Application</li>
                    <li ref={addToInterestRefs}>Mobile Application</li>
                    <li ref={addToInterestRefs}>API Development</li>
                    <li ref={addToInterestRefs}>AI Integration</li>
                    <li ref={addToInterestRefs}>UI/UX Design</li>
                </ul>
                <div className='sm:hidden flex-1 overflow-hidden'>
                    <Image
                        src="/about_1.jpg"
                        alt="about"
                        width={400}
                        height={400}
                        className="your-classes w-auto h-auto"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection