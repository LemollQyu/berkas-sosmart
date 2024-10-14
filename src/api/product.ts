import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  // Tambahkan field lain yang sesuai dengan struktur datamu
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page = 1, category = 1 } = req.query; // Mengambil parameter query
  // Ganti dengan baseUrl kamu

  try {
    const response = await axios.get<{ data: Product[] }>(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/product`,
      {
        params: {
          page,
          category,
        },
      }
    );

    // Mengirim response API ke frontend
    res.status(200).json(response.data);
  } catch (error) {
    // Error handling jika API request gagal
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch product data" });
  }
}
