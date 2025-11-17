"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { date: "Jan", visitors: 4000, pageviews: 2400 },
  { date: "Feb", visitors: 3000, pageviews: 1398 },
  { date: "Mar", visitors: 5000, pageviews: 9800 },
  { date: "Apr", visitors: 4500, pageviews: 3908 },
  { date: "May", visitors: 6000, pageviews: 4800 },
  { date: "Jun", visitors: 5500, pageviews: 3800 },
  { date: "Jul", visitors: 7000, pageviews: 4300 },
]

export function TrafficChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Traffic Overview</CardTitle>
        <CardDescription>Visitors and page views over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-1))" }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="pageviews"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
            <span className="text-sm text-muted-foreground">Visitors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
            <span className="text-sm text-muted-foreground">Page Views</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
