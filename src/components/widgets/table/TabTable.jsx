import { useState } from 'react';
import classes from './TabTable.module.css';
import ProductionOrders from './ProductionOrders';
import DataTable from '../../shared/DataTable';
import { DOWNTIME_COLUMNS } from '../../../data/columns/downtimeColumns.data';
import { DOWNTIME } from '../../../data/downtime.data';
import { QUALITY_COLUMNS } from '../../../data/columns/qualityColumns.data';
import { QUALITY } from '../../../data/quality.data';
import { MATERIAL_COLUMNS } from '../../../data/columns/materialColumns.data';
import { MATERIALS } from '../../../data/materials.data';

const TABS = ['Production', 'Downtime', 'Quality', 'Materials'];

export default function TabTable() {
  const [activeTab, setActiveTab] = useState('Production');

  return (
    <article className='tab-card'>
      <nav className={classes.tabs} aria-label='Dashboard data'>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${classes.tab} ${
              activeTab === tab ? classes.active : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === 'Production' && <ProductionOrders />}

      {activeTab === 'Downtime' && (
        <DataTable columns={DOWNTIME_COLUMNS} data={DOWNTIME} />
      )}

      {activeTab === 'Quality' && (
        <DataTable columns={QUALITY_COLUMNS} data={QUALITY} />
      )}

      {activeTab === 'Materials' && (
        <DataTable columns={MATERIAL_COLUMNS} data={MATERIALS} />
      )}
    </article>
  );
}
