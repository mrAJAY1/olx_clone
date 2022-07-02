import { createContext, useState } from "react";  

export const postcontext = createContext()

function PostContext ({children}) {
    const [postDetails,setPostDetails]=useState();
    return(
        <postcontext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </postcontext.Provider>
    )
}

export default PostContext