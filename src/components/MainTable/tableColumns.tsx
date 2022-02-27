import { Button, Tag, Typography } from "antd";

import {
  RightOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

export const columns = [
  {
    title: "Pos.",
    dataIndex: "position",
    key: "position",
    render: (text: string) => <>{text}.</>,
    width: "10%",
  },
  {
    title: "Img",
    dataIndex: "image",
    key: "image",
    render: (text: string) => <img height={40} src={text} alt="" />,
    width: "10%",
  },
  {
    title: "Short",
    dataIndex: "short",
    key: "short",
    render: (record: any) => (
      <strong style={{ color: record.color }}>{record.text} </strong>
    ),
    width: "10%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",

    width: "15%",
  },

  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text: string) => <Text strong>${text}</Text>,
    width: "15%",
  },

  {
    title: "Daily",
    dataIndex: "daily",
    key: "daily",
    render: (value: number) => (
      <span style={value > 0 ? { color: "#3f8600" } : { color: "#cf1322" }}>
        {value}% {value > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      </span>
    ),
    width: "15%",
  },
  {
    title: "Tier",
    dataIndex: "tier",
    key: "tier",
    render: (text: string) => (
      <Tag color="blue" key={text}>
        {text}
      </Tag>
    ),
    width: "15%",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (uuid: string) => (
      <Link to={`/currency/${uuid}`}>
        <Button type="primary">
          More <RightOutlined />
        </Button>
      </Link>
    ),
    width: "10%",
  },
];
