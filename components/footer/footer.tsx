import { BrandsLogos } from 'components/brands/brands';
import Link from 'next/link';
import { footerContact, footerData, footerSocial } from './data';
import {
	Container,
	Logo,
	Div,
	Refs,
	Components,
	Divider,
	Directives,
} from './styles';

type Logo = {
	image: string;
};

export default function Footer() {
	return (
		<>
			<Container>
				<Logo>
					<Logotype image="Logo-1.png"></Logotype>
				</Logo>
				<Refs>
					<Components>
						{footerData.map((menuIten, i) => (
							<Link href={menuIten.path} passHref key={i}>
								{menuIten.label}
							</Link>
						))}
					</Components>
					<Components>
						{footerSocial.map((menuIten, i) => (
							<Link href={menuIten.path} passHref key={i}>
								{menuIten.label}
							</Link>
						))}
					</Components>
					<Components>
						{footerContact.map((menuIten, i) => (
							<Link href={menuIten.path} passHref key={i}>
								{menuIten.label}
							</Link>
						))}
					</Components>
				</Refs>
			</Container>
			<Divider></Divider>
			<Directives>
				<p>
					NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
					rights reserved.
				</p>
				<Link href="/" passHref>
					Terms & Conditions
				</Link>
				<Link href="/" passHref>
					Privacy Policy
				</Link>
			</Directives>
		</>
	);
}
export function Logotype({ image }: Logo) {
	return <Div color={image}></Div>;
}
