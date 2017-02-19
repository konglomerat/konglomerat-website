# Konglomerat Website

## First Setup

1. pull the repo
2. inside your source root run `composer install`
3. start the development server `flow server:run`

Open the displayed url in your browser ;)

## Setup UI build

We use `nvm` and `npm`

`cd Packages/Sites/Konglomerat:Website`

Install nvm accoriding to the following instruction -> https://github.com/creationix/nvm


## Build/Deployment


## SCSS Concepts

* for naming -> http://getbem.com/introduction/
* for structure -> http://bradfrost.com/blog/post/atomic-web-design/
* for sorting style declaration (empty line after each section)
	1. reset mixins (e.g. @include reset-spacing())
	2. box (e.g. display, top, left, width, height, @include space(), ...)
	3. border (e.g. border-color, border, ...)
	4. background (e.g. background, background-image, ...)
	5. type (e.g. @include type-setting(), font-family, color, ... )
	6. other (e.g. transition, cursor, ...)