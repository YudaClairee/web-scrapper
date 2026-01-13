import { Link } from '@tanstack/react-router'
import { Button, buttonVariants } from '../ui/button'
import { ThemeToggle } from './theme-toggle'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'

function Navbar() {
  const { data: session, isPending } = authClient.useSession()

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Logged out successfully')
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      },
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
            <img
              src="/ulikteruslogo.png"
              alt="UlikTerus Logo"
              className="size-10 relative z-10"
            />
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
            UlikTerus
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {isPending ? null : session ? (
            <>
              <Link to="/dashboard" className={buttonVariants({ size: 'sm' })}>
                Dashboard
              </Link>
              <Button onClick={handleLogout} variant="ghost" size="sm">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Login
              </Link>
              <Link to="/register" className={buttonVariants({ size: 'sm' })}>
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
