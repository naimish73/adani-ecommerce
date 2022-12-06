import "./App.css";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
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

    const addTodo = (event) => {
        event.preventDefault();
        db.collection("todos").add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            name,
        });
        setTodos([...todos, input]);
        setInput("");
    };

    function buttonClick(e) {
        e.preventDefault();
        setOpen(false);
    }

    function loadDatabase() {
        db.collection("todos")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setTodos(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            todo: doc.data().todo,
                            name: doc.data().name,
                        };
                    })
                );
            });
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

export default App;
