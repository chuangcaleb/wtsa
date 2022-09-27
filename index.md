---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: whatsthestoryabout
---

<div class="home">

    <h1 class="page-title">🔄 All Recent Posts</h1>

    {%- if site.poosts.size > 0 -%}

        <ul class="post-list list-unstyled p-0">

            {%- for post in site.poosts reversed-%}

                <li>

                    <span class="post-meta">

                        <span class="me-2">
                            {{ post.date | date: site.date_format }}
                        </span>

                        {%- if post.wtsa_categories -%}

                            {% for category in post.wtsa_categories %}
                                <a class="category-link" href="{{ category | regex_replace: '([^A-Za-z0-9 –-] *)', '' | replace: ' ', '-' | relative_url }}">{{ category | escape }}</a>
                            {% endfor %}

                        {%- endif -%}

                    </span>

                    <br>

                    <a class="post-link fs-4" href="{{ post.url | relative_url }}">
                        {{ post.title | escape }}
                    </a>

                    <!-- {% assign ep = post.excerpt | split: '</h1>' %}
        {{ ep[1] }} -->

                </li>

            {%- endfor -%}

        </ul>

    {%- endif -%}

</div>
