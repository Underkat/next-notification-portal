import { NextApiRequest, NextApiResponse } from "next";
import requests from "../../utils/request";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const request = await fetch(requests.fetchPlayer + `${id}`);
  const response = await request.json();

  res.status(200).json(response);
};

export default getUser;
