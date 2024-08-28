import { FC, useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const ScrollToTopButton: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`fixed bottom-4 left-4 p-3 bg-gray-600 text-white rounded-full shadow-lg transition-opacity transform ${isVisible ? 'opacity-100' : 'opacity-0'} hover:bg-gray-700`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ChevronUpIcon className="h-5 w-5 " />
        </button>
    );
};

export default ScrollToTopButton;
