'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Connect = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for overlay content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      },
    });

    // Animate headline
    tl.from(headlineRef.current, {
      y: 50,
      opacity: 0,
      scale: 1.2,
      duration: 1,
      ease: 'power4.out',
    })
      // Paragraph fade & slide
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      // Button pop-in
      .from(
        buttonRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        '-=0.4'
      );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="w-full sm:my-5 h-full">
      <div className="video-wrapper w-full h-screen relative overflow-hidden">
        <video
          className="bg-video absolute inset-0 min-w-full min-h-full object-cover -z-50"
          src="/vid2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 text-white p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 lg:gap-10 sm:gap-0 md:gap-10 sm:flex-row justify-between items-center">
          <div ref={headlineRef} className="max-w-lg">
            <p className="text-5xl lg:text-5xl sm:text-7xl xl:text-7xl">
              Building Seamless Digital <br /> Ecosystems
            </p>
          </div>
          <div ref={textRef} className="lg:w-1/2 flex flex-col justify-center items-start gap-5">
            <p className="text-2xl opacity-90">
              Each project here represents a journey through creative problem-solving
              and user-centered thinking. I've focused on creating experiences that are
              not just visually appealing, but intuitive and meaningful for the people
              who interact with them.
            </p>
            <a
              ref={buttonRef}
              className="rounded-full border hover:border-white text-black bg-white p-2 text-center cursor-pointer text-sm hover:bg-inherit hover:text-white transition-colors duration-300"
              href="mailto:vairamuththusinthujan@gmail.com?subject=Your%20subject%20Here&body=Your%20Body%20text%20here."
            >
              <p>Let's Connect</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
