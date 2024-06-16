import './App.css';
import Comp1 from './components/Comp1';

/* What is HOC?
- HOC is Higher Order component.
   It receives a component, applies certian logic, and then return that component with those additional logics.

- When to use HOC?
   When we want to apply same logic to multiple components.
*/

function App() {
  return (
    <>
      <div className="comp1">
        <Comp1 randomNumber={'123'} />
      </div>
    </>
  );
}

export default App;
