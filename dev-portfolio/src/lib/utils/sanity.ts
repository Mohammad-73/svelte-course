import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "ot8li4c6",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-09-29",
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProjects: SanityProject) {
  const builder = imageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProjects.image).url();
  const processProject: ProcessedProject = {
    name: rawProjects.name,
    company: rawProjects.company,
    dateAccomplished: rawProjects.dataAccomplished,
    stack: rawProjects.stack,
    slug: rawProjects.slug,
    projectImageUrl,
    content: rawProjects.content.map(processProjectContent);
  };
}

function processProjectContent(content: RawTextContent | RawImageContent) {
  if (content._type === "block") {
    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender: content.children.map((elem) => elem.text).join("\n"),
    };
    return processedTextContent;
  } else {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();

    const processedImage: ProcessedImageContent = {
      type: "image",
      url: projectImageUrl,
    };
    return processedImage;
  }
}
