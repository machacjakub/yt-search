export const getHistory = (): string[] => JSON.parse(localStorage.getItem('yt-search-history') ?? '[]');
export const getFavorites = (): string[] => JSON.parse(localStorage.getItem('yt-search-favorites') ?? '[]');
export const getViewedAnnouncements = (): string[] => JSON.parse(localStorage.getItem("yt-search-viewed-announcements") ?? '[]');

export const addToHistory = (newPhrase: string) => localStorage.setItem('yt-search-history', JSON.stringify([newPhrase,...getHistory()]));
export const addToFavorites = (newPhrase: string) => localStorage.setItem('yt-search-favorites', JSON.stringify([newPhrase,...getFavorites()]));
export const setAnnouncementAsViewed = (announcementName: string) => localStorage.setItem('yt-search-viewed-announcements', JSON.stringify([announcementName,...getViewedAnnouncements()]));

export const removeFromHistory = (phraseToRemove: string) => localStorage.setItem('yt-search-history', JSON.stringify(getHistory().filter(phrase => phrase !== phraseToRemove)));
export const removeFromFavorites = (phraseToRemove: string) => localStorage.setItem('yt-search-favorites', JSON.stringify(getFavorites().filter(phrase => phrase !== phraseToRemove)));