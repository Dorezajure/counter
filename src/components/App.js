import { useState } from 'react';
import Counter from './Counter'
import Controls from './Controls'

function App() {
	const [counter, setCounter] = useState(0);

	const reset = () => {
		setCounter(0)
	}

	const increase = () => {
		setCounter((value) => {
			return value + 1;
		});
	}

	const decrease = () => {
		setCounter((value) => {
			return value - 1 >= 0 ? value - 1 : 0;
		});
	}

	return (
		<div className="App">
			<h1>Counter</h1>
			<Counter counter={counter}/>
			<Controls decrease={decrease} reset={reset} increase={increase}/>
		</div>
	);
}


export default App ;
