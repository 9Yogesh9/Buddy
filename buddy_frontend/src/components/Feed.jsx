import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { searchQuery, feedQuery } from '../utils/data';
import { MasonryLayout, Spinner } from './index';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      // If we are searching for any specific Category
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })

    } else {
      // If Category id is blank
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        });
    }

  }, [categoryId])


  if (loading) return <Spinner message="We are adding new ideas to your feed !" />

  if(!pins?.length) return(<h2>No Pins Available !</h2>);

  return (
    <div>{pins && <MasonryLayout pins={pins} />}</div>
  )
}

export default Feed