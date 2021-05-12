import Controllers from '../Controllers/Controllers';

import classes from './Header.module.css';

const Header = ({ onSearch, onPlusDown, onMinusDown, onMouseUp, onMouseLeave }) => {
    return (
        <div className={classes.Header}>
            <div className={classes.TitleContainer}>
                <h1 className={classes.Title}>The Fetcher</h1>
                <h4 className={classes.SubTitle}>Fetches, parses and filters out messages</h4>
                <Controllers onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onPlusDown={onPlusDown} onMinusDown={onMinusDown} />
            </div>
            <div className={classes.SearchContainer}>
                <input onChange={onSearch} className={classes.Search} placeholder="Filter by..." />
                <span className={classes.SearchInfo}> please fill the query you want to filter by (channel, sender or content)</span>
            </div>
        </div>
    );
};

export default Header;