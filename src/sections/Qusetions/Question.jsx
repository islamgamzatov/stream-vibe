import Section from "../../layouts/Section"
import Button from "../../components/Button"
import AccordionGroup from "../../components/AccordionGroup"
import Accordion from "../../components/Accordion"

const Questions = () => {
	const questionItems = [ // В значении данной переменной будет массив строк с текстом вопросов, указанных в макете.
		'English, Motherf*cker, do you speak it?',
		'How much does StreamVibe cost?',
		'What content is available on StreamVibe?',
		'How can I watch StreamVibe?',
		'How do I sign up for StreamVibe?',
		'What is the StreamVibe free trial?',
		'How do I contact StreamVibe customer support?',
		'What are the StreamVibe payment methods?',
	]

	return (
		<Section
			title="Frequently Asked Questions"
			titleId="questions-title"
			description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
			actions = {(<Button label="Ask a Question" href="/support" />)}
		>
			<AccordionGroup
				columns={2}
			>
				{questionItems.map((question, index) => (
					<Accordion
						title={question}
						id={`question-${index}`} // Так каждому элементу аккордеона сгенерируем уникальный идендификатор (question-0, question-1 и т.д.)
						name="question"
						isOpen={index === 0} // Таким образом мы сделаем раскрытым только первый по счету аккордеон из этого списка
						key={index}
					>
						<p>Say what again. SAY WHAT AGAIN! I DARE YOU! I DOUBLE DARE YOU, MOTHERFUCKER! Say what one more god damn time!</p>
					</Accordion>
				))}
			</AccordionGroup>
		</Section>
	)
}

export default Questions