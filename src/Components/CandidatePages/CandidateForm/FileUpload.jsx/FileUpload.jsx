import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
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

const FileUpload = () => {
  return (
    <Box sx={{ border: "1px dashed black", p: "20px", mt: "10px" }}>
      <Grid display="flex" justifyContent="space-between">
        <Grid>
          <Typography display="flex" alignItems="center">
            <CloudUploadIcon fontSize="12px" sx={{ marginRight: "5px" }} />
            Drag and drop files here or upload
          </Typography>
          <Typography fontSize="12px" color="gray">
            Accepted file types: JPEG,Doc,PDF,PNG
          </Typography>
        </Grid>
        <Button
          component="label"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
        >
          Upload
          <VisuallyHiddenInput type="file" />
        </Button>
      </Grid>
    </Box>
  );
};

export default FileUpload;
