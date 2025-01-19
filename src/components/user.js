import { useState } from "react";

const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(1);
    return <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Count Increase</button>
        <h1>Count1:{count1}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact:@yashashri</h4>
    </div>
}

export default User;