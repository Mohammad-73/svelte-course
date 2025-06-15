<script>
  import { FaqItem, Button } from "$components";
  import twitterIcon from "$assets/icons/twitter.webp";
</script>

<section class="faq-section">
  <h2 class="mb-l">Frequently asked question</h2>
  <div class="faq-container">
    <FaqItem />
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
