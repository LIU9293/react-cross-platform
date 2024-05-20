import { useState } from 'react'
import { Button } from '@/components/ui'
import { RoomList } from "@/containers/room-list"
import { AuthContainer } from '@/containers/auth-container'
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function App() {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  
  const onShowLoginDialog = () => {
    setIsLoginDialogOpen(true)
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <RoomList />
      <Button onClick={onShowLoginDialog}>Login</Button>
      <Dialog open={isLoginDialogOpen} onOpenChange={value => {
        setIsLoginDialogOpen(value)
      }}>
        <DialogContent>
          <AuthContainer />
        </DialogContent>
      </Dialog>
    </div>
  )
}