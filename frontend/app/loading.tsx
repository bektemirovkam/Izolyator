import { Flex, Spin } from "antd";

export default function Loading() {
  return (
    <Flex
      style={{ marginTop: 50 }}
      align="center"
      justify="center"
      gap="middle"
    >
      <Spin size="large" />
    </Flex>
  );
}
