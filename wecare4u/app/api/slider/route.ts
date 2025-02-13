import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET() {
  try {
    console.log("Fetching slider images from Cloudinary...");

    const response = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc")
      .max_results(10) // Try reducing to test API limits
      .execute();

    console.log("Cloudinary Full Response:", response);

    if (!response || typeof response !== "object") {
      console.error("Invalid Cloudinary response:", response);
      return NextResponse.json({ error: "Invalid Cloudinary response" });
    }

    const { resources } = response;

    if (!resources || !Array.isArray(resources)) {
      console.warn("No images found for the slider!");
      return NextResponse.json({ error: "No images found" });
    }

    let images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    images = shuffleArray(images);

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary Slider Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch slider images" });
  }
}