import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import React, { Children, useState } from "react";

const ContactUs = () => {
  const [work, setWork] = useState("");
  const [agent, setAgent] = useState("");
  const dataAgentWork = [
    { work: "Suggestion", agent: "Saadat", gender: "female" },
    { work: "Suggestion", agent: "Saman", gender: "female" },
    { work: "Complaint", agent: "Sian", gender: "female" },
    { work: "Complaint", agent: "forouzan", gender: "female" },
    { work: "Cooperation", agent: "Farsad", gender: "female" },
    { work: "Suggestion", agent: "Farhood", gender: "female" },
    { work: "Apply Job", agent: "Farahmand", gender: "female" },
    { work: "Complaint", agent: "sina", gender: "female" },
    { work: "Cooperation", agent: "Farsadian", gender: "female" },
    { work: "Suggestion", agent: "Farhoodkale", gender: "female" },
    { work: "Apply Job", agent: "Farahmand-abbbasi", gender: "female" },
    { work: "Complaint", agent: "forough", gender: "female" },
    { work: "Cooperation", agent: "FarsadTabar", gender: "female" },
    { work: "Suggestion", agent: "Farhan", gender: "female" },
    { work: "Apply Job", agent: "Fara", gender: "female" },
  ];
  //**Hnadlers */
  const workHandler = (event) => {
    setWork(event.target.value);
    console.log("work", event.target.value, work);
  };
  const agentHandler = (event) => {
    setAgent(event.target.value);
    console.log("agent", event.target.value, agent);
  };
  const submitHandler = (event) => {};
  return (
    <Container
      sx={{
        m: "10% auto",
        width: "80%",
        background: "linear-gradient(to left,#E5E5CB,transparent)",
      }}
    >
      <Box width="60%">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Your Work :
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={work}
            label="Age"
            onChange={workHandler}
          >
            <MenuItem value="Complaint">Complaint</MenuItem>
            <MenuItem value="Suggestion">Suggestion</MenuItem>
            <MenuItem value="Apply Job">Apply Job</MenuItem>
            <MenuItem value="Cooperation">Cooperation</MenuItem>
          </Select>
          <FormHelperText>
            Your requestis categorised in which form?
          </FormHelperText>
        </FormControl>
      </Box>
      <Box sx={{ width: "60%" }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Your agent :
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={agent}
            label="Agent"
            onChange={agentHandler}
          >
            {work === "Cooperation"
              ? 
             [
              <MenuItem value="Msc.Naderi1" key="naderi1">Msc.Naderi1</MenuItem>,
              <MenuItem value="Msc.Naderi2" key="naderi2">Msc.Naderi2</MenuItem>,
              <MenuItem value="Msc.Naderi3" key="naderi3">Msc.Naderi3</MenuItem>,
             ]
              : work === "Suggestion"
              ?[
                <MenuItem value="Msc.Naderi4" key="naderi4">Msc.Naderi4</MenuItem>,
              <MenuItem value="Msc.Naderi5" key="naderi5">Msc.Naderi5</MenuItem>,
              <MenuItem value="Msc.Naderi6" key="naderi6">Msc.Naderi6</MenuItem>,
              ]
              : work === "Complaint"
              ? [
                <MenuItem value="Msc.Naderi7" key="naderi7">Msc.Naderi7</MenuItem>,
                <MenuItem value="Msc.Naderi8" key="naderi8">Msc.Naderi8</MenuItem>,
                <MenuItem value="Msc.Naderi9" key="naderi9">Msc.Naderi9</MenuItem>
              ]
              :
              [
                <MenuItem value="Msc.Naderi10" key="naderi10">Msc.Naderi10</MenuItem>,
                <MenuItem value="Msc.Naderi11" key="naderi11">Msc.Naderi11</MenuItem>,
                <MenuItem value="Msc.Naderi12" key="naderi12">Msc.Naderi12</MenuItem>,
              ]}
          </Select>
          <FormHelperText>who is your agent?</FormHelperText>
        </FormControl>
      </Box>
      <Box>
        <form onSubmit={submitHandler}>
          <div></div>
          <TextField
          
            multiline
            rows={12}
            sx={{ width: "60%",position:'relative' }}
            InputProps={{
              startAdornment: (
                <><InputAdornment position="start" sx={{position:"absolute", top:'20px'}}>Hello {agent}</InputAdornment>
                <InputAdornment position="start" sx={{position:"absolute", top:'40px',left:'10px'}}>In regarding to {work}</InputAdornment>
                
                </>      
              )
            }}
          />
          <Button
            sx={{
              display: "block",
              width: "20%",
              m: "20px auto",
              fontSize: "20px",
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactUs;
