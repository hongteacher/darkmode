# 깃 페이지 만드는 순서

1. 터미널 git add gh-pages
2. package.json scirpt에 아래내용 추가
```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```
3.package.json
```
"homepage" : 계정이름.github.io/리포지스토리 이름/
```
https://hongteacher.github.io/darkmode

미리 git push 하기

yarn deploy  / npm deploy