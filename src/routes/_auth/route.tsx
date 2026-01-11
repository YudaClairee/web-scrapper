import { buttonVariants } from '@/components/ui/button'
import { LoginForm } from '@/components/web/login-form'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className="absolute top-8 left-8">
        <Link to={'/'} className={buttonVariants()}>
          <ArrowLeft className="size-6" />
          Back to Home
        </Link>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
