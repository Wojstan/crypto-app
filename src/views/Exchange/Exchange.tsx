import { Typography } from "antd";
import { useState } from "react";
import ExchangeSearch from "../../components/ExchangeSearch/ExchangeSearch";
import Markets from "../../components/Marekets/Markets";
import styles from "./Exchange.module.css";

const { Title, Text } = Typography;

const Exchange = () => {
  const [selectedOption, setSelectedOption] = useState({
    id: "Qwsogvtv82FCd",
    name: "Bitcoin",
    color: "rgb(247, 147, 26)",
  });

  const { color, name } = selectedOption;

  return (
    <div className={styles.exchanges}>
      <header style={{ background: "#EEEEEE" }}>
        <Title>Check the possible exchange markets</Title>
        <Text type="secondary">
          Enter coin name and select to check for possible exchange martkets
        </Text>
        <ExchangeSearch selectOption={setSelectedOption} />
      </header>

      <main className={styles.markets}>
        <Title style={{ marginBottom: "3rem" }} level={2}>
          Most popular markets for{" "}
          <strong style={{ color: color }}>{name}</strong>
        </Title>
        <Markets query={selectedOption.id} />
      </main>
    </div>
  );
};

export default Exchange;
