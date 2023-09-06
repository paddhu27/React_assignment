import React, { useRef} from 'react';
import html2canvas from 'html2canvas';
import MainPage from './MainPage';
import {data2} from './Data'

const MyWebpage = ({startDate, endDate}) => {
  const contentRef = useRef(null);

  const handleScreenshot = () => {
    if (contentRef.current) {
        const contentDiv = contentRef.current;

        const buttonElement = contentDiv.querySelector('button');
        if (buttonElement) {
            buttonElement.style.display = 'none';
        }
      html2canvas(contentRef.current).then((canvas) => {
        // Convert the canvas to an image URL
        const screenshotUrl = canvas.toDataURL('image/png');
        if (buttonElement) {
            buttonElement.style.display = 'block';
        }
        // Create a link element to download the image
        const downloadLink = document.createElement('a');
        downloadLink.href = screenshotUrl;
        downloadLink.download = 'screenshot.png';
        downloadLink.click();

       
      });
    }
  };
 
  return (
    <div>
      <div ref={contentRef}>
      <button onClick={handleScreenshot} 
       style ={{ 
        position: 'absolute', top: '2%', left: '96%',transform: 'translate(-50%, -50%)',}}
        >
        Capture Screenshot</button>
      <MainPage cardData={data2} startDate={startDate} endDate={endDate}/> 
      </div>

    </div>
  );
};

export default MyWebpage;
