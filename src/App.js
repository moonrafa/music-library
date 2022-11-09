import FeaturedPlaylists from './components/FeaturedPlaylists'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="w-full h-screen font-Montserrat bg-gradient-to-r from-[#0d1226] to-[#1f1734] pt-5 pl-5 overflow-x-hidden">
      <SearchBar />
      <FeaturedPlaylists />
    </div>
  )
}

export default App
