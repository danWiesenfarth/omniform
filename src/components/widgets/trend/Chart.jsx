import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const DATA = [
  { time: '04:00', value: 60 },
  { time: '06:00', value: 65 },
  { time: '08:00', value: 78 },
  { time: '10:00', value: 70 },
  { time: '12:00', value: 65 },
  { time: '14:00', value: 30 },
  { time: '16:00', value: 60 },
  { time: '18:00', value: 20 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        data={DATA}
        margin={{ top: 10, right: 20, bottom: 0, left: -30 }}
      >
        <XAxis
          dataKey='time'
          axisLine={false}
          tickLine={false}
          tick={{
            fill: 'var(--subtext-0)',
            fontFamily: 'Fira Mono',
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fill: 'var(--subtext-0)',
            fontFamily: 'Fira Mono',
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--base)',
            border: '1px solid var(--surface-1)',
            borderRadius: '8px',
          }}
          labelStyle={{
            color: 'var(--subtext-0)',
            fontFamily: 'Fira Mono',
            fontSize: '12px',
          }}
          itemStyle={{
            color: 'var(--text)',
            fontFamily: 'Fira Mono',
            fontSize: '14px',
          }}
        />
        <ReferenceLine y={75} stroke='var(--green)' strokeDasharray='4 4' />
        <ReferenceLine y={30} stroke='var(--red)' strokeDasharray='4 4' />
        <Area
          type='monotone'
          dataKey='value'
          stroke='var(--mauve)'
          strokeWidth='2px'
          fill='var(--mauve)'
          fillOpacity={0.1}
          dot
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
