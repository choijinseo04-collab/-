import './App.css'

function Profile({ name, age, job }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>사용자 정보</h1>
      <Profile name="김민지" age={20} job="학생" />
      <Profile name="박준호" age={27} job="개발자" />
      <Profile name="이서연" age={24} job="디자이너" />
    </div>
  );
}

export default App;