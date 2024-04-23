// Personal website for James Madison
import { Box, Flex, VStack, Text, Image, Input, Textarea, Button, Link, Container, Heading } from "@chakra-ui/react";
import { FaEnvelope, FaUserAlt, FaImages, FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Flex align="center">
          <FaUserAlt />
          <Text ml={2}>James Madison</Text>
        </Flex>
        <Box>
          <Link href="#home" p={2}>
            <FaHome /> Home
          </Link>
          <Link href="#gallery" p={2}>
            <FaImages /> Gallery
          </Link>
          <Link href="#contact" p={2}>
            <FaEnvelope /> Contact
          </Link>
        </Box>
      </Flex>

      <Container maxW="container.md" pt={10} id="home">
        <Heading as="h1" mb={4}>
          James Madison
        </Heading>
        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTM4NTc4MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mb={4} />
        <Text fontSize="lg">James Madison is a professional with over 20 years of experience in the industry. He has contributed to numerous projects that have significantly impacted the tech landscape. James is known for his strategic thinking and exceptional leadership qualities.</Text>
      </Container>

      <Container maxW="container.md" pt={10} id="gallery">
        <Heading as="h2" mb={4}>
          Gallery
        </Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9qZWN0fGVufDB8fHx8MTcxMzg1NzgyMnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" m={2} />
          <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9ufGVufDB8fHx8MTcxMzg1NzgyM3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" m={2} />
          <Image src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3MTM4NTc4MjN8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" m={2} />
        </Flex>
      </Container>

      <Container maxW="container.md" pt={10} pb={10} id="contact">
        <Heading as="h2" mb={4}>
          Contact Me
        </Heading>
        <VStack spacing={5}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
