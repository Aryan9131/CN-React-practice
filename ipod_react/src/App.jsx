import { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {

  return (
    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
        <Paper elevation={3} sx={{borderRadius:"15px", display:"flex",flexDirection:"column", alignItems:"center", backgroundColor:"skyblue",width:"250px", height:"400px", minHeight:"300px", minWidth:"200px"}}>
            <Box sx={{width:"100%", height:"50%", border:"2px solid black", margin:"4px", borderRadius:"5px"}}>

            </Box>
            <Box sx={{width:"100%", height:"50%"}}>

            </Box>
        </Paper>
    </Box>
  )
}

export default App
