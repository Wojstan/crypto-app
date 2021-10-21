import { Spin } from "antd";
import { Line } from "react-chartjs-2";

type Props = {
  coinHistory: any;
  color: string;
};

const CoinChart = ({ color, coinHistory }: Props) => {
  const coinData: Array<{ price: string; timestamp: number }> =
    coinHistory?.data?.history;

  if (!coinData) {
    return <Spin size="large" />;
  }

  const chartData = {
    labels: coinData.map((row) => new Date(row.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: "USD Price",
        data: coinData.map((row) => row.price),
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default CoinChart;
