import React, { useEffect, useState } from "react";
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

import DeleteIcon from "@mui/icons-material/Delete";
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
function QuestionDashboard() {
  const [displayOption, setDisplayOption] = useState(true);
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [option, setOption] = useState("");
  const [optionArray, setOptionArray] = useState([]);
  const [question, setQuestion] = useState("");
  const [questionArray, setQuestionArray] = useState({
    Question: question,
    option1: option[0],
    option2: option[1],
    option3: option[2],
    option4: option[3],
  });

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    if (optionArray.length >= 4) setDisplayOption(false);
  }, [optionArray]);

  const handleAddOption = () => {
    const newArray = [...optionArray];
    setOptionArray([...newArray, option]);

    setOption("");
  };

  const handleAddMoreQuestion = () => {
    setDisplayOption(true);
  };

  const updateQuestionContent = (content) => {
    setQuestion(content);
  };

  //   const handleAllQuestion = () => {
  //     setDisplayQuestion(!displayQuestion);
  //   };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#FAF0E6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "70%", height: "85%", bgcolor: "#FFFFFF" }}>
        {displayOption ? (
          <>
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
                height: "14%",
                border: "1px solid #000000",
                ml: "10%",
                mt: "1%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
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
              <Button
                variant="outlined"
                onClick={handleAddOption}
                sx={{
                  bgcolor: "#5C5470",
                  color: "#ffffff",
                  mr: "10%",
                  mt: 2,
                  "&:hover": { bgcolor: "#5C5470", color: "#ffffff" },
                }}
              >
                Add more option
              </Button>
            </Stack>
          </>
        ) : (
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
        )}
        {/* <Stack alignItems="flex-end" justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={handleAllQuestion}
            sx={{
              bgcolor: "#5C5470",
              color: "#ffffff",
              mr: "10%",
              my: 2,
              "&:hover": { bgcolor: "#5C5470", color: "#ffffff" },
            }}
          >
            Show all questions
          </Button>
        </Stack> */}
        {displayQuestion && (
          <>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "flex",
                gap: "5px",
                ml: "10%",
              }}
            >
              Q :
              <span
                dangerouslySetInnerHTML={{
                  __html: question,
                }}
              />
            </Typography>

            <List>
              {optionArray.map((item, index) => (
                <Box
                  sx={{
                    width: "60%",
                    pl: "10%",
                  }}
                >
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <Typography key={index} variant="h5">
                      {item}
                    </Typography>
                  </ListItem>
                </Box>
              ))}
            </List>
          </>
        )}
      </Box>
    </Box>
  );
}
export default QuestionDashboard;

const techStack = ["React", "Node", "Flutter", "Python", "Angular"];
