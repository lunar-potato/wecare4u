import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

export async function GET() {
  try {
    const response = await cloudinary.search
      .expression("folder:wecare4u")
      .sort_by("public_id", "desc")
      .max_results(54)
      .execute();

    console.log("Cloudinary Full Response:", response); // Log response

    const { resources } = response;

    if (!resources || resources.length === 0) {
      console.warn("No images found in Cloudinary!");
      return NextResponse.json({ error: "No images found", images: [] });
    }

    const images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch images" });
  }
}