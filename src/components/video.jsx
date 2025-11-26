import React from 'react'
import Tittle from './tittle';
import PlayButton from '../button/playbutton';

const Video = () => {
  return (
    <div>
      {/* video */}
      <div
        className="mt-50 w-full h-screen"
        style={{
          backgroundImage: "url('/bg_4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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

export default Video