import React from 'react';
import { PieChart } from 'reaviz';

const Pie = ({data}) => {
  return(
    <div style={{ width: '25vw', height: '25vh'}}>
      <PieChart
        data={data}
      />
    </div>
  );
};

export default Pie;