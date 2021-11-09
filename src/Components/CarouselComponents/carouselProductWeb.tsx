import React from 'react';
import { Box, IconButton, useBreakpointValue , Text, Flex,Heading} from '@chakra-ui/react';
import Slider from 'react-slick';
import { cards } from './carouselcontent';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CarouselProductWeb() {
  const [slider, setSlider] = React.useState(null);

  return (
    <Box
      position={'relative'}
      height={'350px'}
      width={'100%'}
      overflow={'hidden'}>
        
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      <Slider {...settings} ref={(slider:any) => setSlider(slider)}>
        {cards.map((elem) => (
            <Box
            key={elem.id}
            height={'350px'}
            position="relative"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage={`url(${elem.image})`}
            
         
          >
          <Flex w="50%" marginLeft={{base:5, md:4, lg:3}} height={"100%"}justifyContent={"center"} alignItems={"center"}>
          <Heading as="h4" size="xl" boxShadow={"2px #ccc"} color="whiteAlpha.800">
           {elem.title}
          </Heading>
          
          </Flex>
         
          </Box>  
        
        ))}
      </Slider>
    </Box>
  );
}
