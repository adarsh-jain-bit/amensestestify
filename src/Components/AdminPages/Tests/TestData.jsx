import React from "react";
import TestCard from "./TestCard";
import { Grid } from "@mui/material";
const TestData = ({ addButton }) => {
  const dataArr = [
    {
      name: "Java",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: ".NET",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "Gatsby.js",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "Express.js",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "Next.js",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "Vue.js",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "Node.js",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "MongoDB",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "React",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "Spring",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
    {
      name: "PostgreSQL",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas, commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <Grid container spacing={4} mt={3}>
      {dataArr.map(({ name, desc }, index) => {
        return (
          <TestCard
            index={index}
            name={name}
            desc={desc}
            addButton={addButton}
          />
        );
      })}
    </Grid>
  );
};

export default TestData;
