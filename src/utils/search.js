import {addToHistory} from "./localStorageUtils.js";

export const handleSearch = (query) => {
    const encodedQuery = encodeURIComponent(query);
    addToHistory(query)
    window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
};