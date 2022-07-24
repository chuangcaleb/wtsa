---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="home">

    <h1 class="page-title">🔄 All Recent Posts</h1>

    {%- if site.poosts.size > 0 -%}
        <ul class="post-list">

            {%- for post in site.poosts reversed-%}

                <li>

                    <span class="post-meta">

                        {{ post.date | date: site.date_format }}

                        <!-- {{ post.date | date: site.date_format }}
                        &nbsp· &nbsp
                        {{ post.date | timeago }} -->

                        {%- if post.category -%}
                            <a class="category-link" href="{{ post.category | regex_replace: '([^A-Za-z0-9 –-] *)', '' | replace: ' ', '-' | relative_url }}">
                                {{ post.category | escape }}
                            </a>
                        {%- endif -%}

                    </span>

                    <a class="post-link" href="{{ post.url | relative_url }}">
                        {{ post.title | escape }}
                    </a>

                    <!-- {% assign ep = post.excerpt | split: '</h1>' %}
					{{ ep[1] }} -->

                </li>

            {%- endfor -%}

        </ul>

    {%- endif -%}

</div>