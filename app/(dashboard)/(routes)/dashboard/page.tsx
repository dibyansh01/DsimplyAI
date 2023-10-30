import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'


export default function DashboardPage() {
  return (
    <div>
      
      <p className="text-6xl">Dashboard Page (protected) </p>
      <UserButton afterSignOutUrl="/" />
      
    </div>
    
  )
}
