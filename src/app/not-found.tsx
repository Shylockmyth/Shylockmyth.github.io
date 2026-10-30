import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "404",
  description: "That page does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="wrap">
        <div className="term">
          <div className="term__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="term__body">
            <p className="dim">nm@portfolio:~$ open /this/page</p>
            <p className="accent">ERR_NOT_FOUND</p>
            <p className="big">404</p>
            <p className="dim">
              The requested route is not in the build.
              <br />
              Check the address, or start from the index.
            </p>
            <div className="term__actions">
              <Link href="/" className="btn btn--primary">
                Home <ArrowRight />
              </Link>
              <Link href="/work/" className="btn">
                Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
