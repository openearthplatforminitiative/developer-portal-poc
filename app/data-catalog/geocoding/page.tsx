import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "next/link"
import { BackIcon } from "@/app/icons/BackIcon"
import InfoCard from "@/app/components/InfoCard"
import { GithubIconBlack } from "@/app/icons/GithubIconBlack"
import { OpenApiIcon } from "@/app/icons/OpenApiIcon"
import { GeocodingExample } from "@/app/code-examples/GeocodingExample"
import { ReverseGeocodingExample } from "@/app/code-examples/ReverseGeocodingExample"

const GeocodingPage = () => {
	return (
		<Box className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/data-catalog"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to data catalog</Typography>
			</Link>

			<Box className="flex flex-col gap-8 mt-14">
				<Typography variant="h1" className="text-4xl xs:text-5xl">
					Geocoding API
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					Geocoding and reverse-geocoding based on{" "}
					<a
						href="https://www.openstreetmap.org"
						className="underline hover:no-underline"
					>
						OpenStreetMap®
					</a>
					-data
				</Typography>
			</Box>
			<Box className="flex lg:flex-row flex-col gap-6 mt-20">
				<InfoCard
					externalLink={true}
					header="OpenAPI Spec"
					subHeader="Specification of all endpoints available in the geocoding api."
					cardIcon={<OpenApiIcon />}
					href="https://api.openepi.io/geocoding/redoc"
				/>
				<InfoCard
					externalLink={true}
					header="Github"
					subHeader="Explore the source code behind the geocoding api."
					cardIcon={<GithubIconBlack />}
					href="https://github.com/openearthplatforminitiative/geocoder-api"
				/>
			</Box>
			<Box className="flex flex-col mt-28">
				<Typography className="text-3xl xs:text-4xl">More info</Typography>
				<Typography className="text-2xl xs:text-3xl mt-8">
					Data sources
				</Typography>
				<Typography className="text-base mt-6">
					The API is exclusively fetching data from{" "}
					<a
						href="https://photon.komoot.io"
						className="underline hover:no-underline"
					>
						https://photon.komoot.io
					</a>
					. The service is based on{" "}
					<a
						href="https://www.openstreetmap.org/copyright"
						className="underline hover:no-underline"
					>
						OpenStreetMap®
					</a>{" "}
					data, which is licensed under the{" "}
					<a
						href="https://opendatacommons.org/licenses/odbl"
						className="underline hover:no-underline"
					>
						Open Data Commons Open Database License (ODbL)
					</a>
					, by the{" "}
					<a
						href="https://osmfoundation.org"
						className="underline hover:no-underline"
					>
						OpenStreetMap Foundation (OSMF)
					</a>
					.
				</Typography>
				<Typography className="text-2xl xs:text-3xl mt-14">
					Processing
				</Typography>
				<Typography className="text-base mt-6">
					The data obtained from{" "}
					<a
						href="https://photon.komoot.io"
						className="underline hover:no-underline"
					>
						https://photon.komoot.io
					</a>{" "}
					is presented as is, without any further processing or modification.
				</Typography>
				<Typography className="text-3xl xs:text-4xl mt-16">Examples</Typography>
				<Typography className="text-2xl xs:text-3xl mt-8">Example 1</Typography>
				<Typography className="text-base mt-6">
					Retrieving the coordinates of <q>Berlin</q>.
				</Typography>
				<GeocodingExample />
				<Typography className="text-2xl xs:text-3xl mt-8">Example 2</Typography>
				<Typography className="text-base mt-6">
					Retrieving a location near the given coordinate.
				</Typography>
				<ReverseGeocodingExample />
			</Box>
		</Box>
	)
}

export default GeocodingPage
