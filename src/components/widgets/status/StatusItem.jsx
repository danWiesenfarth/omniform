import Chip from '../../shared/chip/Chip';
import classes from './StatusItem.module.css';

export default function StatusItem({ title, efficiency, status, statusTitle }) {
  return (
    <li className={classes['status-item']}>
      <span>{title}</span>
      <Chip status={status} title={statusTitle} />
      <span>
        {' '}
        <strong>{efficiency}</strong> % OEE
      </span>
    </li>
  );
}
