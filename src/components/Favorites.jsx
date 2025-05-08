
import { FaRegStar } from 'react-icons/fa';
import PhraseTag from './PhraseTag';
import styles from './History.module.css';

export default function Favorites({favorites, onFavoritesChange, onHistoryChange}) {

  if (favorites.length === 0) return null;

  return (
    <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
            <FaRegStar className={styles.favoriteIcon} />
        </div>
        <div className={styles.historyTags}>
        {favorites.map((item, index) => (
          <PhraseTag key={index} item={item} onHistoryChange={onHistoryChange} onFavoritesChange={onFavoritesChange} />
        ))}
        </div>
    </div>
  );
}