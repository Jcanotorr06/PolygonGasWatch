import { Container, Typography, Box, Stack, Link } from '@mui/material'
import PriceBox from './PriceBox'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState, useEffect } from 'react'
import Context from '../Context'

const GasPrices = () => {

    const {gasData} = useContext(Context.GasContext)
    const [time, setTime] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(time === 100){
                setTime(0)
            }
            else{
                setTime(t => t+11.1111111111)
            }
        }, 1000)

        return () =>clearInterval(interval)
    }, [time])

    return (
        <Container maxWidth="xl">
            <Typography textAlign="center" variant="h5" marginTop={8}>
                Gas Price(Gwei)
            </Typography>
            <Typography textAlign="center" variant="subtitle1" color="#9C9C9C" marginBottom={3}>
                Based On Data Obtained From Polygon’s API
            </Typography>
            <Stack  spacing={2} justifyContent="space-around" direction={{xs: 'column', md: 'row'}} >
                <PriceBox spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#B9B9B9' width={{md: "100%"}} borderRadius={{md: "10%"}} height={{xs: 50, md: 250}}>
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <Box color="#00AC26" padding="0.5rem" marginRight="0.5rem" bgcolor="rgba(0, 172, 38, 0.2)" display="inline-block" borderRadius="100%" >
                            <FontAwesomeIcon icon={faRocket} fixedWidth/>
                        </Box>
                        <Typography variant="h6" fontWeight={500}>
                            Fastest
                        </Typography>
                    </Box>
                    <Typography color="#00AC26" variant="h3" fontWeight={500} textAlign="center">
                        {gasData.fastest.toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle1" color="#9C9C9C">
                        ${(((21000*gasData.fastest)/1000000000)*gasData.price).toFixed(6)} | ~15 Seconds
                    </Typography>
                </PriceBox>
                
                <PriceBox spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#B9B9B9' width={{md: "100%"}} borderRadius={{md: "10%"}} height={{xs: 50, md: 250}}>
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <Box color="#00AC26" padding="0.5rem" marginRight="0.5rem" bgcolor="rgba(0, 172, 38, 0.2)" display="inline-block" borderRadius="100%" >
                            <FontAwesomeIcon icon={faRocket} fixedWidth/>
                        </Box>
                        <Typography variant="h6" fontWeight={500}>
                            Fast
                        </Typography>
                    </Box>
                    <Typography color="#00AC26" variant="h3" fontWeight={500} textAlign="center">
                        {gasData.fast.toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle1" color="#9C9C9C">
                        ${(((21000*gasData.fast)/1000000000)*gasData.price).toFixed(6)} | ~15 Seconds
                    </Typography>
                </PriceBox>
                <PriceBox spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#B9B9B9' width={{md: "100%"}} borderRadius={{md: "10%"}} height={{xs: 50, md: 250}}>
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <Box color="#00AC26" padding="0.5rem" marginRight="0.5rem" bgcolor="rgba(0, 172, 38, 0.2)" display="inline-block" borderRadius="100%" >
                            <FontAwesomeIcon icon={faRocket} fixedWidth/>
                        </Box>
                        <Typography variant="h6" fontWeight={500}>
                            Standard
                        </Typography>
                    </Box>
                    <Typography color="#00AC26" variant="h3" fontWeight={500} textAlign="center">
                        {gasData.standard.toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle1" color="#9C9C9C">
                        ${(((21000*gasData.standard)/1000000000)*gasData.price).toFixed(6)} | ~15 Seconds
                    </Typography>
                </PriceBox>
                <PriceBox spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#B9B9B9' width={{md: "100%"}} borderRadius={{md: "10%"}} height={{xs: 50, md: 250}}>
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <Box color="#00AC26" padding="0.5rem" marginRight="0.5rem" bgcolor="rgba(0, 172, 38, 0.2)" display="inline-block" borderRadius="100%" >
                            <FontAwesomeIcon icon={faRocket} fixedWidth/>
                        </Box>
                        <Typography variant="h6" fontWeight={500}>
                            Slow
                        </Typography>
                    </Box>
                    <Typography color="#00AC26" variant="h3" fontWeight={500} textAlign="center">
                        {gasData.safeLow.toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle1" color="#9C9C9C">
                        ${(((21000*gasData.safeLow)/1000000000)*gasData.price).toFixed(6)} | ~15 Seconds
                    </Typography>
                </PriceBox>

            </Stack>
            <Box justifyContent="space-between" display="flex" marginTop={2}>
                <Typography variant="subtitle1">
                    MATIC: ${gasData.price.toFixed(2)}
                </Typography>
                <Link href="https://polygonscan.com/apis">
                    Polygon API
                </Link>
            </Box>
            <Box marginTop={2}>
                <Typography textAlign="center" variant="subtitle1" color="#9C9C9C" >Updates Every <strong>5 Seconds</strong></Typography>
            </Box>
        </Container>
    )
}

export default GasPrices
