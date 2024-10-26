import React from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    return (
        <div className={styles.searchBarContainer}>
            <label htmlFor="search">Discover Local Events</label>
            <input
                className={styles.searchField}
                name="search"
                type="text"
                placeholder="Discover..."
                onChange={e => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
