import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Flashcard = ({flashcardInfo}) => {
    let arr = Object.values(flashcardInfo);
    // use React state, not variable!!
    let [displayText, changeText] = useState(arr[0]);
    // initialize text with term
    //console.log(`Type: ${typeof x[0]}`);
    
    useEffect(() => {
        changeDisplay(displayText = arr[1])
    }, [flashcardInfo]);

    const changeDisplay = () => {
        
        // check if currently displaying term
        if (displayText == arr[0]) {
            // change text to display definition
            changeText(displayText = arr[1]);
        }
        // if not displaying term --> is displaying definition
        else {
            changeText(displayText = arr[0]);
        }
    }
    return (
        <div onClick={changeDisplay} className="flashcard">
            <h1>{displayText}</h1>
        </div>
        
    )
}

export default Flashcard;