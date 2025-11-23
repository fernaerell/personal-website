<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/images/fernaerell.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Fern Aerell</title>
    <meta name="description" content="Fern Aerell — Software Engineer, Creative Technologist">
    <meta name="keywords" content="Fern Aerell, Fern, Aerell, Software Engineer, Creative Technologist, Portfolio">
    <meta name="author" content="Fern Aerell">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Fern Aerell",
        "alternateName": "Aerell",
        "url": "https://fernaerell.github.io",
        "sameAs": [
            "https://www.linkedin.com/in/fernaerell",
            "https://github.com/fernaerell",
            "https://www.youtube.com/@fernaerell",
            "https://www.youtube.com/@aerelltech",
            "https://www.youtube.com/@aerellstudio",
            "https://www.youtube.com/@aerellgamers",
            "https://instagram.com/fernaerell",
            "https://www.threads.com/@fernaerell",
            "https://x.com/fernaerell",
            "https://tiktok.com/@fernaerell",
            "https://www.facebook.com/fernaerelll"
        ]
    }
    </script>
    <meta name="google-site-verification" content="78yIckYlGCBkFct9KzhT_3qFoimkJfKHcjSIEekwRT0" />
</svelte:head>

{@render children()}
