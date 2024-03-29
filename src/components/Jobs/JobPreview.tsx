import { Box, Divider, SimpleGrid, Text } from "@mantine/core";
import { RenderRawHTML } from "components/RenderRawHTML";

type JobPreviewProps = {
  data: JObj;
  height?: number | string;
  width?: number | string;
};

const JobPreview: React.FC<JobPreviewProps> = ({ data, height = 500, width = 700 }) => {
  return (
    <Box style={{ height, width, border: "1px solid #dbe9ed", overflowY: "scroll" }}>
      <Text size={"xl"} fw={700} p={20} mt={10}>
        {data.title}
      </Text>
      <Divider my="sm" />

      <Box p={20}>
        <Text tt="uppercase" fw={700} mb={20}>
          General
        </Text>

        <SimpleGrid cols={3} w={"100%"}>
          <Box>
            <Text c="#708688" size="xs">
              Location
            </Text>
            <Text size="sm">{data.address}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Job Code
            </Text>
            <Text size="sm">{data.jobCode}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Function
            </Text>
            <Text size="sm">{data.primaryFunction}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Date Expires
            </Text>
            <Text size="sm">{data.dateExpires}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Travel Percentage
            </Text>
            <Text size="sm">{data.travelPercentage}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Industry
            </Text>
            <Text size="sm">{data.productCategory}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Published At
            </Text>
            <Text size="sm">{data.datePosted}</Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Posted By
            </Text>
            <Text size="sm">{data.employer.name}</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box p={20}>
        <Text tt="uppercase" fw={700} mb={20}>
          Compensation
        </Text>

        <SimpleGrid cols={3} w={"100%"}>
          <Box>
            <Text c="#708688" size="xs">
              Avg. Total Compensation
            </Text>
            <Text size="sm">
              ${data.minCompensation}K - ${data.maxCompensation}K
            </Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Base Salary
            </Text>
            <Text size="sm">
              ${data.minSalary}K - ${data.maxSalary}K
            </Text>
          </Box>

          <Box>
            <Text c="#708688" size="xs">
              Compensation Type
            </Text>
            <Text size="sm">{data.compensationType}</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box p={20}>
        <Text tt="uppercase" fw={700} mb={20}>
          Description
        </Text>

        <RenderRawHTML htmlData={data.description} />
      </Box>
    </Box>
  );
};

export default JobPreview;
