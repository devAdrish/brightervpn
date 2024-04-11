import { Box, Stack } from "@mantine/core";
import { PageWrapper } from "components/PageWrapper";
import { useFindJobsQuery } from "services/jobsApi";
import JobsBoard from "components/Jobs/JobsBoard";

const JobSearch = () => {
  const { data, isLoading } = useFindJobsQuery({ status: "", search: "" }, { refetchOnMountOrArgChange: true });

  return (
    <PageWrapper isLoading={isLoading}>
      <Stack>
        <Box>Search Box</Box>
        <JobsBoard jobs={data || []} />
      </Stack>
    </PageWrapper>
  );
};

export default JobSearch;
