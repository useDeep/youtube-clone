import { Box, CardContent, CardMedia, Typography} from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ChannelCard = ( {channelDetail, marginTop} ) => {
  
  return (
    <Box 
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop
      }}>
        <Link href={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff'
            }}
            >
              <CardMedia 
                image={channelDetail?.snippet?.thumbnails?.high?.url || <Skeleton baseColor="gray" borderRadius= {100}/>}
                alt= {channelDetail?.snippet?.title}
                sx={{
                  borderRadius: '100px',
                  height: '180px',
                  width: '180px',
                  mb: 2,
                  border: '1px solid #e3e3e3'
                }}
                />
                <Typography
                  variant='h6'
                  >
                    {channelDetail?.snippet?.title}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount &&
                  <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() }{" "}Subscribers
                  </Typography>
                }
          </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard