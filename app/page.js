'use client'
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "@/components/sidebar/Sidebar"
import Videos from "@/components/videos/Videos"
import { fetchAPI } from "@/utils/fetchAPI"

export default function Home() {
  const [selectedCategory, setSelectedCategory]= useState('New')
  const [videos, setVideos]= useState([])
  
  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=> setVideos(data.items))
  }, [selectedCategory])

  return (
    <>
      <Stack sx={{ flexDirection: {sx: "column", md: "row"},}} >
        <Box sx={{height: {sx: 'auto', md: '90vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}} >
          <Sidebar 
          selectedCategory= {selectedCategory}
          setSelectedCategory= {setSelectedCategory}
          />
          <Typography variant="body2" sx={{mt: 1.5, color: '#fff'}} className="copyright">
            Copyright 2022 WTube
          </Typography>
        </Box>
        <Box p={1}  sx={{overflow: 'auto', height: '90vh', flex: 2, }}>
          <Typography 
            variant="h6" 
            sx={{color: 'white', marginBottom: '15px'}}>
            <span>{selectedCategory}</span>
          </Typography>
          <Videos 
          videos= {videos}
        />
        </Box>

      </Stack>

    </>
  )
}
