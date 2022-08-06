# whatsthestoryabout blog site

## Kanban

### Todo

- cleanup scss
- remove transition for reloading page, only transition for clicking button
- jekyll github actions
- populate paages in md again, so their generated headers render in toc?
- instead: another custom toc

### Doing

- sidebarBody to ease transition in sliding sidebar

### Completed

- linktree to local page
- better related metadata (tags system)
- positioning nav button
- offcanvas anchor in mobile to pop offcanvas
- navigation offcanvas
- toc
- dark mode

<!--
### Archived

-

-->

<!--
	{% comment %} {% assign content_list = content | split: "
		<hr />
		" %} {% for sect in content_list %}
		<section>
			{{ sect }}
			<hr />
		</section>
		{% endfor %} {% endcomment %}
 -->

 	<!-- {%- if page.categories -%}
        <br/>
        Category:
        <a class="category-link" href="{{ page.category | replace: ' ', '-' | relative_url }}">
            {{ page.category | escape }}
        </a>

        {% assign category = page.categories[0] %}
        {% assign posts = site.poosts | where: "category", category %}

        {% for post in posts %}
            {% if post.url == page.url %}
                {% assign post_index0 =forloop.index0 %}
                {% assign post_index1 = forloop.index %}
            {% endif %}
        {% endfor %}

        {% for post in posts %}

            {% if post_index0 == forloop.index %}
                {% assign prev_post = post %}
            {% endif %}
            {% if post_index1 == forloop.index0 %}
                {% assign next_post = post %}
            {% endif %}

        {% endfor %}
        {% assign category = page.categories[0] %}
        {% assign posts = site.collections | where: "category", category %}
        {% if prev_post %}
            <br/>&#8672;&nbsp;Previous:
            <a href="{{ prev_post.url | relative_url }}">
                {{prev_post.title}}
            </a>
        {% endif %}

        {% if next_post %}
            <br/>&#8674;&nbsp;Next:
            <a href="{{ next_post.url | relative_url}}">{{next_post.title}}
            </a>
        {% endif %}
    {%- endif -%} -->
