import { Comment, List, Tooltip, Card } from "antd";
import React from "react";
const data = [
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "小陈",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        一座小小的线上”城市“，不仅成为凝聚爱心的窗口，也为困难群众点亮”微心愿“。
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>1 小时前</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "小王",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        “区块链+慈善”将重塑人们的生活方式，让更多人参与探索社会问题的解决路径。
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 10:22:33">
        <span>3 小时前</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "小刘",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        数字化、智能化发展为公益慈善事业带来新的发展机遇，极大提升了社会影响力和公众参与度。
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 10:22:33">
        <span>4 小时前</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "小六",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: <p>温情系天下，爱心献中华！</p>,
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>5 小时前</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "温迪",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: <p>一颗爱心，力量再小，乘以亿也会变得巨大</p>,
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>6 小时前</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "不想上早八啊啊",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: <p>共同架起慈善的桥梁，建设文明祥和、美好温馨的美丽垣曲！</p>,
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>8 小时前</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">回复</span>],
    author: "不知道布吉岛",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: <p>让爱心汇成海洋，让真情放飞希望</p>,
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>8 小时前</span>
      </Tooltip>
    ),
  },
];
const ShopComments = () => (
  <List
    className="comment-list"
    header={`社区留言：${data.length} 条留言`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <li>
        {" "}
        <Card hoverable size="small">
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />{" "}
        </Card>
      </li>
    )}
  />
);
export default ShopComments;
