export const MATERIALS = [
  {
    id: 1,
    material: 'Steel Sheet 2mm',
    required: 240,
    available: 318,
    unit: 'pcs',
    status: {
      type: 'success',
      label: 'Available',
    },
  },
  {
    id: 2,
    material: 'Valve Core B',
    required: 180,
    available: 124,
    unit: 'pcs',
    status: {
      type: 'error',
      label: 'Shortage',
    },
  },
  {
    id: 3,
    material: 'Aluminium Housing A',
    required: 150,
    available: 162,
    unit: 'pcs',
    status: {
      type: 'success',
      label: 'Available',
    },
  },
  {
    id: 4,
    material: 'Rubber Seal 42mm',
    required: 320,
    available: 295,
    unit: 'pcs',
    status: {
      type: 'warning',
      label: 'Low Stock',
    },
  },
  {
    id: 5,
    material: 'M8 Hex Bolt',
    required: 840,
    available: 1240,
    unit: 'pcs',
    status: {
      type: 'success',
      label: 'Available',
    },
  },
];
