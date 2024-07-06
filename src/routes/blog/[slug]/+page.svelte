<script lang="ts">
  import Error from "../../../components/molecules/Error.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<code>{JSON.stringify(data.post, null, 2)}</code>

{#if data.error}
  <Error error={data.error} />
{/if}
