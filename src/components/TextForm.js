import React, { useState } from 'react'

export default function TextForm(props) {
     
    const handleclick= ()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showalert("converted to uppercase","success");
    }
    
    const lowerclick= ()=>{
      let newtext = text.toLowerCase();
      settext(newtext)
      props.showalert("converted to uppercase","success");
  }
  




    const cleartext=()=>{
      let newtext=""
      settext(newtext)
      props.showalert(" text cleared","success");
    }

    
    
    const handleonchange = (event) =>{
            settext(event.target.value)    
    }


    const [text,settext] = useState("") 

  return (
    <div className="container" style={{ color: props.mode ==='dark'?'white':'black'}}>
       <h1 >{props.Header}</h1>
        <div className="mb-3 ">
        <textarea className="form-control" id="mybox" onChange={handleonchange} style={{background:props.mode==='dark'?'grey':'white',
      color:props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 "onClick={handleclick}  > Convert To Upppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3"onClick={ cleartext}  > Clear Text</button>
        {/*<button className="btn btn-primary my-3 mx-3"onClick={copytext}  > Copy Text</button>*/}
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3"onClick={lowerclick}  > Convert To lowercasae</button>
        {/*<button className="btn btn-primary my-3 mx-3"onClick={handleclick}  > Convert To Upppercase</button>*/}
        </div>
          <div className="container">
            <h3>your text summary</h3>
            <p>word {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} character {text.length}</p>
            <p>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes read</p>
            <p>preview :  {text}</p>
           
                    
          </div>
    </div>
    
  )
}
