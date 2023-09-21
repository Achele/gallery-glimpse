// useFetch.js
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const Api_key = "QcQ4xKb1dLax6dKMAmm91nlWS3VozNJevDf56WBkNzuDESChpjfySdo2";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: {
            Accept: "Application/json",
            Authorization: Api_key,
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const imageData = await res.json();
        setLoading(false);
        setData(imageData.photos);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchData();
  }, [setError, url]);

  return { loading, data, error };
}
