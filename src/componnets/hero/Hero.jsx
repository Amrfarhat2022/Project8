import { Container, Box, Typography, Stack, Link, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './slider.css';
import { useTheme } from '@emotion/react';
import Hero2 from './Hero2';

const myslider=[
  {link: "src\images\banner-15.jpg", text: "MEN"},
  {link: "src\images\banner-25.jpg", text: "WOMAN"},
]

function Hero() {
  const theme = useTheme()
  return (
    <Container>

      <Box sx={{
      display: "flex",
      mt: 2,
      alignItems: "center",
      gap: 4,
    }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
        
        >
          {myslider.map((item) => { 
            return(
              <SwiperSlide>
              <img src="src\images\banner-15.jpg" alt="" />
              <Box sx={{
                [theme.breakpoints.up('md')]: {
                  position: "absolute",
                  left: "10%",
                  textAlign: "left",
                },
                [theme.breakpoints.down('md')]: {
                  pt: 5,
                  pb: 5,
                },
              }}>
                <Typography variant='h5' sx={{
                  color: "red"
                }}>
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography variant='h5' sx={{
                  color: "black",
                  my: 1,
                }}>
                  {item.text}
                </Typography>
                <Stack direction={"row"} alignItems={"center"} sx={{
                  justifyContent: "center"
                }}>
                  <Typography variant="h4" sx={{
                    color: "black",
                    mr: 1,
                  }}>
                    SALE UP TO
                  </Typography>
                  <Typography variant="h4" sx={{
                    color: "red"
        
                  }}>
                    30% OFF
                  </Typography>
                </Stack>
                <Typography variant='body1' sx={{
                  color: "#000",
                  fontWeight: 300,
                  my: 1,
        
                }}>
                  Get Free Shipping orders over 150 egy
                </Typography>
                <Button sx={{
                  backgroundColor: "#222",
                  px: 5,
                  my: 2,
                  color: "#fff",
                  borderRadius: "1px",
                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  ":hover": { bgcolor: "#151515" }
                }}>
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
            )
           })}
         
        
        
        </Swiper>
        
        
        <Box sx={{
          display: { xs: "none", md: "block", minWidth: "26.6%" }
        }}>
          <Box sx={{
            position: "relative",
          }}>
            <img width={"100%"} src="src\images\banner-17.jpg" alt="" />
            <Stack sx={{
              position: "absolute",
        
              top: "50%",
              transform: "translateY(-50%)",
              left: "33px"
            }}>
              <Typography variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}>
                New Arrivals
              </Typography>
              <Typography variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}>
                Summer
              </Typography>
              <Typography>
                <Link href="#" sx={{
                  color: "black",
                  fontSize: "13px",
                  color: "#2B3445",
                  ":hover": { cursor: "pointer", color: "red" },
                  gap: "5px",
                  display: "flex",
                  alignItems: "center"
                }}
                >
                  shop now
                  <ArrowForwardIcon sx={{
                    fontSize: "12px",
                    color: "#2B3445",
                  }} />
                </Link>
        
              </Typography>
            </Stack>
          </Box>
        
        
          <Box sx={{
            position: "relative",
          }}>
            <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
            <Stack sx={{
              position: "absolute",
        
              top: "50%",
              transform: "translateY(-50%)",
              left: "33px"
            }}>
              <Typography variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}>
                New Arrivals
              </Typography>
              <Typography variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}>
                Summer
              </Typography>
              <Typography>
                <Link href="#" sx={{
                  color: "black",
                  fontSize: "13px",
                  color: "#2B3445",
                  ":hover": { cursor: "pointer", color: "red" },
                  gap: "5px",
                  display: "flex",
                  alignItems: "center"
                }}
                >
                  shop now
                  <ArrowForwardIcon sx={{
                    fontSize: "12px",
                    color: "#2B3445",
                  }} />
                </Link>
        
              </Typography>
            </Stack>
          </Box>
        
        </Box>
      </Box>
      <Hero2/>

    </Container>
  )
}

export default Hero