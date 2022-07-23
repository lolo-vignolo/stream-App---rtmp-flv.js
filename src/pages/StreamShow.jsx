import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import flv from 'flv.js';

export const StreamShow = () => {
  const videoRef = useRef();
  const state = useSelector((state) => state.form);
  const { id } = useParams();
  const myitem = state.find((item) => item._id === id);

  useEffect(() => {
    let player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  }, [id]);

  return (
    <div>
      <video
        ref={videoRef}
        style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }}
        controls={true}
      />
      <h1>{myitem.title}</h1>
      <h5>{myitem.description}</h5>
    </div>
  );
};
