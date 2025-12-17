import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import "./styles/index.css";

const Home = lazy(() => import("./pages/Home"));
const DataProduction = lazy(() => import("./pages/DataProduction"));
const Komunitas = lazy(() => import("./pages/Komunitas"));
const Faq = lazy(() => import("./pages/Faq"));

function App() {
  return (
    <>
      <main className="w-full selection:bg-green-100 bg-[#F8F7F6] font-sans overflow-x-hidden overflow-y-hidden">
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center text-black text-2xl font-medium">
              Loading...
            </div>
          }
        >
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/dataproduction" component={DataProduction} />
            <Route path="/komunitas" component={Komunitas} />
            <Route path="/faq" component={Faq} />
            <Route>
              <div className="p-10 text-red-500 text-center font-bold text-2xl">
                404: Halaman tidak ditemukan!
              </div>
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
