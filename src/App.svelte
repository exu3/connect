<script>
	import Landing from './components/Landing.svelte'
	import About from './components/About.svelte'
	import Steps from './components/Steps.svelte'
	import Footer from './components/Footer.svelte'
</script>

<main>
	<Landing />
	<About />
	<Steps />
	<Footer />
</main>

<style>
	main {
	 min-height: 100vh;
	}

	@media (min-width: 640px) {
		main {
			max-width: 1550px;
		}
	}
</style>

