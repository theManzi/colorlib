import React from 'react'
import { LiaPersonBoothSolid } from 'react-icons/lia';
import Tittle from '../components/tittle';
import Button from '../button/button';
import Button2 from '../button/button2';
import { IoIosPlay } from 'react-icons/io';
import PlayButton from '../button/playbutton';

const About = () => {
  return (
    <div className='justify-items-center-safe'>
      <div className="mt-40 flex">
        <div className="grid grid-cols-2">
          <div className="group w-85 h-115 bg-white/55 rounded-xl p-15 hover:bg-blue-500 duration-300 ml-20">
            <LiaPersonBoothSolid className="h-25 w-25 text-blue-500 bg-blue-500/10 rounded-full p-2 group-hover:text-white group-hover:bg-white/20" />
            <h1 className="text-3xl font-semibold pt-5 group-hover:text-white">
              Professional <br />
              Consultants
            </h1>
            <p className="text-2xl text-black/50 pt-5 group-hover:text-white/80">
              Far far away, behind
              <br /> the word mountains,
              <br /> far from the countries
              <br />
              Vokalia.
            </p>
          </div>

          {/* second */}
          <div className="w-85 h-115 bg-blue-500 rounded-xl p-15 ml-70">
            <LiaPersonBoothSolid className="h-25 w-25 text-white bg-white/30 rounded-full p-2 " />
            <h1 className="text-3xl font-semibold pt-5 text-white">
              Professional <br />
              Consultants
            </h1>
            <p className="text-2xl pt-5 text-white/80">
              Far far away, behind
              <br /> the word mountains,
              <br /> far from the countries
              <br />
              Vokalia.
            </p>
          </div>

          {/* third cord */}
          <div className="group w-85 h-115 bg-white/55 rounded-xl p-15 hover:bg-blue-500 duration-300 ml-20">
            <LiaPersonBoothSolid className="h-25 w-25 text-blue-500 bg-blue-500/10 rounded-full p-2 group-hover:text-white group-hover:bg-white/20" />
            <h1 className="text-3xl font-semibold pt-5 group-hover:text-white">
              Professional <br />
              Consultants
            </h1>
            <p className="text-2xl text-black/50 pt-5 group-hover:text-white/80">
              Far far away, behind
              <br /> the word mountains,
              <br /> far from the countries
              <br />
              Vokalia.
            </p>
          </div>

          {/* last cord */}
          <div className="group w-85 h-115 bg-white/55 rounded-xl p-15 hover:bg-blue-500 duration-300 ml-70">
            <LiaPersonBoothSolid className="h-25 w-25 text-blue-500 bg-blue-500/10 rounded-full p-2 group-hover:text-white group-hover:bg-white/20" />
            <h1 className="text-3xl font-semibold pt-5 group-hover:text-white">
              Professional <br />
              Consultants
            </h1>
            <p className="text-2xl text-black/50 pt-5 group-hover:text-white/80">
              Far far away, behind
              <br /> the word mountains,
              <br /> far from the countries
              <br />
              Vokalia.
            </p>
          </div>
        </div>

        <div className="p-40 ml-80">
          <Tittle
            head1="About Union Corporation"
            head2="More than 40M+ Trusted Our Financial & Conusultation Institution"
            p1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.




"
            p2="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
          <Button2 name="LEAN MARE" />
        </div>
      </div>
      <div
        className="mt-50 w-full h-screen"
        style={{
          backgroundImage: "url('/bg_4.jpg')",
         backgroundSize: 'cover',
         backgroundPosition: 'center',
        }}
      >
        <div className="m-30 pl-185 pt-35">
          <Tittle
            head1="About Union Corporation"
            head2="Quality Makes the Belief for Customers"
            p1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          />
          <a
            href="https://youtu.be/EudmyLfxRQQ?list=RDEudmyLfxRQQ&t=11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex cursor-pointer">
              <PlayButton />
              <h1 className="text-2xl text-blue-500 font-bold mt-12 ml-10">
                Watch Video
              </h1>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About