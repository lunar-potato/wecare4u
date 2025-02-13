import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET() {
  try {
    const { resources }: { resources: CloudinaryResource[] } =
      await cloudinary.search
        .expression("folder:wecare4u")
        .sort_by("public_id", "desc")
        .max_results(54)
        .execute();

    let images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    images = shuffleArray(images); // Shuffle images before returning

    return NextResponse.json(images);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch images" });
  }
}
