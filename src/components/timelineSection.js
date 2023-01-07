
import { Box} from "@mui/material";
import './timelineSection.css'

const TimelineSection = ({ titlesArray }) => {
  
  return (
<div className="container">
  <Box className="title_Of_article"></Box>
  <Box className="image_Of_author"></Box>
  <Box className="timeline"></Box>
  <Box className="article_property_1"></Box>
  <Box className="article_property_2"></Box>
  <Box className="article"></Box>
</div>

  );
};

export default TimelineSection;
