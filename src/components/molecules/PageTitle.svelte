<script lang="ts">
  import { page } from "$app/stores";

  let title = "Trivernis";
  let secondaryTitle: string | undefined = undefined;

  let titleHref = "/";
  let secondaryTitleHref = "/";

  page.subscribe((pageData) => {
    const path = pageData.url.pathname;

    if (path.startsWith("/blog")) {
      title = "Blog";
      secondaryTitle = "Trivernis";
      titleHref = "/blog"
    } else {
      title = "Trivernis";
      secondaryTitle = undefined;
    }
  });
</script>

<div class="page-title" class:with-secondary={secondaryTitle}>
  {#if secondaryTitle}
    <h6>
      <a class="unstyled-link" href={secondaryTitleHref}>{secondaryTitle}</a>
    </h6>
  {/if}
  <h1><a class="unstyled-link" href={titleHref}>{title}</a></h1>
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";
  
  @layer component {
    .page-title {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      font-size: 3em;
      text-align: center;
      line-height: 1.5em;
      font-family: var(--font-page-title);
      color: color-mix(
        in srgb,
        var(--color-primary),
        var(--color-foreground) 90%
      );
      text-shadow: 0px 0px 0.5em var(--color-primary);
      user-select: none;

      @include portrait {
        font-size: 1.8em;
      }

      h1,
      h6 {
        width: 100%;
        cursor: pointer;
      }
      a:hover {
        background: inherit;
      }

      margin: 1em 0 0.75em 0;

      &.with-secondary {
        margin-top: 0;
      }
    }
  }

  .page-title {
    h1 {
      margin: 0;
    }
    h6 {
      margin: 0;
      font-size: 0.5em;
    }
  }
</style>
