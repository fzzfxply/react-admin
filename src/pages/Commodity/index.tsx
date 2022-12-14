import React, { useReducer,useState } from "react"

const Mock: React.FC<any> = () => {
    const [count, dispatch] = useReducer((state:any, action: any)=> {
        console.log(state,action,"=============")
        return state
        // switch(action?.type){
        //     case "add":
        //         return state + action?.payload
        //     case "sub":
        //         return state - action?.payload
        //     default:
        //         return state
        // }
    }, 222)

    return (
        <div>
            <div style={{display: "flex", justifyContent: "flex-start"}}>
                <div   onClick={() => dispatch({type: "add", payload: 1})}>加1</div>
                <div  onClick={() => dispatch({type: "sub", payload: 1})} style={{marginLeft: 24}}>减1</div>
            </div>
            <div style={{marginTop: 20}}>count: {count}</div>
        </div>
    )
}

export default Mock