import React from "react";

const Tips = ()=>{
return (

<div>
<button className="$1tip" onClick={() => alert('you have given a $1 tip')} > $1 </button>
<button className="$5tip" onClick={() => alert('you have given a $5 tip')} > $5 </button>
<button className="$10tip" onClick={() => alert('you have given a $10 tip')} > $10 </button>
</div>

);
}

export default Tips;