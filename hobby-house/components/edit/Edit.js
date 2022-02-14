import React, { useState, useEffect }  from "react";
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
    Flex
} from '@chakra-ui/react';
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import { db } from "../../pages/libs/firebase/firebaseConfig"; 

export default function Edit() {
    // const [input, setInput] = useState("")
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection()
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot(snapshot => {
    //             setProducts(snapshot.docs.map(doc => doc.data().product))
    //         })
    // })

    // const sendData = () => {
    //     try {
    //         firebase
    //             .firestore()
    //             .collection() //collection sent to firestore
    //             .doc(input) //set collection name to input to easily delete later
    //             .set({
    //                 product: input,
    //                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //             })
    //             .then(console.log("The product was successfully sent to cloud firestore."))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const deleteProduct = (p) => {
    //     try {
    //         firebase
    //             .firestore()
    //             .collection()
    //             .doc(p)
    //             .delete()
    //             .then(console.log("The product was successfully deleted."))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
                <GridItem colSpan={1}>
                    <Button 
                        backgroundColor="#EF7B45" 
                        type="submit" 
                        size="lg" 
                        w="full"
                        // onClick={() => sendData()}
                    >
                        Submit
                    </Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button 
                        type="submit" 
                        size="lg" 
                        w="full"
                        // onClick={() => deleteProduct(p)} 
                    >
                        Delete
                    </Button>
                </GridItem>
            </SimpleGrid>

            {/* {products.map((p, i) => {
                return (
                    <>
                        <Flex
                            key={i}
                            w="100%"
                            p={5}
                            my={2}
                            align="center"
                            borderRadius={5}
                            justifyContent="space-between"
                        >
                            <Text fontSize="xl" mr={4}>{i + 1}.</Text>
                            <Text>{p}</Text>
                        </Flex>
                    </>
                )
            })} */}
        </VStack>
    );
};