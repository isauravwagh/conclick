'use client';
import { AdminWebsitesDataTable } from './AdminWebsitesDataTable';
import { useMessages } from '@/components/hooks';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export function AdminWebsitesPage() {
  const { formatMessage, labels } = useMessages();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{formatMessage(labels.websites)}</h1>
          <p className="text-muted-foreground mt-1">
            Manage all websites across the platform
          </p>
        </div>
        <ThemeToggle />
      </div>
      <Card className="p-6">
        <AdminWebsitesDataTable />
      </Card>
    </div>
  );
}
