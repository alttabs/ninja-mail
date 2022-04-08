import MemberCard from 'components/member-card/member';
import { Button, Container, Form } from './style';

export default function Members() {
	return (
		<>
			<Container>
				<MemberCard
					image="/Frankie.png"
					name="Frankie"
					year="2016"
				></MemberCard>
				<MemberCard image="/Camile.png" name="Camile" year="2012"></MemberCard>
				<MemberCard image="/Elayne.png" name="Elayne" year="2018"></MemberCard>
			</Container>
			<Container>
				<h1>
					Learn how others are reaching their audience easier than ever before.
				</h1>
			</Container>
			<Form>
				<input
					type="email"
					name="email"
					placeholder="Enter your email"
					required
				/>
				<Button> JOIN OUR LIST</Button>
			</Form>
		</>
	);
}
