import styled from "styled-components"
import { AiOutlineTwitter, AiFillMediumSquare, AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'
import Image from 'next/image'
import {
	FooterSection,
	FooterContainer,
	FooterLeftContainer,
	FooterLogoContainer,
	FooterImageContainer,
	FooterLinksContainer,
	FooterLinksSectionContainer,
	FooterSocialsContainer
} from './FooterStyles';


const Footer = () => {
	return (

		<FooterSection>
			<FooterContainer>

				<FooterLeftContainer>

					<FooterLogoContainer>
						<FooterImageContainer>
							<Image src="/illiniBlockchainLogo.png" alt="Illini Blockchain Logo" layout="responsive" width={100} height={100}/>
						</FooterImageContainer>
						<h3>Illini Blockchain</h3>
					</FooterLogoContainer>


				</FooterLeftContainer>


				<FooterLinksContainer>
					<FooterLinksSectionContainer>
						<h4>Resources</h4>
						<a href="https://illiniblockchain.notion.site/bcd75e1fbede4d81a723eb26d81aed16?v=50ec9fbb542b4d08bc817a03d593c23f" target="_blank">Resources Database</a>
						<a href="https://illiniblockchain.notion.site/0dcdd7753e2d4906aac1cd3597112d82?v=43b8da323cae498388e9e8e716a4af37" target="_blank">Crypto Thinkers</a>
						<a href="https://illiniblockchain.notion.site/Down-the-Crypto-Rabbithole-40a6ca69fa394f7eb87b27f33772b68c" target="_blank">Down the Rabbit Hole</a>
					</FooterLinksSectionContainer>
					<FooterLinksSectionContainer>
						<h4>Projects</h4>
						<a href="https://illini-mint.vercel.app/" target="_blank">NFT Mint</a>
						<a>IlliniDAO</a>
					</FooterLinksSectionContainer>
					<FooterLinksSectionContainer>
						<h4>Blog</h4>
						<a href="https://medium.com/@illiniblockchain/bitcoin-under-the-hood-how-does-it-actually-work-a6a64371d1e9" target="_blank">Bitcoin</a>
						<a href="https://medium.com/@illiniblockchain/ethereum-under-the-hood-a-decentralized-computer-bb4130f1804" target="_blank">Ethereum</a>
					</FooterLinksSectionContainer>
				</FooterLinksContainer>


				<FooterSocialsContainer>
					<a href="https://twitter.com/ILL_Blockchain" target="_blank"><AiOutlineTwitter/></a>
					<a href="https://medium.com/@illiniblockchain" target="_blank"><AiFillMediumSquare/></a>
					<a href="https://discord.gg/42FxuQXc" target="_blank"><FaDiscord/></a>
					<a href="https://illiniblockchain.notion.site/Illini-Blockchain-Public-ac1f93f3ad984e3fa00ce6a42c69b335" target="_blank"><SiNotion/></a>
					<a href="https://github.com/IlliniBlockchain" target="_blank"><AiFillGithub/></a>
				</FooterSocialsContainer>

			</FooterContainer>

		</FooterSection>

	)
}

export default Footer