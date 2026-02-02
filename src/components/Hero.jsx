import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import vj1 from '../assets/vj1.png';
import './Navbar.css'
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import resume from '../assets/Vijay_Resume.pdf'
function Hero() {
  const skills = ['Frontend Developer', 'Python Developer', 'Photographer' ];

  const [text, setText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    if (charIndex < currentSkill.length) {
      const timeout = setTimeout(() => {
        setText(currentSkill.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const nextTimeout = setTimeout(() => {
        setCharIndex(0);
        setSkillIndex((skillIndex + 1) % skills.length);
        setText('');
      }, 1500);
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, skillIndex, skills]);

  return (
    <Grid id='home' sx={{minHeight:'100vh', mt: 7, display: 'flex', justifyContent:{xs:'center',sm:'space-between'},p:8,flexDirection:{xs:'column',sm:'row'} ,alignItems:'center',animation:'slideUp 0.8s ease-out forwards'}}>
      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',width:'100%' }}>
        
        <Typography variant="h3" fontWeight="bold" sx={{textAlign:{xs:'center',sm:'start'}}}>David Vijay</Typography>
        <Typography variant="h5" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          I&apos;m a <span style={{  color:'rgb(64, 235, 52)', fontWeight:'bold'}}>{text}</span>
          <span style={{ color: '#A294F9' }}>|</span> 
        </Typography>
        
        <Grid mt={2} sx={{display:'flex',gap:2,flexDirection:'column'}}>
        <Typography variant='h4' sx={{ textAlign: { xs: 'center', sm: 'left' } }}>Bringing Designs to Life with Code & Creativity</Typography>
        <Grid sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <a href={resume} download className="downloadLink">
            <button className="downloadBtn">Download Resume</button>
          </a>
</Grid>
          <Grid sx={{display:'flex', alignItems:'center',gap:2,mt:1, justifyContent:{xs:'center',sm:'flex-start'}}}>
            <Typography><a href="https://www.linkedin.com/in/david-vijay/" style={{textDecoration:'none',color:'white'}} target="_blank"><LinkedIn sx={{cursor:'pointer'}}/></a></Typography>
            <Typography><a href="https://www.instagram.com/david___vijay/" style={{textDecoration:'none',color:'white'}} target="_blank"><Instagram sx={{cursor:'pointer'}}/></a></Typography>
            <Typography><a href="https://github.com/David-Vijay" target="_blank" style={{textDecoration:'none',color:'white'}}><GitHub sx={{cursor:'pointer'}}/></a></Typography>
            <Typography><a href="https://facebook.com" target="_blank" style={{textDecoration:'none',color:'white'}}><Facebook sx={{cursor:'pointer'}}/></a></Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Box className='spinner-container'>
          <Grid className='static-image-with-rotating-border'>
            <img src={vj1} alt="" style={{width:'300px',height:'300px'}}/>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Hero;
