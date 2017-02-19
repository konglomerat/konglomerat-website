# Konglomerat Website

## Development

The Konglomerat Website is build with **Neos** which is based on the php framework **Flow** For developping the frontend we use **nvm** and **npm**.

### Flow and Neos Requirements

The most important requirement is **php7** and the matching **php-cli**. This the reason why your hoster might not allow running Neos. All other requiremts can be found in the documentation:

http://flowframework.readthedocs.io/en/stable/TheDefinitiveGuide/PartII/Requirements.html (Section PHP)

https://neos.readthedocs.io/en/stable/GettingStarted/Installation.html

For development you do not need a webserver like Apache and Nginx as we are using the build in php webserver.

**For production however using a webserver is highly adviced.**

### Setup Flow & Neos

1. pull the repo
2. run `composer install` inside the source root
3. start the development server `flow server:run`
	* you might run into error if:
		* you have the wrong php version
		* some php modules are missing
4. Open the displayed url in your browser and follow the install instructions. When asked to create or import a new site, select "Konglomerat.Website" (https://neos.readthedocs.io/en/stable/GettingStarted/Installation.html#the-neos-setup-tool)

Now you should be able to login to the backend.

### Setup Frontend Development

goto `./Packages/Sites/Konglomerat.Website`

Install the node version manager to always get the correct node version.
-> https://github.com/creationix/nvm

you can now run `npm install` and then `npm run watch`. For the other commands check out the scripts section of the package.json.

HINT: if you do not get any green meessages right after starting the watcher change someting in `./Resources/Private/Scss`

### Folder Structure

./Resources -> all configurations, templates, SCSS, JavaScript, ...

./Resources/Public -> images, JavaScript, everything that is publicly available

./Resources/Private -> NodeTypes, Fusion Scripts, Templates, SCSS

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

## Contributing

Currently you can directly push to master for faster development. Please only do so if you are absolutely sure you did not break something. Otherwise please work on a separate branch and create a pull request.

**In the future the master will be protected.**

## Getting Help

### Documentations

http://neos.readthedocs.io/en/stable/index.html

### Support

https://www.neos.io/docs-and-support/support.html

