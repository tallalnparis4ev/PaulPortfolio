import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies?: string[];
  year: number;
}

export default function ProjectTemplate({
  title,
  description,
  longDescription,
  imageUrl,
  technologies,
  year,
}: ProjectProps) {
  return (
    <div className="min-h-screen bg-[#f0ead6] text-[#333] font-mono p-8">
      <Link
        href="/#projects"
        className="inline-block mb-8 bg-[#333] text-[#f0ead6] px-4 py-2 rounded hover:bg-[#555]"
      >
        &lt; Back to Projects
      </Link>
      <div className="max-w-3xl mx-auto bg-[#fff] p-8 rounded-lg shadow-md border-2 border-[#333]">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-4">{description}</p>
        <div className="mb-6">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg border-2 border-[#333]"
          />
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">About this Project</h2>
          <p>{longDescription}</p>
        </div>
        <div className="mb-6">
          {technologies?.length ? (
            <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
          ) : null}
          <ul className="list-disc list-inside">
            {technologies?.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="text-lg">
          <strong>Year:</strong> {year}
        </div>
      </div>
    </div>
  );
}
