import { Box, Button, CardMedia, Divider, Grid, Link, Typography } from "@mui/material"
import project from '../assets/project1.jpg'
import zomozon from '../assets/zomozon.png'
import pickle from '../assets/pickle.png'
import './Resume.css'
import { useState } from "react"
function Projects() {
  const [direction, setDirection] = useState('')
  const projects =[{
    name:'Zomozon', description:'This project is a full-featured eCommerce web application that allows users to browse, search, and purchase products online. It includes user authentication, product listings with images and details, a shopping cart system, and secure order placement. The application is designed for responsiveness and provides a seamless shopping experience across devices.', techStack:['HTML5','CSS3', 'JavaScript','React JS','Django'],image:zomozon, web:'https://zomozon-13348.web.app/'
  },
  {
    name:'Red Pickle', description:'Red Pickle is a responsive, user-friendly frontend web application built to showcase and promote a modern food or product brand. The interface features clean UI components, engaging visuals, and intuitive navigation. visually appealing user experience using modern frontend technologies.', techStack:['HTML5','CSS3', 'JavaScript','React JS', 'Python', 'Django', 'MySQL'],image:pickle, web:'https://red-pickle.web.app/'
  }
]
  const [count,setCount] = useState(0)
  const handlePrevious =()=>{

    if(count==0){
      setCount(0)
    }else{
      setCount(count-1)
      setDirection('toRight')
    }
  
    
  }
  const handleNext =()=>{
    if(count<=projects.length-1){
      setCount(count+1)
      setDirection('toLeft')
    }
  }
  return (
    <Grid id='projects'sx={{scrollMarginTop: '100px'}} >
        <Typography  fontWeight={'bold'} variant="h4" align="center" mt={5}>Latest <span style={{color:'rgb(64, 235, 52)'}}>Project</span></Typography>
        <Grid container spacing={2} sx={{display:'flex',flexDirection:{xs:'column',sm:'row',md:'row'},justifyContent:'center',mt:2}}>
            <Grid size={{xs:12,sm:6, md:6}} sx={{display:'flex',flexDirection:'column',alignItems:{xs:'center',sm:'normal'},justifyContent:{xs:'center'}}}>
                <Typography variant="h1">0{count+1}</Typography>
                <Typography variant='h3'>{projects[count].name}</Typography>
                <Typography>{projects[count].description}</Typography>
                <Typography mt={2} sx={{color:'rgb(64, 235, 52)'}}>{projects[count].techStack.join(', ')}</Typography>
                <hr />
                <Grid sx={{display:'flex',gap:2}}>
                  <Button variant="contained" sx= {{fontWeight:'bold',width:{xs:'200px',sm:'300px'},backgroundColor:'rgb(64, 235, 52)',
                    color:'black',
                        '&:hover':{backgroundColor:"transparent",border:'1px solid rgb(64, 235, 52)',color:'rgb(64, 235, 52)'}
                    }} onClick={handlePrevious}>Previous</Button>
                <Button variant="contained" sx={{fontWeight:'bold',width:{xs:'200px',sm:'300px'},backgroundColor:'rgb(64, 235, 52)',
                    color:'black',
                        '&:hover':{backgroundColor:"transparent",border:'1px solid rgb(64, 235, 52)',color:'rgb(64, 235, 52)'}
                    }} onClick={handleNext} disabled={count == projects.length-1?true:false}>Next</Button>
                </Grid>
                
            </Grid>
            <Grid size={{xs:12, sm:6,md:6}}>
              <Box sx={{width:{xs:'100%',sm:'500px',md:'500px'},height:370,bgcolor:'grey',overflow:'hidden'}}>
                <a href={projects[count].web} target="_blank">
                <img src={projects[count].image} alt="" width='100%' height={370} className={`webLink ${direction}`}/>
                </a>
                
                
              </Box>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Projects
