import {  createContext } from "react"
import { Component2 } from "./Component2"

export const MyContext = createContext(null)

export function Component1(){
    const message1 = "Hello World"
    const message2 = "Mother Earth"
    const message3 = "Holla Everyone"
    const data = {
        data1: message1, 
        data2: message2, 
        data3: message3
    }
    return (
        <>
            <MyContext.Provider value={data}>
                <h1>This is Component 1</h1>
                <Component2 />
            </MyContext.Provider>    
        </>
    )
}


            {/* <MyContext.Provider 
                value = {{
                    data1: message1, 
                    data2: message2, 
                    data3: message3
                }}> */}