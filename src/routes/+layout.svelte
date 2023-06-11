<script>
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl, A, DarkMode } from 'flowbite-svelte'
  import '../app.postcss'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/src/assets/logo.png"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Library Browser
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/library">Libraries</NavLi>
    <NavLi><DarkMode /></NavLi>
  </NavUl>
</Navbar>

<div class='p-8' style='max-width: 1200px; margin: 0 auto'>
  <slot />
  <!-- <A href='https://github.com/iiroki/svelte-library-browser' target='_blank'>
    <img
      src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      alt='GitHub link'
      style='max-height: 60px'
    />
  </A> -->
</div>

