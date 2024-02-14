import React, { useState, useEffect } from 'react';

function ExpandableImage({ src, alt }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, 3000); // Set timeout to reset expanded state after 2 seconds
  };

  useEffect(() => {
    let timer;
    if (expanded) {
      timer = setTimeout(() => {
        setExpanded(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [expanded]);

  return (
    <img
      src={src}
      alt={alt}
      className={`expandable-image ${expanded ? 'expanded' : ''}`}
      onClick={handleClick}
    />
  );
}

export default ExpandableImage;
