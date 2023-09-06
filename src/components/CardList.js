import { Masonry } from "@mui/lab";
import CustomCard from "./CustomCard";
import { Box } from '@mui/material';
function CardList({ data }) {
  return (
    <Box style={{ width: "100%", margin: "0 auto"}}>
      <Masonry columns={2} spacing={2} style={{margin:"auto",width:"70%"}}>
        {data.map((data, index) => (
            <CustomCard key={data.title} data={data} />
        ))}
      </Masonry>
    </Box>
  );
}

export default CardList;
