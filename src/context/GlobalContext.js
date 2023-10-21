import {useState , createContext } from "react"

const GlobalContext = createContext(null);

const initState ={
    
    details: {name: "Namra", age: 23 , gender: "F" }
}



const GlobalContextProvdier = ({children}) => {
    const [gState, setGState]= useState(initState);
   // const toggleDarkMode =()=>{
    //    setGState({...gState, darkmode:true})
   // }
    const changeName =()=>{
        setGState({...gState,details:{name: "Awais", age: 22 , gender: "M"} })
    }

    return (
     
    <GlobalContextProvdier value={{gState, setGState, changeName}}> {children} </GlobalContextProvdier>
  )

}

export {GlobalContext, GlobalContextProvdier};