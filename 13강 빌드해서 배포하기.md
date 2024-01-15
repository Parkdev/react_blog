### 하위경로에 배포하고 싶다면
1. package.json을 오픈
2. hompage에 추가경로를 기입
```
"homepage": "http://localhost/blog",
```
3. 리엑트 라우터가 설치되어있으면 basename=""속성을 추가하는게 라우팅이 잘됨
- 자세한 내용은 https://create-react-app.dev/docs/deployment/#building-for-relative-paths

### 별 문제가없다면
1. html cs js파일로 바꿔주는 build를 해야한다.
```
npm run build 
```