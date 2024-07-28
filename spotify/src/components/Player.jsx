import React from 'react';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex flex-col justify-center items-center text-white px-4'>
      <div className='w-full flex items-center justify-between lg:justify-start lg:gap-4 mb-2'>
        <div className='flex items-center gap-4 mt-[50px]'>
          <img className='w-12' src={songsData[0].image} alt="" />
          <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0, 12)}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 w-full'>
        <div className='flex gap-4 mb-1'>
          <img className='w-6 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
          <img className='w-6 cursor-pointer' src={assets.prev_icon} alt="Previous" />
          <img className='w-6 cursor-pointer' src={assets.play_icon} alt="Play" />
          <img className='w-6 cursor-pointer' src={assets.next_icon} alt="Next" />
          <img className='w-6 cursor-pointer' src={assets.loop_icon} alt="Loop" />
        </div>
        <div className='flex items-center gap-2 w-full'>
          <p className='text-sm'>1:06</p>
          <div className='flex-grow bg-gray-300 h-1 rounded-full cursor-pointer relative'>
            <div className='bg-green-500 h-full w-1/4 rounded-full'></div>
          </div>
          <p className='text-sm'>3:20</p>
        </div>
      </div>
      <div className='lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}

export default Player;





