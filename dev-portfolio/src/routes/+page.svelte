<script>
  import { AboutMeSection, HeroSection } from "$components";

  const { data } = $props();
  let { workExperience } = data;

  $inspect(data);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
