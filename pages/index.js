import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import "../styles/index.scss";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}
