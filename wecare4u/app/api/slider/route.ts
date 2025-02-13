import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

// Fisher-Yates Shuffle Algorithm to randomize images
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET() {
  try {
    console.log("API `/api/slider` called");

    const response = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc") // Sorting ensures new images appear
      .max_results(54)
      .execute();

    console.log(
      "Full Cloudinary Response:",
      JSON.stringify(response, null, 2)
    );

    if (!response || typeof response !== "object") {
      console.error("Invalid Cloudinary response:", response);
      return NextResponse.json(
        { error: "Invalid Cloudinary response" },
        { status: 500 }
      );
    }

    const { resources } = response;

    if (!resources || !Array.isArray(resources)) {
      console.warn("No images found in Cloudinary!");
      return NextResponse.json({ error: "No images found" }, { status: 404 });
    }

    let images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    images = shuffleArray(images); // Shuffle before returning

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
  }
}
