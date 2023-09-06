import TopSection from "./TopSection";
import CardList from "./CardList";

function MainPage({cardData, startDate, endDate }) {
    return (
      <div style={{ backgroundColor: "  #fbf7e9" }}>
        <TopSection startDate={startDate} endDate={endDate} />
        <CardList data={cardData} />
      </div>
    );
  }
  
export default MainPage;