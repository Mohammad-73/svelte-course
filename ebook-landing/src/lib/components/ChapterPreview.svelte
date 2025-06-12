<script>
  const chapters = [
    {
      number: 1,
      title: " Navigating the Spanish bureaucracy",
      strapline: "Understanding Visas, Residency, and Legal Essentials",
      excerpt:
        "Moving to Spain involves navigating a labyrinth of bureaucratic processes that can feel overwhelming at first. This chapter breaks down the essential steps required to secure your visa, establish residency, and handle other legal formalities. Whether you're planning a short-term stay or seeking permanent residency, understanding Spain's legal framework is crucial. We'll explore the different types of Visas available, from student to work visas, and provide tips on how to streamline your application process. additionally, this chapter covers essential documentation, such as obtaining a Numero de Identidad de Extranjero (NIE), which is your key to unlocking many services in Spain.",
    },
    {
      number: 2,
      title: "Finding Your Dream Home in Spain",
      strapline:
        "From Coastal Villas to Urban Apartments: Where and How to Live",
      excerpt:
        "Spain offers a diverse array of living options, from picturesque coastal towns to bustling city centers. This chapter is your guide to finding...",
    },
    {
      number: 3,
      title: "Mastering the Spanish Job Market",
      strapline: "Strategies for Employment and Freelancing in a New Culture",
      excerpt:
        "Finding a job in Spain can be a challenging but rewarding experience, especially if you're not familiar with the local job market...",
    },
    {
      number: 4,
      title: "Embracing the Spanish Lifestyle",
      strapline: "Cultural Norms, Social Etiquette, and Making New Connections",
      excerpt:
        "Moving to Spain isn't just about changing your location; it's about immersing yourself in a new way of life. This chapter explore...",
    },
  ];
</script>

<section class="chapter-preview default-margin">
  <h2 class="mb-l">What you're getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            class="chapter-title"
            aria-controls={`chapter-info-${chapter.number}`}
            aria-expanded="true"
          >
            <h3>Chapter {chapter.number}: {chapter.title}</h3>
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="chapter-strapline italic mb-s">
        Understanding Visas, Residency, and Legal Essentials
      </h3>
      <p>
        Moving to Spain involves navigating a labyrinth of bureaucratic
        processes that can feel overwhelming at first. This chapter breaks down
        the essential steps required to secure your visa, establish residency,
        and handle other legal formalities. Whether you're planning a short-term
        stay or seeking permanent residency, understanding Spain's legal
        framework is crucial. We'll explore the different types of Visas
        available, from student to work visas, and provide tips on how to
        streamline your application process. additionally, this chapter covers
        essential documentation, such as obtaining a Numero de Identidad de
        Extranjero (NIE), which is your key to unlocking many services in Spain.
      </p>
    </div>
  </div>
</section>

<style>
  .chapter-preview {
    padding: 80px 0;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }

  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
