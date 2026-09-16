import Button from '../../shared/Button';
import AlertItem from './AlertItem';
import { ALERTS } from '../../../data/alert.data';
import classes from './Alert.module.css';

export default function Alerts() {
  return (
    <article className='card alerts-card'>
      <header className='card-header'>
        <h3>Alerts</h3>
        <Button icon>View All</Button>
      </header>

      <ul className={classes['alerts-list']}>
        {ALERTS.map((item) => (
          <li key={item.id}>
            <AlertItem
              title={item.title}
              description={item.description}
              timestamp={item.timestamp}
              icon={item.icon}
              iconColor={item.iconColor}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
