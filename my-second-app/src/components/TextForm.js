import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpperCaseClick = ()=>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpperCaseClick} >Convert to UpperCase</button>
        </div>
    )
}
