<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";

  export let markdown: string;
</script>

<SvelteMarkdown source={markdown}/>
