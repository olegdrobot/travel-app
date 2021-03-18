import React from 'react';
import FullScreenComponent from '../page/reactFullscreen';

const style = {
  /*container: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    width: '100%',
  },*/
  
  image: {
    cursor: 'pointer',
    width: '50%',
  },
  buttonImage: {
    border: 'none',
    background: 'transparent',
    '&:focus': {
      outline: 'none',
    },
  },
};

const Fullscreen = () => {
  return (
    <div style={style.container}> 
      <FullScreenComponent>
        {({ ref, onToggle }) => (
          <button style={style.buttonImage} onClick={() => onToggle()}>
            <img
              alt="Fullscreen"
              ref={ref}
              src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2"
              style={style.image}
            />
          </button>
        )}
      </FullScreenComponent>
    </div>
  );
};

export default Fullscreen;