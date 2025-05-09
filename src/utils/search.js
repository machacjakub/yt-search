import {addToHistory} from "./localStorageUtils.js";

export const handleSearch = (query) => {
    addToHistory(query)
    const encodedQuery = encodeURIComponent(query);
    window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
};