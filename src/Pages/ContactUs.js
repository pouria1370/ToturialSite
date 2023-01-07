import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";

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
    <Container sx={{ m: "10% auto", width: "80%",background:'linear-gradient(to left,#E5E5CB,transparent)' }}>
      <Box  width="60%">
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
              ? dataAgentWork
                  .filter((item) => item.work === "Cooperation")
                  .map((item) => (
                    <MenuItem
                      key={item.agent}
                      value={
                        item.gender === "female" ? "Msc." : "Mr." + item.agent
                      }
                    >
                      {item.gender === "female" ? "Msc" : "Mr"}.{item.agent}
                    </MenuItem>
                  ))
              : work === "Suggestion"
              ? dataAgentWork
                  .filter((item) => item.work === "Suggestion")
                  .map((item) => (
                    <MenuItem
                      key={item.agent}
                      value={
                        item.gender === "female" ? "Msc." : "Mr." + item.agent
                      }
                    >
                      {item.gender === "female" ? "Msc" : "Mr"}.{item.agent}
                    </MenuItem>
                  ))
              : work === "Complaint"
              ? dataAgentWork
                  .filter((item) => item.work === "Complaint")
                  .map((item) => (
                    <MenuItem
                      key={item.agent}
                      value={
                        item.gender === "female" ? "Msc." : "Mr." + item.agent
                      }
                    >
                      {item.gender === "female" ? "Msc" : "Mr"}.{item.agent}
                    </MenuItem>
                  ))
              : dataAgentWork
                  .filter((item) => item.work === "Apply Job")
                  .map((item) => (
                    <MenuItem
                      key={item.agent}
                      value={
                        item.gender === "female" ? "Msc." : "Mr." + item.agent
                      }
                    >
                      {item.gender === "female" ? "Msc" : "Mr"}.{item.agent}
                    </MenuItem>
                  ))}
          </Select>
          <FormHelperText>who is your agent?</FormHelperText>
        </FormControl>
      </Box>
      <Box >
        <form onSubmit={submitHandler}>
          <div></div>
          <TextField multiline rows={12} sx={{ width: "60%" }} />
          <Button sx={{display:'block',width:'20%',m:'20px auto',fontSize:'20px'}}>Submit</Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactUs;
