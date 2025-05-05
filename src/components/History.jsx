import { useState, useEffect } from 'react';
import { FaHistory } from 'react-icons/fa';
import PhraseTag from './PhraseTag';
import styles from './History.module.css';

export default function History({history, onFavoritesChange, onHistoryChange}) {

  if (history.length === 0) return null;

  return (
    <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
            <FaHistory className={styles.historyIcon} />
        </div>
        <div className={styles.historyTags}>
        {history.map((item, index) => {
            if(index >= 10) return null;
            return <PhraseTag key={index} item={item} onHistoryChange={onHistoryChange} onFavoritesChange={onFavoritesChange} />
        })}
        </div>
    </div>
  );
}