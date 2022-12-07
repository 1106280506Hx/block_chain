import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Typography } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
const { Title } = Typography;
const data = [
  {
    key: "1",
    time: "2022.11.11",
    project: "隔离不隔爱 温暖一直在",
    name: "7克7克",
    money: 100,
    comments:
      "一座小小的线上”城市“，不仅成为凝聚爱心的窗口，也为困难群众点亮”微心愿“。",
  },
  {
    key: "2",
    time: "2022.10.10",
    project: "幸福港湾 童心启航",
    name: "小黑子",
    money: 200,
    comments: "温情系天下，爱心献中华！",
  },
  {
    key: "3",
    time: "2022.10.9",
    project: "为失聪者点亮一盏灯",
    name: "一张葱油饼",
    money: 50,
    comments: "一颗爱心，力量再小，乘以亿也会变得巨大",
  },
  {
    key: "4",
    time: "2022.10.7",
    project: "给我一个拥抱",
    name: "万叶",
    money: 300,
    comments: "加油！",
  },
  {
    key: "4",
    time: "2022.10.6",
    project: "隔离不隔爱 温暖一直在 ",
    name: "布吉岛",
    money: 300,
    comments: "让爱心汇成海洋，让真情放飞希望",
  },
  {
    key: "4",
    time: "2022.10.5",
    project: "给我一个拥抱",
    name: "人民当家做组",
    money: 300,
    comments: "困难只是一时的！",
  },
  {
    key: "4",
    time: "2022.10.4",
    project: "隔离不隔爱 温暖一直在",
    name: "aoye",
    money: 300,
    comments: "持续关注",
  },
  {
    key: "4",
    time: "2022.10.3",
    project: "为失聪者点亮一盏灯",
    name: "准备上链",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "为失聪者点亮一盏灯",
    name: "链上公益",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "为失聪者点亮一盏灯",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "幸福港湾 童心启航",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "幸福港湾 童心启航",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "幸福港湾 童心启航",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "幸福港湾 童心启航",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "隔离不隔爱 温暖一直在",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "隔离不隔爱 温暖一直在",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "隔离不隔爱 温暖一直在",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
  {
    key: "4",
    time: "2022.10.2",
    project: "隔离不隔爱 温暖一直在",
    name: "1q2w3e4r",
    money: 300,
    comments: "献上自己的绵薄之力！",
  },
];

function Rank() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            搜索
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            重置
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            过滤
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            关闭
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "捐助时间",
      dataIndex: "time",
      key: "time",
      width: "20%",
      ...getColumnSearchProps("time"),
    },
    {
      title: "项目",
      dataIndex: "project",
      key: "project",
      width: "20%",
      ...getColumnSearchProps("project"),
    },
    {
      title: "用户名",
      dataIndex: "name",
      key: "name",
      width: "10%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "捐助额度",
      dataIndex: "money",
      key: "money",
      width: "15%",
      ...getColumnSearchProps("money"),
      sorter: (a, b) => a.money - b.money,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "爱心留言",
      dataIndex: "comments",
      key: "comments",
    },
  ];
  return (
    <div id="donation_list" className="block donation_listBlock">
      <div className="container-fluid">
        <div className="titleHolder"></div>
        <div className="center">
          <Title textalign="center">捐助记录</Title>
        </div>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}
export default Rank;
