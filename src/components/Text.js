import { Grid, Typography } from '@mui/material';
function Text({ item }) {
  return (
    <Grid>
    <Grid container alignItems="center" spacing={1} style={{margin:"0px auto"}}>
      <Grid item xs={2}>
        <Typography variant="h6" style={{ wordWrap: 'break-word', maxWidth: '50px' , fontSize:'10px', margin:0, padding:0}}>
          #{item.Proposalid}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6" style={{margin:0,padding:0}}>|</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography style={{ wordWrap: 'break-word', width: '240px',fontSize:'15px',margin:0,padding:0 }}>
          {item.text}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6" style={{margin:0,padding:0}}>|</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography 
          variant="h6" 
          style={{ color: item.yesNo === "YES" ? "green" : "red", wordWrap: 'break-word', maxWidth: '50px', fontSize: '15px', margin: 0, padding: 0 }}
        >
          {item.yesNo}
        </Typography>
      </Grid>
    </Grid>
    </Grid>
  );
}

export default Text;