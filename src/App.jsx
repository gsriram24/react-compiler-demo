import { useState } from "react";
import "./app.css";
import Child from "./Child";
const blockSync = time => {
	const start = Date.now();
	while (Date.now() < start + time) {
		// do nothing
	}
	return time;
};
function App() {
	const [count, setCount] = useState(0);

	const time = blockSync(1000);
	console.log("App");
	return (
		<>
			<Child />
			<button onClick={() => setCount(count => count + 1)}>
				Count: {count} Delayed by: {time}
			</button>
		</>
	);
}

export default App;
