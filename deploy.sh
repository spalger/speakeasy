#!bash

root="$(pwd)"
site="$root/_site_production"

function checkout {
  cd "$root"
  test -d "$site" && rm -rf "$site"
  git clone dokku@dokku:spalger-blog "$site"
}

function build {
  cd "$root"
  jekyll build --config _config.yml,_config.production.yml
}

function push {
  cd "$site"
  git add -A
  git commit -m 'build'
  git push origin
}

test -d "$site/.git" || checkout
build
push