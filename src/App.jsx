import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
    
  };
  
  return (
    <div className='w-[70%] m-auto'>
    <div className='mt-20'>
    <Slider {...settings}>
      {data.map((d) => (
        <div className='bg-white h-[430px] text-black rounded-xl'>
          <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
            <img src={d.img} alt="" className='h-40 w-40 rounded-full'/>
          </div>

          <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p>{d.review}</p>
            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read more</button>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </div>
  )
}

export default App


const data = [
  {
    name: "suad",
    img: "https://img.freepik.com/free-vector/send-message-by-phone-concept-illustration_114360-20242.jpg?t=st=1716645066~exp=1716648666~hmac=f3071c0fcb7b1b0f1dc7cfe706d21638189ad379f733b8350d87395b28a1c9ca&w=740",
    review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem ex earum cumque deserunt fugiat quisquam repellendus, ipsum est animi."
    
  },
  {
    name: "susu",
    img: 'https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?t=st=1716645137~exp=1716648737~hmac=6122a981a3fde67c135ef0b17dae44c43ad329a79b8a8b9ad05a1af5e8c8594a&w=740',
    review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem ex earum cumque deserunt fugiat quisquam repellendus, ipsum est animi."
    
  },
  {
    name: "samu",
    img: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg?t=st=1716645164~exp=1716648764~hmac=e73c7c23a82cf7b9df5f25232e6512579a4b6b695f39232ef09dce955df8dabe&w=740',
    review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem ex earum cumque deserunt fugiat quisquam repellendus, ipsum est animi."
    
  },
  
  {
    name: "suad",
    img: "https://img.freepik.com/free-photo/hands-holding-smartphone-social-media-concept_23-2150208250.jpg?t=st=1716659216~exp=1716662816~hmac=b46ef3af57bf1c9876966fa56e8fe7696d211b2f73f791344dfd9f83c804368b&w=740",
    review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem ex earum cumque deserunt fugiat quisquam repellendus, ipsum est animi."
    
  },
  {
    name: "susu",
    img: 'https://img.freepik.com/free-photo/medium-shot-woman-holding-smartphone_23-2150208247.jpg?t=st=1716659265~exp=1716662865~hmac=a590f60979e54348423023c268c6f47219e4fab969887e1c404b9c100900c947&w=740',
    review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem ex earum cumque deserunt fugiat quisquam repellendus, ipsum est animi."
    
  },
  {
    name: "samu",
    img: 'https://img.freepik.com/free-photo/hands-holding-smartphone-social-media-concept_23-2150208237.jpg?t=st=1716659313~exp=1716662913~hmac=8b3c4bd762bd3fdfde753a2f115a1db8a03b95331cbd7ce56a1ea472e1461ce2&w=740',
    review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quidem ex earum cumque deserunt fugiat quisquam repellendus, ipsum est animi."
    
  },
  
]