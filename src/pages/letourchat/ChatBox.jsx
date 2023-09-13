import React, { useState,useRef, useEffect } from 'react'
import Message from './Message'
import { collection, query,orderBy, onSnapshot, limit } from "firebase/firestore"
import {db} from "../../config/firebase"


const ChatBox = () => {

    const [messages, setMessages] = useState([])
    
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behaviour: "smooth"})
    }
     useEffect( scrollToBottom ,[messages ])
    const messagesEndRef = useRef()
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
            );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
               
            });
        setMessages(messages)
        });
        return () => unsubscribe 
    }, [])
    return (
        <>
            <div className='pb-44 pt-20  px-4 md:px-20'>
                {messages.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
        <div className="" ref={messagesEndRef}>

        </div>
        </>
    )
}

export default ChatBox