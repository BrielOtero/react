import './task.css'

export function TaskCard({ ready }) {
	//const cardStyles = { background: '#FF0000', color: '#FFF', padding: '20px' }
	const titleStyles = { fontWeight: 'lighter' }

	return <div className='card'>
		<h1 style={titleStyles}>Mi primer tarea</h1>
		<span className= {ready ? 'green':'red'}>
			{
				ready ? 'Tarea realizada' : 'Tarea pendiente'
			}
		</span>
	</div>

}