---
title: Why I built a theme for the Shopify Theme Store
description: tldr; No build process! Pure CSS & JavaScript is cool!
date: 2022-12-24
tags:
  - shopify
layout: layouts/post.njk
ogtype: article
image: /img/post-images/theme-store-highlight-shapes.jpg
excerpt: tldr; No build process! Pure CSS & JavaScript is cool!
author: Brenda Storer
---

About a month ago, I launched my first Shopify theme, <a href="https://themes.shopify.com/themes/whisk/styles/soft" target="_blank" rel="noopener">Whisk</a>, for sale in the Shopify theme store. It was a years worth of work alongside client work, but it was my main work focus for 2022. Why did I go all in with Shopify?

## The opportunity

When I first started working with Shopify in 2018, I immediately loved it. It was the first platform I ever worked on where I felt like I could accomplish anything using the tools I already have in my designer/front-end toolbelt. And I loved how accessible it was for small businesses. At the time, I was still working at <a href="https://thoughtbot.com/" target="_blank" rel="noopener">thoughtbot</a> and we were helping <a href="https://mylola.com/" target="_blank" rel="noopener">Lola</a> with a migration over to Shopify. I inquired then to our contacts within Shopify about becoming a theme partner, and was told that the theme store was currently closed to new submissions and it was notoriously difficult to get a theme approved.

Fast forward to Summer of 2021. Erin Zobitz and I had just wrapped up a full custom Shopify theme build for <a href="https://hivebrands.com/" target="_blank" rel="noopener">Hive Brands</a> and Shopify announced their upgraded <a href="https://www.shopify.com/partners/blog/shopify-online-store" target="_blank" rel="noopener">Online Store 2.0</a>. And even more exciting, they are seeking new themes for the theme store! After working in this industry as a designer/developer since 2009 and doing mostly client work, I was tired. Client work can feel like starting a new job every few months, and when I thought I had found a stable product company to grow with, the world turned upside down in March 2020. I was working then at an established product company at Context Travel. I had only been on the team for about 6 months, but it was the best job I have ever had in tech. The industry was interesting to me, the team was amazing, and I had a boss that was encouraging and challenging me. But as you can imagine, the travel industry got hit the hardest and the fastest at the start of the pandemic, and our whole team was let go. 

The timing was right for me to try something different. I was longing for more control over my work life. Not that contracting doesn't have it's own instabilities, but I really liked the idea of taking a step back from client work and focusing on a project that would create a new and different revenue stream. The pandemic also had been emotionally draining on me personally (as it was for most of us). It seemed like a good time to take a few months to work on my own thing. Time estimation is hard and yeah, I FOR SURE underestimated the effort. It took a year with some breaks and bumps along the way. Besides designing and building the theme itself, I also had to build a demo store and provide documentation.

## The stack
Besides an appreciation for working within Shopify, I was drawn to the approach that Shopify took with their new 2.0 default free theme, <a href="https://github.com/shopify/dawn" target="_blank" rel="noopener">Dawn</a>. 

> Dawn represents a HTML-first, JavaScript-only-as-needed approach to theme development.

Shopify goes into their principles further on the <a href="https://themes.shopify.com/themes/dawn/styles/default/preview" target="_blank" rel="noopener">Dawn</a> Github repo. &ldquo;Progressive enhancement over polyfills, server-rendered, functional and not pixel perfect in every browser, no frameworks, libraries, or dependencies&rdquo;. Themes for sale in their store have to follow <a href="https://shopify.dev/themes/store" target="_blank" rel="noopener">strict requirements around performance and accessiblity</a>. These are all the principles I believed in already, but I hadn't developed without some sort of build process in over a decade. How would that be now in 2022?

Dear reader, it has been awesome. If you haven't been paying close attention, the browser powers that be (Google, Apple, Mozilla, and Microsoft) now work more collaboratively on web standards so there are much fewer browser specific bugs. JavaScript and CSS have been taking cues from the community and bringing in some of the best features from libraries and pre/post-processors like Sass and jQuery. Dawn uses <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank" rel="noopener">JavaScript Custom Elements</a>, which was a new approach for me but it made so much sense immediately. It feels a lot like a stripped down Vue.js or React. <a ref="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank" rel="noopener">CSS Custom Properties</a> take care of most of the benefits I used to get from Sass. The one major downside to not using a build process is that I do not have a test suite. It's something I want to look into and I want to do it the leanest way possilbe, but for now, I'm the only developer on this project so it's not as urgent of a need.

Shopify does offer one tool that makes it easier to create modern interactive experiences with JavaScript without the benefit of state management that you get from libraries like Vue.js or React. It's their <a href="https://shopify.dev/api/section-rendering" target="_blank" rel="noopener">Section Rendering API</a> which uses ajax to rerender updated pieces of the page asyncronously without you having to rewrite the HTML/Liquid in JavaScript.

Now that Whisk is launched I'm not sure where exactly I'm going next, and that's feeling exciting. It was a fun challenge to build my own MVP after preaching the need to start lean to clients for a decade. I definitely don't think I did it perfectly (that journey is its own blog post, coming soon). I have a million ideas about how to grow the theme business, but I also have a lot more time and mental energy to take on client work again and I miss the company and collaboration from working with others. 

Drop me a line and let me know if there's anything you'd be interested in hearing more about related to Shopify, themes, solopreneurship, CSS, soap making, etc.