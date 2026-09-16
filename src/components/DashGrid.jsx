import Trend from './widgets/trend/Trend';
import TabTable from './widgets/table/TabTable';
import Alerts from './widgets/alerts/Alerts';
import Status from './widgets/status/Status';

export default function DashGrid() {
  return (
    <>
      <section className='dash-grid'>
        <Trend />
        <TabTable />
        <Alerts />
        <Status />
      </section>
    </>
  );
}
