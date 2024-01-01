import { useState } from "react";
import JSXCode from "./JSXCode/JSXCode";
import Preview from "./Preview/Preview";


const CodeBox = ({children,codeStr}) => {
   
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
            component:<JSXCode codeStr={codeStr}></JSXCode>
        }
    ]



    return (
        <div className="w-[90%]  rounded-md h-fit px-4 py-3 my-20 ">
           <div className="flex gap-2">
             {totalConfig?.map((item,ind) => <div onClick={()=>{setTabNum(ind)}} className={`${tabNum == ind ? 'bg-white  border-gray-200 border-b-0 rounded-t-xl ':'border-white'} border  px-3 py-2`}>{item.name}</div>)}
           </div>
           <div className={`${tabNum == 1 ? 'py-0 bg-[#1D1F21] h-[600px] max-w-[1000px] overflow-scroll w-full overflow-y-scroll':' flex  px-4 py-10 justify-center'}     border rounded-b-lg rounded-tr-lg`}>
             {
                 totalConfig[tabNum].component
             }
           </div>
        </div>
    );
};

export default CodeBox;