import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { Container, Grid, Typography, Box } from '@mui/material';
import TopSection from './TopSection';




const DateSelector = ({setStartDate, setEndDate, startDate, endDate}) => {


  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Container>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} style={{ textAlign: 'right'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <input {...params.inputProps} />}
            
            />
          </LocalizationProvider>
        </Grid>
       
        <Grid item xs={12} md={2} >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box textAlign="left">
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <input {...params.inputProps} />}
            
          />
          </Box>

        </LocalizationProvider> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default DateSelector;
