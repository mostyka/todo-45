import './calendar.css'

const Calendar = () => {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let date = new Date();

    return (
        <div className={"calendar"}>
            <div className={"top-frame"}>
                <div>{months[date.getMonth()]}</div>
            </div>
            <div className={"bottom-frame"}>
                <div>{date.getDate()}</div>
            </div>
        </div>
    );
}

export default Calendar;