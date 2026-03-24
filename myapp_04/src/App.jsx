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

function Button({ text, color }) { // 색 넣는거 추가
  return (
    <button style={{ backgroundColor: color }}>{text}</button>
  );
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

function Book(props) {
  return (
    <div>
      <h4>이 책의 제목은 {props.title} 입니다.</h4>
      <p>이 책의 저자는 {props.author} 입니다.</p>
      <p>이 책의 가격은 {props.price} 원 입니다.</p>
    </div>
  );
}

function Greet({ name, massage }) {
  return (
    <div>
      <h3>{name} 님 에게</h3>
      <p style={{ color: "red", fontSize: 30 }}>{massage}</p>
    </div>
  );
}

function VideoCard({ title, channel, views }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{channel}</p>
      <p>조회수 : {views}</p>
    </div>
  );
}

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          channel={video.channel}
          views={video.views}
        />
      ))}
    </div>
  );
}

function App() {
  const fruits = ['사과', '포도', '바나나'];
  const videos = [
    {
      title: "최진서 tv",
      channel: "최진서",
      views: "1000만"
    },
    {
      title: "태지환 tv",
      channel: "태지환",
      views: "2"
    },
  ];

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

      <Work num="5" /> <p> 색 넣는거 추가</p>
      <Button text="로그인" color="red" />
      <Button text="회원가입" color="pink" />
      <Button text="삭제" color="blue" />

      <h2>실습</h2>
      <FruitList fruits={fruits} />

      <h2>실습 2</h2>
      <Book title="파이썬" author="최진서" price={3000} />

      <h2>실습 3</h2>
      <Greet name="태지환" massage="예비군 갔다가 재입대 기원 뺑이쳐라" />

      <h2>💸실습 4</h2>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;