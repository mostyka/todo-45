import './dialog.css'
import {useState} from "react";

const Dialog = (props) => {
    const [taskContent, setTaskContent] = useState("");

    function handleChange(event) {
        setTaskContent(event.target.value);
    }

    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <div className="modal-content-header">
                    <span className="header-text">Input new task</span>
                    <div className="modal-space"/>
                    <div
                        className="close"
                        onClick={() => {props.close()}}
                    >
                        <svg width="54" height="54" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/>
                            <rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4"
                                  transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/>
                            <rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4"
                                  transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/>
                        </svg>
                    </div>
                </div>

                <div className={"input-block"}>
                    <input className={"inputField"} value={taskContent} autoFocus={true} onChange={handleChange}/>
                </div>
                <div className={"modal-buttons"}>
                    <button onClick={() => {
                        props.add(taskContent)
                    }}>Add
                    </button>
                    <div className="modal-space"/>
                    <button onClick={() => {
                        props.close()
                    }}>Cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dialog;