import './App.css';
import questions from './data-files/questionsObj';
import { useState } from 'react'
import { styled, Box, Paper, Grid, Typography, Button, Container, Radio, RadioGroup, FormControlLabel } from '@mui/material';


function App() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // Question index increment usestate 
  const [queIndex, setQueIndex] = useState(0)

  // Marks setting usestate
  const [marks, setMarks] = useState(0)

  // Setting user Answers 
  const [userAnswer, setUserAnswer] = useState()

  // Next Question and finish quiz enable disable Button
  const [enableNextQueBtn, setEnableNextQueBtn] = useState(true)

  // Show or hide Screens
  const [quesContainer, setQuesContainer] = useState(true)
  const [showResult, setShowResult] = useState(false)


  // Next Question Button Function
  let nextQuestion = () => {
    setEnableNextQueBtn(true)
    if (userAnswer === questions[queIndex].answer) {
      setMarks(marks + 1)
    }
    setQueIndex(queIndex + 1)
  }

  // Finish Quiz Button Function
  let finishQuiz = () => {
    if (userAnswer === questions[queIndex].answer) {
      setMarks(marks + 1)
    }
    setQuesContainer(false)
    setShowResult(true)


    console.log(marks);
  }


  // Get user Answer Button Function
  let getselected = (e) => {
    setUserAnswer(e.target.value)
    setEnableNextQueBtn(false)
    console.log(e.target.value);
  }

  return (

    <>
      {/* Main container Box */}
      <Box sx={{ flexGrow: 1, width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {/* container*/}
        <Container>
          {/* Questions container Grid*/}
          {quesContainer && <Grid container spacing={2}>
            <Grid item xs={12}>

              {/* Questions rendering here*/}
              <Item sx={{ backgroundColor: 'black', color: 'white', py: 2, my: 2 }}><Typography variant="h4">Questions # {queIndex + 1} </Typography></Item>



              {/* Question Options rendering here using map*/}
              <Item sx={{ backgroundColor: 'white', py: 2, textAlign: 'left', px: 3 }}><Typography variant="h5">Q{queIndex + 1}: {questions[queIndex].question} </Typography></Item>
              <RadioGroup
                aria-label="questionOptions"
                name="radio-buttons-group"
                onChange={(e) => getselected(e)}
              >
                {questions[queIndex].options.map((x, index) => {
                  return <FormControlLabel sx={{ py: 1, textAlign: 'left', px: 3 }} key={index} value={x} control={<Radio />} label={x} />

                })}
              </RadioGroup>
              <Item sx={{ py: 3, textAlign: 'right', px: 3 }}>
                {queIndex + 1 !== questions.length && <Button variant="contained" onClick={nextQuestion} disabled={enableNextQueBtn}>Next Question</Button>
                }

                {queIndex + 1 === questions.length && <Button variant="contained" onClick={finishQuiz} disabled={enableNextQueBtn}>Finish Quiz</Button>
                }
              </Item>
            </Grid>
          </Grid>}


          {/* Result Card container Grid*/}
          {showResult && <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item sx={{ backgroundColor: 'black', color: 'white', py: 2, my: 2 }}><Typography variant="h4">Result Card</Typography></Item>
              <Item sx={{ backgroundColor: 'white', py: 2, textAlign: 'center', px: 3 }}><Typography variant="h5">Scrore: {marks} </Typography></Item>
            </Grid></Grid>

          }
        </Container>
      </Box>

    </>

  );
}

export default App;
