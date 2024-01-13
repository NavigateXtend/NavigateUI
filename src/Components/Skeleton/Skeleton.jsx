import Skeleton1 from "./Skeleton1/Skeleton1";
import Skeleton2 from "./Skeleton2/Skeleton2";

const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 space-y-10">
             <>
              <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Simple Card Skeleton</h1>
              <Skeleton1></Skeleton1>
          </>
          <>
              <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Ecommerce Card Skeleton</h1>
              <Skeleton2></Skeleton2>
          </>
        </div>
    );
};

export default Skeleton;