import React from 'react'
import Masonry from 'react-masonry-css';
import { Pin } from './index';

const breakpointObj = {
    // Images to be shown at specific device width
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
}

const MasonryLayout = ({ pins }) => {
    return (
        <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
            {pins?.map((pin) => <Pin key={Math.round(Math.random()*1000)} pin={pin} className="w-max"/>)}
        </Masonry>
    )
}

export default MasonryLayout