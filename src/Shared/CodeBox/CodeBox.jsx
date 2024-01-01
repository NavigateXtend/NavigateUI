import { useState } from "react";
import JSXCode from "./JSXCode/JSXCode";
import Preview from "./Preview/Preview";


const CodeBox = ({children}) => {
   
    const [tabNum,setTabNum] = useState(0)
    
    const totalConfig = [
        {
            item:0,
            name:'Preview',
            component:<Preview>{children}</Preview>
        },
        {
            item:1,
            name:'JSX',
            component:<JSXCode></JSXCode>
        }
    ]



    return (
        <div className="w-[90%]  rounded-md h-fit px-4 py-3 my-20 ">
           <div className="flex gap-2">
             {totalConfig?.map((item,ind) => <div onClick={()=>{setTabNum(ind)}} className={`${tabNum == ind ? 'bg-white  border-gray-200 border-b-0 rounded-t-xl ':'border-white'} border  px-3 py-2`}>{item.name}</div>)}
           </div>
           <div className={`px-4 py-10    flex justify-center  border rounded-b-lg rounded-tr-lg`}>
             {
                 totalConfig[tabNum].component
             }
           </div>
        </div>
    );
};

export default CodeBox;