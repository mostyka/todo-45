import './item.css';

const Item = (props) => {
    return (
        <div className={"item"}>
            <div className={"choose"} onClick={() => props.complete(props.taskIndex, props.groupIndex)}>
                {
                    props.groupIndex !== 0
                        ?
                        <svg width="36" height="36" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" stroke="#CBCBCB"/>
                        </svg>
                        :
                        <svg className={"completed_svg"} width="36" height="36" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" fill="#4E4E4E" stroke="#4E4E4E"/>
                            <path d="M3 5.99997L5.00001 7.99998" stroke="white" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M5 8L9 4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                }
            </div>
            <div className={"content"}>
                <p>{props.content}</p>
                {props.groupIndex !== 0 ? null : <div className={"line"}></div>}
            </div>
            <div className={"item_space"}/>
            <div className={"remove"} onClick={() => props.remove(props.taskIndex, props.groupIndex)}>
                <svg width="54" height="54" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/>
                    <rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4"
                          transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/>
                    <rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4"
                          transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/>
                </svg>
            </div>
        </div>
    );
}

export default Item;