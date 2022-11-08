import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div
      className="
      flex flex-row-reverse w-full items-center justify-end"
    >
      <input
        className="text-xs bg-transparent w-80 py-1.5 px-3.5 text-[#e5e5e5e7]"
        type="text"
        placeholder="Search artists, playlists or tracks"
        id="search"
        name="search"
      />
      <label for="search">
        <FiSearch size={18} className="text-[#f5f5f555] " />
      </label>
    </div>
  )
}

export default SearchBar
