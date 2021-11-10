import React from 'react';
import { WORK_ITEMS } from '../../data/work';
import WorkItem from '../work-item';

import './index.scss';

const Work = () => {
  return (
    <div className="work section" id="work">
      <h2 className="font-size-xl mb-2 text-primary">Where I've Worked</h2>
      <div className="work-timeline">
        {WORK_ITEMS.map((item) => {
          return <WorkItem {...item} key={item.title}></WorkItem>
        })}
      </div>
    </div>
  );
};

export default Work;
