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
  const [data, setData] = React.useState<Darshan[]>({} as Darshan[]);

  const fetchData = React.useCallback(async () => {
    const response = await fetch('/api/website/bharat-darshan');
    const data = await response.json();
    setData(data);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>Chatak</div>
  )
};

export default Chatak;