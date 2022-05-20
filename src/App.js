import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="container ">
      <div class="row">
        <div className="col-3">
          <Button value={1} />
        </div>
        <div className="col-6">
          <Button value={2} />
        </div>
        <div className="col-3 ">
          <Button value={"+"} />
          <Button value={"="} />
        </div>
      </div>

      <section className="bg-light"> result </section>
    </div>
  );
}

export default App;
