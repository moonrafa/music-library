import React from 'react'
import Playlist from './Playlist'
import playlist1 from '../assets/playlist1.jpg'
import playlist2 from '../assets/playlist2.jpg'
import playlist3 from '../assets/playlist3.jpg'
import playlist4 from '../assets/playlist4.jpg'

const FeaturedPlaylists = () => {
  return (
    <div className="mt-2.5 py-5 overflow-x-scroll">
      <h2 className=" text-[#e5e5e5e7] font-bold">Featured Playlists</h2>

      <div className="flex py-3.5 items-center justify-start w-[1300px] overflow-y-hidden ">
        <Playlist img={playlist1} title="Only STARDUST" tracks="24" />
        <Playlist img={playlist2} title="Melodrama" tracks="12" />
        <Playlist img={playlist3} title="Top 100" tracks="163" />
        <Playlist img={playlist4} title="90s" tracks="138" />
      </div>
    </div>
  )
}

export default FeaturedPlaylists
