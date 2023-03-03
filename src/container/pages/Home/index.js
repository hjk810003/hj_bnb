import Nav from "../../../components/common/Nav";
import Item from "../../../components/Item";
import Tab from "../../../components/Tab";


function Home() {
  return (
    <>
      <Nav />
      <div>
        <Tab />
        <Tab />
      </div>
      <div>
        <Item />
        <Item />
      </div>
    </>
  );
}

export default Home;
