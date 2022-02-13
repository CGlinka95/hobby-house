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
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={product.imageUrl} alt={product.imageAlt} />
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
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
          >
            {product.description}
          </Box>
          <Box>
            {product.formattedPrice}
          </Box>
          <Box ml="19rem">
            <NextLink href='/editproduct' passHref>
              <Link fontSize="sm">Edit</Link>
            </NextLink>   
          </Box>
        </Box>
      </Box>
    )
}