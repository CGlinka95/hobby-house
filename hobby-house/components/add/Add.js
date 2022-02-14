import React from "react";
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
    Textarea,
} from '@chakra-ui/react'; 

export default function Add() {
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
                <Heading>Add Product</Heading>
                <Text>You can add a new product here.</Text>
            </VStack>
            <SimpleGrid id="productForm" columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input type="text" /*onChange={(e) => setInput(e.target.value)}*/ required />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="$" />
                            <Input type="number" placeholder="0.00" required />
                        </InputGroup>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea type="text" placeholder="Enter your product description here" required />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Image URL</FormLabel>
                        <Input type="url" variant="flushed" placeholder="http://imagelink.com" required />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Sku</FormLabel>
                        <Input type="text" variant="flushed" placeholder="Product sku identifier here" required />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button 
                        backgroundColor="#EF7B45" 
                        type="submit" 
                        size="lg" 
                        w="full"
                        // onClick={() => sendData()}
                    >
                        Add
                    </Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};