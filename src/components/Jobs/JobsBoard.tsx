import { Box, Group } from "@mantine/core";
import { useState } from "react";
import JobItem from "./JobItem";
import JobPreview from "./JobPreview";

type JobsBoardProps = {
  jobs: JObj[];
};

const JobsBoard: React.FC<JobsBoardProps> = ({ jobs }) => {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id || 0);
  const selectedJob = jobs.find((item) => item.id === selectedJobId);

  return (
    <Group gap={0}>
      <Box style={{ height: 500, overflowY: "scroll" }}>
        {jobs.map((item) => (
          <JobItem key={item.id} job={item} isSelected={item.id === selectedJobId} onClick={setSelectedJobId} />
        ))}
      </Box>
      {selectedJob && <JobPreview data={selectedJob} />}
    </Group>
  );
};

export default JobsBoard;
