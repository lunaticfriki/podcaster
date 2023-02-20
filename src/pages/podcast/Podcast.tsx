import { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Podcast: FC = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>Podcast: {id}</p>
    </div>
  );
};

export default Podcast;
