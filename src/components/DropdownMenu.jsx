'use client'

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function Menu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Menu ⮟</button>
      </DropdownMenu.Trigger>
        
		<DropdownMenu.Portal>
        <DropdownMenu.Content
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "12px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <DropdownMenu.Item asChild>
            <Link href="/">Home</Link>
          </DropdownMenu.Item>

				<DropdownMenu.Item asChild>
                    <Link href="/posts">Posts</Link>
                </DropdownMenu.Item>
        
        <DropdownMenu.Item asChild>
            <Link href="/users/profile">Profile</Link>
          </DropdownMenu.Item>

				<DropdownMenu.Item asChild>
            <Link href="/users/create-profile">Create Profile</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
