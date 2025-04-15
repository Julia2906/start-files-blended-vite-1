import style from './StatisticsItem.module.css';
import icons from '../../iconsMap';

const StatisticsItem = ({ title, total, icon, iconSize = 24 }) => {
  const IconComponent = icons[icon];
  return (
    <>
      <h3>StatisticsItem</h3>
      <>
        {IconComponent && <IconComponent size={iconSize} />}
        <span className={style.counter}>{total}</span>
        <p className={style.text}>{title}</p>
      </>
    </>
  );
};

export default StatisticsItem;
