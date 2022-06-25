import React, {useState} from 'react';
import NoteContext from './NoteContext';

export const NoteState = (props) => {

  const host = "http://localhost:5000";
  const [notes, setNotes]= useState([])


  //Funciton to get all the notes from the mongoDB database
  const getNotes= async () =>{
    //API call to  a note
    const response = await fetch(`${host}/api/notes/getallnotes`,{
      method: 'GET',
      headers:{
        'Content-Type':'Application/json',
        'auth-token':localStorage.getItem('airnotestoken')
      }});
    const json= await response.json();
    setNotes(json);
  }


  //Adding a note
  const addNote= async (title, content, tag) =>{

    //API call to add a note
    const response = await fetch(`${host}/api/notes/addnote`,{
      method: 'POST',
      headers:{
        'Content-Type':'Application/json',
        'auth-token':localStorage.getItem('airnotestoken')
      },
      body: JSON.stringify({ title, content, tag })
    });
    // eslint-disable-next-line
    const json= response.json();
    getNotes();
  }


  //Delete Note
  const deleteNote= async (id) =>{ 

    //API call
    const response = await fetch(`${host}/api/notes/delete/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type':'Application/json',
        'auth-token':localStorage.getItem('airnotestoken')
      },
    });
    // eslint-disable-next-line
    const json= response.json();
    getNotes();
  }


  //Edit a note
  const editNote= async (id, title, content ,tag) =>{

    //API call
    const response = await fetch(`${host}/api/notes/update/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type':'Application/json',
        'auth-token':localStorage.getItem('airnotestoken')
      },
      body: JSON.stringify({
        title: title,
        content: content,
        tag:tag
      })
    });
    // eslint-disable-next-line
    const json= response.json();

    //Logic to edit in client side
    for(var i=0; i < notes.length; i++)
    {
      const element = notes[i];
      if(element._id===id)
      {
        element.title=title;
        element.content=content;
        element.tag=tag;
      }
    }
    getNotes();
  }
  

  return (
    <NoteContext.Provider value = {{notes, setNotes, getNotes, addNote, deleteNote, editNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;