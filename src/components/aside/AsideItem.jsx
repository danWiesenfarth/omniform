import classes from './AsideItem.module.css';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function AsideItem({
  icon: Icon,
  title,
  link,
  subpages = [],
  isSelected,
  onSelect,
}) {
  const hasDropdown = subpages.length > 0;

  return (
    <li className={classes.item}>
      {hasDropdown ? (
        <button
          type='button'
          onClick={onSelect}
          className={isSelected ? classes.selected : ''}
        >
          <div className={classes['item-content']}>
            <Icon />
            <span>{title}</span>
          </div>

          {isSelected ? <ChevronUp /> : <ChevronDown />}
        </button>
      ) : (
        <a
          href={link}
          onClick={onSelect}
          className={isSelected ? classes.selected : ''}
        >
          <div className={classes['item-content']}>
            <Icon />
            <span>{title}</span>
          </div>
        </a>
      )}

      {hasDropdown && isSelected && (
        <ul className={classes.subpages}>
          {subpages.map((subpage) => (
            <li key={subpage.title}>
              <a href={subpage.link}>{subpage.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
