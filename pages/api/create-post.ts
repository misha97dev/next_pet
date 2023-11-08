import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type postProps = {
  title: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    if (!post.title.length) {
      return res.status(500).json({ message: "Title is required" });
    }
    const data = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
