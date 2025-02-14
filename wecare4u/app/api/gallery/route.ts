import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    console.log("API `/api/slider` called");

    const response = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc")
      .max_results(54)
      .execute();

    console.log("Full Cloudinary Response:", JSON.stringify(response, null, 2));

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

    const images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    return NextResponse.json(images);
  } catch (error: unknown) {
    console.error("Cloudinary Fetch Error:", error);

    // Check if error is an instance of Error to safely access .message
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { error: "Failed to fetch slider images", message: errorMessage },
      { status: 500 }
    );
  }
}