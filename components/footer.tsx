import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className="border-t w-full">
		  <div className="max-w-screen-sg px-8 m-auto py-7 bg-muted/30">
		    <div className="flex flex-col gap-20 md:flex-row">
		      <div className="hidden flex-col gap-4 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
		        <div className="flex flex-col gap-4">
		          <div>
		            <Link
		              href='/'
		              className="flex items-center gap-2 text-lg font-semibold select-none"
		            >
		              <Image 
		                src='/logo.svg' 
		                alt='cryptoscan' 
		                width='200' 
		                height='80' 
		                className="dark:invert" 
		              />
		            </Link>
		          </div>
		          <div>
		            <h2 className="text-xl font-semibold tracking-tight transition-colors first:mt-0">
		              Analyze & Trade
		            </h2>
		            <p className="leading-7">
		              Want to analyze crypto and trade?
		            </p>
		          </div>
		          <Link href="/browse">
		            <Button className="w-full text-sm">
		              Start Now
		            </Button>
		          </Link>
		        </div>
		      </div>
		      <div className="flex grow-1 gap-20">
		        <div className="flex flex-col gap-1">
		          <div className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
		            Products
		          </div>
		          <div>
		            <Link href="https://github.com/orgs/DexTracker-ai/repositories?type=source" className="text-gray-500 text-sm">
		              GitHub Projects
		            </Link>
		          </div>
		          <div>
		            <Link href="https://dextracker.gitbook.io/dextracker/dextracker-api" className="text-gray-500 text-sm">
									API Info
		            </Link>
		          </div>
		        </div>
		        <div className="flex flex-col gap-1">
		          <div className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
		            Other
		          </div>
		          <div>
		            <Link href="https://t.me/daniil_jave" className="text-gray-500 text-sm">
		              Contact us
		            </Link>
		          </div>
		          <div>
		            <Link href="https://t.me/daniil_jave" className="text-gray-500 text-sm">
		              Report a bug
		            </Link>
		          </div>
		        </div>
		        <div className="flex flex-col gap-1">
		          <div className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
		            Resources
		          </div>
		          <div>
							<Link href="https://dextracker.gitbook.io/dextracker" className="text-gray-500 text-sm" target="_blank">
		              Documentation
		            </Link>
		          </div>
		          <div>
		            <Link href="https://dextracker.gitbook.io/dextracker/dextracker-api" className="text-gray-500 text-sm">
		              API Docs
		            </Link>
		          </div>
		        </div>
		        <div className="flex flex-col gap-1">
		          <div className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
		            Legal
		          </div>
		          <div>
		            <Link href="/privacy-policy.pdf" className="text-gray-500 text-sm">
		              Privacy Policy
		            </Link>
		          </div>
		          <div>
		            <Link href="/terms.pdf" className="text-gray-500 text-sm">
		              Terms of Service
		            </Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	)
}
