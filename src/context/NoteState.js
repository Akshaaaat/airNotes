import React, {useState} from 'react';
import NoteContext from './NoteContext';

export const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "62b2339c587955cfc2481db3",
            "user": "62b23228587955cfc2481d9e",
            "title": "second note- Second User",
            "content": "Just changing this a bit again",
            "tag": "hii again",
            "date": "2022-06-21T21:09:48.449Z",
            "__v": 0
          },
          {
            "_id": "62b2340sd587955cfc2481dc2",
            "user": "62b23228587955cfc2481d9e",
            "title": "Hii how ar eyou",
            "content": "I hope you are doing good",
            "tag": "ssup",
            "date": "2022-06-21T21:11:41.782Z",
            "__v": 0
          },
          {
            "_id": "62b23da39c587955cfc2481db3",
            "user": "62b23228587955cfc2481d9e",
            "title": "second note- Second User",
            "content": "Just changing this a bit again",
            "tag": "hii again",
            "date": "2022-06-21T21:09:48.449Z",
            "__v": 0
          },
          {
            "_id": "62b23asds40d587955cfc2481dc2",
            "user": "62b23228587955cfc2481d9e",
            "title": "Hii how ar eyou",
            "content": "I hope you are doing good",
            "tag": "ssup",
            "date": "2022-06-21T21:11:41.782Z",
            "__v": 0
          },{
            "_id": "62b2339adsac587955cfc2481db3",
            "user": "62b23228587955cfc2481d9e",
            "title": "second note- Second User",
            "content": "Just changing this a bit again",
            "tag": "hii again",
            "date": "2022-06-21T21:09:48.449Z",
            "__v": 0
          },
          {
            "_id": "62b2340adedwd587955cfc2481dc2",
            "user": "62b23228587955cfc2481d9e",
            "title": "Hii how ar eyou",
            "content": "I hope you are doing good",
            "tag": "ssup",
            "date": "2022-06-21T21:11:41.782Z",
            "__v": 0
          },{
            "_id": "62b2339c58dawd7955cfc2481db3",
            "user": "62b23228587955cfc2481d9e",
            "title": "second note- Second User",
            "content": "Just changing this a bit again",
            "tag": "hii again",
            "date": "2022-06-21T21:09:48.449Z",
            "__v": 0
          }
    ];

    const [notes, setNotes]= useState(notesInitial);

  return (
    <NoteContext.Provider value = {{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;