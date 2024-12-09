import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const data = [
  { id: 1, name: 'Rohit', age: 20, country: 'India' },
  { id: 2, name: 'Aman', age: 22, country: 'USA' },
  { id: 3, name: 'Sia', age: 25, country: 'Canada' },
  { id: 4, name: 'Anya', age: 30, country: 'UK' },
];

const TableComponent = () => {
  return (
    <div>
      <TableContainer component={Paper} style={{ width: 700, margin: 'auto', marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Age</strong></TableCell>
              <TableCell><strong>Country</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
