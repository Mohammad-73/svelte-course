import sanityClient from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "DevExperience"] | order(startDate desc)'
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(dateAccomplished desc)"
  );

  const projects = rawProjects.map(processProjectEntries);

  return {
    workExperience,
    projects,
  };
};
