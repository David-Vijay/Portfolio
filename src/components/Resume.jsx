import { Button, Card, Grid, Typography, Tooltip } from "@mui/material"
import './Resume.css'
import { useState } from "react"
import { Circle } from "@mui/icons-material"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3Alt, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(faHtml5, faCss3Alt, faJs, faReact, faPython, faDatabase)
function Resume() {
    const [bg, setBg] = useState(null)
    const [lable, setLable] = useState('Experience')
    const handleBtn = (index, item) => {
        setBg(index)
        setLable(item)
    }
    const data = {
        Experience: [{ company: 'Accenture ', duration: '2024- Present', role: 'Frontend Developer', description: 'something here' },
        { company: 'Atos Syntel', duration: '2022- 2023', role: 'Full Stack Web Developer', description: 'something here' },
       
        ],
        Education: [{ institution: 'Karunya Univeristy', duration: '2018- 2022', department: 'Electronics and Communications' },
        { institution: 'MGM Institutions', duration: '2016- 2018', department: 'Intermediate (MPC)' },
        { institution: 'MGM Institutions', duration: '2015- 2016', department: 'High School (SSC)' },],
        Skills: [
            {
                label: 'HTML',
                icon: (
                    <Tooltip title="HTML5" arrow>
                        <FontAwesomeIcon size="3x" icon={['fab', 'html5']} />
                    </Tooltip>
                )
            },
            {
                label: 'CSS',
                icon: (
                    <Tooltip title="CSS3" arrow>
                        <FontAwesomeIcon size="3x" icon={['fab', 'css3-alt']} />
                    </Tooltip>
                )
            },
            {
                label: 'JavaScript',
                icon: (
                    <Tooltip title="JavaScript" arrow>
                        <FontAwesomeIcon size="3x" icon={['fab', 'js']} />
                    </Tooltip>
                )
            },
            {
                label: 'React JS',
                icon: (
                    <Tooltip title="React" arrow>
                        <FontAwesomeIcon size="3x" icon={['fab', 'react']} />
                    </Tooltip>
                )
            },
            {
                label: 'Python',
                icon: (
                    <Tooltip title="Python" arrow>
                        <FontAwesomeIcon size="3x" icon={['fab', 'python']} />
                    </Tooltip>
                )
            },
            {
                label: 'MySQL',
                icon: (
                    <Tooltip title="MySQL" arrow>
                        <FontAwesomeIcon size="3x" icon={['fas', 'database']} />
                    </Tooltip>
                )
            }
        ]
    }

    const lables = ['Experience', 'Education', 'Skills', 'About Me']
    return (
        <Grid container mt={10} spacing={{xs:1,sm:2,md:2}}  sx={{ flexDirection: { xs: 'column', sm: 'row' },alignItems:'center'}}>
            <Grid size={{ xs: 12, sm: 4 }}>
                <Typography align="center" mb={2} id='resume' variant="h4" fontWeight={'bold'} sx={{scrollMarginTop: '100px'}}>Why Hire Me?</Typography>
               
                <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                    {lables.map((label, index) => (
                        <Button onClick={() => handleBtn(index, label)}
                            key={label} 
                            variant={'text'}
                            sx={{
                                border: '1px solid',
                                borderColor: bg === index ? 'rgb(64, 235, 52)' : 'transparent',
                                color: 'rgb(64, 235, 52)',
                                mt: 2, backgroundColor: 'rgba(200, 208, 244, 0.1)',
                                '&:hover': {
                                    backgroundColor: 'rgba(104, 104, 104, 0.1)',
                                    borderColor: 'rgb(64, 235, 52)',
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Grid>
            </Grid>
            {/* rightside of resume */}
            <Grid size={{ xs: 12, sm: 8 }} color={'white'} mt={2} >
                <Typography variant="h4" align='center' fontWeight={'bold'}>My <span style={{ color: 'rgb(64, 235, 52)' }}>{lable ? lable : 'Experience'}</span></Typography>
                {/* <Typography>{lable == 'About Me' && "I’m a passionate web developer with a strong foundation in front-end and back-end technologies. I enjoy turning ideas into responsive, user-friendly applications and continuously strive to improve my skills and deliver clean, efficient code."}</Typography> */}
                <Grid sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
                    {lable == 'Experience' && data.Experience.map((item, index) => (
                    
                        <Card key={index}
                            elevation={10} sx={{ cursor: 'pointer', width: '300px', p: '20px', backgroundColor: 'rgb(37, 37, 49)', color: 'rgb(224, 224, 224)', border: '1px solid transparent', transition: 'all 0.3s ease-in-out', '&:hover': { backgroundColor: 'rgb(20, 20, 38)', border: '1px solid rgb(64, 235, 52)' } }}>
                            {lable === 'Experience' && (
                                <>
                                    <Typography sx={{ color: 'rgb(64, 235, 52)' }}>{item.duration}</Typography>
                                    <Typography variant="h5" mt={2} fontWeight={'bold'}>{item.role}</Typography>
                                    <Typography mt={2}><Circle htmlColor="green" sx={{ fontSize: '12px' }} /> {item.company}</Typography>
                                </>
                            )}

                        </Card>
                    ))}
                    <Grid sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2, flexDirection:{xs:'column',sm:'row'} }}>
                    {lable == 'Education' && data.Education.map((item, index) => (
                        <Card
                            elevation={10} sx={{ cursor: 'pointer', width: '300px', p: '20px', backgroundColor: 'rgb(37, 37, 49)', color: 'rgb(224, 224, 224)', border: '1px solid transparent', transition: 'all 0.3s ease-in-out', '&:hover': { backgroundColor: 'rgb(20, 20, 38)', border: '1px solid rgb(64, 235, 52)' } }}>

                            <>
                                <Typography sx={{ color: 'rgb(64, 235, 52)' }}>{item.duration}</Typography>
                                <Typography variant="h5" mt={2} fontWeight={'bold'}>{item.institution}</Typography>
                                <Typography mt={2}><Circle htmlColor="green" sx={{ fontSize: '12px' }} /> {item.department}</Typography>
                            </>
                        </Card>
                    ))}
                    </Grid>
                    

                    {lable === 'Skills' && (
                        <Grid container justifyContent="center" mt={2}>
                            <Grid container spacing={2} maxWidth="1000px" justifyContent="center">
                                {data.Skills.map((skill, index) => (
                                    <Grid xs={12} sm={6} md={3} key={index}>
                                        <Card
                                            elevation={10}
                                            sx={{
                                                cursor: 'pointer',
                                                p: '20px',
                                                backgroundColor: 'rgb(37, 37, 49)',
                                                color: 'rgb(224, 224, 224)',
                                                border: '1px solid transparent',
                                                transition: 'all 0.3s ease-in-out',
                                                '&:hover': {
                                                    backgroundColor: 'rgb(20, 20, 38)',
                                                    border: '1px solid rgb(64, 235, 52)',
                                                },
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography variant="h5" sx={{ color: 'rgb(64, 235, 52)' }}>
                                                {skill.icon && (
                                                    <span style={{ marginRight: 8 }}>{skill.icon}</span>
                                                )}

                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}

                            </Grid>
                        </Grid>
                    )}
                    {lable == 'About Me' && (
                        <Card
                            elevation={10}
                            sx={{
                                cursor: 'pointer',
                                p: '20px',
                                backgroundColor: 'rgb(37, 37, 49)',
                                color: 'rgb(224, 224, 224)',
                                border: '1px solid transparent',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: 'rgb(20, 20, 38)',
                                    border: '1px solid rgb(64, 235, 52)',
                                }
                            }}
                        >
                            <Grid sx={{ display: 'flex', justifyContent: 'flex-start', gap: 3,flexDirection:{xs:'column',sm:'row'}}}>
                                <Grid>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Name</span> Vijaykumar G
                                    </Typography>
                                    
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Experience</span> 2 Years
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Status</span> Single
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Phone</span> 7893405285
                                    </Typography>
                                </Grid>

                                <Grid>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Gender</span> Male
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>City</span> Bangalore
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Full Time</span> Available
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Email</span> davidvijayg.vijay@gmail.com
                                    </Typography>
                                </Grid>

                                <Grid>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Age</span> 24 Years old
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Nationality</span> Indian
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Freelance</span> Available
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        <span style={{ color: 'rgb(64, 235, 52)' }}>Languages</span> English, Telugu, Tamil
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Card>
                    )}
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Resume
