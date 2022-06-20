import React, {useState} from 'react';
import NoteContext from './NoteContext';

const NoteMode =  (props) =>{


    //ToggleMode function here
    const [state,setState] = useState({mode:"light"});
    const toggleMode = () =>{
        if(state.mode==='light'){
            setState({mode:'dark'});
            document.body.style.backgroundColor='#2c3034';
            document.body.style.color='whitesmoke';
        }
        else{
            setState({mode:'light'});
            document.body.style.backgroundColor='whitesmoke';
            document.body.style.color='black';
        }
    };

    return(
        <NoteContext.Provider value={{state, toggleMode}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteMode;