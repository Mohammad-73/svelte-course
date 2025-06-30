<script>
  import { AboutMeSection, HeroSection } from "$components";

  const { data } = $props();
  let { workExperience, projects } = data;

  $inspect(data);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
