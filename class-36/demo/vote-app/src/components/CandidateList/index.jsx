import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../store/votes.js';

export default function CandidateList() {

  const state = useSelector(state => state.votes); // a hook, that returns a getter from  the redux store, takes a callback function that will receive all of redux state, and the return value will be the value of the getter.
  const dispatch = useDispatch(); // returns a setter that takes an action {type, payload}.
  console.log('MY REDUX STORE VALUES', state);

  const handleVote = (candidate) => {
    let action = increment(candidate.name);
    dispatch(action);
  }
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Typography variant='h1'>
            {state.totalVotes}
          </Typography>
          {state.candidates.map((candidate, key) => (
            <Grid key={key} item xs={6}> 
              <Button sx={{ textTransform: 'none' }} onClick={() => handleVote(candidate)}>
                <Paper>
                  <Typography variant="h2" gutterBottom>
                    {candidate.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {candidate.votes}
                  </Typography>
                </Paper>
              </Button>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}