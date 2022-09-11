import PropTypes from 'prop-types'

export function Button({ text }) {
	return <button onClick={function (){
		alert("TEST")
	}}>
		{text}
	</button>
}

Button.prototypes ={
	text: PropTypes.string
}