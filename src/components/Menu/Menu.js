import './menu.css';
import {useState} from "react";

const Menu = (props) => {
    const menuClass = "menu"
    const [open, setOpen] = useState(false);
    const [toggleDots, setToggleDots] = useState("closed_dots");
    const [toggleSubMenu, setToggleSubMenu] = useState("closed_submenu");

    const expand = () => {
        if (!open) {
            setOpen(true);
            setToggleDots("opened_dots")
            setToggleSubMenu("opened_submenu")
        } else {
            setOpen(false);
            setToggleDots("closed_dots")
            setToggleSubMenu("closed_submenu")
        }
    };

    return (
        <>
            <div className={menuClass + " " + toggleDots}>
                <div className={"menu_button"} onClick={expand}>
                    <svg width="36" height="12" viewBox="0 0 11 3" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
                        <circle cx="5.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
                        <circle cx="9.5" cy="1.5" r="1.5" fill="#C4C4C4"/>
                    </svg>
                </div>
                <div className={toggleSubMenu} >
                    {
                        props.taskGroups.map((item, index) => {
                            let chooseStyle = (props.chooseIndex === index) ? "choose-item" : "";
                            return (
                                <div
                                    key={index}
                                    className={"dropdown-item " + chooseStyle}
                                    onClick={()=>{props.choose(index)}}
                                >
                                    {props.taskGroups[index]}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Menu;
