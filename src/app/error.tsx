"use client"

import Link from "next/link"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="size-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="size-8 text-red-600" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900">Oops! Something went wrong</h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              {`We encountered an unexpected error while processing your request. Don't worry, our team has been notified
              and we're working to fix it.`}
            </p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-left">
              <p className="text-xs font-mono text-slate-700 break-all">{error.message}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button onClick={reset} className="flex-1 bg-slate-900 hover:bg-slate-800 text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href="/" className="flex items-center justify-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>

          <p className="text-xs text-slate-500">If this problem persists, please contact the support team.</p>
        </CardContent>
      </Card>
    </div>
  )
}
