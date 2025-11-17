'use client';
import { WebsitesDataTable } from './WebsitesDataTable';
import { WebsiteAddButton } from './WebsiteAddButton';
import { useMessages, useNavigation } from '@/components/hooks';
import { ThemeToggle } from '@/components/theme-toggle';
import { Card } from '@/components/ui/card';

export function WebsitesPage() {
  const { teamId } = useNavigation();
  const { formatMessage, labels } = useMessages();

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{formatMessage(labels.websites)}</h1>
          <p className="text-muted-foreground mt-1">
            Manage and monitor all your websites in one place
          </p>
        </div>
        <div className="flex items-center gap-2">
          <WebsiteAddButton teamId={teamId} />
          <ThemeToggle />
        </div>
      </div>

      {/* Websites Table */}
      <Card className="p-6">
        <WebsitesDataTable teamId={teamId} />
      </Card>
    </div>
  );
}
