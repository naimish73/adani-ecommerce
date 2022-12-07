import React, { useState } from "react";
import "./Todo.css";
import { List, ListItem, ListItemText, Modal, Button } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

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

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const updateTodo = () => {
        db.collection("todos").doc(props.todo.id).set(
            {
                todo: input,
            },
            { merge: true }
        );
        setOpen(false);
    };
    const [input, setInput] = useState("");

    return (
        <>
            <Modal open={open} onClose={(e) => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Update your message: </h1>
                    <input
                        placeholder={props.todo.todo}
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <Button onClick={updateTodo}> Update </Button>
                </div>
            </Modal>

            <List className="todo_list">
                <ListItem>
                    <ListItemText
                        primary={props.todo.todo}
                        secondary={props.todo.name}
                        style={{
                            backgroundColor: "lightblue",
                        }}
                    />
                </ListItem>
                <button
                    onClick={() => setOpen(true)}
                    style={{
                        height: "25px",
                        width: "75px",
                        display: "inline",
                        backgroundColor: "lightyellow",
                        marginLeft: "85%",
                        transform: "translate(-70px, -55px)",
                    }}
                >
                    edit
                </button>
                <DeleteIcon
                    onClick={(event) =>
                        db.collection("todos").doc(props.todo.id).delete()
                    }
                    style={{
                        backgroundColor: "lightgreen",
                        transform: "translate(-50px, -50px)",
                    }}
                />
            </List>
        </>
    );
}

export default Todo;
