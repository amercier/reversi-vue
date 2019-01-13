<template>
  <main>
    <div class="about">
      <h1 class="about-title">Reversi</h1>
      <p class="about-paragraph">
        Created by
        <a
          class="about-link"
          href="https://github.com/amercier"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Alex Mercier</a
        >
        for
        <a
          class="about-link"
          href="https://www.backmarket.fr/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Back Market</a
        >.
      </p>
      <h2 class="about-subtitle">Development</h2>
      <p class="about-paragraph">
        This game was developed with
        <a
          class="about-link"
          href="https://vuejs.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Vue.js 2</a
        >, using
        <a
          class="about-link"
          href="https://cli.vuejs.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Vue CLI 3</a
        >
        and
        <a
          class="about-link"
          href="https://vuex.vuejs.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Vuex</a
        >.
      </p>
      <p class="about-paragraph">
        Source code is available on
        <a
          class="about-link"
          href="https://github.com/amercier/reversi-vue"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Github</a
        >.
      </p>
      <h2 class="about-subtitle">Credits</h2>
      <p class="about-paragraph">
        Seamless wood textures by
        <a
          class="about-link"
          href="https://www.deviantart.com/siberiancrab"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >SiberiaCrab</a
        >
        and
        <a
          class="about-link"
          href="https://fr.pngtree.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >PNG Tree</a
        >.
      </p>
      <p class="about-paragraph">
        <a
          class="about-link"
          href="https://www.npmjs.com/package/reversi"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >reversi</a
        >
        by
        <a
          class="about-link"
          href="http://kjirou.net/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Koujirou Ishii</a
        >.
      </p>
      <p>Thank you so much for your hard work!</p>
    </div>
  </main>
</template>

<style lang="scss">
.about {
  max-width: 20em;
  margin: 2em auto;
  text-align: center;
  line-height: 2;

  &-title {
    font-size: 3em;
  }

  &-subtitle {
    margin: 1em 0;
    font-size: 2em;
  }

  &-paragraph {
    margin-bottom: 2em;
  }

  &-link {
    text-decoration: underline;
  }
}
</style>
