import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const iconMapByTitle = {
  Users: 'people',
  Likes: 'like',
  Products: 'product',
  Trees: 'tree',
};

const Statistics = ({ title, stats }) => {
  return (
    <>
      <h2>Statistics</h2>
      <>
        <h3 className={style.title}>Main Statistics</h3>

        <ul className={style.list}>
          {stats.map(({ id, title, total }) => {
            const iconKey = iconMapByTitle[title];
            return (
              <li className={style.item} key={id}>
                <StatisticsItem
                  title={title}
                  total={total}
                  icon={iconKey}
                  iconSize={32}
                />
              </li>
            );
          })}
        </ul>
      </>
    </>
  );
};

export default Statistics;
