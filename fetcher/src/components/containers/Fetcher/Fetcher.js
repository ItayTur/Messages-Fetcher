import { useState, useEffect, useRef } from 'react';
import axios from '../../../messagesAxios';

import Header from '../../presentationals/Header/Header';
import Messages from '../../presentationals/Messages/Messages';

import classes from './Fetcher.module.css';

const Fetcher = () => {
    const [messages, setMessages] = useState([]);
    const [messageWidth, setMessageWidth] = useState(280)
    const searchRef = useRef('');
    const intervalRef = useRef();
    const searchTimerRef = useRef();

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        const { data: messagesToSet } = await axios.get('messages');
        setMessages(messagesToSet)
    }

    const searchMessages = (e) => {
        clearTimeout(searchTimerRef.current);
        searchTimerRef.current = setTimeout(async () => {
            const currentSearch = e.target.value;
            searchRef.current = currentSearch;
            const { data: messagesToSet } = await axios.get('messages', {
                params: {
                    search: currentSearch
                }
            });
            if (searchRef.current === currentSearch) {
                setMessages(messagesToSet);
            }
        }, 250)
    }

    const enlargeMessage = () => {
        initInterval(true)
    };

    const shrinkMessage = () => {
        initInterval();
    }

    const initInterval = (isEnlarging = false) => {
        intervalRef.current = setInterval(() => {
            setMessageWidth(prev => isEnlarging ? ++prev : --prev);
        }, 50)
    }

    const stopInterval = () => {
        clearInterval(intervalRef.current)
    };

    return (
        <div className={classes.Fetcher}>
            <Header
                onSearch={searchMessages}
                onMouseLeave={stopInterval}
                onMouseUp={stopInterval}
                onPlusDown={enlargeMessage}
                onMinusDown={shrinkMessage}
            />
            <Messages messageWidth={messageWidth} messages={messages} />
        </div>
    );
};

export default Fetcher;