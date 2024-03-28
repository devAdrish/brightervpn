import { Box, LoadingOverlay } from "@mantine/core";
import { FC, ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  isLoading?: boolean;
};

export const PageWrapper: FC<PageWrapperProps> = ({ children, isLoading = false }) => (
  <Box mx={10} style={{ width: "100%", height: "100%", position: "relative" }}>
    <LoadingOverlay visible={isLoading} zIndex={10} overlayProps={{ blur: 1 }} loaderProps={{ type: "bars" }} />
    {children}
  </Box>
);
