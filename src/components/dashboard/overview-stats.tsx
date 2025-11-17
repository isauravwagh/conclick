"use client"

import { StatCard } from "./stat-card"
import { Users, MousePointerClick, Clock, TrendingUp, Eye, Globe, BarChart3, Activity } from "lucide-react"

export function OverviewStats() {
  const stats = [
    {
      title: "Total Visitors",
      value: "45,231",
      change: "+20.1% from last month",
      changeType: "positive" as const,
      icon: Users,
      description: "Unique visitors tracked",
    },
    {
      title: "Page Views",
      value: "123,456",
      change: "+15.3% from last month",
      changeType: "positive" as const,
      icon: Eye,
      description: "Total page views",
    },
    {
      title: "Avg. Session Duration",
      value: "3m 42s",
      change: "-2.4% from last month",
      changeType: "negative" as const,
      icon: Clock,
      description: "Average time on site",
    },
    {
      title: "Bounce Rate",
      value: "42.5%",
      change: "-5.2% from last month",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Lower is better",
    },
    {
      title: "Total Events",
      value: "89,234",
      change: "+18.7% from last month",
      changeType: "positive" as const,
      icon: Activity,
      description: "Custom events tracked",
    },
    {
      title: "Active Websites",
      value: "12",
      change: "+2 this month",
      changeType: "positive" as const,
      icon: Globe,
      description: "Websites being tracked",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8% from last month",
      changeType: "positive" as const,
      icon: BarChart3,
      description: "Goal conversion rate",
    },
    {
      title: "Click-Through Rate",
      value: "2.84%",
      change: "+0.4% from last month",
      changeType: "positive" as const,
      icon: MousePointerClick,
      description: "Average CTR",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
