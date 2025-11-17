'use client';
import { useMessages } from '@/components/hooks';
import { ThemeToggle } from '@/components/theme-toggle';
import { OverviewStats } from '@/components/dashboard/overview-stats';
import { TrafficChart } from '@/components/dashboard/traffic-chart';
import { TopPagesTable } from '@/components/dashboard/top-pages-table';
import { Button } from '@/components/ui/button';
import { Calendar, Download, RefreshCw } from 'lucide-react';

export function DashboardPage() {
  const { formatMessage, labels } = useMessages();

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{formatMessage(labels.dashboard)}</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your analytics and website performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 days
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* Stats Overview */}
      <OverviewStats />

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <TrafficChart />
        </div>
        <div className="lg:col-span-3">
          <TopPagesTable />
        </div>
      </div>
    </div>
  );
}
