'use client';
import { UsersDataTable } from './UsersDataTable';
import { useMessages } from '@/components/hooks';
import { UserAddButton } from './UserAddButton';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export function UsersPage() {
  const { formatMessage, labels } = useMessages();

  const handleSave = () => {};

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{formatMessage(labels.users)}</h1>
          <p className="text-muted-foreground mt-1">
            Manage user accounts and permissions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <UserAddButton onSave={handleSave} />
          <ThemeToggle />
        </div>
      </div>
      <Card className="p-6">
        <UsersDataTable />
      </Card>
    </div>
  );
}
