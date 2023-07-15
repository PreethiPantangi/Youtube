import React from 'react'
import Button from './Button'

const ButtonsList = () => {

  const buttonsList = ['All', 'GameShows', 'Music', 'Comedy', 'News', 'Live', 'Podcasts', 'Gaming', 'Gadgets', 'Computer Programming', 'Chill-out music', 'Jazz', 'Home improvement']

  return (
    <div>
      <ul>
        <Button buttonsList={buttonsList}/>
      </ul>
    </div>
  )
}

export default ButtonsList