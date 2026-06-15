import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider, Helmet } from "react-helmet-async";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HexBackgroundDemo from "@/demo/HexBackgroundDemo";
import {
  getSectionMetaForRoute,
  SECTION_META_LIST,
} from "@/lib/sectionMeta";

const queryClient = new QueryClient();

function SectionHelmet() {
  const [location] = useLocation();
  const meta = getSectionMetaForRoute(location);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`https://sorta.co.jp${meta.route}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={`https://sorta.co.jp${meta.route}`} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sorta" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />
    </Helmet>
  );
}

function Router() {
  return (
    <>
      <SectionHelmet />
      <Switch>
        {SECTION_META_LIST.map((section) => (
          <Route key={section.route} path={section.route}>
            <Home initialSection={section.scrollTargetId ?? undefined} />
          </Route>
        ))}
        <Route path="/hex-demo" component={HexBackgroundDemo} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
