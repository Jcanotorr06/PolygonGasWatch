import { Container, Typography, ToggleButton, ToggleButtonGroup, TextField, Box, Button, Stack} from "@mui/material"
import Section from "./Section"
import { useState, MouseEvent } from "react"
import PriceBox from "./PriceBox"

const Calculator = () => {
    const [preset, setPreset] = useState<string>('fast')

    const handlePreset = (e: MouseEvent<HTMLElement>, newPreset: string) => {
        setPreset(newPreset)
    }

    return (
        <Container maxWidth="xl">
            <Section textAlign="center" padding={6}>
                <Typography variant="h5" textAlign="center" marginBottom={3}>Transaction Gas Fee Calculator</Typography>
                <ToggleButtonGroup value={preset} exclusive color="primary" size="large" onChange={handlePreset}>
                        <ToggleButton value="fastest">Fastest</ToggleButton>
                        <ToggleButton value="fast">Fast</ToggleButton>
                        <ToggleButton value="standard">Standard</ToggleButton>
                        <ToggleButton value="slow">Slow</ToggleButton>
                        <ToggleButton value="custom">Custom</ToggleButton>
                </ToggleButtonGroup>
                <Box marginY={3} maxWidth={{xs: '100%', lg: '75%'}} marginX="auto">
                    <Box marginY={2}>
                        <TextField disabled={preset !== 'custom'} label="Gas Price (Gwei)" fullWidth/>
                    </Box>
                    <Box marginY={2}>
                        <TextField label="Gas Used" fullWidth/>
                    </Box>
                    <Box marginY={2}>
                        <Button variant="contained" fullWidth size="large">Calculate</Button>
                    </Box>
                </Box>
                <Box marginTop={8}>
                    <Typography variant="h5" textAlign="center" marginBottom={3}>Calculated Transaction Fee</Typography>
                </Box>
                <Stack direction={{xs: 'column', lg: 'row'}} marginY={2} spacing={4} justifyContent="center">
                    <PriceBox borderRadius={{xs: 0, lg: '10%'}} borderColor="#8247E5" display="flex" flexDirection={{xs: 'row', lg: 'column'}} justifyContent={{xs: 'space-between', lg: 'space-around'}} width={{xs: 'initial', lg: "20%"}} height={{xs: 50, lg: 200}}>
                        <Typography variant="h4">
                            1.00
                        </Typography>
                        <Typography variant="h3" color="#8247E5">
                            MATIC
                        </Typography>
                    </PriceBox>
                    <PriceBox borderRadius={{xs: 0, lg: '10%'}} borderColor="green" display="flex" alignItems="center" flexDirection={{xs: 'row', lg: 'column'}} justifyContent={{xs: 'space-between', lg: 'space-around'}} width={{xs: 'initial', lg: "20%"}} height={{xs: 50, lg: 200}}>
                        <Typography variant="h4">
                            $1.35
                        </Typography>
                        <Typography variant="h3" color="green">
                            USD
                        </Typography>
                    </PriceBox>
                </Stack>
            </Section>
        </Container>
    )
}

export default Calculator
