import React, { useState } from "react";
import data from "../../Data/MOCK_DATA.json";
import Cart from "../Card/Cart";
const Home = () => {
  const datas = data.slice(0, 10);
  const [rooms, setRooms] = useState(datas);
  return (
    <div className="row container-fluid mt-3">
      {rooms && rooms.map((data) => <Cart key={data.id} data={data} />)}
    </div>
  );
};

export default Home;
