import { Box, Stack } from "@mui/material"
import { categories } from "@/utils/constants"

const Sidebar = ( {selectedCategory, setSelectedCategory}) => {

  return (
    <Stack 
        direction= 'row'
        sx={{
            overflow: 'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'}            
        }}
        >
            {categories.map((cat)=>(
                <button 
                    className="category-btn"
                    style={{
                        color: 'white',
                        background: cat.name === selectedCategory && '#FC1503'
                    }}
                    onClick={()=>{
                        setSelectedCategory(cat.name)
                    }}
                    key={cat.name}>
                    <span style={{marginRight: '10px'}}>
                        {cat.icon}
                    </span>
                    <span>
                        {cat.name}
                    </span>
                </button>
            ))}
        </Stack>
  )
}

export default Sidebar