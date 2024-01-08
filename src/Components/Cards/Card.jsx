import Card1 from './Card1/Card1';
import Card10 from './Card10/Card10';
import Card11 from './Card11/Card11';
import Card12 from './Card12/Card12';
import Card2 from './Card2/Card2';
import Card3 from './Card3/Card3';
import Card4 from './Card4/Card4';
import Card5 from './Card5/Card5';
import Card6 from './Card6/Card6';
import Card7 from './Card7/Card7';
import Card8 from './Card8/Card8';
import Card9 from './Card9/Card9';

const Card = () => {
    return (
        <div className="flex  flex-col items-center gap-6 px-4">
            <h1 className="border-gray-700 pb-2 pt-10 text-center text-2xl  font-semibold text-gray-800 lg:text-3xl">Explore The Card Collections ✅</h1>

            {/* Card 1  */}
            <Card1></Card1>
            {/* Card 2  */}
            <Card2></Card2>
            {/* Card 3  */}
            <Card3></Card3>
            {/* Card 4  */}
            <Card4></Card4>
            {/* Card 5  */}
            <Card5></Card5>
            {/* Card 6  */}
            <Card6></Card6>
            {/* Card 7  */}
            <Card7></Card7>
            {/* Card 8  */}
            <Card8></Card8>
            {/* Card 9  */}
            <Card9></Card9>
            {/* Card 10  */}
            <Card10></Card10>
            {/* Card 11  */}
            <Card11></Card11>
            {/* Card 12  */}
            <Card12></Card12>
        </div>
    );
};

export default Card;
