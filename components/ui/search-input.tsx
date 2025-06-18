import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
	isCollapsed?: boolean;
	onClick?: () => void;
	className?: string;
	size?: 'md' | 'sm';
}

export const Search = ({ isCollapsed = false, onClick, className, size }: Props) => {
	return (
		<div className="relative">
			<Button
				variant="ghost"
				className={`cursor-pointer min-w-[200px] w-full bg-muted hover:text-primary text-muted-foreground text-left font-normal border border-input flex justify-start ${size === 'sm' ? 'h-7' : ''} ${className}`}
				style={{ paddingInline: 'initial' }}
				onClick={onClick}
			>
					<SearchIcon className={`absolute ${isCollapsed ? "left-4" : "left-3"} ${size === 'sm' ? 'top-1.5' : 'top-2.5'} h-4 w-4 text-muted-foreground`} />
					<span className="ml-8">
					{!isCollapsed && "Search..."}
					</span>

					{!isCollapsed && (
						<kbd className="absolute right-1.5 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-primary/5 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
							<span className="text-xs">⌘</span>K
						</kbd>
					)}
			</Button>
		</div>
	)
}
