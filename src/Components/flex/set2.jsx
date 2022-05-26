import { Grid, GridItem ,Stack , Box} from '@chakra-ui/react'

export const Set2=()=>{
    return (
        <>  
         <Box>
      <Grid
  h='400px'
  templateRows='repeat([1,3], 2fr)'
 templateColumns='repeat(3, 2fr)'
  gap={4}
>
   
  <GridItem rowSpan={[1,2]} colSpan={[1,2]} bg='#a186bd' w = "100%" />
  <GridItem rowSpan={[1,3]}  bg='#f26c4f' w = "100%" />
  <GridItem rowSpan={1} colSpan={[1,2]} bg='#6dcff6'  w = "100%"/>
  </Grid>
</Box>
        </>
    )
}