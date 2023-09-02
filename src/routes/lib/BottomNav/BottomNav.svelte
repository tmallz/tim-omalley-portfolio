<script>
	import { base } from '$app/paths';
	import { spring } from 'svelte/motion';

	const emailScale = spring(1);
	const githubScale = spring(1);
	const linkedInScale = spring(1);

	const handleHover = scale => {
		scale.set(1.2);
	};

	const handleUnhover = scale => {
		scale.set(1);
	};

	const handleEmailClick = () => {
		window.location.href =
			'mailto:tomalley24@gmail.com?subject=Hello%20saw%20your%20portfolio%20and%20to%20get%20in%20touch.';
	};

	const handleGithubClick = () => {
		window.open('https://github.com/tmallz', '_blank').focus();
	};

	const handleLinkedInClick = () => {
		window
			.open('https://www.linkedin.com/in/timothy-o-malley-b257bbb4/', '_blank')
			.focus();
	};
</script>

<div class="btm-nav">
	<button on:click={handleEmailClick}>
		<img src="{base}/images/email.svg" alt="email" class="h-5 w-5" />
	</button>

	<button on:click={handleGithubClick}>
		<img src="{base}/images/github.svg" alt="github" class="h-5 w-5" />
	</button>

	<button on:click={handleLinkedInClick}>
		<img src="{base}/images/linkedin.svg" alt="linkedin" class="h-5 w-5" />
	</button>
</div>

<style>
	img {
		transition: transform 0.3s ease;
	}
	img:hover {
		transform: scale(1.2);
	}
</style>
