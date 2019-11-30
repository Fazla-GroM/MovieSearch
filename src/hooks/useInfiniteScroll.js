import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
    const [isFetching, setIsFetching] = useState(false);
    console.log(isFetching);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        callback().then(() => setIsFetching(false));
    }, [isFetching]);
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isFetching
        )
            return;
        setIsFetching(true);
    };

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
