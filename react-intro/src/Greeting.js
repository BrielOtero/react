export function Greeting(props) {

	const text = props.title
	console.log(text)
	return <>
		<h1>{text}</h1>
	</>
}

export function UserCard() {

	return <h1>UserCard</h1>
}