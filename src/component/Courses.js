// import { Typography } from '@mui/material'
// import React from 'react'
// import CourseCpp from './CourseCpp';
// import Coursejava from './Coursejava';
// import Coursepython from './Coursepython';
// import CourseC from './CourseC';

// const Courses = () => {
//   return (
//     <div>
//         <Typography variant='h5'>Courses</Typography>
//          <CourseCpp/> 
//          <Coursejava/> 
//          <Coursepython/> 
//          <CourseC/>
//     </div>
//   )
// }

// export default Courses  

import { Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <Typography variant="h5">Courses</Typography>
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/courses/c">
            <ListItemText primary="C Course" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/courses/cpp">
            <ListItemText primary="C++ Course" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/courses/java">
            <ListItemText primary="Java Course" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/courses/python">
            <ListItemText primary="Python Course" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Courses;
