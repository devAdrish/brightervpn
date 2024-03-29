import { Badge, Box, Group, Stack, Text } from "@mantine/core";
import { IconCoin, IconMapPin } from "@tabler/icons-react";
import "./styles.scss";

type JobItemProps = {
  job: JObj;
  isSelected?: boolean;
  height?: number | string;
  width?: number | string;
  onClick?: (id: number) => void;
};

const JobItem: React.FC<JobItemProps> = ({
  job,
  isSelected = false,
  height = 120,
  width = 400,
  onClick = () => {},
}) => {
  return (
    <Stack
      justify="space-between"
      className="pointer card"
      style={{ width, height }}
      onClick={() => onClick(job.id)}
      data-selected={isSelected}
    >
      <Text truncate="end" size="md" fw={700}>
        {job.title}
      </Text>
      <Box>
        <Group justify="space-between">
          <Group justify="flex-start" gap={5}>
            <IconMapPin size={14} />
            <Text size="xs"> {job.address} </Text>
          </Group>
          <Text size="xs"> {job.datePosted} </Text>
        </Group>
        <Group mt={10} justify="space-between">
          <Group gap={5} justify="flex-start" maw={"75%"}>
            <Badge style={{ fontSize: 10, textTransform: "capitalize" }} p={4} variant="light" color="grey" radius="sm">
              {job.productCategory}
            </Badge>
            <Badge style={{ fontSize: 10, textTransform: "capitalize" }} p={4} variant="light" color="blue" radius="sm">
              {job.primaryFunction}
            </Badge>
          </Group>
          <Group justify="flex-start" gap={5}>
            <IconCoin size={14} />
            <Text style={{ fontSize: 10, textTransform: "capitalize" }} size="xs">
              ${job.minCompensation}K - ${job.maxCompensation}K
            </Text>
          </Group>
        </Group>
      </Box>
    </Stack>
  );
};

export default JobItem;
