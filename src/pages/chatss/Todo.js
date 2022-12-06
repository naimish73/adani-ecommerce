import React, { useState } from "react";
import "./Todo.css";
import { List, ListItem, ListItemText, Modal, Button } from "@material-ui/core";
import db from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

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
