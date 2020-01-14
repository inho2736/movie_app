import React from 'react';

//react의 element들은 unique해야함. -> id 추가
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

//virtualDOM html파일은 빈파일로 로드되고 react가 안에 컴포넌트 추가해줌
//빠르다.
//컴포넌트는 html을 리턴하는 함수임. 대문자로 시작

//jsx 와 props를 이용해서 컴포넌트를 재사용할수 있다.
// function Food(prop){
//   console.log(prop.fav);
//   return ( <h1>I love {prop.fav}!</h1> );
// }
//위 아래 둘 다 똑같다. 대신 아래는 인자로 넣을때 prop이름이랑 똑같야아함
function Food({ name, image }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src = {image} alt = {name}/>
    </div>
  );
}


function App() {
  return (
  //여기서 dish는 object임을 기억해야함.
  //내부에 접근하려면 {} 씌워야함.

  //<div>안에 있는 내용은 이거랑 같은표현인데 더 최신인 표현
  // {foodILike.map( function(dish){
  //   return <Food name = {dish.name} image = {dish.image} />;
  // })}
  
  //map은 배열의 아이템 하나하나 적용해서 리턴하고 그 값들을 다시 배열로
  //그니까 이때 최종 값은 Food 컴포넌트의 배열.
  //[<Food name = " " />, <Food name = " " /> ... ]

  //그 element unique함을 위해서 id추가했고, 그걸 컴포넌트에 prop으로 넘겨줘야 오류안남
  //그냥 컴포넌트에서 안쓰면 그만이니까 여기선 넘겨주기만 하자 이름은 key로 해야한다!
  <div>      
    {foodILike.map( dish => (
    <Food key = {dish.id} name = {dish.name} image = {dish.image}/>
    ))}
  </div> 
  );
}

export default App;
