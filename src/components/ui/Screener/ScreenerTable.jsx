import { Tag } from "antd";
import Table from "antd/lib/table";
import "antd/lib/table/style/css";
import millify from "millify";

const ScreenerTable = ({ events }) => {
  const tableColumns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => (
        <>
          <Tag style={{ fontWeight: 800 }} color={"green"} key={symbol}>
            {symbol.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <b>{name}</b>,
    },
    {
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
      render: (marketCap) => millify(marketCap),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => parseFloat(price).toFixed(2),
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "24h Volume",
      dataIndex: "24hVolume",
      key: "24hVolume",
      render: (marketCap) => millify(marketCap),
    },
    {
      title: "Tier",
      dataIndex: "tier",
      key: "tier",
    },
    {
      title: "Listed At",
      dataIndex: "listedAt",
      key: "listedAt",
      render: (listedAt) => (
        <>
          <Tag style={{ fontWeight: 600 }} color={"volcano"} key={listedAt}>
            {listedAt}
          </Tag>
        </>
      ),
      // render: (text, record) => <StatusTag status={record.status} />
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   // render: (text, record) => (
    //   //   <Button type="primary" onClick={() => handleAction(record)}>
    //   //     Action
    //   //   </Button>
    //   // )
    // },
  ];

  return (
    <>
      <Table dataSource={events} columns={tableColumns} />
    </>
  );
};

export default ScreenerTable;
