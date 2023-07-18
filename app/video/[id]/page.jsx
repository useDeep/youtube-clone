'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Box, Stack, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import Videos from "@/components/videos/Videos"
import { fetchAPI } from "@/utils/fetchAPI"
import ReactPlayer from "react-player"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const page = ( {params} ) => {
  const [videoDetail, setVideoDetail]= useState(null)
  const [videos, setVideos]= useState(null)

  const id= params.id
  useEffect(()=>{
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideoDetail(data.items[0]))

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data => setVideos(data.items))
  }, [id])
  
  if (!videoDetail?.snippet) return "Loading" 

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail
  console.log(videos)
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex='1'>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}} >
          <ReactPlayer
            className= "react-player"
            controls
            url={`https://www.youtube.com/watch?v=${id}`} />
          <Typography 
            variant= 'h5'
            color= '#fff'
            fontWeight='bold'
            p={2}
            >
            {title}
          </Typography>
          <Stack 
            direction='row'
            justifyContent='space-between'
            py={1}
            px={2}
            sx={{
              color: '#fff'
            }}
          >
            <Link href={`/channel/${channelId}`}>
              <Typography 
                variant={{sm: 'subtitle1', md: 'h6'}}
                color='#fff'
              >
                {channelTitle}
                <CheckCircle
                  sx={{fontSize: '12px',
                    color: 'gray',
                    ml: '5px'  
                }}
                />
              </Typography>
            </Link>
            <Stack
              direction='row'
              gap= '20px'
              alignContent='center'
            >
              <Typography
                variant="body1"
                sx={{opacity: 0.7, display: 'flex', alignItems: 'center'}}
              >
                <RemoveRedEyeIcon />
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              
              <Typography
                variant="body1"
                sx={{opacity: 0.7, display: 'flex', alignItems: 'center' }}
              >
                <ThumbUpAltIcon />
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
              
            </Stack>
          </Stack>
          </Box>

        </Box>
        <Box 
          px={2}
          py={{md: 1, sx: 5}}
          justifyContent='center'
          alignItems='center'
        >
          <Videos 
            videos={videos}
            direction= 'column'
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default page