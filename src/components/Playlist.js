import React from 'react'

const Playlist = ({ img, title, tracks }) => {
  return (
    <div className="mr-5 w-full h-full max-width-[62rem]  ">
      <img
        className="object-cover rounded-xl  transition-all	duration-200 ease-[cubic-bezier(0.39, 0.575, 0.565, 1)] opacity-60 h-[224px] w-full hover:opacity-100   hover:scale-105 hover:-translate-x-2.5"
        src={img}
        alt={title}
      />
      <h2 className="text-[#e5e5e5e7] font-bold mt-2.5">{title}</h2>
      <p className="text-[#f5f5f555] text-xs mt-1.5">{tracks} tracks</p>
    </div>
  )
}

export default Playlist
