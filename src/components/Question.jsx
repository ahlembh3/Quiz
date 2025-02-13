/* eslint-disable react/prop-types */

function Quiz({ questions = [] }) {
	// Définit `questions` comme un tableau vide par défaut
	return (
		<div className="quiz">
			<h1>Quiz</h1>
			{questions.length > 0 ? (
				questions.map((element, index) => (
					<Question
						key={index}
						question={element.question}
						correct_answer={element.correct_answer}
						incorrect_answers={element.incorrect_answers}
					/>
				))
			) : (
				<p>Chargement des questions...</p> // Affiche un message avant le chargement
			)}
		</div>
	);
}

export default Quiz;
