import React from "react";
import img1 from "./../assets/img1.jpg";
import img2 from "./../assets/img2.jpg";
import img3 from "./../assets/img3.jpg";
import Activity from "../components/Activity";

const Activities = () => {
  const data = [
    {
      date: "14.04.2001",
      heading: "Our first project",
      imgsArr: [img1, img2, img3],
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum pariatur soluta distinctio deserunt vero animi fugit, maxime ratione delectus eveniet ducimus officia, asperiores odio corrupti, aliquid perspiciatis nihil est fugiat.      A, voluptate nesciunt doloribus ipsum error ipsa temporibus atque, pariatur dolores praesentium modi tempore voluptas velit odio dolorum totam fugiat cum nostrum consectetur dignissimos veritatis, eligendi corrupti. Debitis, itaque aliquid! Officia blanditiis necessitatibus nam maxime modi, voluptatem quis quia quod, provident nobis eveniet. Ab hic, recusandae, cupiditate sint distinctio quia rem minus harum officiis quam dolorem. Deleniti quia unde accusamus.",
    },
  ];

  return (
    <div className="m-3">
      {data.map((item, ind) => (
        <Activity
          date={item.date}
          heading={item.heading}
          imgsArr={item.imgsArr}
          content={item.content}
          key={ind}
        />
      ))}
    </div>
  );
};

export default Activities;
