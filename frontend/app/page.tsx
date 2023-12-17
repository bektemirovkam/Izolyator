import { Button } from "antd";

const delay = new Promise((res) => {
  setTimeout(() => res(1231), 3000);
});

export default async function Home() {
  const a = await delay;

  console.log(a);

  return (
    <div style={{ height: "100%" }}>
      <Button type="primary">Button</Button>
    </div>
  );
}
