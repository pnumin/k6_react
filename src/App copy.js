import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello'; 
function App() {

  return (
    // JSX문법 사용
    <>    {/* 프레그먼트 태그 */}
    <div className="App">
      <MainHeader />
      <Hello />
      <Hello />
      <Hello />
    </div>
    </> 
  );
}


//화살표 함수로 작성가능
// const App = () => {

//   return ();
// }

export default App;
