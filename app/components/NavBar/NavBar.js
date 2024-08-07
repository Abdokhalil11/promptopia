"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/assets/images/logo.svg";
import "./navBar.css";
export default function NavBar() {
  const [isLogin, setIsLogin] = useState(true);
  const [dropDown, setDropDown] = useState(true);
  return (
    <nav className="nav-bar">
      <Link href={"/"}>
        <Image
          src={logo.src}
          width={30}
          height={30}
          alt="Promptopia Logo"
          className="logo-image"
        />
        <p>Promptopia</p>
      </Link>
      {/* Desktop navigation */}
      <div className="actions desktop">
        {isLogin ? (
          <>
            <Link className="create-post" href={"/create-post"}>
              Create Post
            </Link>
            <button type="button" className="sign-out" onclick={""}>
              Sign Out
            </button>
            <Link className="sign-out" href={"/profile"}>
              <Image src={logo.src} width={37} height={37} alt="profile" />
            </Link>
          </>
        ) : (
          <Link className="sign" href={"/sign"}>
            Sign in
          </Link>
        )}
      </div>

      {/* Desktop Mobile */}
      <div className="actions mobile">
        {isLogin ? (
          <>
            <div
              className="sign-out"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <Image src={logo.src} width={37} height={37} alt="profile" />
              <div className="drop-down" hidden={dropDown}>
                <Link href={"/profile"}>My Profile</Link>
                <Link href={"/create-post"}>Create Prompt</Link>
                <button type="button" onclick={""}>
                  Sign Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <Link className="sign" href={"/sign"}>
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}
