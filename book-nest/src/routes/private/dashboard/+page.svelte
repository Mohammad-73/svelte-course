<script lang="ts">
  import { getUserState } from "$components/state/user-state.svelte";

  let userContext = getUserState();
  let { allBooks } = $derived(userContext);
</script>

<ul>
  {#each allBooks as book}
    <li>{book.title}</li>
  {/each}
</ul>
