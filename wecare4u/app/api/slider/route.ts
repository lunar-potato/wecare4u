import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

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

    // Debug: Log Cloudinary environment variables
    console.log("Cloudinary Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);

    // Ensure environment variables are loaded in Vercel
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      console.error("CLOUDINARY_CLOUD_NAME is missing!");
      return NextResponse.json(
        { error: "Cloudinary cloud name is not set in environment variables" },
        { status: 500 }
      );
    }

    const response = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc") // Sorting ensures new images appear first
      .max_results(54)
      .execute();

    // Debug: Log Cloudinary response
    console.log(
      "✅ Full Cloudinary Response:",
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

    images = shuffleArray(images); // Shuffle images before returning

    return NextResponse.json(images);
  } catch (error: unknown) {
    console.error("Cloudinary Fetch Error:", error);

    // Ensure error.message is safely accessed
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { error: "Failed to fetch slider images", message: errorMessage },
      { status: 500 }
    );
  }
}
