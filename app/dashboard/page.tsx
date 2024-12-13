import { Box, Typography } from "@mui/material"
import { Application } from "./application"
import CodeBlockWrapper from "../components/CodeBlockWrapper"
import { getCodeExample } from "../utils"

const Page = () => {
	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Typography
				variant="h1"
				className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl mb-8"
			>
				Dashboard
			</Typography>
			<Typography className="text-xl xs:text-2xl mb-20">
				To avoid rate limits, you can register your application here. The client
				id and client secret will be generated for you. These can be used to
				generate a token to authenticate your requests in the authorization
				header.
			</Typography>
			<Typography variant="h2" className="text-3xl xs:text-4xl w-fit mb-8">
				Applications
			</Typography>
			<Box className="w-full mb-8">
				<Application />
			</Box>
			<Typography
				variant="h2"
				className="leading-[48px] xs:leading-[64px] text-3xl xs:text-4xl mb-4"
			>
				How to
			</Typography>
			<Typography className="text-xl xs:text-2xl">
				The client id and the client secret can be used to generate a token to
				authenticate your requests in the authorization header. See examples
				below.
			</Typography>
			<CodeBlockWrapper
				codeBlocks={[
					{
						language: "javascript",
						codeString: getCodeExample("credentials", "credentials.js"),
					},
					{
						language: "python",
						codeString: getCodeExample("credentials", "credentials.py"),
					},
					{
						language: "java",
						codeString: getCodeExample("credentials", "credentials.java"),
					},
					{
						language: "bash",
						codeString: getCodeExample("credentials", "credentials.sh"),
					},
				]}
			/>
		</Box>
	)
}

export default Page
