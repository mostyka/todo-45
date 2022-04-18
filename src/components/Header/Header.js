import './header.css';
import Calendar from "../Calendar/Calendar";
import Menu from "../Menu/Menu";

const Header = (props) => {
    return (
        <div className={"header"}>
            <Calendar className={"calendar"}/>
            <p className={"title"}>Today</p>
            <div className={"space"}/>
            <Menu choose={props.choose} taskGroups={props.taskGroups} chooseIndex={props.chooseIndex}/>
        </div>
    );
}

export default Header;