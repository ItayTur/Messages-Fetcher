import classes from './Field.module.css';

const Field = ({ label, content, className }) => {
    return (
        <div className={`${className}`}>
            <div className={classes.Label}>{label}</div>
            <div className={classes.Content}>{content}</div>
        </div>
    );
};

export default Field;