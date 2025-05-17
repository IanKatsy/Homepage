'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { ControlGroup, ControlGroupItem } from './ui/control-group';
import {
    InputBase,
    InputBaseAdornment,
    InputBaseControl,
    InputBaseInput,
} from '@/components/ui/input-base';

const getDefaultBang = (): string => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('default_bang') || '!g';
    }
    return '!g'; // Fallback for SSR
};

const SearchBar = () => {
    const [inputValue, setInputValue] = useState(''); // Full content of the input field
    const [displayedBang, setDisplayedBang] = useState(''); // The bang to show in the adornment
    const [queryToParse, setQueryToParse] = useState(''); // The part of the input considered as query

    const unduck_url = 'https://unduck.link?q=';

    // Effect to parse inputValue and set displayedBang and queryToParse
    useEffect(() => {
        const defaultBangValue = getDefaultBang();
        let newBang = defaultBangValue;
        let newQuery = inputValue;

        if (inputValue.startsWith('!')) {
            const spaceIndex = inputValue.indexOf(' ');
            if (spaceIndex === -1) {

                if (inputValue.length > 1) {
                    newBang = inputValue;
                    newQuery = '';
                } else {

                    newBang = defaultBangValue;
                    newQuery = inputValue;
                }
            } else {
                // Bang and query, e.g., "!g query" or "! query"
                const potentialBang = inputValue.substring(0, spaceIndex);
                if (potentialBang.length > 1) {
                    // Bang part must be like !a
                    newBang = potentialBang;
                    newQuery = inputValue.substring(spaceIndex + 1);
                } else {
                    // Bang part is just "!", treat as query with default bang
                    newBang = defaultBangValue;
                    newQuery = inputValue; // query is "! query"
                }
            }
        }
        // If inputValue does not start with '!', newBang remains defaultBangValue, newQuery is inputValue

        setDisplayedBang(newBang);
        setQueryToParse(newQuery);
    }, [inputValue]);

    // Effect to set initial bang when component mounts and inputValue is empty
    useEffect(() => {
        // This ensures the adornment shows the default bang on initial load if input is empty.
        if (inputValue === '') {
            setDisplayedBang(getDefaultBang());
            setQueryToParse('');
        }
    }, [inputValue]); // Also run if inputValue becomes empty

    // Set initial bang on mount
    useEffect(() => {
        setDisplayedBang(getDefaultBang());
    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedQuery = queryToParse.trim();

        // Construct the search string for unduck.link
        // It expects the bang as part of the query string, e.g., "!g actual query"
        const searchString = `${displayedBang} ${trimmedQuery}`.trim();

        if (searchString) {
            // Only redirect if there's something to search (even if it's just the bang)
            window.location.href = `${unduck_url}${encodeURIComponent(searchString)}`;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex">
            <ControlGroup
                className={
                    'flex-grow bg-blur-md bg-black/70 border-white/10 rounded-md w-full'
                }
            >
                <ControlGroupItem>
                    <InputBase>
                        <InputBaseAdornment>{displayedBang}</InputBaseAdornment>
                    </InputBase>
                </ControlGroupItem>
                <ControlGroupItem className={'flex-1 w-max'}>
                    <InputBase>
                        <InputBaseControl>
                            <InputBaseInput
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Search with unduck!"
                                className={'w-full'}
                            />
                        </InputBaseControl>
                    </InputBase>
                </ControlGroupItem>
                <ControlGroupItem className={'m-0 p-0'}>
                    <InputBase className={'p-0'}>
                        <button
                            type="submit"
                            className={
                                'size-9 justify-center items-center flex [&_svg:not([class*=\'size-\'])]:size-4 text-white hover:bg-white/10 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            }
                            aria-label="Search"
                        >
                            <Search />
                        </button>
                    </InputBase>
                </ControlGroupItem>
            </ControlGroup>
        </form>
    );
};

export default SearchBar;
