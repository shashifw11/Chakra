import { Grid, GridItem ,Stack , Box} from '@chakra-ui/react'

export const Set3=()=>{
    return (
        <>  
         <Box>
      <Grid
  h='400px'
  templateRows='repeat(3, 2fr)'
 templateColumns='repeat(4, 2fr)'
  gap={4}
>
  <GridItem rowSpan={1} colSpan={2}  bg='#ffc83c'  w = "100%" />
  <GridItem rowSpan={1} colSpan={2}  bg='#ffc83c'  w = "100%" />
  <GridItem rowSpan={1} colSpan={4}  bg='#f26c4f'  w = "100%"/>
  <GridItem rowSpan={1} colSpan={1}  bg='#6e7dff'  w = "100%" />
  <GridItem rowSpan={1} colSpan={1}  bg='#6e7dff'  w = "100%" />
  <GridItem rowSpan={[0,1]} colSpan={1}  bg='#6e7dff'  w = "100%"/>
  </Grid>
</Box>
        </>
    )
}