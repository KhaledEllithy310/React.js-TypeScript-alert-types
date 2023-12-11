import { AlertCircle, Ban, BellRing, CheckCheck, Info } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="alert-default"
        title="Upgrade your plan"
        description={
          "Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!"
        }
        icon={<BellRing size={20} />}
      />
      <Alert title="Note" icon={<Info size={15} />} type={"alert-info"}>
        <p>
          Vite aims to provide <a href="/">SSR Guide</a> support for common web
          development patterns. Before searching for a Vite or compatible Rollup
          plugin, check out the Features Guide. check out the{" "}
          <a href="/">Backend Integration guide</a> instead.
        </p>
      </Alert>
      <Alert
        type="alert-error"
        title="Something went wrong"
        description={
          "if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup."
        }
        icon={<Ban size={20} />}
      />
      <Alert
        type="alert-success"
        title="Your order has been processed"
        description={
          "Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!"
        }
        icon={<CheckCheck size={20} />}
      />
      <Alert
        type="alert-warning"
        title="Tips & Tricks"
        description={
          "You can also run the above script in your CI setup to enable automatic deployment on each push."
        }
        icon={<AlertCircle size={20} />}
      />
    </>
  );
}

export default App;
