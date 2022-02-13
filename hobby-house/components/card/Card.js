import { 
    Box,
    Image,
    Badge,
    Link
} from "@chakra-ui/react"
import NextLink from 'next/link';

export default function Card() {
    const product = {
      imageUrl: 'https://craftscapades.files.wordpress.com/2016/02/kirby_front.jpg',
      imageAlt: 'Handmade crochet of Kirby sitting on a star',
      name: 'Kirby Stuffie',
      description: 'Crocheted cotton Kirby stuffie with wool filling sitting on a star.',
      formattedPrice: '$19.99',
    }
    
    return (
      <Box 
        maxW="xs" 
        borderWidth='1px' 
        borderRadius='lg' 
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)" 
        overflow='hidden'
      >
          <Image src={product.imageUrl} alt={product.imageAlt} />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme="green">
                New
              </Badge>
              <Box
                fontWeight='bold'
                letterSpacing='wide'
                fontSize='md'
                textTransform='uppercase'
                ml='2'
              >
                {product.name}
              </Box>
            </Box>
            <Box
              mt='1'
              fontWeight='semibold'
              lineHeight='tight'
              color="gray.600"
            >
              {product.description}
            </Box>
            <Box color="#D84727">
              {product.formattedPrice}
            </Box>
            <Box ml="15rem">
              <NextLink href='/editproduct' passHref>
                <Link fontSize="sm">Edit</Link>
              </NextLink>   
            </Box>
          </Box>
      </Box>
    )
}