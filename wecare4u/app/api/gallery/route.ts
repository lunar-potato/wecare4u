import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    console.log("Fetching images from Cloudinary...");

    const response = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc")
      .max_results(54)
      .execute();

    console.log("Cloudinary API Response:", response);

    if (!response || typeof response !== "object") {
      console.error("Invalid Cloudinary response:", response);
      return NextResponse.json({ error: "Invalid Cloudinary response" });
    }

    const { resources } = response;

    if (!resources || !Array.isArray(resources)) {
      console.warn("No images found!");
      return NextResponse.json({ error: "No images found" });
    }

    let images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch images" });
  }
}