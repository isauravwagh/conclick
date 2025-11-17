'use client';
import { Column } from '@umami/react-zen';
import { PageHeader } from '@/components/common/PageHeader';
import { useMessages } from '@/components/hooks';
import { PageBody } from '@/components/common/PageBody';
import { ThemeToggle } from '@/components/theme-toggle';

export function DashboardPage() {
  const { formatMessage, labels } = useMessages();

  return (
    <PageBody>
      <Column margin="2">
        <div className="flex items-center justify-between">
          <PageHeader title={formatMessage(labels.dashboard)}></PageHeader>
          <ThemeToggle />
        </div>
      </Column>
    </PageBody>
  );
}
