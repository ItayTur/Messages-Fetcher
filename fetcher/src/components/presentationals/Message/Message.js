import Field from '../UI/Field/Field';

import classes from './Message.module.css';

const Message = ({ channel, from, content, color, width }) => {
    const style = {
        background: color,
        width,
    }

    return (
        <div style={style} className={classes.Message}>
            <Field className={classes.MessageField} label="Channel" content={channel} />
            <Field className={classes.MessageField} label="From" content={from} />
            <Field className={classes.MessageField} label="Content" content={content} />
        </div>
    );
};

export default Message;