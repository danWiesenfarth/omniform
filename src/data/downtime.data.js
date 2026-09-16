export const DOWNTIME = [
  {
    id: 1,
    machine: 'CNC-04',
    reason: 'Tool Change',
    duration: '12 min',
    start: '13:42',
    status: {
      type: 'success',
      label: 'Resolved',
    },
  },
  {
    id: 2,
    machine: 'CNC-02',
    reason: 'Material Shortage',
    duration: '24 min',
    start: '13:18',
    status: {
      type: 'error',
      label: 'Shortage',
    },
  },
  {
    id: 3,
    machine: 'PRESS-01',
    reason: 'Maintenance',
    duration: '38 min',
    start: '12:54',
    status: {
      type: 'info',
      label: 'Planned',
    },
  },
  {
    id: 4,
    machine: 'CNC-05',
    reason: 'Machine Error',
    duration: '17 min',
    start: '12:31',
    status: {
      type: 'warning',
      label: 'Review',
    },
  },
  {
    id: 5,
    machine: 'WELD-02',
    reason: 'Operator Break',
    duration: '15 min',
    start: '12:15',
    status: {
      type: 'success',
      label: 'Resolved',
    },
  },
];
