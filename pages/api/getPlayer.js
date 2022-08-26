import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const getPlayer = (id) => {
  const { data, error } = useSWR(requests.fetchPlayer + `${id}`, fetcher);

  if (error) return "Nothing";
  if (!data) return "Load";

  return data.name;
};

export default getPlayer;
