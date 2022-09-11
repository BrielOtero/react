import Reactfrom from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeting'
import Product from './Product'
import { Button } from './Button'
import { TaskCard } from './Task'
import { Saludar } from './Saludar'
import { Posts } from './Posts'
import { useState, useEffect } from 'react'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const text = 'hola'

const users = [
	{
		id: 1,
		name: 'Ryan ray',
		image: 'https://robohash.org/user1'
	},
	{
		id: 2,
		name: 'Joe',
		image: 'https://robohash.org/user2'
	},
	{
		id: 3,
		name: 'Marcos',
		image: 'https://robohash.org/user3'
	},
]

const handlerCopy = () => {
	alert("Me copiaste");
}


function Counter() {

	const [mensaje, setMensaje] = useState('');
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log('render')
	}, [counter])

	return (
		<div>
			<input onChange={e => {
				setMensaje(e.target.value)
			}}></input>
			<button onClick={() => {
				alert('El mensaje es: ' + mensaje);
			}}>Save</button>

			<hr></hr>

			<h1>Counter: {counter}</h1>
			<button onClick={() => {
				setCounter(counter + 1)
			}}>Sumar</button>
			<button onClick={() => {
				setCounter(counter - 1)
			}}>Restar</button>

			<button onClick={() => {
				setCounter(0)
			}}>Reiniciar</button>
		</div>
	)

}



root.render(<>
	{/* Self Closing Tags*/}

	{/*
	<Greeting title="H"/>
	<Greeting title="O"/>
	<Greeting title="L"/>
	<Greeting title="A"/>
	<UserCard />
	<Product />
	{<h1>Hello World</h1>}

	<Button text='Click Me' />
	<Button text='Pay' />
	<Button text='Go' />
	

	<TaskCard ready={true} />
	<Saludar />



	<h1 onCopy={handlerCopy}>HI</h1>

	<input onChange={(e) => {
		console.log(e.target.value);

	}} />

	<Button text={text} />

	<form onSubmit={(e)=>{
		e.preventDefault()
		alert('enviado')
		
	}}>
		<h1>Registro usuario</h1>
		<button>Send</button>
	</form>

	

	<Posts />

	

	{users.map((user, index) => {
		return <div key={index}>
			<h1>{user.name}</h1>
			<img src={user.image}/>
		</div>;
	})}

	*/}

	<Counter />





</>)

