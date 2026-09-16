import { useState } from 'react';

import { ASIDE_ITEMS } from '../../data/aside.data';
import AsideItem from './AsideItem';
import classes from './Aside.module.css';

export default function Aside() {
  const [isSelected, setIsSelected] = useState(null);

  function handleSelect(id) {
    setIsSelected((prev) => (prev === id ? null : id));
  }

  return (
    <aside className={classes.aside}>
      {ASIDE_ITEMS.map((item) => (
        <div key={item.title}>
          {item.dividerBefore && <div className={classes.divider} />}

          <AsideItem
            link={item.link}
            icon={item.icon}
            title={item.title}
            hasDropdown={item.hasDropdown}
            subpages={item.subpages}
            isSelected={isSelected === item.id}
            onSelect={() => handleSelect(item.id)}
          />
        </div>
      ))}
    </aside>
  );
}
