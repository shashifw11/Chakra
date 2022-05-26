import { Box } from '@chakra-ui/react'
import {useState} from "react" ; 
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import {Container,Flex} from '@chakra-ui/react'
import {Grid,GridItem,SimpleGrid} from '@chakra-ui/react'
export const Set1=()=>{ 

   const [shrink , setShrink] = useState(false) ; 
    return (
   <>
<Stack  
     spacing='0px' 
      w= {["100%"]}
      // border = "1px solid red"
     direction = {["column" , "row"]}>
  
         <Center color = "white" w='25%' h='400px' bg='#0072bb'>
              NAV
         </Center>
         <Center color = "white" w='50%' h='400px' bg='#f8931d'>
              CONTENT
         </Center>
         <Center  color = "white" w='25%' h='400px' bg='#ee1c25'>
              WIDGET
        </Center>
     
</Stack> 

{/* <Stack>
   <SimpleGrid  spacing = {"0px"} columns = {{sm : 1,md : 3,}}>
   <Box   h = "300" bg="#0072bb"></Box>
   <Box w = "200%" h = "300" bg="#f8931d"></Box>
   <Box   h = "300" bg="#ee1c25"></Box>
   </SimpleGrid>
</Stack> */}

{/* <Stack  direction = {["row" , "columns"]}>
     <Grid columns = {{sm : 1,md : 3,}} templateColumns = "1fr 2fr 1fr">
     
          <GridItem w = "100%" h="300" bg = "#0072bb"/>
          <GridItem w = "100%" h="300" bg = "#f8931d"/>
          <GridItem w = "100%" h="300" bg = "#ee1c25"/>
     
     </Grid>
</Stack> */}

</>
    )
}