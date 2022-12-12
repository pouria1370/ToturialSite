import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";


const TimelineSection = ({ titlesArray }) => {
  
  return (
 
    <Timeline position="alternate">
      {titlesArray.map((option) => (
        <TimelineItem key={option.id}>
          <TimelineSeparator>
            <TimelineDot variant="filled" color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{option}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>

  );
};

export default TimelineSection;
