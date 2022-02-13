import React from "react";
import { 
    Box,
    Container, 
    Flex,
    FormControl
  } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar";
import Edit from "../components/edit/Edit"
import { ref as storageRef, uploadBytes, getDownloadUrl } from "firebase/storage";
import { ref as databaseRef, push, set, get } from "firebase/database";
import { db, storage } from "./libs/firebase/firebaseConfig";

export default function EditProduct() {
  return (
    <Container maxW="container.xxl" p={0}>
      <Box>
        <NavBar />
      </Box>
      <Flex gap="3.5rem">
        <Sidebar />
        <Box>
          <FormControl id="productForm">
            <Edit />
          </FormControl>
        </Box>
      </Flex>
    </Container>
  )
}

document.forms["productForm"].addEventListener("submit", onAddProduct);
document.querySelector("#productImage").addEventListener("change", onImageSelect);

function onAddProduct(e) {
  e.preventDefault();
  uploadNewProduct();
}

function onImageSelect(e) {
  let file = e.target.files[0];
  document.querySelector(".display img").src = URL.createObjectURL(file);
  checkImageUpload(file);
}

async function uploadNewProduct() {
  const name = document.querySelector("#name").ariaValueMax.trim();
  const file = document.querySelector("#productImage").files[0];
  const imageRef = storageRef(storage, `images/${file.name}`);
  const dataRef = databaseRef(db, "products");
  const uploadResult = await uploadBytes(imageRef, file);
  const url = await getDownloadUrl(imageRef);
  const imagePath = uploadResult.metadata.fullPath;
  const itemRef = push(dataRef);

  set(itemRef,{
    key:itemRef.key,
    sku:`jhvr${itemRef.key}`,
    image:imagePath,
    price:1999 / 100,
    url,
    name
  })
}