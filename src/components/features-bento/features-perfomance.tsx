'use client';

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export function FeaturePerfomance() {
  return (
    <div className="absolute flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg p-6 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      <Card>
        <CardHeader>
          <CardTitle>Tiempo de carga</CardTitle>
        </CardHeader>
        <CardContent>
          <PerformanceLinechart className="aspect-[9/4]" />
        </CardContent>
      </Card>
    </div>
  );
}

function PerformanceLinechart(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: 'Desktop',
            color: 'hsl(var(--chart-1))',
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: '01:20 am', desktop: 186 },
            { month: '02:21 am', desktop: 305 },
            { month: '03:22 am', desktop: 237 },
            { month: '04:23 am', desktop: 73 },
            { month: '05:24 am', desktop: 209 },
            { month: '06:25 am', desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
