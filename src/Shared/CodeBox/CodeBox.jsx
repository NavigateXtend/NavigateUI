import { useState } from "react";
import JSXCode from "./JSXCode/JSXCode";
import Preview from "./Preview/Preview";


const CodeBox = () => {
   
    const [tabNum,setTabNum] = useState(0)
    
    const totalConfig = [
        {
            item:0,
            name:'Preview',
            component:<Preview></Preview>
        },
        {
            item:1,
            name:'JSX',
            component:<JSXCode></JSXCode>
        }
    ]



    return (
        <div className="w-[90%]  rounded-md h-fit px-4 py-3  ">
           <div className="flex gap-2">
             {totalConfig?.map((item,ind) => <div onClick={()=>{setTabNum(ind)}} className={`${tabNum == ind ? 'bg-gray-200 shadow-xl rounded-t-xl ':''}  px-3 py-2`}>{item.name}</div>)}
           </div>
        </div>
    );
};

export default CodeBox;