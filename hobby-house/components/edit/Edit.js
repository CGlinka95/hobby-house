import { 
    FormControl, 
    FormLabel, 
    Input, 
    VStack, 
    Heading, 
    Text, 
    SimpleGrid, 
    GridItem,  
    Button, 
    InputGroup,
    InputLeftAddon,
    Textarea
} from '@chakra-ui/react';

export default function Edit() {
    return (
        <VStack 
            w="full" 
            h="full"
            zIndex="hide" 
            p={10} 
            spacing={10} 
            alignItems="flex-start"
        >
            <VStack spacing={3} alignItems="flex-start">
                <Heading>Edit Product</Heading>
                <Text>You can update a currently listed product here.</Text>
            </VStack>
            <SimpleGrid id="productForm" columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="$" />
                            <Input type="number" />
                        </InputGroup>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder="Enter your product description here" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Image URL</FormLabel>
                        <Input type="url" variant="flushed" placeholder="http://imagelink.com" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button backgroundColor="#EF7B45" type="submit" size="lg" w="full">Submit</Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button type="submit" size="lg" w="full">Delete</Button>
                </GridItem>
            </SimpleGrid>   
        </VStack>
    );
};