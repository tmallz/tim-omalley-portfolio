<script>
    import "../app.css";
    import Navbar from "./lib/Navbar/Navbar.svelte";
    import BottomNav from "./lib/BottomNav/BottomNav.svelte";
  </script>
  
  <Navbar />

<main>
	<slot />
</main>

<BottomNav />