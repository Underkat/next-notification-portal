import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const sendMessage = (req: NextApiRequest, res: NextApiResponse) => {
  const accountSid = <string>process.env.NEXT_PUBLIC_ACCOUNT_SID;
  const authToken = <string>process.env.NEXT_PUBLIC_AUTH_TOKEN;

  const client = twilio(accountSid, authToken);
  const { phone, message } = req.body;
  console.log(phone, message);

  client.messages
    .create({
      body: message,
      to: phone,
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
};

export default sendMessage;
