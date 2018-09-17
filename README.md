# Reading time plugin for Eleventy

A non-dependency reading time plugin for [Eleventy](https://www.11ty.io/) static site generator. This plugin provides a template tag which prints the number of minutes or seconds required to read the given text.

## Install

```shell
npm install --save eleventy-plugin-reading-time
```

## Usage

In your Eleventy config file (defaults to `.eleventy.js`):

```js
const readingTime = require('eleventy-plugin-reading-time');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(readingTime);
};
```

Now you can use the `readingTime` filter in your Nunjuck templates:

```html
<span>About {{ someTextContent | readingTime } reading time}</span>
```

prints

```html
<span>About 6 min reading time</span>
```

Example `post.njk` template:

```html
<article role="article">
    <header>
        <h1>{{ title }}</h1>
        <p>
            <span class="meta__stats">About {{ content | readingTime }} reading time</span>
        </p>
    </header>

    <div>
        {{ content | safe }}
    </div>
</article>
```

If you're in a collection loop, this filter accepts a collection object too:

```html
{% for post in posts %}
    <li>
        <h1>{{post.title}}</h1>
        <p>About {{ post | readingTime }} reading time.</p>
    </li>
{% endfor %}
```

## To Do

- [ ] Support more template engines.

## License

MIT.
