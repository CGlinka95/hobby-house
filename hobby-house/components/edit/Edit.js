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
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
} from '@chakra-ui/react';
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import { db } from "../../pages/libs/firebase/firebaseConfig"; 

export default function Edit() {
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')

    const [value, setValue] = React.useState('0.00')

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
                <Text>You can update or delete a currently listed product here.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input type="text" required />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <NumberInput
                          onChange ={(valueString) => setValue(parse(valueString))}
                          value={format(value)}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
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
                <GridItem colSpan={1}>
                    <Button 
                        backgroundColor="#EF7B45" 
                        type="submit" 
                        size="lg" 
                        w="full"
                    >
                        Submit
                    </Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button 
                        type="submit" 
                        size="lg" 
                        w="full" 
                    >
                        Delete
                    </Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};