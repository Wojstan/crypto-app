import { SearchOutlined } from "@ant-design/icons";
import { Table, Input } from "antd";
import millify from "millify";
import { useEffect, useState } from "react";
import { useGetAllCoinsQuery } from "../../services/cryptoAPI";

import styles from "./MainTable.module.css";

import { columns } from "./tableColumns";

const MainTable = () => {
  const { data, isFetching } = useGetAllCoinsQuery(0);

  const [cryptoTableData, setCryptoTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (e: { target: HTMLInputElement }) => {
    setSearchQuery(e.target?.value);
  };

  useEffect(() => {
    if (!isFetching) {
      const coins = data?.data?.coins;

      const cryptoTable = coins.map((row: any, i: number) => ({
        key: i,
        position: i + 1,
        short: { text: row.symbol, color: row.color },
        name: row.name,
        image: row.iconUrl,
        price: millify(row.price),
        daily: row.change,
        tier: row.tier,
        action: row.uuid,
      }));

      setCryptoTableData(cryptoTable);
    }
  }, [data, isFetching]);

  return (
    <div className={styles.block}>
      <div className={styles.tools}>
        <Input
          value={searchQuery}
          size="large"
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ maxWidth: "20rem" }}
          onChange={onChange}
        />
      </div>

      <Table
        columns={columns}
        dataSource={cryptoTableData.filter((row: any) =>
          row.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
      />
    </div>
  );
};

export default MainTable;
