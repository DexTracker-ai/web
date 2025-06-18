import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Toolbox() {
	return (
		<div className="w-full py-10">
			<div className="flex lg:items-start items-center flex-col lg:flex-row gap-12 md:gap-16 justify-between px-3 md:px-12">
				<div className="md:max-w-[450px] flex-1">
					<div className="text-2xl font-semibold mb-4 text-center lg:text-left">Out of the box tools for best in class engagement</div>
					<div className="text-sm text-muted-foreground text-center lg:text-left max-w-md m-auto">Get up in running in minutes with an experience 100% customizable to your brand</div>
					<Link href="/docs/introduction"><Button size="sm" className="mt-2" variant='outline'>Read documentation</Button></Link>
				</div>
				<div className="lg:max-w-[320px] max-w-[300px]">
					<div className="text-md font-semibold text-dark-90 mb-3 text-center lg:text-left">Use our toolkit to reduce your development time by</div>
					<Image src="/80.webp" width={200} height={80} alt='80percent' />
				</div>
			</div>
		</div>


	)
}
