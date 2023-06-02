<script>
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte'
  import "../app.postcss";
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
    <NavLi href="/search">Search</NavLi>
  </NavUl>
</Navbar>

<slot />
