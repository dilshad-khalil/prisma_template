import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //get prisma to fetch the posts
    const data = await prisma.post.findMany();
    return res.status(200).json(data);
  } catch (err: any) {
    console.log(err.message);
    return res.status(500).json(err);
  }
}
