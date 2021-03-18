import { useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';

export const FullScreenComponent = ({ children, onChange, onError }) => {
  const ref = useRef();

 /* useEffect(() => {
    screenfull.onchange(() => {
      if (onChange) {
        onChange();
      }
    });
    screenfull.on('error', (event) => {
      if (onError) {
        onError();
      }
    });
  }, []);*/

  return children({
    ref,
    isEnabled: screenfull.isEnabled,
    onToggle: () => {
      screenfull.toggle(ref.current);
    },
  });
};



export default FullScreenComponent;