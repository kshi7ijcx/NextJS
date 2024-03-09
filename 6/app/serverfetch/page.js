async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const ServerFetch = async () => {
  let products = await fetchData();
  console.log(products);

  return (
    <div>
      {products.map((todo) => (
        <div key={todo.id}>{todo.body}</div>
      ))}
    </div>
  );
};
export default ServerFetch;
