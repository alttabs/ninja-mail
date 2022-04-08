import Card from 'components/card/dard';
import { Info } from 'components/card/style';
import { LearnMoreContainer,  } from './styles';

export default function LearnMore() {
	return (
		<>
			<LearnMoreContainer>
				<Card
					image="/photo.png"
					text="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."
				></Card>
				<Card
					image="/photo2.png"
					text="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools."
				></Card>
				<Info>
					<h1>The source for proven, engaging email campaigns</h1>
					<p>
						Whether you’re a startup, small business, e-commerce store, or want
						to promote your app, NinjaMail has the feature set tailored for your
						business.
					</p>
				</Info>
			</LearnMoreContainer>
		</>
	);
}
