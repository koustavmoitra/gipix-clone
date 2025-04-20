import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
        }, 500); // loader duration

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (exit) {
            const exitTimer = setTimeout(() => {
                onFinish(); // notify parent to remove loader
            }, 1000); // match with animation duration
            return () => clearTimeout(exitTimer);
        }
    }, [exit, onFinish]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-[#f76043] flex items-center justify-center z-50 transition-transform duration-1000 ease-in-out ${exit ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
        </div>
    );
};

export default Loader;
