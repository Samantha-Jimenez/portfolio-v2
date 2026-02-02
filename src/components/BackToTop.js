import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            // Show after scrolling down 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Link
            to="landing"
            spy={true}
            smooth={true}
            duration={800}
            className={`back-to-top fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--button-color)] text-white shadow-lg cursor-pointer transition-all duration-300 hover:bg-[var(--button-selected)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--button-color)] ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll back to top"
            role="button"
            tabIndex={isVisible ? 0 : -1}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
            </svg>
        </Link>
    );
};

export default BackToTop;
