import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Tittle from './components/tittle';
import Button2 from './button/button2';
import Testmonial from './components/testmonial';
import Video from './components/video';
import Couterpage from './components/couterpage';
import ReadersCord from './components/readerscord';
import BackGround from './components/background';

const About = () => {
  return (
      <div >
          <BackGround to="/" name="HOME" page="ABOUT US" pageName="About Us"/>
      
      

      {/* section */}
      <div className="bg-[#f9faff] flex gap-15 w-screen">
        <div className="flex justify-center items-center mb-40 ml-20">
          <img
            src="/about.jpg"
            alt="About Us"
            className="h-200 w-700 abject-cover possition-center"
          />
        </div>
        <div className="mt-30 mb-40 justify-center items-center mr-10">
          <Tittle
            head1="About Union Corporation"
            head2="More than 40M+ Trusted Our Financial & Conusultation Institution"
            p1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            p2="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
          <Button2 name="LEARN MORE" />
        </div>
      </div>
      <div className='bg-white pb-50'>
              <Testmonial />
              <Video />
              <Couterpage />
              <ReadersCord/>
      </div>
    </div>
  );
}

export default About