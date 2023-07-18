import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import Link from "next/link"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const VideoCard = ( {video: {id: {videoId},
snippet}} ) => {
  return (
    <Card 
        sx={{ width: { xs: '95vw', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: '5px',
        }}>
    <Link 
        href={videoId ? `/video/${videoId}` : "/error" }
    >
      <CardMedia image={snippet?.thumbnails?.high?.url || <Skeleton baseColor="gray" count={5}/>} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link 
        href={videoId ? `/video/${videoId}` : "/error" } 
        >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || <Skeleton baseColor="gray"/>}
        </Typography>
      </Link>
      <Link 
        href={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/error"} 
        >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || <Skeleton baseColor="gray"/>}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
      <Typography variant="subtitle2" color="gray">
        Published on: {" "}
          {snippet?.publishedAt || <Skeleton baseColor="gray"/>}
        </Typography>
    </CardContent>
  </Card>
  )
}

export default VideoCard