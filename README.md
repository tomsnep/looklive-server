##Jake Archibald on Performance & Service Worker

#####Don't rely on javascript for al the rendering
add async to the script tag:
```
<script src="app.js" async></script>
```
#####Render only the styles needed for the first render

[use loadCSS](https://github.com/filamentgroup/loadCSS) 
```
<script>
	function loadCSS() { ... }
	function onloadCSS() { ... }
</script>
<main class="article" style="display:none">
	<script>
		onloadCSS(loadCSS('style.css'), function() {
			document.querySelector('.article').style.display = '';
		});
	</script>
	<noscript>
		<link rel="stylesheet" href="style.css">
	</noscript>
</main>

##### Use a service worker
##### Using Stream service api 
##### Add "read offline" button for the user





