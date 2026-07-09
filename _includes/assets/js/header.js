<header class="site-header">
  <div class="container">
    <h1 class="site-title">
      <a href="{{ '/' | relative_url }}">{{ site.title }}</a>
    </h1>

    <!-- Mobile toggle button -->
    <button class="site-nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-nav">
      <span class="hamburger" aria-hidden="true"></span>
    </button>

    <nav id="site-nav" class="site-nav" role="navigation">
      {% for p in site.header_pages %}
        {% assign page_obj = site.pages | where: "path", p | first %}
        {% if page_obj %}
          <a href="{{ page_obj.url | relative_url }}" class="site-nav__link{% if page.path == page_obj.path %} active{% endif %}">{{ page_obj.title }}</a>
        {% endif %}
      {% endfor %}
    </nav>
  </div>
</header>
