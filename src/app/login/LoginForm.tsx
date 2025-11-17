'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMessages, useUpdateQuery } from '@/components/hooks';
import { setUser } from '@/store/app';
import { setClientAuthToken } from '@/lib/client';
import { Logo } from '@/components/svg';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export function LoginForm() {
  const { formatMessage, labels, getErrorMessage } = useMessages();
  const router = useRouter();
  const { mutateAsync, error, isPending } = useUpdateQuery('/auth/login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync({ username, password }, {
      onSuccess: async ({ token, user }) => {
        setClientAuthToken(token);
        setUser(user);
        router.push('/websites');
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-conclick-blue-50 via-white to-conclick-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Logo */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-conclick-blue-500 to-conclick-green-500 shadow-lg">
          <Logo className="h-10 w-10 text-white" />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">ConClick Analytics</h1>
          <p className="text-muted-foreground mt-2">Privacy-First Analytics Platform</p>
        </div>

        {/* Login Card */}
        <Card className="border-border/50 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{formatMessage(labels.login)}</CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{getErrorMessage(error)}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="username">{formatMessage(labels.username)}</Label>
                <Input
                  id="username"
                  data-test="input-username"
                  type="text"
                  placeholder="Enter your username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{formatMessage(labels.password)}</Label>
                <Input
                  id="password"
                  data-test="input-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>

              <Button
                data-test="button-submit"
                type="submit"
                className="w-full bg-gradient-to-r from-conclick-blue-500 to-conclick-blue-600 hover:from-conclick-blue-600 hover:to-conclick-blue-700"
                disabled={isPending}
              >
                {isPending ? 'Signing in...' : formatMessage(labels.login)}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Secure and privacy-focused analytics for your websites
        </p>
      </div>
    </div>
  );
}
