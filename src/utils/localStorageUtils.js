export const getHistory = () => JSON.parse(localStorage.getItem('yt-search-history') ?? '[]');
export const getFavorites = () => JSON.parse(localStorage.getItem('yt-search-favorites') ?? '[]');

export const addToHistory = (newPhrase) => localStorage.setItem('yt-search-history', JSON.stringify([newPhrase,...getHistory()]));
export const addToFavorites = (newPhrase) => localStorage.setItem('yt-search-favorites', JSON.stringify([newPhrase,...getFavorites()]));

export const removeFromHistory = (phraseToRemove) => localStorage.setItem('yt-search-history', JSON.stringify(getHistory().filter(phrase => phrase !== phraseToRemove)));
export const removeFromFavorites = (phraseToRemove) => localStorage.setItem('yt-search-favorites', JSON.stringify(getFavorites().filter(phrase => phrase !== phraseToRemove)));