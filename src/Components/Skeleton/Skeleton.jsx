import Skeleton1 from "./Skeleton1/Skeleton1";
import Skeleton2 from "./Skeleton2/Skeleton2";
import Skeleton3 from "./Skeleton3/Skeleton3";

const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 space-y-10">
             <>
              <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Avatar loading skeleton</h1>
              <Skeleton1></Skeleton1>
          </>
          <>
              <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Ecommerce Card Skeleton</h1>
              <Skeleton2></Skeleton2>
          </>
          <>
              <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Ecommerce Card Skeleton</h1>
              <Skeleton3></Skeleton3>
          </>
        </div>
    );
};

export default Skeleton;