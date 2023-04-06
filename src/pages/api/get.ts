import type { NextApiRequest, NextApiResponse } from "next";
import { openAi } from "@/config/openAi.config";
import sample from "@/utils/sample";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  type book = {
    book:string;
    author:string;
    question:string;
  };
  const { book , question , author } = req.body as book;
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: `${sample.system}` },
      { role: "user", content: `${sample.user1}` },
      { role: "assistant", content: `${sample.assistant}` },
      { role: "user", content: `The title of the book is ${book} by ${author || ""}.  answer this question .
      Can you explain ${question}` },
    ],
  });

  // console.log(`${book} by ${author} and ${question} `)
  res.status(200).json(response.data.choices[0].message?.content || "");
};
