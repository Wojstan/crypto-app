import {
  SearchOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  DiffOutlined,
  MoreOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { Table, Input, Button, Divider, Tag, Space } from "antd";
import { useGetAllCoinsQuery } from "../../services/cryptoAPI";

import styles from "./MainTable.module.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a href="#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text: string, record: any) => (
      <Space size="middle">
        <a href="#">Invite {record.name}</a>
        <a href="#">Delete</a>
      </Space>
    ),
  },
];

const tableData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool"],
  },
];

const MainTable = () => {
  const { data, isFetching } = useGetAllCoinsQuery(10);

  console.log(data);
  return (
    <>
      <div className={styles.tools}>
        <Input
          size="large"
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ maxWidth: "20rem" }}
        />
        <div>
          <Button className={styles.button} size="large">
            <CheckCircleOutlined />
            Mark
          </Button>
          <Button className={styles.button} size="large">
            <DeleteOutlined />
            Clear
          </Button>
          <Button className={styles.button} size="large">
            <DiffOutlined />
            Print
          </Button>
          <Divider style={{ height: "1.9em" }} type="vertical" />
          <Button className={styles.button} size="large">
            <RedoOutlined />
          </Button>
          <Button className={styles.button} size="large">
            <MoreOutlined />
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={tableData} />
    </>
  );
};

export default MainTable;
