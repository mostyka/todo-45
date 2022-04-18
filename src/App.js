import './App.css';
import {collection, doc, onSnapshot, setDoc} from "@firebase/firestore"
import {useEffect, useState} from "react";

import db from './firebase';

import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import CreateButton from "./components/CreateButton/CreateButton";
import Dialog from "./components/Dialog/Dialog";

const App = () => {
    const [taskGroups, setTaskGroup] = useState(["Completed", "InProgress", "Removed"]);
    const [chooseGroup, setChooseGroup] = useState(1);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [tasks, setTasks] = useState({
        Completed: [],
        InProgress: [],
        Removed: []
    });

    useEffect(
        () =>
            onSnapshot(collection(db, "MyTodo",), (snapshot) => {
                setTasks(snapshot.docs.map((doc) => (doc.data()))[0]);
            })
        ,
        []
    );

    const save = async () => {
        const docRef = doc(db, "MyTodo", "MyTasks");
        await setDoc(docRef, tasks)
    }

    function showDialog() {
        setDialogVisible(true);
    }

    function closeDialog() {
        setDialogVisible(false);
    }

    function addTask(text) {
        let data = {};
        Object.assign(data, tasks);

        if (chooseGroup === 0) {
            data.Completed.push(text)
        } else if (chooseGroup === 1) {
            data.InProgress.push(text)
        } else if (chooseGroup === 2) {
            data.Removed.push(text)
        } else {
            data.InProgress.push(text)
        }

        setTasks(data);
        save();
        closeDialog();
    }

    function removeTask(key, fromGroup) {
        let data = {};
        Object.assign(data, tasks);

        let groupTarget = fromGroup === 2 ? 1 : 2;
        let removed = selectTasksByType(data, fromGroup).splice(key, 1);
        selectTasksByType(data, groupTarget).push(removed[0]);
        setTasks(data);
        save()
    }

    function completeTask(key, fromGroup) {
        let data = {};
        Object.assign(data, tasks);

        let groupTarget = fromGroup === 0 ? 1 : 0;
        let completed = selectTasksByType(data, fromGroup).splice(key, 1);
        selectTasksByType(data, groupTarget).push(completed[0]);
        setTasks(data);
        save()
    }

    function chooseTasks(index) {
        setChooseGroup(index);
    }

    function copyTasksByType(source, chooseGroup) {
        let choose;

        if (chooseGroup === 0) {
            choose = [...source.Completed]
        } else if (chooseGroup === 1) {
            choose = [...source.InProgress]
        } else if (chooseGroup === 2) {
            choose = [...source.Removed]
        } else {
            choose = [...source.InProgress]
        }

        return choose;
    }

    function selectTasksByType(source, chooseGroup) {
        let choose;

        if (chooseGroup === 0) {
            choose = source.Completed
        } else if (chooseGroup === 1) {
            choose = source.InProgress
        } else if (chooseGroup === 2) {
            choose = source.Removed
        } else {
            choose = source.InProgress
        }

        return choose;
    }

    return (
        <div className="app">
            <Header choose={chooseTasks} chooseIndex={chooseGroup} taskGroups={taskGroups}/>
            <div style={{marginTop: 100}}>
                {
                    copyTasksByType(tasks, chooseGroup).map((task, index) => {
                        return (
                            <Item
                                key={index}
                                taskIndex={index}
                                content={task}
                                remove={removeTask}
                                complete={completeTask}
                                groupIndex={chooseGroup}
                            />
                        )
                    })
                }

                <CreateButton showDialog={showDialog}/>
                {dialogVisible
                    ? <Dialog close={closeDialog} add={addTask}/>
                    : null
                }
            </div>
        </div>
    );
}

export default App;
