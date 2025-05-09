'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { RiHtml5Line } from 'react-icons/ri';

const icons = [
  { Component: SiMongodb, title: 'MongoDB' },
  { Component: SiExpress, title: 'Express' },
  { Component: FaReact, title: 'React' },
  { Component: FaNodeJs, title: 'NodeJS' },
  { Component: SiMongoose, title: 'Mongoose' },
  { Component: RiNextjsFill, title: 'NextJS' },
  { Component: TbBrandReactNative, title: 'React Native' },
  { Component: RiTailwindCssFill, title: 'Tailwind' },
  { Component: FaPython, title: 'Python' },
  { Component: FaJava, title: 'Java' },
  { Component: IoLogoJavascript, title: 'Javascript' },
  { Component: RiHtml5Line, title: 'HTML5' },
];

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const Skills = () => {
  const containerRef = useRef(null);
  const iconsRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      iconsRefs.current.forEach((el, i) => {
        if (!el) return;
        // Complex random start: position, scale, rotation, skew
        const startProps = {
          x: randomBetween(-window.innerWidth, window.innerWidth),
          y: randomBetween(-200, 200),
          scale: randomBetween(2, 4),
          rotation: randomBetween(-180, 180),
          skewX: randomBetween(-45, 45),
          opacity: 0,
        };
        gsap.set(el, startProps);

        const tl = gsap.timeline({ paused: true })
          // swoop in with overshoot
          .to(el, { duration: 1.2, x: 0, y: 0, scale: 1, rotation: 0, skewX: 0, opacity: 1, ease: 'elastic.out(1, 0.5)' })
          // subtle bounce/pulse
          .to(el, { duration: 0.6, scale: 1.15, ease: 'power1.inOut', yoyo: true, repeat: 1 })
          // slight wiggle
          .to(el, { duration: 0.4, rotation: randomBetween(-10, 10), ease: 'sine.inOut', yoyo: true, repeat: 2 }, '-=0.8');

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          end: 'bottom 15%',
          onEnter: () => tl.play(),
          onLeave: () => tl.reverse(),
          onEnterBack: () => tl.play(),
          onLeaveBack: () => tl.reverse(),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="flex flex-col gap-3 h-[50vh] relative overflow-hidden mb-10">
      <h1 className="text-2xl sm:text-4xl py-3 mx-4 sm:mx-16">Skills</h1>
      <div className="grid grid-cols-3 flex-1 lg:grid-cols-4 gap-3 sm:gap-5 w-full text-2xl sm:text-4xl place-items-center">
        {icons.map(({ Component, title }, idx) => (
          <div
            key={title}
            ref={(el) => (iconsRefs.current[idx] = el)}
            className="cursor-pointer"
            title={title}
          >
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
