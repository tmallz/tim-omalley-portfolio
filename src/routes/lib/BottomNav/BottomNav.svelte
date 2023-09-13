<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			const emailPath = document.querySelectorAll('.email-path');
			emailPath.forEach(path => {
				path.style.strokeDashoffset = '0';
			});
		}, 0);
	});

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
		<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
		<svg
			stroke="#007BFF"
			stroke-width="5"
			fill="none"
			height="800px"
			width="800px"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 64 64"
			enable-background="new 0 0 64 64"
			xml:space="preserve"
			class="h-10 w-10"
		>
			<path
				class="path"
				d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
			h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
			L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
			L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
			C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
			 M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
			c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
			l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
			/>
		</svg>
	</button>

	<button on:click={handleGithubClick}>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="w-10 h-10"
			stroke-width="5"
			><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/><g id="SVGRepo_iconCarrier">
				<path
					class="path"
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
					stroke="#007BFF"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					class="path"
					d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
					stroke="#007BFF"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					class="path"
					d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
					stroke="#007BFF"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g></svg
		>
	</button>

	<button on:click={handleLinkedInClick}>
		<svg
			class="w-10 h-10"
			height="60px"
			version="1.1"
			viewBox="0 0 60 60"
			width="60px"
			stroke-width="5"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><title /><desc /><defs /><g
				fill="none"
				fill-rule="evenodd"
				id="Page-1"
				stroke="none"
				stroke-linejoin="round"
				stroke-width="1"
				><g
					id="Linkedin"
					stroke="#007BFF"
					stroke-width="2"
					transform="translate(1.000000, 1.000000)"
					><path
						class="path"
						d="M51,33.6902 L51,49.0002 L41.146,49.0002 L41.146,34.7492 C41.146,31.0202 39.606,28.4772 36.217,28.4772 C33.623,28.4772 32.179,30.1942 31.511,31.8462 C31.257,32.4442 31.298,33.2702 31.298,34.1002 L31.298,49.0002 L21.535,49.0002 C21.535,49.0002 21.662,23.7602 21.535,21.4652 L31.298,21.4652 L31.298,25.7872 C31.875,23.8972 34.996,21.2022 39.971,21.2022 C46.147,21.2022 51,25.1592 51,33.6902 L51,33.6902 Z"
						id="Stroke-18"
					/><polygon
						class="path"
						id="Stroke-19"
						points="7.543 49 16.231 49 16.231 21.466 7.543 21.466"
					/><path
						path="path"
						d="M16.7815,13.3799 C16.7815,15.7979 14.9335,17.7149 11.9735,17.7149 L11.9135,17.7149 C9.0595,17.7149 7.2115,15.8069 7.2115,13.3849 C7.2115,10.9159 9.1145,9.0499 12.0285,9.0499 C14.9335,9.0499 16.7215,10.9119 16.7815,13.3799 L16.7815,13.3799 Z"
						id="Stroke-20"
					/><path
						class="path"
						d="M54,58 L4,58 C1.791,58 0,56.209 0,54 L0,4 C0,1.791 1.791,0 4,0 L54,0 C56.209,0 58,1.791 58,4 L58,54 C58,56.209 56.209,58 54,58 L54,58 Z"
						id="Stroke-103"
					/></g
				></g
			></svg
		>
	</button>
</div>

<style>
	.btm-nav img,
	.btm-nav svg {
		transition: transform 0.3s ease;
	}
	.btm-nav img:hover,
	.btm-nav svg:hover {
		transform: scale(1.2);
	}

	.path {
		stroke-dasharray: 250;
		stroke-dashoffset: 250;
		animation: draw 5s forwards;
	}
	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
