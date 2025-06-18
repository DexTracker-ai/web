"use client";
import Link from "next/link";
import {
	ListItem,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { Search } from "@/components/ui/search-input";
import { Button } from "@/components/ui/button";

export const Header = () => {
	const [searchOpen, setSearchOpen] = useState(false);
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const element = document.querySelector('main');

			if (!element) {
				window.removeEventListener('scroll', handleScroll);
				return;
			}

			const topPosition = element.getBoundingClientRect().top;
			setIsTop(topPosition > 10);
		};

		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 w-full bg-transparent border-border/40 backdrop-blur bg-background/60 supports-[backdrop-filter]:bg-background/60 border-b`}
			style={{
				backgroundColor: isTop ? 'transparent' : undefined,
				border: isTop ? '0' : undefined,
				position: 'fixed',
			}}
		>
			<div className="transition-colors max-w-screen-sg px-8 my-2 m-auto flex">
				<div className="relative flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
					<Image className="dark:invert" height={33} width={170} src="/logo.svg" alt="Cryptoscan" />
					<NavigationMenu className="flex ml-auto">
						<NavigationMenuList className="md:gap-4 md:text-sm lg:gap-3">
							<NavigationMenuItem>
								<Link
									href="https://dextracker.gitbook.io/dextracker"
									className="text-foreground transition-colors hover:text-foreground"
								>
									Docs
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Search onClick={() => setSearchOpen(!searchOpen)} />
							</NavigationMenuItem>
							<NavigationMenuItem>
								<div className="flex gap-1 items-center">
									<Button variant="ghost" size="sm" className="px-2">
										<Link href="https://github.com/orgs/dextracker-ai/repositories" target="_blank">
											<Image width={15} height={15} alt="github" src="/github.svg" />
										</Link>
									</Button>
								</div>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header >
	)
}
