import React, { useState } from "react";



// const BoilingVerdict = (props) => {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }

// const StateStudy = () => {
//     const [temperature, setTemperature] = useState()
//     console.log("초기값 temperature의 값 :", temperature)
//
//
//     // 물을 입력하면 값을 넘겨서 상태를 확인한다.
//     return (
//         <div>
//             {/*Calculator 컴포넌트를 만들어서 온도를 입력해보자. input를 랜더링하고 값을 state에 저장한다.*/}
//             <Input
//                 onChange={(e) => {
//                     setTemperature(e.target.value);
//                 }} //값이 변경될 때마다 state 함수에 값을 넣는다.
//                 value={temperature}
//             />
//             <BoilingVerdict
//                 celsius={parseFloat(temperature)} />
//                {/*문자열을 실수로 변경해주는 함수*/}
//         </div>
//     );
// }
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const TemperatureInput = (props) => {
    const [temperature, setTemperature] = useState("")
    const [scale] = useState(props.scale)

    const handleChange = (e) => {
        setTemperature(e.target.value)
    }

    console.log(temperature)
    console.log(scale)
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={handleChange} />
            </fieldset>
        );
}

const StateStudy = () => {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
}



export default StateStudy;