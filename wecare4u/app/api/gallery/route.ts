import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

export async function GET() {
  try {
    const { resources }: { resources?: CloudinaryResource[] } =
      await cloudinary.search
        .expression("folder:wecare4u")
        .sort_by("public_id", "desc")
        .max_results(54)
        .execute();

    if (!resources || !Array.isArray(resources)) {
      console.error("Cloudinary API returned an invalid response:", resources);
      return NextResponse.json([]); // Always return an array
    }

    const images = resources.map((resource) => ({
      id: resource.public_id,
      url: resource.secure_url,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return NextResponse.json([]); // Always return an empty array on error
  }
}
