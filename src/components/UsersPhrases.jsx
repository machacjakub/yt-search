import History from "./History"
import Favorites from "./Favorites"
import { useState, useEffect } from "react";
import styles from "./History.module.css";

export default function UsersPhrases () {
    const [history, setHistory] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedHistory = localStorage.getItem('yt-search-history');
        const storedFavorites = localStorage.getItem('yt-search-favorites');
        if (storedHistory) {
          setHistory(JSON.parse(storedHistory));
        }
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);

        // Refresh history from localStorage
        const refreshFavorites = () => {
            const storedFavorites= localStorage.getItem('yt-search-favorites');
            setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
        };

        // Refresh history from localStorage
        const refreshHistory = () => {
            const storedHistory = localStorage.getItem('yt-search-history');
            setHistory(storedHistory ? JSON.parse(storedHistory) : []);
        };

    return <div>
		<Favorites favorites={favorites} onHistoryChange={refreshHistory} onFavoritesChange={refreshFavorites} />
        {favorites.length > 0 && history.length > 0 && <div className={styles.divider} />}
        <History history={history} onHistoryChange={refreshHistory} onFavoritesChange={refreshFavorites} />
    </div>
}