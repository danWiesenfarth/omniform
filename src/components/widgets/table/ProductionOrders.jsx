import { PRODUCTION_ORDERS } from '../../../data/productionOrders.data';
import { PRODUCTION_ORDER_COLUMNS } from '../../../data/columns/ProductionOrderColumns.data';
import DataTable from '../../shared/DataTable';

export default function ProductionOrders() {
  return (
    <DataTable columns={PRODUCTION_ORDER_COLUMNS} data={PRODUCTION_ORDERS} />
  );
}
