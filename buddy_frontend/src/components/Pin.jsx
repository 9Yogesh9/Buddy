import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IoMdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { client, urlFor } from '../client'

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div className='m-2'>
      
      
      <img src={urlFor(image).width(250).url()} alt="user-post" className='rounded-lg w-full' />
    </div>
  )
}

export default Pin