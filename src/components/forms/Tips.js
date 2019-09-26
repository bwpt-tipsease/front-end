import React, { useState, useEffect } from "react";


const [ tips, settips ] = useState(0);
const Tipbuttons = ()=>{

return (

<div>
<button className="$1tip"  onClick={()=> settips(tips+1)} > $1 </button>
<button className="$5tip"  onClick={()=> settips(tips+5)} > $5 </button>
<button className="$10tip"  onClick={()=> settips(tips+10)} > $10 </button>

</div>

<div className="Tips_total"> {tips} </div>

);
}

export default Tipbuttons;