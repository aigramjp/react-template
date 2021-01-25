import React from 'react'
import { Grid, Button } from '@material-ui/core'

export default React.memo(()=>{

  const [sel,setSel] = React.useState( -1 )

  const click1 = React.useCallback(()=>{
    setSel( 1 )
  },[])

  const click2 = React.useCallback(()=>{
    setSel( 2 )
  },[])

  return (
    <Grid container direction="row">
      <Grid item xs>
        <Button 
          style={{width:"100%","height":"100%"}}
          variant="contained"
          onClick={click1}
        >
          ALGORITHM 1
        </Button>
      </Grid>
      <Grid item xs>
        <Button 
          style={{width:"100%","height":"100%"}}
          variant="contained"
          onClick={click2}
        >
          ALGORITHM 2
        </Button>
      </Grid>
    </Grid>
  )
})


