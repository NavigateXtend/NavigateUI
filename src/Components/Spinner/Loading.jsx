import { useEffect } from "react";
import Loading1 from "./Part1/Loading1";

const Loading = () => {

   // For starting the scroll form the top
   useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}, []);

  return (
    <div>
      <Loading1 />
    </div>
  );
};

export default Loading;
