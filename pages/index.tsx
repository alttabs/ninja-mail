import Hero from 'components/hero/hero';
import Nav from '../components/nav/nav';
import Video from 'components/video/video';
import LearnMore from 'components/learn-more/lernMore';
import Members from 'components/members/members';
import Brands from 'components/brands/brands';
import Plan from 'components/plan/plan';
import Footer from 'components/footer/footer';
export default function Home() {
	return (
		<>
			<Nav></Nav>
			<Hero></Hero>
			<Video></Video>
			<LearnMore></LearnMore>
			<Members></Members>
			<Brands></Brands>
			<Plan></Plan>
			<Footer></Footer>
		</>
	);
}
