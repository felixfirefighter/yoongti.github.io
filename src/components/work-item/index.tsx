import { IWorkItem } from '../../data/work';
import './index.scss';

const WorkItem: React.FC<IWorkItem> = ({ title, company, time, detailList }) => {
  return (
    <div className="work-item d-flex">
      <div className='timeline'>
        <div className="dot"></div>
        <div className="line"></div>
      </div>
      <div>
        <h3 className="font-size-md">
          {title}{' '}
          <span className="text-darker">
            {' '}
            @{' '}
            <a
              href={company.link}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              {company.name}
            </a>
          </span>
        </h3>
        <p className="text-gray">{time}</p>
        <ul className="list-primary text-gray">
          {detailList.map((detail, index) => {
            return <li key={index}>{detail}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkItem;
