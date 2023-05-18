import { Link } from 'react-router-dom'
import {useState} from 'react'
import PixIcon from '@mui/icons-material/Pix'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

type Props = {}

const Navbar = (props: Props) => {
  const {palette} = useTheme()
  const [selected, setSelected] = useState("dashboard")
  return (
    <FlexBetween mb=".25rem" p=".5rem 0" color={palette.grey[300]}>
        {/* LEFT SIDE */}
        <FlexBetween gap=".75rem">
            <PixIcon sx={{fontSize: '38px'}} />
            <Typography variant="h4" fontSize="16px">Financer</Typography>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem">
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                <Link 
                    style={{
                        color: selected === "dashboard" ? "inherit" : palette.grey[700],
                        textDecoration: 'inherit'
                    }}
                    onClick={() => setSelected("dashboard")} 
                    to="/">
                        Dashboard
                </Link>
            </Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                <Link 
                    style={{
                        color: selected === "predictions" ? "inherit" : palette.grey[700],
                        textDecoration: 'inherit'
                    }}
                    onClick={() => setSelected("predictions")} 
                    to="/predictions">
                        Predictions
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar