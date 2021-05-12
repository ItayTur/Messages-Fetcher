import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './IconButton.module.css';

const IconButton = ({ icon, className, onMouseDown, onMouseUp, onMouseLeave }) => {
    return (
        <button
            className={`${classes.IconButton} ${className}`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
        >
            <FontAwesomeIcon className={classes.Icon} icon={icon} />
        </button>
    );
};

export default IconButton;