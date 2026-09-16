import Chip from './chip/Chip';
import classes from './DataTable.module.css';

export default function DataTable({ columns, data }) {
  return (
    <div className={classes.tableWrapper}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.type === 'chip' ? (
                    <Chip
                      status={item[column.key].type}
                      title={item[column.key].label}
                    />
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
