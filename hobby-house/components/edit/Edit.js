import { 
    FormControl, 
    FormLabel, 
    Input, 
    VStack, 
    Heading, 
    Text, 
    SimpleGrid, 
    GridItem, 
    Select, 
    Checkbox, 
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
            p={10} 
            spacing={10} 
            alignItems="flex-start"
        >
            <VStack spacing={3} alignItems="flex-start">
                <Heading>Edit Product</Heading>
                <Text>You can update a currently listed product here.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
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
                <GridItem colSpan={2}>
                    <Button type="submit" size="lg" w="full">Submit</Button>
                </GridItem>
            </SimpleGrid>   
        </VStack>
    );
};