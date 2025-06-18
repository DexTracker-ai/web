import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQ() {
	return (
		<div className="w-full py-10">
			<div className="text-4xl font-semibold mb-4 text-center">Frequently Asked Questions</div>
			<div className="text-lg text-center text-muted-foreground">Need help with something? Here are some of the most common questions we get.</div>
			<div className="mt-10 max-w-[600px] m-auto flex lg:items-start items-center flex-col lg:flex-row gap-12 md:gap-16 justify-between px-3 md:px-12">
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Can I use it for free?</AccordionTrigger>
						<AccordionContent>
							Yes. The service fully free for analyzing.

							Check it out at <b><a href="https://dextracker.gitbook.io/dextracker/dextracker-api" target="_blank">dextracker.gitbook.io/dextracker/dextracker-api</a></b>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>How to earn money?</AccordionTrigger>
						<AccordionContent>
							You can use API for many ways to earn.
							<br /><br />
							<b>Arbitrage</b> - find price difference between markets to buy cheeper and sell more expensive
							<br />
							<b>Whale sniper</b> - follow by big buys/sells to open with whale
							<br />
							<b>Trend/Volume analyzer</b> - if coin started pumping/dumping, you can alert it soon as possible, earlier than each other
							<br />
							<b>Wallets detector</b> - You can follor by wallet activity what you want and alert each trade to get alpha info
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>How to contribute?</AccordionTrigger>
						<AccordionContent>
							We have open source projects. You can make pull requests and get help on Telegram.<br /><br />

							Check it out at <b><a href="https://github.com/orgs/DexTracker-ai/repositories?type=source" target="_blank">github.com/orgs/DexTracker-ai/repositories</a></b>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>Where can I get support?</AccordionTrigger>
						<AccordionContent>
							We provide support via Telegram. You can join our Telegram channel below.
							<br />
							Or you can contact us via Telegram<br />
							<b><a href="https://t.me/daniil_jave" target="_blank">@daniil_jave</a></b>.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>

	)
}
