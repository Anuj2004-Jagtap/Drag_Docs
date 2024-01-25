import React, { useRef } from 'react'
import { Card } from './Card'

export const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
        desc: "This Is What Is called dynamic rendering in the rectJS",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now ", tagColor: 'green' }
    },
        {
        desc: "This Is What Is called dynamic rendering in the rectJS",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: false, tagTitle: "Upload ", tagColor: 'green' }
    },
        {
        desc: "This Is What Is called dynamic rendering in the rectJS",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now ", tagColor: 'blue' }
    }

]; 

  return (
   
    <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5 ">
   {data.map((item,index)=>(
       <Card data={item}  reference={ref}/>
   ))} 

    </div>

  )
}
