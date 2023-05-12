import React, { useEffect } from 'react'
import styles from "../Styling/Admin.module.css"
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Image,
    Checkbox,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { adminloginAction } from '../Redux/AdminAuthReducer/action';
import AdminNav from '../Components/AdminNav';


const AdminLogin = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const AdminAuth = useSelector((store)=>store.AdminReducer.isAdminAuth)
    const loginFailed = useSelector((store)=>store.AdminReducer.isError)

    const HandleSignin = ()=>{
        const credentialsObj={username, password}
        if(username=="" || password==""){
            alert("Invalid credentials.");
            // return;
        }
        else{
            // alert("Login Succesfull");
            // dispatch(adminloginAction)
            // Navigate("/adminProducts")
            dispatch(adminloginAction(credentialsObj)).then(()=>Navigate("/adminProducts"))
        }
        
       
      
    }

    

    

    return (
        <div className={styles.adminDiv}>
            <AdminNav />
            <div>
                <Flex
                    align={"center"}
                    justify={"center"}
                    width={"100%"}
                    bg={useColorModeValue("gray.50", "gray.800")}
                ></Flex>

                <Flex
                    minH={"50vh"}
                    align={"center"}
                    justify={"center"}>
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                            <Heading fontSize={"4xl"}>Sign in to your account</Heading>

                        </Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            boxShadow={"lg"}
                            p={8}
                        >
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input placeholder="Enter your user name" onChange={(e)=>setUsername(e.target.value)} style={{"color":"black"}}/>
                                </FormControl>
                                <FormControl id="password" >
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input placeholder="Enter your password" type='password' onChange={(e)=>setPassword(e.target.value)} style={{"color":"black"}}/>
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}

                                            >

                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: "column", sm: "row" }}
                                        align={"start"}
                                        justify={"space-between"}
                                    >

                                    </Stack>

                                    <Button
                                        bg={"yellow.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "yellow.500",
                                        }}

                                        onClick={HandleSignin}

                                    >
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </div>
        </div>
    )
}

export default AdminLogin