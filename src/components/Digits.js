import { formattedString } from "../helpers/counterHelpers";

const Digits  = (props) => {
    const currentValue = props.currentValue || 0;
    const seconds = Number(currentValue);
    const boxes = formattedString(seconds);
    const clockIcon = <i className="far fa-clock"></i>;
    boxes.unshift(clockIcon);

    return (
        <div className="container d-flex justify-content-center text-white digits">
            {boxes.map((v,i) => <span key={i}>{v}</span>)}
        </div>
    )
}

export default Digits;