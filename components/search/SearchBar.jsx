//search feature not implemented yet. Should route to /search/[searchTerm] on pressing enter

'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
// import { withRouter } from 'next/router'
import { redirect } from 'next/navigation';
import Router, { withRouter } from 'next/router'
import { Paper, IconButton, Input } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  // let location= window.location.href
  const router = useRouter()
  const [searchTerm, setSearchTerm]= useState("")
console.log(searchTerm)
  const handleChange= (e)=>{
    setSearchTerm(e.target.value)
    
  }
  const handleSubmit= (e)=>{
    e.prevenDefault()
    router.push(`/search/${searchTerm}`)
    // if (searchTerm){
      
    //   // redirect(`/search/${searchTerm}`)
    //   Router.push({ pathname: `/search/${searchTerm}`, state: { pattern: this.state.searchText } });
    // }
  }

  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            mr: {sm: 5}
        }}
        >
            <Input
            className="search-bar"
            placeholder="Search"
            value={searchTerm}
            disableUnderline={true}
            onChange={handleChange}
            ></Input>
            <IconButton type="submit" sx={{p: '2px'}}>
                <Search />
            </IconButton>
            
    </Paper>
  )
}

export default SearchBar