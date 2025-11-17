'use client';
import { TeamsDataTable } from '@/app/(main)/teams/TeamsDataTable';
import { TeamsHeader } from '@/app/(main)/teams/TeamsHeader';
import { Card } from '@/components/ui/card';

export function TeamsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <TeamsHeader />
      <Card className="p-6">
        <TeamsDataTable />
      </Card>
    </div>
  );
}
