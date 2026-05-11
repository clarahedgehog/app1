import { cyan } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const color = cyan[700];

const Footer = () => {
  return (
    <AppBar sx={{
      bgcolor: color,
    }}
      position="static" >
      <Typography variant="h6" component="div"
        sx={{
          p: "16px",
          textAlign: "center"
        }}>
        &copy;Clara2026
      </Typography>
    </AppBar>
  )
}

export default Footer
