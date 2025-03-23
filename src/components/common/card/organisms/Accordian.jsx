import { useState } from "react";

const Accordian =({title,children})=>{
    const [active, setActive] = useState(false)


    function buttonClick(){
        if(active){
            setActive(false)
        }else{
            setActive(true)
        }
    }
    return(
        <div>
<div onClick={buttonClick} >
<div className="flex justify-between border border-gray-500 rounded-md">
<p> {title}</p>
<button >+</button>
</div>
   
    <div>
{active && children}
    </div>
</div>
        </div>
    )
}

export default Accordian; 