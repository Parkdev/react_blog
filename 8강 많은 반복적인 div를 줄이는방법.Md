### 반복 배우기전에 알아야 할 것 : map
```js
  [1,2,3].map(function(a){
    // console.log(a);
    return (a+1)
  })
```
1. array 수만큼 실행
2. 파라미터로 쓸수도 있다. (2개: 실제값,Index)
3. return을 쓰면 array에 결과값을 담아준다

### 보통은 반복을 할때 for문을 사용한다.
```js
{
    for (3번반복해주세요){

    }
}
```
라고 생각할 수 있지만 중괄호 안에서 For을 사용할 수 없다. => map을 쓴다.

```js
{
    [1,2,3].map(funtion(a.i){
        return <div>안녕</div>
    })
}
```
- map의 funtion 파라미터중
    - 첫번째 파라미터는 리스트의 값
    - 두번째 파라미터는 리스트의 index