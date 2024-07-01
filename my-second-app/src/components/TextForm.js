import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpperCaseClick = ()=>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseClick = ()=>{
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}> 
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#121212', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Convert to LowerCase</button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick} >Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ Math.round( 0.008 * text.split(" ").length )} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>

    )
}
