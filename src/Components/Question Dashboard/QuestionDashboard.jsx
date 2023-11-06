import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  styled,
  Typography,
  Autocomplete,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import MyQuillEditor from "./ReactQuill";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// Define techStack array
const techStack = ["React", "Node", "Flutter", "Python", "Angular"];

function QuestionDashboard() {
  const [option, setOption] = useState("");
  const [optionArray, setOptionArray] = useState([]);
  const [question, setQuestion] = useState("");
  const [allQuestion, setAllQuestion] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleAddOption = () => {
    if (optionArray.length < 4) {
      const newArray = [...optionArray];
      setOptionArray([...newArray, option]);
      setOption("");
    }
  };

  const handleAddMoreQuestion = () => {
    setAllQuestion((prevAllQuestion) => [
      ...prevAllQuestion,
      {
        Question: question,
        option1: optionArray[0],
        option2: optionArray[1],
        option3: optionArray[2],
        option4: optionArray[3],
      },
    ]);
    setQuestion("");
    setOptionArray([]);
  };

  const updateQuestionContent = (content) => {
    setQuestion(content);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "#FAF0E6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "70%", minHeight: "85%", bgcolor: "#FFFFFF" }}>
        <Box sx={{ width: "100%", height: "15%", mt: "5%", mx: "10%" }}>
          <Stack direction="row" spacing="5%">
            <Box sx={{ width: "60%" }}>
              <MyQuillEditor
                value={question}
                onChange={updateQuestionContent}
              />
            </Box>
            <Box sx={{ width: "15%" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={techStack}
                renderInput={(params) => (
                  <TextField {...params} label="Tech Stack" />
                )}
              />
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "20%",
            border: "1px solid #000000",
            ml: "10%",
            mt: "1%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            py: "5%",
          }}
        >
          <TextField
            variant="outlined"
            label="Enter option"
            value={option}
            onChange={handleOptionChange}
          />
          <Typography variant="h5">or</Typography>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{
              bgcolor: "#5C5470",
              "&:hover": { bgcolor: "#5C5470", color: "#ffffff" },
            }}
          >
            Upload Image
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
        <Stack alignItems="flex-end" justifyContent="flex-end">
          {optionArray.length < 4 && (
            <Button
              component="label"
              variant="contained"
              sx={{
                bgcolor: "#5C5470",
                color: "#ffffff",
                mr: "10%",
                my: 2,
                "&:hover": { bgcolor: "#5C5470", color: "#ffffff" },
              }}
              onClick={handleAddOption}
            >
              Add more option
            </Button>
          )}
        </Stack>
        <Stack alignItems="flex-end" justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={handleAddMoreQuestion}
            sx={{
              bgcolor: "#5C5470",
              color: "#ffffff",
              mr: "10%",
              my: 2,
              "&:hover": { bgcolor: "#5C5470", color: "#ffffff" },
            }}
          >
            Add more question
          </Button>
        </Stack>
        <div>
          {allQuestion.map((q, index) => (
            <div key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  gap: "0.2rem",
                  mx: "2%",
                }}
              >
                <span style={{ display: "contents" }}>{`Q${index + 1}: `}</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: q.Question,
                  }}
                />
                <IconButton aria-label="delete" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Typography>
              <List>
                <Box sx={{ width: "60%", pl: "10%" }}>
                  {Array.from({ length: 4 }, (_, index) => {
                    const option = q[`option${index + 1}`];
                    if (option) {
                      return (
                        <ListItem key={index}>
                          <Typography variant="h5">
                            {`Option ${index + 1}: ${option}`}
                            <IconButton aria-label="delete" size="large">
                              <EditIcon fontSize="inherit" />
                            </IconButton>
                          </Typography>
                        </ListItem>
                      );
                    }
                    return null;
                  })}
                </Box>
              </List>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default QuestionDashboard;
