'use client'
import Navbar from '../components/navbar/Navbar'
import { Box } from '@mui/material'
import './globals.css'

export const metadata = {
  title: 'YouTube Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      /> */}

      <body>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        {children}
      </Box>
        </body>
    </html>
  )
}