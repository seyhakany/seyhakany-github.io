import _ from 'lodash';
import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

function useDebounce(cb: (arg0: any) => void, dependencies: any, duration = 500) {
    //   const ac = new AbortController();
    const firstRender = useRef(false);

    const [debounceChanged, setDebounceChanged] = useState({});

    //   functions section
    const debounceDependencies = _.debounce(setDebounceChanged, duration);
    const setDebounceDependencies = useCallback((dep: SetStateAction<any>) => {
        debounceDependencies(dep);
    }, []);

    // hooks section
    useEffect(() => {
        if (!firstRender?.current) {
            firstRender.current = true;
            return;
        }
        cb(debounceChanged);
        return () => {
            //   ac.abort();
        };
    }, [debounceChanged]);

    useEffect(() => {
        setDebounceDependencies(dependencies);
        return () => {
            //   ac.abort();
        };
    }, [dependencies]);

    return;
}

export default useDebounce;
