import React from 'react'

// Ensure correct imports
import MainCarosel from '../../components/Navbar/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarosel />
        <div>
          <HomeSectionCarosel />
        </div>
    </div>
  )
}

export default HomePage
