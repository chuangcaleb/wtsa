---
layout: default
---

<div class="browse">

	<h1 class="page-title">🗂 Browse Categories</h1>

  
	{%- if site.poosts.size > 0 -%}
	
	  <ul class="post-list">
  
		{%- for page in site.paages-%}
		  {%- if page.layout == "category" -%}
			<li>
				<a class="post-link" href="{{ page.url | relative_url }}">
				  {%- if page.layout == "category" -%}
				  <!-- Category:&nbsp -->
				  {%- endif -%}
				  {{ page.title | escape }}
				</a>
  
  
				{% assign ep = page.excerpt | split: '</h1>' %}
				{{ ep[1] }}
  
			</li>
		  {%-endif-%}
		{%- endfor -%}
	  </ul>
  
	{%- endif -%}
</div>
