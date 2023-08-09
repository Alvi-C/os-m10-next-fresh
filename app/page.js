'use client';
// this is client side rendering

import { useEffect, useState } from "react";


const page = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    (async () => {
      let res = await fetch('https://dummyjson.com/products');
      let json = await res.json();
      // console.log(json);
      setData(json.products);
    })();

  }, []);

  return (
    <div>
      <h1 className="heading">Home page</h1>
      <p>This is the home page</p>
      <img src="images/like-pic.png" alt="" width={200} />

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;