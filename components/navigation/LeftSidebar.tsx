import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import NavLinks from "./navbar/NavLinks";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex max-h-svh flex-col justify-between overflow-y-auto border-r px-6 pt-24 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div className="flex flex-1 flex-col gap-3">
        <NavLinks />
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-4">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              width={20}
              height={20}
              alt="account icon"
              className="invet-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className="small-medium btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              width={20}
              height={20}
              alt="sign up icon"
              className="invet-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign UP</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
