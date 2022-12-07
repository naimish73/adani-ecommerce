import "./chat.css";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Todo from "./Todo";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPWfxMve13iaOkmUs8EDn7Zu2UNOFzQog",
    authDomain: "adani-mooc.firebaseapp.com",
    projectId: "adani-mooc",
    storageBucket: "adani-mooc.appspot.com",
    messagingSenderId: "161778570951",
    appId: "1:161778570951:web:8799b97847da3e28e090e2",
    measurementId: "G-3DH8RPVLV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

function Chat() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    // const [name, setName] = useState(""); name variable
    var [open, setOpen] = useState(true);
    const [name, setName] = useState("");

    // useEffect(() => {
    //     // this fires when the page loads
    //     db.collection("todos")
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot((snapshot) => {
    //             setTodos(
    //                 snapshot.docs.map((doc) => {
    //                     return { id: doc.id, todo: doc.data().todo };
    //                 })
    //             );
    //         });
    // }, []);

    const addTodo = async (event) => {
        event.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todo: input,
                // timestamp: db.firestore.FieldValue.serverTimestamp(),
                timestamp: serverTimestamp(),
                name,
            });
            console.log(
                "Document written with ID: ",
                docRef.id,
                name,
                serverTimestamp(),
                input
            );
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // db.collection("todos").add({
        //     todo: input,
        //     timestamp: db.firestore.FieldValue.serverTimestamp(),
        //     name,
        // });

        setTodos([...todos, input]);
        setInput("");
    };

    function buttonClick(e) {
        e.preventDefault();
        setOpen(false);
    }

    async function loadDatabase() {
        const querySnapshot = await getDocs(
            // collection(db, "todos").orderBy("timestamp", "desc")
            collection(db, "todos")
        );
        // const q = await query(querySnapshot, orderBy("timestamp", "desc"));
        // console.log(q);
        querySnapshot.forEach((doc) => {
            console.log(
                `this is a value:${doc.id} ${doc.data().todo} ${
                    doc.data().name
                }`
            );
            return {
                id: doc.id,
                todo: doc.data().todo,
                name: doc.data().name,
            };
        });

        // db.collection("todos")
        //     .orderBy("timestamp", "desc")
        //     .onSnapshot((snapshot) => {
        //         setTodos(
        //             snapshot.docs.map((doc) => {
        //                 return {
        //                     id: doc.id,
        //                     todo: doc.data().todo,
        //                     name: doc.data().name,
        //                 };
        //             })
        //         );
        //     });
    }

    return (
        <>
            <div className="App">
                <h1
                    style={{
                        paddingTop: "1%",
                    }}
                >
                    Chat system!!
                </h1>

                <div
                    style={{
                        zIndex: "2",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        backgroundColor: "grey",
                        height: "100vh",
                        width: "100%",
                        display: open ? "flex" : "none",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        <form>
                            <TextField
                                id="outlined-basic"
                                label="enter your name:"
                                variant="outlined"
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                onClick={loadDatabase}
                            ></TextField>
                            <br />
                            <br />
                            <Button
                                type="submit"
                                onClick={buttonClick}
                                variant="contained"
                                color="primary"
                                disabled={!name}
                            >
                                ok
                            </Button>
                        </form>
                    </div>
                </div>

                <form>
                    <TextField
                        id="outlined-basic"
                        label="enter message"
                        variant="outlined"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        style={{
                            width: "75%",
                            height: "55px",
                            position: "fixed",
                            bottom: "15px",
                            left: "5%",
                            zIndex: "1",
                        }}
                    />

                    <Button
                        style={{
                            width: "10%",
                            height: "55px",
                            marginLeft: "50px",
                            position: "fixed",
                            bottom: "15px",
                            right: "5%",
                            zIndex: "1",
                        }}
                        type="submit"
                        onClick={addTodo}
                        variant="contained"
                        color="primary"
                        disabled={!input}
                    >
                        send
                    </Button>
                </form>

                <ul>
                    {todos.map((todo) => (
                        <Todo todo={todo} />
                        // <li>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Chat;
