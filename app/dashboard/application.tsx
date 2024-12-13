"use client"

import { Skeleton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { ApplicationRegistrationForm } from "../components/ApplicationRegistrationForm"
import { ApplicationsTable } from "../components/ApplicationsTable"
import { deleteClient, getClients, updateClient } from "./actions"

type Application = {
	client_name: string
	client_id: string
	client_secret: string
}

export const Application = () => {
	const [loading, setLoading] = useState(true)
	const [applications, setApplications] = useState<Application[]>([])

	const fetchClients = async () => {
		const clients = await getClients()
		console.log(clients)
		setApplications(clients)
	}

	const initFetch = async () => {
		await fetchClients()
		setLoading(false)
	}

	useEffect(() => {
		initFetch()
	}, [])

	const handleRenew = async (clientId: string, clientName: string) => {
		await updateClient(clientId, clientName)
		await fetchClients()
	}

	const handleDelete = async (clientId: string) => {
		await deleteClient(clientId)
		await fetchClients()
	}

	return (
		<>
			{loading ? (
				<Skeleton variant="rectangular" width="100%" height="60px" />
			) : applications.length == 0 ? (
				<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4">
					No applications registered yet. Click the button below to register a
					new client.
				</Typography>
			) : (
				<ApplicationsTable
					applications={applications}
					onDelete={handleDelete}
					onRenew={handleRenew}
				/>
			)}
			<ApplicationRegistrationForm onSuccess={fetchClients} />
		</>
	)
}
