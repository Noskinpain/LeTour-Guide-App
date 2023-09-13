import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../../config/firebase";

const SendMessage = () => {
    const [value, setValue] = useState("");
    const { currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            alert("Enter valid message!");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            });
        } catch (error) {
            console.log(error);
        }

        setValue("");
    };

    return (
        <div className='bg-blue-100 fixed bottom-0 w-full py-10 shadow-lg'>
            <form onSubmit={handleSubmit} className='containerWrap flex px-4 md:px-20'>
                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className='input w-full focus:outline-none bg-white shadow-md rounded-r-none' />
                <button type='submit' className='w-auto bg-black text-white rounded-r-lg px-5 text-sm'>send</button>
            </form>
        </div>
    );
}

export default SendMessage;
