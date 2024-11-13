import { Typography,Box } from '@mui/material'


const Foot  = () => {
  return (
    <Box sx={{
      bgcolor:"#2b3445",
      py:1.3,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
    }}>
<Typography variant="h6" sx={{
      
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"18px"
    }}>
  Designed and developed by
  <Typography variant="text" color='primary' sx={{
    fontSize:"18px",
    mx: 2,
    color:"#ff7790"

  }}>
    Amr Farhat
  </Typography>
  2023
</Typography>
    </Box>
  )
}

export default Foot;