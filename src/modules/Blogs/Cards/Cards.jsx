import img99 from "../../../assets/img/Icon clock.png";
import img94 from "../../../assets/img/unsplash_yJwbvWmJs5M.png";

import "./Cards.css";
import CardsContent from "../CardsContent/CardsContent";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const res = axios
        .get("http://127.0.0.1:8000/api/post")
        .then((res) => setData(res.data.data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(data);

  const showData = data.map((item, index) => {
    return (
      <div key={index}>
        <CardsContent
          img100={item.image}
          h2={item.title}
          p={item.content}
          img99={img99}
          p2="3 min read"
          p3="April 12, 2022"
        />
      </div>
    );
  });
  return (
    <section className="container">
      {showData}
      <CardsContent
        img100={img94}
        h2="Who is an Internet marketer and what does he do?"
        a="# Marketing"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="5 min read"
        p3="February 2, 2022"
      />
    </section>
  );
};

export default Cards;
