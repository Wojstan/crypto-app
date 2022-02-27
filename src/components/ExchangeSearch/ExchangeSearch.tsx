import { Typography, AutoComplete } from "antd";
import { useEffect, useState } from "react";
import { useGetAllCoinsQuery } from "../../services/cryptoAPI";

import styles from "./ExchangeSearch.module.css";

const { Text } = Typography;

type Props = {
  selectOption: React.SetStateAction<any>;
};

const ExchangeSearch = ({ selectOption }: Props) => {
  const { data } = useGetAllCoinsQuery(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  const coinsData = data?.data?.coins;

  const renderItem = (
    id: string,
    title: string,
    color: string,
    img: string
  ) => ({
    value: title,
    coindetails: { id, name: title, color },
    label: (
      <div className={styles.option}>
        <img height={30} src={img} alt="" />
        <Text strong>{title}</Text>
      </div>
    ),
  });

  useEffect(() => {
    if (!coinsData) return;

    if (!searchQuery) {
      setFilteredCoins([]);

      return;
    }

    const filter = coinsData.filter((row: any) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCoins(
      filter.map((row: any) =>
        renderItem(row.uuid, row.name, row.color, row.iconUrl)
      )
    );
  }, [searchQuery, coinsData]);

  return (
    <div className={styles.search}>
      <AutoComplete
        value={searchQuery}
        options={filteredCoins}
        style={{ width: "100%" }}
        onSelect={(value, opt) => selectOption(opt.coindetails)}
        onChange={(value) => setSearchQuery(value)}
        size="large"
        placeholder="Enter coin name..."
      />
    </div>
  );
};

export default ExchangeSearch;
