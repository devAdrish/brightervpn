import { Center, Loader, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FC, useEffect } from "react";

type LoadingSpinnerProps = {
  show: boolean;
  color?: string;
};

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ show, color }) => {
  return show ? (
    <Center m={10} style={{ width: "100%" }}>
      <Loader color={color} />
    </Center>
  ) : null;
};

export const LoadingSpinnerScreen: FC<LoadingSpinnerProps> = ({ show }) => {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (show) open();
    else close();
  }, [show]);

  return (
    <Modal
      centered
      styles={{
        content: {
          background: "transparent",
          border: "none",
          boxShadow: "none",
        },
      }}
      opened={opened}
      onClose={close}
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Center m={10} style={{ width: "100%" }}>
        <Loader color="#fff" />
      </Center>
    </Modal>
  );
};
