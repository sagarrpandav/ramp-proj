import {useEffect, useState} from "react";

export const MyComponent = ({input}) => {

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        console.log("Component mounted");
        if (input == false) {
            setInterval(() => {
                setDate(new Date())
            }, 60)
        }
    }, []);

    return (
        <div style={{display: 'grid'}}>
            {input == false ?
                (date.toDateString() + " " + date.toLocaleTimeString()) :
                (Array.isArray(input) ? (
                    input.map(i => {
                        return (
                            <div>{i}</div>
                        )
                    })
                ) : (
                    input
                ))}
        </div>
    )
}