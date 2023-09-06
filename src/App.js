import { useState } from 'react';
import MainPage from './components/MainPage';
import './App.css';
import { data2 } from "./components/Data";
import Screenshot from './components/Screenshot';
import DateComponent from './components/Date';
import dayjs from 'dayjs';

function App() {
  const [startDate, setStartDate] = useState(dayjs(Date.now()));
  const [endDate, setEndDate] = useState(dayjs(Date.now()));
  const formatDate = (date) => {
    const day = date.date();
    const month = date.format('MMM');
    return `${day}/${month}`;
  };
  

  return (
    <div>
      <DateComponent setStartDate={setStartDate} setEndDate={setEndDate} startDate={startDate} endDate={endDate} />

      <Screenshot startDate={formatDate(startDate)} endDate={formatDate(endDate)} />

    </div>
  );
}

export default App;
