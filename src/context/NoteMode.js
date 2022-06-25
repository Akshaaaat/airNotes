import React, {useState, createContext} from 'react';

export default function NoteMode(props){

    //ToggleMode function here
    const [state,setState] = useState({mode:"light"});
    const toggleMode = () =>{
        if(state.mode==='light'){
            setState({mode:'dark'});
            document.body.style.backgroundColor='#2b2d32';
            document.body.style.color='whitesmoke';
        }
        else{
            setState({mode:'light'});
            document.body.style.backgroundColor='whitesmoke';
            document.body.style.color='black';
        }
    };

    return(
        <ModeContext.Provider value={{state, toggleMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}

const ModeContext = createContext();
export { ModeContext };