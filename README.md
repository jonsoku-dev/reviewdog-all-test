# GitHub Actions with reviewdog-all

이 프로젝트는 [reviewdog-all](https://github.com/jonsoku-dev/reviewdog-all) GitHub Action을 사용하여 코드 품질을 검사합니다.

## 설정

프로젝트는 다음과 같은 파일들로 구성되어 있습니다:

- `.github/workflows/reviewdog.yml`: GitHub Actions 워크플로우 설정
- `.reviewdog.yml`: reviewdog 설정 파일

## 기능

- Pull Request 생성 시 자동으로 코드 리뷰 실행
- 다양한 코드 품질 검사 도구 실행
- GitHub PR에 자동으로 리뷰 코멘트 추가

## 사용 방법

1. Pull Request를 생성하면 자동으로 reviewdog가 실행됩니다.
2. 코드 품질 검사 결과가 PR에 자동으로 코멘트로 추가됩니다. 