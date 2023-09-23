import { Darshan } from '@datatypes/Darshan';
import React from 'react';

interface ChatakProps {
  countDown?: number;
  transitionTime?: number;
};

const Chatak: React.FC<ChatakProps> = ({
  countDown = 1000,
  transitionTime = 1000,
}) => {
  const [data, setData] = React.useState<Darshan[]>();
  
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/website/bharat-darshan');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>Chatak</div>
  )
};

export default Chatak;