import Skeleton1 from "./Skeleton1/Skeleton1";

const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 space-y-10">
             <>
              <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Simple Card Skeleton</h1>
              <Skeleton1></Skeleton1>
          </>
        </div>
    );
};

export default Skeleton;