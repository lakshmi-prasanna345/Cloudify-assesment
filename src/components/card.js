
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CaretLeft,CaretRight,HandTap,CheckCircle,ArrowClockwise } from '@phosphor-icons/react/dist/ssr';
import App from '../App';
const carouselData = [
  { id:1,
    imageUrl: '/paris.png',
    question: 'What is the capital of France?',
    answer: 'Paris'
  },
  {  id: 2,
    imageUrl: '/img2.jpeg',
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter'
  },
  { id: 3,
    imageUrl: '/img4.jpeg',
    question: 'What is the chemical symbol for water?',
    answer: 'H2O'
  },
  { id: 4,
    imageUrl: '/peacock.jpeg',
    question: 'What is the National Bird to india?',
    answer: 'Peacock'
  },
  { id: 5,
    imageUrl: '/kerala.jpeg',
    question: 'What state is called as gods own country in india?',
    answer: 'kerala'
  },
  {
    id:6,
    imageUrl: '/img5.jpeg',
    question: '6+8 is equals to',
    answer: '14'
  },
  {
    id:7,
    imageUrl: '/img7.jpeg',
    question: '8-2 is equals to',
    answer: '2'
  },
  {
    id:8,
    imageUrl: '/img6.jpeg',
    question: '8*2 is equals to',
    answer: '16'
  },
  {
    id:9,
    imageUrl: '/img11.jpeg',
    question: '0*anything is equals to',
    answer: '0'
  }
];
function Cards({onPlayAgain}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [startAnimation,setStartAnimation]=useState(false)
  const [letsPlayAgain ,setLetsPlayAgain]=useState(false)
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false); // Reset the answer view when navigating
    }
  };

  const handleNext = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false); // Reset the answer view when navigating
    } else {
      setPlayAgain(true);
      setStartAnimation(true);
    }
  };

  const resetCarousel = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setPlayAgain(false);
  };
  const handleReplay=()=>{
  setLetsPlayAgain(true)
  onPlayAgain();
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      {!playAgain && (
        <>
          <div className='d-flex justify-content-between w-100 m-auto'>
            <CaretLeft size={52} className='prevIcon' onClick={handlePrev} />
            {carouselData.map((data, index) => (
              <div
                key={data.id}
                className='bg-white text-center card-main'
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                {showAnswer && index === currentIndex ? (
                  <>
                    <img src={data.imageUrl} className='card-image' alt={`Slide ${index + 1}`} />
                    <p className='text-center card-answer'>Answer: {data.answer}</p>
                  </>
                ) : (
                  index === currentIndex && (
                    <>
                      <h2 className='card-question'>{data.question}</h2>
                      <p className='card-para' onClick={toggleAnswer}>
                        <span className='handtap'><HandTap size={20} /></span>Tap to reveal the answer
                      </p>
                    </>
                  )
                )}
              </div>
            ))}
            <CaretRight size={52} className='nextIcon' onClick={handleNext} />
          </div>
        </>
      )}
      {playAgain && startAnimation && (
        <div className='text-center mt-4 zoom-animation'>
          <div className='checkcircle'><CheckCircle size={292} className='text-white checkcircle-data' /></div>
          <p className='text-white fs-4'>Hope you learned something new!</p>
          <button className='play-again-button' onClick={handleReplay}>
          <span><ArrowClockwise size={25} className='rotate-icon'/></span>  Play Again
          </button>
        </div>
      )}
      {
        letsPlayAgain ? <App /> : null
      }
    </div>
  );
}

export default Cards;