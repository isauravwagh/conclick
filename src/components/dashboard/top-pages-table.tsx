"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const pages = [
  { page: "/", title: "Home", views: 12345, bounce: 42, avgTime: "3:24", change: +12 },
  { page: "/pricing", title: "Pricing", views: 8901, bounce: 38, avgTime: "4:12", change: +24 },
  { page: "/blog", title: "Blog", views: 5432, bounce: 51, avgTime: "2:45", change: -8 },
  { page: "/docs", title: "Documentation", views: 3210, bounce: 29, avgTime: "5:33", change: +18 },
  { page: "/about", title: "About Us", views: 2156, bounce: 44, avgTime: "2:18", change: +5 },
]

export function TopPagesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
        <CardDescription>Most visited pages this month</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Bounce Rate</TableHead>
              <TableHead className="text-right">Avg. Time</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.page} className="group">
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {page.title}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      {page.page}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {page.views.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={page.bounce < 40 ? "default" : "secondary"}>
                    {page.bounce}%
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {page.avgTime}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={
                      page.change > 0
                        ? "text-green-600 dark:text-green-500"
                        : "text-red-600 dark:text-red-500"
                    }
                  >
                    {page.change > 0 ? "+" : ""}
                    {page.change}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
