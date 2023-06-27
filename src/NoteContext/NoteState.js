import React, {useState} from 'react'
import NoteContext from './NoteContext';

function NotState(props) {
    const [isshown,setIsShown]=useState(true);
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [type,setType] = useState("");
    const [image,setImage] = useState("");



  return (
    <NoteContext.Provider value={{isshown,setIsShown, user,setUser, password,setPassword, type,setType, image,setImage}}>
      {props.children}

    </NoteContext.Provider>
  )
}


export default NotState;