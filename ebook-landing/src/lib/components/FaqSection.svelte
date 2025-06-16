<script>
  import { FaqItem, Button } from "$components";
  import twitterIcon from "$assets/icons/twitter.webp";

  const faqs = [
    {
      question: "What will I learn from this ebook?",
      answer:
        " This ebook provides a comprehensive guide to relocating to Spain, covering everything from securing the right visa and navigating Spain's legal system to finding the perfect place to live and integrating into the local culture. Whether you're moving for work, study, or retirement, this guide equips you with the essential knowledge and practical steps to make your transition as smooth as possible.",
    },
    {
      question: "Who is this ebook for?",
      answer:
        "This ebook is perfect for anyone considering a move to Spain, whether you're planning a short-term stay or a permanent relocation. It's...",
    },
    {
      question: "How much does the ebook cost?",
      answer:
        "The ebook is priced at $10. This one-time purchase grants you immediate access to all the content, including detailed chapters...",
    },
    {
      question: "Is the information in the ebook up-to-date?",
      answer:
        "Yes, the ebook is regularly updated to reflect the latest changes in Spanish immigration laws, visa requirements, and other relevant ...",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Absolutely, We offer a 30-day money-back guarantee. If you feel that the ebook did not meet your expectations or didn't provide the value...",
    },
  ];

  let questionCurrentlyExpanded = $state(-1);

  function onclick(index) {
    if (questionCurrentlyExpanded === index) {
      questionCurrentlyExpanded = -1;
    } else {
      questionCurrentlyExpanded = index;
    }
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Frequently asked question</h2>
  <div class="faq-container">
    {#each faqs as faq, index}
      <FaqItem
        {faq}
        isExpanded={index === questionCurrentlyExpanded}
        onclick={() => onclick(index)}
      />
    {/each}
  </div>
  <div class="additional-info">
    <Button class="mt-s">BUY NOW</Button>
    <p class="mt-m">Any other question?</p>
    <a href="https://x.com"
      ><p>
        Hit me up on twitter <img
          src={twitterIcon}
          class="twitter-icon"
          alt=""
        />
      </p></a
    >
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
