import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/np5.jpg';
import img2 from '../assets/np1.jpg';
import img3 from '../assets/np2.jpg';
import img4 from '../assets/np4.jpg';
import img5 from '../assets/5.png';
import img6 from '../assets/np3.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.x1'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to VIDEO ZONE, your one-stop destination for an immersive
            learning experience tailored for college students. Our platform goes
            beyond traditional education methods, offering a dynamic space where
            students can not only upload their educational videos but also
            engage in a personalized learning journey. Seamless Video Uploads:
            Empower your educational journey by easily uploading your video
            tutorials. Our user-friendly interface ensures a hassle-free
            experience, allowing you to share your knowledge effortlessly.
            Whether you're a student looking to contribute to the community or
            an educator eager to share your expertise, our platform provides the
            perfect space for your educational content. Secure Login for
            Personalized Learning: At VIDEO ZONE, we prioritize your privacy and
            ensure a secure login process. Once you log in, you enter a world of
            personalized learning tailored to your academic needs. Your uploaded
            videos are accessible only to you and those you choose to share them
            with, creating a secure and private learning environment. Play and
            Learn Anytime, Anywhere: Our platform's key feature is the ability
            to play uploaded videos, enabling users to learn at their own pace.
            Whether you're reviewing lecture materials, preparing for exams, or
            exploring new subjects, you have the flexibility to watch videos
            whenever and wherever it suits you. Your learning experience is no
            longer confined to the classroom; it adapts to your schedule.
            Community-driven Learning: Connect with like-minded individuals who
            share your academic interests. Engage in discussions, seek help, or
            collaborate on projects through our vibrant community. VIDEO ZONE
            fosters a sense of belonging, creating a space where students can
            support each other's educational journey. Join us at VIDEO ZONE and
            revolutionize the way you learn. Embrace a platform designed with
            you in mind where education meets innovation, and knowledge knows no
            bounds. Experience the future of learning today!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Img src={img1} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        New Way Of Learning
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Easy Learning
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Futuristic Vision
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img6} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Let's Welcome New Ways
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
