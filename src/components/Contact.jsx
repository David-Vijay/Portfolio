import { CallEndOutlined, CallRounded, Email } from "@mui/icons-material"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"

function Contact() {
    return (
        <Grid sx={{ display: 'flex', gap: 2, mt: 5, flexDirection:{xs:'column',sm:'row',md:'row'} }} container >
            <Grid size={{xs:12,sm:5}}>
                <Typography variant="h3" fontWeight={'bold'} sx={{textAlign:{xs:'center',sm:'start'}}}>Let's Work Together</Typography>
                <Typography>Ready to team up? Reach out</Typography>
                <Grid sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                    <Grid sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="contained" sx={{ backgroundColor: 'rgba(111, 122, 111, 0.61)', color: 'GrayText', '&:hover': { backgroundColor: '#f0f0f0', }, }}><CallRounded sx={{ color: 'rgb(64, 235, 52)' }} /></Button>
                        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography color="rgb(64, 235, 52)">Phone</Typography>
                            <Typography>+917893405285</Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button variant="contained" sx={{ backgroundColor: 'rgba(111, 122, 111, 0.61)', color: 'GrayText', '&:hover': { backgroundColor: '#f0f0f0', }, }}><Email sx={{ color: 'rgb(64, 235, 52)' }} /></Button>
                        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography color="rgb(64, 235, 52)">Email</Typography>
                            <Typography>davidvijayg.vijay@gmail.com</Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button variant="contained" sx={{ backgroundColor: 'rgba(111, 122, 111, 0.61)', color: 'GrayText', '&:hover': { backgroundColor: '#f0f0f0', }, }}><CallRounded sx={{ color: 'rgb(64, 235, 52)' }} /></Button>
                        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography color="rgb(64, 235, 52)">Address</Typography>
                            <Typography>CMR Studio Rooms, Multiplex, Bangalore</Typography>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
            {/* right side */}
            <Grid size={{xs:12,sm:6}} bgcolor={'rgba(114, 117, 114, 0.32)'} sx={{ borderRadius: '15px',p:{xs:2,sm:1} }}>
                <Typography align="center" variant="h4">Contact <span style={{ color: 'rgb(64, 235, 52)' }}>Me</span></Typography>

                <form style={{ display: 'flex', justifyContent: 'center', gap: '10px',marginTop:'10px' }}>
                    <Grid align={'center'}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12,sm:6}}>
                            <TextField fullWidth placeholder="Full Name" sx={{
                                '& label.Mui-focused': {
                                    color: 'rgb(64, 235, 52)',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(64, 235, 52)',
                                    },
                                }, backgroundColor: 'rgb(18, 18, 30)', '& .MuiInputBase-input': {
                                    color: 'white',
                                }, borderRadius: '5px'
                            }} />
                        </Grid>

                        <Grid size={{xs:12,sm:6}}>
                            <TextField fullWidth placeholder="Email Address" sx={{
                                '& label.Mui-focused': {
                                    color: 'rgb(64, 235, 52)',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(64, 235, 52)',
                                    },
                                }, backgroundColor: 'rgb(18, 18, 30)', '& .MuiInputBase-input': {
                                    color: 'white',
                                }, borderRadius: '5px'
                            }} />
                        </Grid>
                        
                    </Grid>
                    <Grid>
                        <TextField placeholder="Your Message" fullWidth multiline rows={4} margin="normal" sx={{
                                '& label.Mui-focused': {
                                    color: 'rgb(64, 235, 52)',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(64, 235, 52)',
                                    },
                                }, backgroundColor: 'rgb(18, 18, 30)', '& .MuiInputBase-input': {
                                    color: 'white',
                                }, borderRadius: '5px'
                            }}  />
                    </Grid>
                    <Button variant="contained" sx={{width:'300px',backgroundColor:'rgb(64, 235, 52)',
                    color:'black',
                        '&:hover':{backgroundColor:"transparent",border:'1px solid rgb(64, 235, 52)',color:'rgb(64, 235, 52)'}
                    }} >Submit</Button>
                </Grid>



                </form>



            </Grid>
        </Grid>
    )
}

export default Contact
