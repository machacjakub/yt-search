import History from "./History"
import Favorites from "./Favorites"
import { useState, useEffect } from "react";
import styles from "./History.module.css";
import {getFavorites, getHistory} from "../utils/localStorageUtils.ts";

export default function UsersPhrases () {
    const [history, setHistory] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const refreshFavorites = () => setFavorites(getFavorites());
    const refreshHistory = () => setHistory(getHistory());

    useEffect(() => {
        refreshHistory()
        refreshFavorites()
      }, []);

    return <div style={{width: '100%'}}>
		<Favorites favorites={favorites} onHistoryChange={refreshHistory} onFavoritesChange={refreshFavorites} />
        {favorites.length > 0 && history.length > 0 && <div className={styles.divider} />}
        <History history={history} onHistoryChange={refreshHistory} onFavoritesChange={refreshFavorites} />
    </div>
}