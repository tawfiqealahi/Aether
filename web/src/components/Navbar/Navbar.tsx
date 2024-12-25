import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdOutlineSegment } from "react-icons/md";





const Navbar = () => {
  return (
    <div className='text-center flex   mt-2  justify-between'>
      <div>
        <Link to='/'>
          <h1 className='text-2xl lg:text-5xl font-bold'>aether
            <span className='text-[#F37172]'>.</span>
          </h1>
        </Link>
      </div>
      <div>
        {/* dropdown menu */}

        <DropdownMenu>
  <DropdownMenuTrigger><MdOutlineSegment className='text-[#F37172] mt-2  text-2xl lg:hidden' />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
    <Link to=''> <Button className='bg-[#F37172]' variant="outline">Sign up</Button> </Link>
    </DropdownMenuLabel>
    <DropdownMenuLabel> 
    <Link to=''> <Button className='bg-[#F37172]' variant="outline">Log in</Button> </Link>

    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    
  </DropdownMenuContent>
</DropdownMenu>

<div className='  hidden lg:inline'>
<Link to=''> <Button className=' lg:mt-5 text-white font-semibold bg-[#F37172]' variant="outline">Sign up</Button> </Link>
<Link to=''> <Button className=' lg:mt-5 text-white font-semibold bg-[#F37172]' variant="outline">Log in</Button> </Link>

</div>


       
      </div>
    </div>
  )
}

export default Navbar