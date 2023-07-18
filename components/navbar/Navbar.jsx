import { Stack } from "@mui/material"
import SearchBar from '../search/SearchBar'
import Link from 'next/link'
import Image from "next/image"
import { logo } from "@/utils/constants"

const Navbar = () => {
  return (
    <Stack 
        direction="row" 
        alignItems="center" 
        zIndex= '10'
        p={2} 
        sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
            <Link href='/' style={{display: 'flex', alignItems: 'center', color: 'white'}}>
            {/* <Image
                src={logo}
                width={500}
                height={500}
                alt="YouTube"
                /> */}
            <img 
                src={logo}
                height={45}
                alt="YouTube" 
            />WTube
            </Link>
            <SearchBar />

        </Stack>
  )
}

export default Navbar