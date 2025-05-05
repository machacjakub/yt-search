import { FaSearch, FaRegStar, FaStar, FaEllipsisH, FaTrash } from 'react-icons/fa';
import styles from './PhraseTag.module.css';
import { useState, useEffect, useRef } from 'react';

const PhraseTag = ({ item, onHistoryChange, onFavoritesChange, color }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('yt-search-favorites') || '[]');
        setIsFavorite(favorites.includes(item));
    }, [item]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (query) => {
        const encodedQuery = encodeURIComponent(query);
        const currentHistory = JSON.parse(localStorage.getItem('yt-search-history')?? '');
      	localStorage.setItem('yt-search-history', JSON.stringify([query,...currentHistory]));
        window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
    };

    const toggleFavorite = (e) => {
        e.stopPropagation();
        const favorites = JSON.parse(localStorage.getItem('yt-search-favorites') || '[]');
        if (isFavorite) {
            const newFavorites = favorites.filter(fav => fav !== item);
            localStorage.setItem('yt-search-favorites', JSON.stringify(newFavorites));
        } else {
            favorites.push(item);
            localStorage.setItem('yt-search-favorites', JSON.stringify(favorites));
        }
        setIsFavorite(!isFavorite);
        setShowDropdown(false);
        if (onFavoritesChange) onFavoritesChange();
    };

    const removeFromHistory = (e) => {
        e.stopPropagation();
        const history = JSON.parse(localStorage.getItem('yt-search-history') || '[]');
        const newHistory = history.filter(hist => hist !== item);
        localStorage.setItem('yt-search-history', JSON.stringify(newHistory));
        setShowDropdown(false);
        if (onHistoryChange) onHistoryChange();
    };

    const buttonStyles = `${showDropdown
    ? `${styles.historyTag} ${styles.active}`
    : styles.historyTag} ${color === 'yellow' && styles.favoriteTag}`

    return (
        <button
            className={
                buttonStyles
            }
            onClick={() => handleSearch(item)}
        >
            <span className={styles.tagText}>{item}</span>
            <FaSearch className={styles.searchIcon} />
            <div className={styles.dropdownContainer} ref={dropdownRef}>
                <button 
                    className={styles.ellipsisButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown(!showDropdown);
                    }}
                >
                    <FaEllipsisH className={styles.ellipsisIcon} />
                </button>
                {showDropdown && (
                    <div className={styles.dropdown}>
                        <button 
                            className={styles.dropdownItem}
                            onClick={toggleFavorite}
                        >
                            {isFavorite ? (
                                <>
                                    <FaStar className={styles.dropdownIcon} />
                                    Remove from favorites
                                </>
                            ) : (
                                <>
                                    <FaRegStar className={styles.dropdownIcon} />
                                    Add to favorites
                                </>
                            )}
                        </button>
                        <button 
                            className={styles.dropdownItem}
                            onClick={removeFromHistory}
                        >
                            <FaTrash className={styles.dropdownIcon} />
                            Remove from history
                        </button>
                    </div>
                )}
            </div>
        </button>
    );
};

export default PhraseTag;