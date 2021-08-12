import { useState, useEffect } from "react";

const Books = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setData(data.join(', ')));
  }, []);

  return (
    <section class="mb-5">
      <h1 class="mb-4">Books API</h1>
      <p>{!data ? "Loading..." : data}</p>
    </section>
  );
}

export default Books;
