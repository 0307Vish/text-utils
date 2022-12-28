import React,{useState} from 'react'
import Alert from './Alert';
export default function TextForm(props) {
// const[text,setText]=useState('Enter text here')
const[text,setText]=useState('')
//text="new text"  // wrong way
//setText("new text")  // right way
const handleOnChange=(event)=>{
// console.log("Uppercase was clicked");
    setText(event.target.value);    
}
const handleUpClick=()=>{
// console.log("Uppercase was clicked");
let newtext = text.toUpperCase();
setText(newtext);
props.handleAlert("uppercase  ", "success");
}  
const handleLoClick=()=>{
  //console.log("Lowercase was clicked");
  let newtext = text.toLowerCase();
  setText(newtext);
  props.handleAlert("lowercase   ", "success");
}    

const handleCopyClick=()=>{
    // alert("I am copied");
  var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text.value);
    props.handleAlert("copied  ", "success");
}
const handlePasteClick=()=>{
    // alert("I am copied");
var text = document.getElementById("myBox")
let  newtext=  text.value
  // console.log(newtext)
  // text.select();
  // text.writeText(text.value);
  setText( newtext+" "+newtext)
  props.handleAlert("pasted  ", "success");
}
const handleSpaceClick=()=>{
    // alert("I am removed");
let newtext = text.split(/[ ]+/);
// console.log(newtext);
setText(newtext.join(" "));
props.handleAlert("extra spaces removed","success");
}
const handleClearClick=()=>{
  // console.log("clear was clicked");
  let newtext ='';
  setText(newtext);
  props.handleAlert("cleared    ", "success");
} 

  return (
    <div style={{width:"70vw",margin:"3vh 15vw"}}> 
        <h1 style={{textAlign:"center"}}>{props.heading}</h1> 
        
  <div className="mb-3">
  <textarea  placeholder="Enter your text here"    className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="10" style={{backgroundColor:props.mode==='dark'?'#1f2327':'white',color:props.mode==='dark'?'white':'black'}} autoFocus></textarea>

  
  <button disabled={text.length===0} type="button" className="btn btn-success my-3 mx-5"   onClick={handleUpClick}>Convert to uppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-success my-3 mx-5"   onClick={handleLoClick}>Convert to lowercase</button>
  <button  disabled={text.length===0} type="button" className="btn btn-success my-3 mx-5"   onClick={handleClearClick}>Clear Text</button>
  <button  disabled={text.length===0} type="button" className="btn btn-success my-3 mx-5"   onClick={handleCopyClick}>Copy Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-success my-3 mx-5"   onClick={handlePasteClick}>Paste Text</button>
  <button disabled={text.length===0}  type="button" className="btn btn-success my-3 mx-5"   onClick={handleSpaceClick}>Remove Extra Spaces</button>
  </div>  
  <div className="container my-5">
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
    <p> {0.008*60*(text.split(" ").filter((element)=>{return element.length!==0}).length)} seconds requierd to read</p>
    <h2>
        preview
    </h2>
    <p>{text.length>0?text:"enter your text to review"}</p>
  </div>
</div>
  )
}
