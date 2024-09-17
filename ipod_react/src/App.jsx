import { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { Button } from '@mui/material';
import {Home} from './components/Home'
function App() {

  return (
    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
        <Paper elevation={3} sx={{borderRadius:"15px", display:"flex",flexDirection:"column", alignItems:"center", backgroundColor:"skyblue",width:"250px", height:"400px", minHeight:"300px", minWidth:"200px"}}>
            <Box sx={{width:"95%", height:"50%", border:"2px solid black", margin:"4px", borderRadius:"5px", backgroundColor:"yellow"}}>
                <Home/>
            </Box>
            <Box sx={{width:"100%", height:"50%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", position:"relative"}}>
              <Box sx={{height:"100%", width:"80%", borderRadius:"50%", backgroundColor:"blue",position:"absolute", zIndex:1}}>
                 <Box sx={{position:"absolute", left:"5%", top:"45%"}}>
                     <FastRewindIcon sx={{width:"30px", height:"30px"}}/>
                 </Box>
                 <Box sx={{position:"absolute", left:"38%", top:"-3%"}}>
                      <h3>Menu</h3>
                 </Box>
                 <Box sx={{position:"absolute", right:"5%", top:"45%"}}>
                    <FastForwardIcon sx={{width:"30px", height:"30px"}}/>
                 </Box>
                 <Box sx={{position:"absolute", left:"38%", bottom:"-3%"}}>
                      <h3>play</h3>
                 </Box>
              </Box>
              <Button sx={{height:"50%", width:"40%", borderRadius:"50%", backgroundColor:"red", zIndex:10, position:"absolute", top:"25%"}}>

              </Button>
            </Box>
        </Paper>
    </Box>
  )
}

export default App
