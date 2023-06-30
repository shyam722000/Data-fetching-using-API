import { useEffect, useState } from "react";

const Avatar = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((res) => {
        // Process the data
        console.log(res.data);
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        {data.map((item) => (
          <div className="container">
            <div className="lok">
              {" "}
              <h2>{item.id}</h2>{" "}
            </div>
            <div className="lok">
              <img src={item.avatar} />
            </div>
            <div className="lok">
              <h2>{item.first_name}</h2>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};
export default Avatar;
