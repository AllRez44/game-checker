import { HomeHeader } from "./components/app/home/header"
import { HomeSearchBar } from "./components/app/home/search-bar"

function App() {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <HomeHeader />
      <HomeSearchBar />
    </div>
  )
}

export default App
