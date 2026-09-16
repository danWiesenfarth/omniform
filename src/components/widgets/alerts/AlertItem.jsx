import classes from './AlertItem.module.css';

export default function AlertItem({
  title,
  description,
  timestamp,
  icon: Icon,
  iconColor,
}) {
  return (
    <article className={classes['alert-item-wrapper']}>
      <Icon color={iconColor} />
      <div className={classes['alert-content']}>
        <div>
          <h4>{title}</h4>
          <p className={classes.description}>{description}</p>
        </div>
        <span className={classes.timestamp}>{timestamp}</span>
      </div>
    </article>
  );
}
