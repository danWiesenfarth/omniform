import Chart from './Chart';
import classes from './Trend.module.css';
import TrendCard from './TrendCard';

export default function Trend() {
  return (
    <>
      <article className='card trends-card'>
        <div className='card-header'>
          <h3>KPI Overview</h3>
        </div>
        <section className={classes['kpi-cards']}>
          <TrendCard
            title={'Production'}
            value={982}
            unit={' UNITS'}
            kpi={'+4.8%'}
          />
          <TrendCard title={'OEE'} value={82.5} unit={' %'} kpi={'+2.1%'} />
          <TrendCard
            title={'Availability'}
            value={91.7}
            unit={' %'}
            kpi={'+1.4%'}
          />
          <TrendCard title={'Quality'} value={98.2} unit={' %'} kpi={'-1.4%'} />
          <TrendCard
            title={'Downtime'}
            value={24}
            unit={' MIN'}
            kpi={'+10MIN'}
          />
        </section>
        <Chart />
      </article>
    </>
  );
}
