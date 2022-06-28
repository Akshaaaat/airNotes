import React, {useContext} from 'react'
import { ModeContext } from "../context/NoteMode";

export const About = () => {

    const mode = useContext(ModeContext);

  return (
    <div>
        This is the about Seciton of the page 
    </div>
  )
}
export default About