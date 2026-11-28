import { useContext } from 'react'
import { StudentContext } from '@/StudentContext'

const Greeting = () => {
  let Studentname = useContext(StudentContext)
  return (
    <div>
      <h1>Greeting {Studentname}</h1>
    </div>
  )
}

export default Greeting
