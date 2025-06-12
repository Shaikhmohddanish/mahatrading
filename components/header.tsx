"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, Home, FileText, Package, Phone, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Set active item based on current path
    const path = window.location.pathname
    if (path === "/") setActiveItem("home")
    else if (path === "/user-consent") setActiveItem("consent")
    else if (path.includes("/packages")) setActiveItem("packages")
    else if (path === "/talk-to-us") setActiveItem("talk")
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-green-600 text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Capital Grow" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-white/80">
            Home
          </Link>
          <Link href="/user-consent" className="text-sm font-medium transition-colors hover:text-white/80">
            User Consent
          </Link>
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm font-medium transition-colors hover:text-white/80 flex items-center gap-1 p-0"
              >
                Package <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem
                onClick={() => {
                  setIsDropdownOpen(false)
                  router.push("/packages/equity")
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }, 100)
                }}
              >
                Equity Packages
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setIsDropdownOpen(false)
                  router.push("/packages/options")
                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }, 100)
                }}
              >
                Options Packages
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/talk-to-us" className="text-sm font-medium transition-colors hover:text-white/80">
            Talk To Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-white/80">
            8108556625
          </Button>
          <Button variant="outline" className="bg-white text-emerald-600 hover:bg-white/90">
            REQUEST A CALL BACK
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-emerald-600 border-l-4 p-0">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6">
              <Image src="/logo.png" alt="Capital Grow" width={150} height={40} className="h-10 w-auto" />
            </div>

            <nav className="flex flex-col p-6">
              <div className="space-y-1">
                <Link
                  href="/"
                  className={`flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                    activeItem === "home" ? "bg-emerald-100 text-emerald-700" : "hover:bg-emerald-50"
                  }`}
                  onClick={() => {
                    setIsOpen(false)
                    setActiveItem("home")
                  }}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>

                <Link
                  href="/user-consent"
                  className={`flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                    activeItem === "consent" ? "bg-emerald-100 text-emerald-700" : "hover:bg-emerald-50"
                  }`}
                  onClick={() => {
                    setIsOpen(false)
                    setActiveItem("consent")
                  }}
                >
                  <FileText className="h-5 w-5" />
                  User Consent
                </Link>

                <div
                  className={`px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                    activeItem === "packages" ? "bg-emerald-100 text-emerald-700" : "hover:bg-emerald-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5" />
                    Package
                  </div>
                  <div className="mt-2 ml-8 space-y-1">
                    <Link
                      href="/packages/equity"
                      className="block py-2 px-3 text-base rounded-md hover:bg-emerald-50/80 transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false)
                        setActiveItem("packages")
                        setTimeout(() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }, 100)
                      }}
                    >
                      Equity Packages
                    </Link>
                    <Link
                      href="/packages/options"
                      className="block py-2 px-3 text-base rounded-md hover:bg-emerald-50/80 transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false)
                        setActiveItem("packages")
                        setTimeout(() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })
                        }, 100)
                      }}
                    >
                      Options Packages
                    </Link>
                  </div>
                </div>

                <Link
                  href="/talk-to-us"
                  className={`flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                    activeItem === "talk" ? "bg-emerald-100 text-emerald-700" : "hover:bg-emerald-50"
                  }`}
                  onClick={() => {
                    setIsOpen(false)
                    setActiveItem("talk")
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Talk To Us
                </Link>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 py-6 text-lg border-emerald-200 hover:bg-emerald-50"
                >
                  <PhoneCall className="h-5 w-5" />
                  8108556625
                </Button>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg">
                  REQUEST A CALL BACK
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
