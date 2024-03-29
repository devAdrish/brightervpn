import { Box, Stack } from "@mantine/core";
import { PageWrapper } from "components/PageWrapper";
import JobsBoard from "components/Jobs/JobsBoard";
import { fakeJobs } from "constants/fakeData";

const JobSearch = () => {
  // api call to get jobs
  const jobs = fakeJobs;

  return (
    <PageWrapper>
      <Stack>
        <Box>Search Box</Box>
        <JobsBoard jobs={jobs} />
      </Stack>
    </PageWrapper>
  );
};

export default JobSearch;
