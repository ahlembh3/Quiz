import { useEffect, useState } from 'react';

function Quiz() {
	const [questions, setQuestions] = useState([]);

	const fetchQuestions = async () => {
		const response = await fetch(
			'https://opentdb.com/api.php?amount=10&type=multiple'
		);
		const data = await response.json();
		setQuestions(data.results);
	};

	useEffect(() => {
		console.log('Questions mises à jour :', questions);
	}, [questions]);

	return (
		<div className="quiz">
			<h1>Quiz</h1>
			<button onClick={fetchQuestions}>Fetch Questions</button>
			{/* Affichage des questions et réponses */}
			{questions.map((element, index) => (
				<div key={index}>
					<h2>{element.question}</h2>
					<ul>
						{element.incorrect_answers.map((answer, index) => (
							<li key={index}>
								<div>{answer}</div>
							</li>
						))}
						{/* Affichage de la bonne réponse */}
						<li>
							<div style={{ fontWeight: 'bold' }}>
								{element.correct_answer}
							</div>
						</li>
					</ul>
				</div>
			))}
		</div>
	);
}

export default Quiz;
