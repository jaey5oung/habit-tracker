import { React, useState, useRef, useEffect } from "react";

const SimpleHabit = (props) => {
    const [count, setCoount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = () => {
        setCoount(count + 1);
    };
    useEffect(() => {
        console.log(`${count}`);
    }, [count]);
    //두번쨰인자 [] 카운터가 변경될떄만 호출시키는것 원하는데이터만
    //텅텅빈상태로 납두면 처음에만 호출된다
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">
                Reading
            </span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;
