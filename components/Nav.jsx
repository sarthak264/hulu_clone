import { useRouter } from "next/dist/client/router";
import requests from "../utils/api";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="nav">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <p
          key={key}
          className="nav_item"
          onClick={() => {
            router.push(`/?genre=${key}`);
          }}
        >
          {title}
        </p>
      ))}
    </nav>
  );
};

export default Nav;
