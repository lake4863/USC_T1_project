import React, { useState, useEffect } from "react";

// ctrl + d 同时选中！
function Home() {
  const [curtime, setCurtime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurtime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    // <div style={{ height: "100vh" }}>
    <div className="home">
      <div className="pageTitle">Home</div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQHrWWEdgMv0EA/company-logo_200_200/0/1571210188311?e=2159024400&v=beta&t=IXV6zJSISW4H0pfkfBNGce4hYg4ziR2Dc3uStXYH6Rg"
        alt="img"
        width="60%"
        // style={{ alignSelf: "center" }}
      />
      <hr />
      <h3>Current time</h3>
      {curtime}

      {/* <script>
        function MyFunction() {
          let myCurrentDate = new Date();
          let date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();
          const newCurrentDate = "Current Date and Time: "+date;
          return (
            <p>{newCurrentDate}</p>
          );
        }
        ReactDOM.render(
          <MyFunction />,
          document.getElementById('root')
        );
      </script> */}
    </div>
  );
}

export default Home;
