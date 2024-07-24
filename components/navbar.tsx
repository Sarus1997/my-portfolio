"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import styled, { keyframes } from "styled-components";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon, Logo } from "@/components/icons";

const colorChange = keyframes`
  0% { color: #ff9999; }  /* Light red */
  33% { color: #99ff99; } /* Light green */
  66% { color: #9999ff; } /* Light blue */
  100% { color: #ff9999; }
`;

// Styled component for animated text
const AnimatedText = styled.p`
  font-weight: bold;
  text-inherit: inherit;
  animation: ${colorChange} 3s infinite;
`;

const StyledTwitterLink = styled(Link)`
  &:hover .text-default-500 {
    color: #1da1f2;
  }
`;

const StyledDiscordLink = styled(Link)`
  &:hover .text-default-500 {
    color: #7289da;
  }
`;

const StyledGithubLink = styled(Link)`
  &:hover .text-default-500 {
    color: #333;
  }
`;

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <AnimatedText>My Portfolio</AnimatedText>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <StyledTwitterLink
            isExternal
            aria-label="Twitter"
            href={siteConfig.links.twitter}
          >
            <TwitterIcon className="text-default-500" />
          </StyledTwitterLink>
          <StyledDiscordLink
            isExternal
            aria-label="Discord"
            href={siteConfig.links.discord}
          >
            <DiscordIcon className="text-default-500" />
          </StyledDiscordLink>
          <StyledGithubLink
            isExternal
            aria-label="Github"
            href={siteConfig.links.github}
          >
            <GithubIcon className="text-default-500" />
          </StyledGithubLink>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <StyledGithubLink
          isExternal
          aria-label="Github"
          href={siteConfig.links.github}
        >
          <GithubIcon className="text-default-500" />
        </StyledGithubLink>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
