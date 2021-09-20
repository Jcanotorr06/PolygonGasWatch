import { Link, Typography, Box } from "@mui/material"

const Footer = () => {
    return (
        <Box marginTop={2} padding={4}>
            <Typography variant="h5" textAlign="center">
                Powered By <Link href="https://polygon.technology/">Polygon Network</Link>
            </Typography>
        </Box>
    )
}

export default Footer
