import React from 'react';
import heroImage from '../../assets/eye-image.jpg'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { TfiApple } from "react-icons/tfi";
import { FaGooglePlay } from 'react-icons/fa';


type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <div className='flex w-full h-screen bg-white '>
      <div className='flex-1  p-4 overflow-auto ml-24 mt-28
          '>
        <div>
          <h1 className='text-7xl mt-3 font-extrabold'>Make <br /> Learning Fun!</h1>
          <p className='mt-3'>Where your instructor knows the best <br /> way to make you understand.</p>
          <Link to=''>
            <Button className='mt-10 rounded px-10 py-5 bg-[#F37172] text-white' variant="outline">Sign up for free</Button>
          </Link>
          <div>
            <p className='mt-32 font-bold'>Or download the app: </p>
            <div className='flex'>
              <Link to=''>
                <Button className=' rounded-xl mt-10 px-6 py-6 bg-black  text-white' variant="outline">
                  <div className=' '>
                    < TfiApple className=' w-full ' />
                  </div>

                  <div>
                    <p>Available on the </p>
                    <h1>Apple Store</h1></div>
                </Button>
              </Link>
              <Link to=''>
                <Button className=' rounded-xl mt-10 px-6 py-6 bg-black  text-white' variant="outline">
                  <div className=' '>
                    < FaGooglePlay className=' w-full ' />
                  </div>

                  <div>
                    <p>Available on the </p>
                    <h1>Apple Store</h1>
                  </div>
                </Button>
              </Link>


            </div>
          </div>

        </div>

      </div>
      <div className='justify-center items-center flex flex-1    '>
        <img className=' w-4/5   ' src={heroImage} alt="eye-image" />
      </div>
    </div>
  );
};

export default Hero;