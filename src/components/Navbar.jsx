import { Grid, Link, Typography } from "@mui/material"
import './Navbar.css'
function Navbar() {
  return (
    <Grid sx={{display:{xs:'none',sm:'flex'}, justifyContent:'space-between', position:'fixed', width:'100%', zIndex:'1200',top:0,backgroundColor:'rgb(18, 18, 30)',p:3,left:0}}>
        <Grid className='slide-left'>
            <Typography variant="h4" fontWeight={'bold'}>DAVID.IO</Typography>
        </Grid>
        <Grid sx={{display:'flex',gap:4}} className='slide-right'>
            <Typography className="navList" component={Link} href='#home' sx={{textDecoration:'none',color:'white'}}>Home</Typography>
            <Typography className="navList" component={Link} href='#services' sx={{textDecoration:'none',color:'white'}}>Services</Typography>
            <Typography className="navList" component={Link} href="#resume" sx={{textDecoration:'none',color:'white'}}>Resume</Typography>
            <Typography className="navList" href='#projects' component={Link} sx={{textDecoration:'none',color:'white'}}>Projects</Typography>
            <Typography className="navList">Contact</Typography>
        </Grid>
    </Grid>
  )
}

export default Navbar
