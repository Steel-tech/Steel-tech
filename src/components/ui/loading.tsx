import { cn } from '@/lib/utils'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Loading({ size = 'md', className }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-gray-900',
        sizeClasses[size],
        className
      )}
    />
  )
}

export function LoadingPage() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <Loading size="lg" className="mx-auto mb-4" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export function LoadingButton() {
  return (
    <div className="flex items-center space-x-2">
      <Loading size="sm" />
      <span>Loading...</span>
    </div>
  )
}
