import React,{useState} from "react";
import DataContext from "./DataContext";

const DataState = (props) =>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [expenses, setExpenses] = useState({
        Food: '0',
        Transportation: '0',
        Housing: '0',
        Entertainment: '0',
        Education: '0',
        Healthcare: '0',
        Utilities: '0',
        Miscellaneous: '0',
    });

    return (
        <DataContext.Provider value={{name, setName,address,setAddress,expenses,setExpenses}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;
