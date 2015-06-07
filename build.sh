#!bash

repo='git@github.com:spalger/speakeasy.git'
root="$(pwd)"
site="$root/gh-pages"

function checkout {
  git clone "$repo" "$site"
}

function build {
  cd "$site"
  git checkout gh-pages
  cd "$root"
  jekyll build
}

function push {
  cd "$site"
  git add -A
  git commit -m 'build'
  git push origin gh-pages
}

test -d "$site" || checkout
build
push