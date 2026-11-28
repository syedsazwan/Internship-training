import { Button } from '@/components/ui/button'
import Users from '@/hooks/Users'
import Students from '@/components/Students'

const Service = () => {
  let name = "test"
  return (
    <div>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <h1>This is {name}</h1>
      <Users />
      <Students name="user" age={20} />
    </div>
  )
}

export default Service
