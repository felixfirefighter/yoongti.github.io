import React from 'react';
import { WORK_ITEMS } from '../../data/work-items';
import WorkItem from '../work-item';

import './index.scss';

const Work = () => {
  return (
    <div className="work">
      <h2 className="font-size-xl mb-2 text-black">Work Timeline</h2>
      <div className="work-timeline">
        {WORK_ITEMS.map((item) => {
          return <WorkItem {...item}></WorkItem>
        })}
      </div>
    </div>
  );
};

export default Work;
