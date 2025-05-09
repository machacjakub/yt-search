import PhraseTag from './PhraseTag';
import styles from './History.module.css';

export default function Favorites({favorites, onFavoritesChange, onHistoryChange}) {

  if (favorites.length === 0) return null;

  return (
      <div className={styles.sectionContainer}>
          <h3 className={styles.historyHeading}>Favorites</h3>
          <div className={styles.historyContainer}>
            <div className={styles.historyTags}>
            {favorites.map((item, index) => (
              <PhraseTag key={index} phrase={item} onHistoryChange={onHistoryChange} onFavoritesChange={onFavoritesChange} />
            ))}
            </div>
         </div>
      </div>
  );
}