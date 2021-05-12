import IconButton from '../UI/IconButton/IconButton';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import classes from './Controllers.module.css';

const Controllers = ({ onPlusDown, onMinusDown, onMouseUp, onMouseLeave }) => {
    const iconCommonProps = {
        className: classes.Controller,
        onMouseUp: onMouseUp,
        onMouseLeave: onMouseLeave,
    }

    return (
        <div>
            <IconButton {...iconCommonProps} icon={faPlus} onMouseDown={onPlusDown} />
            <IconButton {...iconCommonProps} icon={faMinus} onMouseDown={onMinusDown} />
        </div>
    );
};

export default Controllers;