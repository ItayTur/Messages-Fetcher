import Message from '../Message/Message';

import classes from './Messages.module.css';

const Messages = ({ messages, messageWidth }) => {
    const messagesToShow = messages.map(message => <Message width={messageWidth} key={message.id} {...message} />)

    return (
        <div className={classes.Messages}>
            {messagesToShow}
        </div>
    );
};

export default Messages;