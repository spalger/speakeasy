#!bash

repo='git@github.com:spalger/speakeasy.git'
root="$(pwd)"
site="$root/_site"

function checkout {
  cd "$root"
  test -d "$site" && rm -rf "$site"
  git clone "$repo" "$site"
  cd "$site"
  git remote add dokku dokku@dokku:spalger-blog
}

function build {
  cd "$root"
  jekyll build
}

function push {
  cd "$site"
  git add -A
  git commit -m 'build'
  git push dokku
}

test -d "$site/.git" || checkout
build
push