'use client';
import { AdminTeamsDataTable } from './AdminTeamsDataTable';
import { useMessages } from '@/components/hooks';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export function AdminTeamsPage() {
  const { formatMessage, labels } = useMessages();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{formatMessage(labels.teams)}</h1>
          <p className="text-muted-foreground mt-1">
            Manage teams and team settings
          </p>
        </div>
        <ThemeToggle />
      </div>
      <Card className="p-6">
        <AdminTeamsDataTable />
      </Card>
    </div>
  );
}
