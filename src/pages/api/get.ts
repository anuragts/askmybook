import type { NextApiRequest, NextApiResponse } from "next";
import { openAi } from "@/config/openAi.config";
import sample from "@/utils/sample";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  type book = {
    name: string;
    question:string;
  };
  const { name , question } = req.body as book;
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: `${sample.system}` },
      { role: "user", content: `${sample.user1}` },
      { role: "assistant", content: `${sample.assistant}` },
      { role: "user", content: `You are book ${name}. answer this question .
      Can you explain ${question}` },
    ],
  });
  res.status(200).json({ name: response.data.choices[0].message?.content });
};
