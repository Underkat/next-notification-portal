import { NextApiRequest, NextApiResponse } from "next";
import requests from "../../utils/request";
//import useSWR from 'swr'

//const fetcher = (...args: any) => fetch(...[args] as const).then(res => res.json())

const getUser = async (id: string) => {
  const res = await fetch(requests.fetchPlayer + `${id}`);
  const data = await res.json();
  //return {userName: data.name, userPhone: data.phone}

  //const {data, error} = useSWR(requests.fetchPlayer + `${id}`, fetcher)
  return {
    props: {
      phone: data.name,
    },
  };
};

export default getUser;

// const OpenModal = async (id: string, name:string) => {
//     //setOpenModal(true);
//     //console.log(requests.fetchPlayer + `${id}`);

//     setName(data.name);
//     setPhone(data.phone);
//    // setName(name);
//     //setPhone(phone);
//     console.log(name);
//   };
