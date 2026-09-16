import classes from './Chip.module.css';

export default function Chip({ status, title }) {
  return <span className={`${classes.chip} ${classes[status]}`}>{title}</span>;
}
