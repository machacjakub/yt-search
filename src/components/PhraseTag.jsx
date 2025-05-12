import { FaSearch, FaRegStar, FaStar, FaEllipsisH, FaTrash } from 'react-icons/fa';
import styles from './PhraseTag.module.css';
import { useState, useEffect, useRef } from 'react';
import {
    addToFavorites,
    getFavorites,
    removeFromFavorites, removeFromHistory
} from "../utils/localStorageUtils.ts";
import {handleSearch} from "../utils/search.js";

const PhraseTag = ({ phrase, onHistoryChange, onFavoritesChange}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        setIsFavorite(getFavorites().includes(phrase));
    }, [phrase]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                !(buttonRef.current && buttonRef.current.contains(event.target))) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        if (isFavorite) {
            removeFromFavorites(phrase)
        } else {
            addToFavorites(phrase)
        }
        setIsFavorite(!isFavorite);
        setShowDropdown(false);
        if (onFavoritesChange) onFavoritesChange();
    };

    const handleRemoveFromHistory = (e) => {
        e.stopPropagation();
        removeFromHistory(phrase);
        setShowDropdown(false);
        if (onHistoryChange) onHistoryChange();
    };

    const buttonStyles = `${showDropdown
        ? `${styles.historyTag} ${styles.active}`
        : styles.historyTag}`

    // Calculate the dropdown position based on the button's position
    const getDropdownPosition = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            return {
                top: `${rect.bottom + window.scrollY}px`,
                right: `${window.innerWidth - rect.right}px`
            };
        }
        return {};
    };

    return (
        <>
            <div
                ref={buttonRef}
                className={buttonStyles}
                onClick={() => handleSearch(phrase)}
            >
                <FaSearch className={styles.searchIcon} />
                <span className={styles.tagText}>{phrase}</span>
                <button
                    className={styles.ellipsisButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown(!showDropdown);
                    }}
                >
                    <FaEllipsisH className={styles.ellipsisIcon} />
                </button>
            </div>
            {showDropdown && (
                <div
                    ref={dropdownRef}
                    className={styles.dropdownPortal}
                    style={getDropdownPosition()}
                >
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
                            onClick={handleRemoveFromHistory}
                        >
                            <FaTrash className={styles.dropdownIcon} />
                            Remove from history
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PhraseTag;