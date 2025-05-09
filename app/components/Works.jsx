'use client'
import React, { useEffect, useRef } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { SiFirebase } from "react-icons/si";
import { SiExpo } from "react-icons/si";

const Works = () => {
  // Create refs for animated elements
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  
  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger to avoid SSR issues
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;
      
      // Only load ScrollTrigger after gsap is loaded
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      // Register the ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Initialize animations only after ensuring all components are properly mounted
      setTimeout(() => {
        initializeAnimations(gsap, ScrollTrigger);
      }, 100);
    };
    
    // Initialize all animations
    const initializeAnimations = (gsap, ScrollTrigger) => {
      // Safety check for refs - only run animations if elements exist
      if (!sectionRef.current) return;
      
      // Create a timeline for better control
      const mainTl = gsap.timeline();
      
      // Header animation
      if (headerRef.current) {
        mainTl.fromTo(
          headerRef.current.querySelector('h1'),
          { 
            opacity: 0, 
            y: 10 
          },
          { 
            opacity: 0.5, 
            y: 0, 
            duration: 0.5, 
            ease: "power2.out" 
          }
        ).fromTo(
          headerRef.current.querySelector('hr'),
          { 
            scaleX: 0,
            opacity: 0 
          },
          { 
            scaleX: 1,
            opacity: 0.5, 
            duration: 0.5, 
            ease: "power2.out" 
          },
          "-=0.3"
        );
      }

      // First project animation
      if (project1Ref.current) {
        const projectElements = project1Ref.current.children;
        
        mainTl.fromTo(
          project1Ref.current,
          { 
            opacity: 0,
            y: 20 
          },
          { 
            opacity: 1,
            y: 0, 
            duration: 0.6,
            ease: "power3.out" 
          },
          "-=0.2"
        );
        
        // Stagger animate child elements for smoother reveal
        if (projectElements && projectElements.length) {
          mainTl.fromTo(
            projectElements,
            { 
              opacity: 0,
              y: 10 
            },
            { 
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.4,
              ease: "power2.out" 
            },
            "-=0.4"
          );
        }
      }
      
      // Second project animation with ScrollTrigger
      if (project2Ref.current) {
        const projectElements = project2Ref.current.children;
        
        gsap.fromTo(
          project2Ref.current,
          { 
            opacity: 0,
            y: 20 
          },
          { 
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project2Ref.current,
              start: "top bottom-=50",
              toggleActions: "play none none none"
            }
          }
        );
        
        // Stagger animate child elements for smoother reveal
        if (projectElements && projectElements.length) {
          gsap.fromTo(
            projectElements,
            { 
              opacity: 0,
              y: 10 
            },
            { 
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project2Ref.current,
                start: "top bottom-=50",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }
      
      // Setup hover animations for project titles
      setupHoverAnimations(gsap);
    };
    
    // Setup hover animations as a separate function
    const setupHoverAnimations = (gsap) => {
      // For project titles
      const projectTitles = document.querySelectorAll('.project-title');
      
      if (projectTitles && projectTitles.length) {
        projectTitles.forEach(title => {
          // Create hover animation contexts to avoid animation conflicts
          let titleContext = gsap.context(() => {
            title.addEventListener('mouseenter', () => {
              gsap.to(title, { 
                scale: 1.01, 
                duration: 0.3, 
                ease: "power2.out",
                transformOrigin: "left center"
              });
            });
            
            title.addEventListener('mouseleave', () => {
              gsap.to(title, { 
                scale: 1, 
                duration: 0.3, 
                ease: "power2.out" 
              });
            });
          });
        });
      }
      
      // For link arrows
      const projectLinks = document.querySelectorAll('.project-link');
      
      if (projectLinks && projectLinks.length) {
        projectLinks.forEach(link => {
          const arrow = link.querySelector('.arrow-icon');
          if (!arrow) return;
          
          // Create hover animation contexts to avoid animation conflicts
          let linkContext = gsap.context(() => {
            link.addEventListener('mouseenter', () => {
              gsap.to(arrow, { 
                x: 3, 
                duration: 0.2, 
                ease: "power1.out" 
              });
            });
            
            link.addEventListener('mouseleave', () => {
              gsap.to(arrow, { 
                x: 0, 
                duration: 0.2, 
                ease: "power1.out" 
              });
            });
          });
        });
      }
    };
    
    // Load GSAP only in browser environment
    if (typeof window !== 'undefined') {
      loadGSAP();
    }
    
    // Cleanup function
    return () => {
      // We'll handle cleanup upon component unmount
      if (typeof window !== 'undefined') {
        // Dynamically import and kill ScrollTrigger instances
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  return (
    <section id='works' ref={sectionRef} className='flex flex-col justify-center items-start gap-5'>
        <div className='w-full' ref={headerRef}>
            <h1 className='text-2xl opacity-50'>Featured Works</h1>
            <hr className='opacity-50'/>
        </div>
        <div className='flex flex-col gap-5 sm:gap-10'>
            <div ref={project1Ref} className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-0'>
                <div>
                    <h1 className='project-title text-3xl md:text-4xl xl:text-6xl'>Aura Media</h1>
                </div>
                <div className='sm:w-1/2'>
                    <p>
                        MERN-based social platform where users share posts, follow friends, and receive real-time updates. I built a responsive React UI, a Node/Express API with JWT authentication, and a MongoDB backend—focused on simplicity, performance, and an intuitive feed.
                    </p>
                </div>
                <div>
                    <div className='flex flex-col gap-1'>
                    <p><b>Role:</b> Full-Stack Dev</p>
                        <p><b>Stack:</b></p>
                        <div className='flex gap-1'>
                            <FaReact />
                            <TbBrandMongodb />
                            <SiExpress />
                            <FaNodeJs />
                            <SiCloudinary />
                            <TbBrandTailwind />
                        </div>
                        <div className='flex gap-0.5 items-center project-link'>
                            <a href='https://github.com/vairamuththu-sinthujan/Aura' className='hover:underline'>Visit</a>
                            <MdArrowOutward className='arrow-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='opacity-50'/>
            <div ref={project2Ref} className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-0'>
                <div>
                    <h1 className='project-title text-3xl md:text-4xl xl:text-6xl'>Aura Chat</h1>
                </div>
                <div className='sm:w-1/2'>
                    <p>
                        A lean React Native chat app powered by Firebase Authentication and Firestore for real-time messaging. With clean UI components, it delivers seamless one-on-one and group conversations without extra overhead.
                    </p>
                </div>
                <div>
                    <div className='flex flex-col gap-1'>
                        <p><b>Role:</b> Mobile App Dev</p>
                        <p><b>Stack:</b></p>
                        <div className='flex gap-1'>
                            <FaReact />
                            <SiFirebase />
                            <SiExpo />
                            <SiCloudinary />
                            <TbBrandTailwind />
                        </div>
                        <div className='flex gap-0.5 items-center project-link'>
                            <a href='https://github.com/vairamuththu-sinthujan' className='hover:underline'>Visit</a>
                            <MdArrowOutward className='arrow-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='opacity-50'/>
        </div>
    </section>
  )
}

export default Works