"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Subscriptions() {
	const [isAnnual, setIsAnnual] = useState(true);

	return (
		<div className="w-full py-10 flex flex-col" id="plans">
			<div className="text-4xl font-semibold mb-4 text-center">Choose your plan</div>
			<div className="text-lg text-center text-muted-foreground">Choose a plan that is right for you. From free usage to professional trader mode. Pay with Crypto or Fiat.</div>
			<div className="mt-4 flex self-center text-center">
				<Switch id="subscriptions" checked={isAnnual} onCheckedChange={setIsAnnual} />
				<Label className="ml-2 cursor-pointer" htmlFor="subscriptions">{isAnnual ? 'Pay annualy' : 'Pay monthly'}</Label>
			</div>
			<div className="mt-10 mx-auto grid sm:grid-cols-2 lg:grid-cols-1 gap-8 flex-col px-3 md:px-12">
				<Card className="w-full flex flex-col bg-muted/30">
					<CardHeader>
						<p className="text-xl font-semibold tracking-tight">Start</p>
						<p className="text-4xl font-semibold tracking-tight">
							{isAnnual ? 'Free' : 'Free'}
							<span className="px-1 text-xs font-normal text-muted-foreground">
							</span>
						</p>
					</CardHeader>
					<CardContent className="px-10 flex flex-col gap-4 flex-grow">
						<ul className="list-disc list-none flex-grow">
							<li className="text-sm flex items-center gap-2 text-black dark:text-white">
								<Check className="w-4 h-4 w-[20px]" />
								Unlimited Tokens
							</li>
							<li className="text-sm flex items-center gap-2 text-black dark:text-white">
								<Check className="w-4 h-4 w-[20px]" />
								Community chat
							</li>
							<li className="text-sm flex items-center gap-2 text-black dark:text-white">
								<Check className="w-4 h-4 w-[20px]" />
								No ads
							</li>
							<li className="text-sm flex items-center gap-2 text-black dark:text-white">
								<Check className="w-4 h-4 w-[20px]" />
								Priority Support
							</li>
						</ul>
						<Button
							className="w-full"
							onClick={async () => {
								const res = await fetch('https://api.cryptoscan.pro/payments', {
									method: 'POST', body: JSON.stringify({
										plan: isAnnual ? 'start-yearly' : 'start'
									})
								})
								const { url } = await res.json();
								if (url) window.open(url, '_blank');
							}}
						>Subscribe</Button>
					</CardContent>
				</Card>
			</div >

		</div>
	)
}

