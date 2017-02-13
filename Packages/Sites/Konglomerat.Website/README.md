# Sandstorm Website

## First Setup

* composer install
* flow server:run
* cd Packages/Sites/Sandstorm.PublicWebsite
* npm install

## Development

* look into package.json for sass watch/build

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