import React from 'react';

function FetachApi() {
  const { data, setData } = useState([]);

  const apiGet = () => {
    fetch('https://www.kayak.com/h/mobileapis/directory/airlines/homework')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  return (
    <div>
      My API <br />
      <button onClick={apiGet}> fetch API</button>
      <br />
      {JSON.stringify(data, null)}
    </div>
  );
}
export default FetachApi;
