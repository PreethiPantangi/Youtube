import React from 'react';
import ButtonsList from './ButtonsList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    return (
        <div className='m-2'>
            <ButtonsList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;