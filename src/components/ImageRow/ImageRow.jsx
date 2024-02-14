import React from 'react';
import ExpandableImage from './ExpandableImage';

function ImageRow() {
  return (
    <div className="image-row">
      <ExpandableImage src="https://i.imgur.com/XIrbfek.jpeg" alt="Image 1" />
      <ExpandableImage src="https://i.imgur.com/dgeToCP.jpeg" alt="Image 2" />
      <ExpandableImage src="https://i.imgur.com/nZvVNLS.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/8qB7tGR.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/0Y3jK53.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/F513523.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/dlN0Yv0.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/SairFWG.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/ZkQV4mI.jpeg" alt="Image 3" />
      <ExpandableImage src="https://i.imgur.com/8rNsVad.jpeg" alt="Image 3" />
     </div>
  );
}

export default ImageRow;
