
checkout:
	git clone . _site
	cd _site
	git checkout gh-pages

publish:
	test -d _site || make checkout

	cd _site && git checkout gh-pages

	jekyll build

	cd _site && git add -A && git commit -m 'build' && git push origin