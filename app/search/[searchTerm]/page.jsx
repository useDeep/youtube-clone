'use client'
import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import Sidebar from "@/components/sidebar/Sidebar"
import Videos from "@/components/videos/Videos"
import { fetchAPI } from "@/utils/fetchAPI"

export default function page( {params} ) {
  const searchTerm= params.searchTerm
  const [videos, setVideos]= useState([])
  
  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${searchTerm}}`)
      .then((data)=> setVideos(data.items))
  }, [searchTerm])

  return (
    <>
      <Box p= {2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
          <Typography 
            variant="h6" 
            sx={{color: 'white'}}>
            Search Results for: <span>'{searchTerm}'</span>
          </Typography>
          <Videos 
          videos= {videos}
        />
        </Box>
    </>
  )
}
