import classes from './TrendCard.module.css';

export default function TrendCard({ title, value, unit, kpi }) {
  return (
    <article className={classes['trend-card']}>
      <h4>{title}</h4>
      <div className='trend-content'>
        <span className={classes['value']}>{value}</span>
        <span className={classes['unit']}>{unit}</span>
      </div>
      <span className={classes['kpi-value']}>{kpi}</span>
    </article>
  );
}
