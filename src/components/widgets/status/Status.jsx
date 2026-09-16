import { STATUS } from '../../../data/status.data';
import Button from '../../shared/Button';
import classes from './Status.module.css';
import StatusItem from './StatusItem';

export default function Status() {
  return (
    <article className='card status-card'>
      <header className='card-header'>
        <h3>Machine Status</h3>
        <Button icon>View All</Button>
      </header>

      <ul className={classes['status-list']}>
        {STATUS.map((machine) => (
          <StatusItem
            key={machine.title}
            title={machine.title}
            status={machine.status}
            statusTitle={machine.statusTitle}
            efficiency={machine.efficiency}
          />
        ))}
      </ul>
    </article>
  );
}
