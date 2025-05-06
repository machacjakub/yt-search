import { FaHistory, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import { useState } from 'react';
import PhraseTag from './PhraseTag';
import styles from './History.module.css';

const MAX_VISIBLE_TAGS = 5

export default function History({history, onFavoritesChange, onHistoryChange}) {
    const [fullHistoryDisplayed, setFullHistoryDisplayed] = useState(false)

  if (history.length === 0) return null;

  const isAllVisible = history.length < MAX_VISIBLE_TAGS + 6;

  const onFullHistoryClick = () => setFullHistoryDisplayed((state) => !state)

  return (
        <div className={styles.historyContainer}>
            <div className={styles.historyHeader}>
                <FaHistory className={styles.historyIcon} />
            </div>
            <div className={styles.historyTags}>
            {history.map((item, index) => {
                if(!isAllVisible && index >= MAX_VISIBLE_TAGS && !fullHistoryDisplayed) return null;
                return <PhraseTag key={index} item={item} onHistoryChange={onHistoryChange} onFavoritesChange={onFavoritesChange} />
            })}
            </div>
            {!isAllVisible && history.length > MAX_VISIBLE_TAGS && <button onClick={onFullHistoryClick} className={styles.fullHistoryButton}>{fullHistoryDisplayed ? <FaChevronUp/> : <FaChevronDown/>}</button>}
        </div>
  );
}