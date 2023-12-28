import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";

const Card = () => {
  return (
    <div className="flex gap-6">
      {/* Card 1  */}
      <Card1></Card1>
      {/* Card 2  */}
      <Card2></Card2>
    </div>
  );
};

export default Card;
