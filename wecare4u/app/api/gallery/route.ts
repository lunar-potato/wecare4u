import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

// Define the expected Cloudinary response type
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

interface CloudinaryResponse {
  resources?: CloudinaryResource[];
}

export async function GET() {
  try {
    console.log("API `/api/slider` called");

    // Debug: Log Cloudinary environment variables
    console.log("Cloudinary Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);

    // Check if Cloudinary environment variables exist
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      console.error("CLOUDINARY_CLOUD_NAME is missing!");
      return NextResponse.json(
        { error: "Cloudinary cloud name is not set in environment variables" },
        { status: 500 }
      );
    }

    // Fetch images from Cloudinary
    const response: CloudinaryResponse = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc")
      .max_results(54)
      .execute();

    // Log Cloudinary response for debugging
    console.log("Full Cloudinary Response:", JSON.stringify(response, null, 2));

    // Check if the response is valid
    if (!response || typeof response !== "object") {
      console.error("Invalid Cloudinary response:", response);
      return NextResponse.json(
        { error: "Invalid Cloudinary response" },
        { status: 500 }
      );
    }

    const { resources } = response;

    // Handle empty images array
    if (!resources || !Array.isArray(resources)) {
      console.warn("No images found in Cloudinary!");
      return NextResponse.json({ error: "No images found" }, { status: 404 });
    }

    // Format the images array
    const images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    return NextResponse.json(images);
  } catch (error: unknown) {
    console.error("Cloudinary Fetch Error:", error);

    // Ensure the error message is safely accessed
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { error: "Failed to fetch slider images", message: errorMessage },
      { status: 500 }
    );
  }
}
