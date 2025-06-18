"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Blocks, GlobeIcon, NotepadText } from "lucide-react";

export function Main() {
	return (
		<div className="welcome grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="relative pb-20 flex gap-5 flex-col align-center place-items-center">
					<div className="select-none text-center">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0, duration: 0.5 }}
							className="max-w-3xl text-center relative"
						>
							<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
								Realtime Prices
							</h1>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.1, duration: 0.5 }}
							className="max-w-3xl text-center"
						>
							<h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
								for Traders & dApps
							</h2>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="max-w-xl text-center"
					>
						Follow by different pools, exchanges, aggregators in real time to bundle into the charts, tables, alerts.
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.45, duration: 0.5 }}
						className="max-w-3xl text-center"
					>
						<Link href="https://dextracker.gitbook.io/dextracker/dextracker-api/dex-trades-api">
							<Button size='lg'>
								Explore Docs
							</Button>
						</Link>
					</motion.div>
				</div>
			</main>

			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://dextracker.gitbook.io/dextracker/dextracker-api/dex-trades-api"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NotepadText className="w-[18px] h-[18px] text-muted-foreground" />
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://github.com/javeoff/dextracker/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Blocks className="w-[18px] h-[18px] text-muted-foreground" />
					Browse
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://dextracker.gitbook.io/dextracker/dextracker-api"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GlobeIcon className="w-[18px] h-[18px] text-muted-foreground" />
					API →
				</a>
			</footer>
		</div>
	)
}
