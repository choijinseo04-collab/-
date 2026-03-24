function Work({ num }) {
  return <h3>실습 {num}</h3>;
}

function Hello() {
  return <h1>안녕하세요 React</h1>;
}

function User({ name }) {
  return <h2>안녕하세요 {name}님</h2>;
}

function Product({ name, price }) {
  return (
    <div>
      <h4>상품 : {name}</h4>
      <p>가격 : {price}</p>
    </div>
  );
}

function Id({ name, age, job }) {
  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>직업 : {job}</p>
    </div>
  );
}

function Button({ text }) {
  return <button>{text}</button>;
}

function Box({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function App() {
  const fruits = ['사과', '포도', '바나나'];
  return (
    <div>
      <h1>4주차 실습</h1>
      <hr />
      <Work num="1" />
      <Hello />

      <Work num="2" />
      <User name="진서" />
      <User name="강준" />

      <Work num="3" />
      <Product name="노트북" price="100만원" />
      <Product name="마우스" price="3만원" />

      <Work num="4" />
      <Id name="최진서" age="23" job="학생" />

      <Work num="5" />
      <Button text="로그인" />
      <Button text="회원가입" />
      <Button text="삭제" />

      <h2>실습</h2>
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;