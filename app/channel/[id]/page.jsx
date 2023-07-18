'use client'
import { useState, useContext, useEffect } from "react"
import { Box } from "@mui/material"
import Videos from "@/components/videos/Videos"
import ChannelCard from "@/components/videos/ChannelCard"
import { fetchAPI } from "@/utils/fetchAPI"

const page = ( {params} ) => {
  const id= params.id
  const [channelDetail, setChannelDetail]= useState()
  const [videos, setVideos]= useState([])

  useEffect(()=>{
    fetchAPI(`channels?.part=snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]))

    fetchAPI(`search?.channelId=${id}&part=snippet&order=date`)
    .then(data => setVideos(data?.items))
  }, [])

  return (
    <Box
      minHeight='95px'
    >
      <Box>
        <div
          style={{
            background: 'radial-gradient(circle, rgba(251,0,0,1) 0%, rgba(179,55,55,1) 35%, rgba(11,11,11,1) 100%)',
            height: '300px',
            zIndex: '3'
          }}
          />
            <ChannelCard 
              channelDetail={channelDetail}
              marginTop= '-110px'
              />
      </Box>
      <Box display='flex' p='2'>
        <Box 
          sx={{
            mr: {sm: '100px'}
          }}
        />
          <Videos 
            videos={videos}
          />
      </Box>

    </Box>
  )
}

export default page