import React from "react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        className,
        '"border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"'
      )}
    >
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div className="mr-2 flex">
            <Link className="mr-2 ml-2 flex items-center gap-2" href="/">
              <svg
                className="fill-black/85 dark:fill-white/75"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000"
                version="1.1"
                viewBox="0 0 412 412"
                xmlSpace="preserve"
              >
                <path d="M206 0C92.411 0 0 92.411 0 206s92.411 206 206 206 206-92.411 206-206S319.589 0 206 0zm0 380c-95.944 0-174-78.057-174-174 0-95.944 78.056-174 174-174s174 78.056 174 174c0 95.943-78.056 174-174 174z"></path>
                <path d="M206 80c-69.477 0-126 56.523-126 126s56.523 126 126 126c23.45 0 45.42-6.447 64.243-17.65l-8.818-9.138a18.104 18.104 0 01-4.096 5.92 18.174 18.174 0 01-12.684 5.119c-7.452-.022-14.061-4.458-16.885-11.3l-2.833-6.866A94.069 94.069 0 01206 300c-51.832 0-94-42.168-94-94s42.168-94 94-94 94 42.168 94 94a93.91 93.91 0 01-2.486 21.508l7.137 3.246a18.22 18.22 0 0110.692 17.235 18.22 18.22 0 01-11.632 16.418l8.691 9.008C324.806 253.908 332 230.779 332 206c0-69.477-56.523-126-126-126z"></path>
                <path d="M206.836 188.056c2.619 0 5.157.549 7.543 1.63l29.5 13.421C242.398 183.473 226.012 168 206 168c-20.987 0-38 17.013-38 38 0 19.822 15.18 36.092 34.548 37.837l-12.602-30.546c-2.879-6.977-1.229-14.873 4.205-20.114a18.168 18.168 0 0112.685-5.121z"></path>
                <path d="M278.439 258.434l21.138-7.991a3.277 3.277 0 002.109-2.951 3.267 3.267 0 00-1.912-3.082l-90.251-41.06a3.272 3.272 0 00-3.624.625 3.266 3.266 0 00-.752 3.597l37.815 91.657a3.26 3.26 0 003.011 2.022 3.27 3.27 0 003.024-2.005l8.741-20.84 32.472 33.649a3.266 3.266 0 004.621.082l15.995-15.435a3.266 3.266 0 00.081-4.621l-32.468-33.647z"></path>
              </svg>
              <span className="font-bold inline-block">motivation</span>
            </Link>
            <nav className="flex items-center gap-2 text-sm xl:gap-6">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/80" href="/docs">
                Docs
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/docs/child">
                Child
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground" href="/docs/parent">
                Parent
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 md:justify-end">
            <nav className="flex items-center gap-0.5 mr-2">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
