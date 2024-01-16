import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';
const codeStr = `import { useState } from 'react';

export const Accordion11 = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));
  const sliders = [{img: "https://source.unsplash.com/1200x640/?snow-fall",title: "Winter",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/1200x640/?Spring",title: "Spring",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/1200x640/?sea-beach",title: "Summer",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/1200x640/?Autumn",title: "Autumn",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
  
  return (
      <div className="flex gap-4">
      {/* map  */}
        {sliders.map((slide, idx) => (
          <div onClick={() => toggle({ currentIdx: idx })} className={\`h-[600px] bg-gray-500 relative duration-500 ease-in-out \${isOpen == idx ? "w-[400px] " : "w-[80px]" }\`} key={idx}>
          {/* main image  */}
            <img className="h-full object-cover rounded-3xl" src={slide.img} alt=""/>
            <img className={\`absolute bottom-5 border-white border-2 \${isOpen === idx ? "left-4" : "left-1/2 -translate-x-1/2 duration-700"}  h-[50px] w-[50px] object-cover rounded-full\`} src={slide.img} alt=""/>
              <div className={\`text-white absolute left-[100px] bottom-5\`}>
              <h3 className="text-3xl font-semibold">Status</h3>
              <p className="text-xl">{slide.title}</p>
            </div>
          </div>
        ))}
      </div>
  )};`;

export const Accordion11 = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));

    const sliders = [
        {
            img: 'https://source.unsplash.com/1200x640/?snow-fall',
            title: 'Winter',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?Spring',
            title: 'Spring',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?sea-beach',
            title: 'Summer',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?Autumn',
            title: 'Autumn',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        }
    ];
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex justify-center gap-1 md:gap-4">
                {/* map  */}

                {sliders.map((slide, idx) => (
                    <div
                        onClick={() => toggle({ currentIdx: idx })}
                        className={`h-[600px] bg-gray-300 rounded-3xl relative duration-500 ease-in-out ${isOpen == idx ? ' w-[300px] md:w-[400px] ' : 'w-[100px]'}`}
                        key={idx}
                    >
                        {/* main image  */}

                        <img className="h-full object-cover rounded-3xl" src={slide.img} alt="" />

                        <img
                            className={`absolute bottom-5 transition-all duration-500 border-white border md:border-2 ${
                                isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'
                            } h-10 w-10 md:h-[50px] md:w-[50px] object-cover rounded-full`}
                            src={slide.img}
                            alt=""
                        />

                        <div className={`text-white absolute left-[45%] md:left-[100px] bottom-5 transition-all duration-300 ${isOpen === idx ? "opacity-100" : "opacity-0 "}`}>
                            <h3 className="text-lg md:text-3xl font-semibold">Status</h3>
                            <p className="text-sm md:text-xl">{slide.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};
