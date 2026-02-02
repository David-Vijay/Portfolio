import { Card, CardContent, Grid, ListItem, Paper, Typography } from "@mui/material"
import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Brush, CameraAlt, CodeOutlined, OndemandVideo, South, SouthEast } from "@mui/icons-material";
function Services() {
    const service = [{name:'Web Development',description:'Creating responsive, high-performance websites using modern technologies to deliver seamless user experiences across all devices',icon:<CodeOutlined/>,direction:<SouthEast/>},
        {name:'UI/UX Design',description:'Designing intuitive, user-friendly interfaces that enhance usability and create engaging digital experiences across all platforms',icon:<Brush/>, direction:<SouthEast/>},
        {name:'Photography',description:'Capturing compelling visuals that tell stories, evoke emotion, and bring moments to life through creative composition and lighting', icon:<CameraAlt/>, direction:<SouthEast/>},
        {name:'Video Editing',description:'Transforming raw footage into impactful stories with seamless cuts, effects, and pacing that captivate and engage viewers',icon:<OndemandVideo/>, direction:<SouthEast/>},
]
    const animations= ['fade-right','fade-left','fade-right','fade-left']
    useEffect(()=>{
        Aos.init( {duration:800, once:true})
    },[])
  return (
    <>
    <Grid align="center" mt={1} id='services' sx={{scrollMarginTop: '100px'}}>
    <Typography variant="h4">My <span style={{color:'rgb(64, 235, 52)'}} >Services</span></Typography>
    </Grid>
    <Grid mt={2}  spacing={2} sx={{display:'flex',gap:4,justifyContent:'center',flexWrap:"wrap"}}>
        
        {service.map((item,index)=>(
            <Card  key={index} className="card" data-aos={animations[index % animations.length]}
            data-aos-delay={index * 100} elevation={10} sx={{cursor:'pointer',width:'300px',p:'20px',backgroundColor:'rgb(37, 37, 49)',color:'rgb(224, 224, 224)',border:'1px solid transparent',transition:'all 0.3s ease-in-out','&:hover':{backgroundColor:'rgb(20, 20, 38)',border:'1px solid rgb(64, 235, 52)'}}}>
            <Grid sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography sx={{'&:hover':{color:'rgb(64, 235, 52)'}}}>{item.icon}</Typography>
                <Typography>{item.direction}</Typography>
            </Grid>
            <Typography variant="h5" mt={2} fontWeight={'bold'}>{item.name}</Typography>
            <Typography mt={2}>{item.description}</Typography>
        </Card>
        ))}
        
    </Grid>
    </>
  )
}

export default Services
