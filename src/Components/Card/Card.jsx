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
import Card13 from './Card13/Card13';
import Card1 from './Card1/Card1';
import { useEffect } from 'react';
import Card14 from './Card14/Card14';

const Card = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="flex   flex-col gap-6 px-4">
            <h1 className="text-2xl lg:text-3xl text-center font-semibold pt-10  pb-2 text-gray-800 border-gray-700">Explore The Card Collections ✅</h1>

            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"> # Social media Profile Card</h1>

                <Card1></Card1>
           

            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Ecommerce card  </h1>
                {/* Card 2  */}
                <Card2></Card2>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Pricing Card</h1>
                {/* Card 3  */}
                <Card3></Card3>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Simple question Card</h1>
                {/* Card 4  */}
                <Card4></Card4>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Social media Profile Card 2</h1>
                {/* Card 5  */}
                <Card5></Card5>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Socail media post Card</h1>
                {/* Card 6  */}
                <Card6></Card6>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Pricing Card 2</h1>
                {/* Card 7  */}
                <Card7></Card7>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> #  Social media Profile Card 3</h1>
                {/* Card 8  */}
                <Card8></Card8>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Ecommerce card 2 </h1>
                {/* Card 9  */}
                <Card9></Card9>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Ecommerce Checkout Card</h1>
                {/* Card 10  */}
                <Card10></Card10>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Ecommerce card 3</h1>
                {/* Card 11  */}
                <Card11></Card11>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Ecommerce card 4</h1>
                {/* Card 12  */}
                <Card12></Card12>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Modal Card</h1>
                {/* Card 13  */}
                <Card13></Card13>
           
            
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-5 text-slate-800"> # Credit Card</h1>
                {/* Card 14  */}
                <Card14></Card14>
           
        </div>
    );
};

export default Card;
