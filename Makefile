
checkout:
	git clone . _site
	cd _site
	git co gh-pages

publish:
	test -d _site || checkout
	jekyll build
	cd _site
	git add -A
	git commit -m 'build'
	git push origin