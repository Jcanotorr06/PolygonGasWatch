import {Typography, Paper, Container, Grid, useMediaQuery} from '@mui/material'
import { useContext } from 'react'
import Context from './../Context';
import MUISwitch from './MUISwitch';
import { styled } from '@mui/material/styles';

const Nav = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#232425' : '#FFFFFF',
  margin: 0
})) 

const NavBar = () => {
    const {dark,setDark} = useContext(Context.ThemeContext)

    const handleThemeChange = () =>{
        setDark(!dark)
    }

    return (
        <Nav square={true} elevation={4}>
          <Container maxWidth="xl">
            <Grid container paddingY={2}>
              <Grid item container columnSpacing={4}  xs={6}>
                  <Grid item>
                      <Grid container columnSpacing={1}>
                        <Grid item>
                            <img src="/logo.svg" alt="" />
                        </Grid>
                        <Grid item>
                            <Typography fontWeight="bold" lineHeight={1.5} variant="h4">
                                Gas Watch
                            </Typography>
                        </Grid>
                      </Grid>
                  </Grid>
                  {useMediaQuery('(min-width: 1024px)') && (
                    <Grid item marginY="auto">
                        <Typography variant="body1" className="gray">
                            MATIC Gas Price Monitoring System
                        </Typography>
                    </Grid>
                  )}
              </Grid>
              <Grid item xs={6} textAlign="end" alignItems="center" justifyContent="flex-end" display="flex">
                <MUISwitch checked={dark} onChange={() => handleThemeChange()}/>
              </Grid>
            </Grid>
          </Container>
        </Nav>
    )
}

export default NavBar
