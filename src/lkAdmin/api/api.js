import axios from "axios";

const apiUrl =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=65f2e472dae349d7ba33233371dbfe15";

const getNews = async () => {
  const resp = await axios.get(apiUrl);
  return resp.data;
};

export { getNews };
