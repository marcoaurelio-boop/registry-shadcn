import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";
import { store } from "@/app/demo/[name]/blocks/store";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { hero } from "@/app/demo/[name]/components/hero";
import { login } from "@/app/demo/[name]/components/login";
import { logo } from "@/app/demo/[name]/components/logo";
import { productGrid } from "@/app/demo/[name]/components/product-grid";
import { promo } from "@/app/demo/[name]/components/promo";

// ui
import { accordion } from "@/app/demo/[name]/ui/accordion";
import { alert } from "@/app/demo/[name]/ui/alert";
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { badge } from "@/app/demo/[name]/ui/badge";
import { breadcrumb } from "@/app/demo/[name]/ui/breadcrumb";
import { button } from "@/app/demo/[name]/ui/button";
import { calendar } from "@/app/demo/[name]/ui/calendar";
import { card } from "@/app/demo/[name]/ui/card";
import { chart } from "@/app/demo/[name]/ui/chart";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { dataTable } from "@/app/demo/[name]/ui/data-table";
import { datePicker } from "@/app/demo/[name]/ui/date-picker";
import { dialog } from "@/app/demo/[name]/ui/dialog";
import { dropdownMenu } from "@/app/demo/[name]/ui/dropdown-menu";
import { input } from "@/app/demo/[name]/ui/input";
import { menuBar } from "@/app/demo/[name]/ui/menu-bar";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { skeleton } from "@/app/demo/[name]/ui/skeleton";
import { slider } from "@/app/demo/[name]/ui/slider";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";

// catlife demos
import { CatlifeButtonComponent } from "@/app/demo/[name]/ui/catlife-button";
import { CatlifeCardComponent } from "@/app/demo/[name]/ui/catlife-card";
import { CatlifeCarouselComponent } from "@/app/demo/[name]/ui/catlife-carousel";
import { CatlifeCoverageTableComponent } from "@/app/demo/[name]/ui/catlife-coverage-table";
import { CatlifeFAQComponent } from "@/app/demo/[name]/ui/catlife-faq";
import { CatlifeFooterComponent } from "@/app/demo/[name]/ui/catlife-footer";
import { CatlifeHeroComponent } from "@/app/demo/[name]/ui/catlife-hero";
import { CatlifeInfoCardComponent } from "@/app/demo/[name]/ui/catlife-info-card";
import { CatlifeNavbarComponent } from "@/app/demo/[name]/ui/catlife-navbar";
import { CatlifePlansCarouselComponent } from "@/app/demo/[name]/ui/catlife-plans-carousel";
import { CatlifeTelemedicineComponent } from "@/app/demo/[name]/ui/catlife-telemedicine";
import { CatlifeTestimonialsComponent } from "@/app/demo/[name]/ui/catlife-testimonials";
import { PillContainerComponent } from "@/app/demo/[name]/ui/pill-container";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,

  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  chart,
  checkbox,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "menu-bar": menuBar,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,

  // catlife
  "catlife-button": {
    name: "catlife-button",
    components: {
      Example: <CatlifeButtonComponent />,
    },
  },
  "catlife-card": {
    name: "catlife-card",
    components: {
      Example: <CatlifeCardComponent />,
    },
  },
  "catlife-carousel": {
    name: "catlife-carousel",
    components: {
      Example: <CatlifeCarouselComponent />,
    },
  },
  "catlife-coverage-table": {
    name: "catlife-coverage-table",
    components: {
      Example: <CatlifeCoverageTableComponent />,
    },
  },
  "catlife-faq": {
    name: "catlife-faq",
    components: {
      Example: <CatlifeFAQComponent />,
    },
  },
  "catlife-footer": {
    name: "catlife-footer",
    components: {
      Example: <CatlifeFooterComponent />,
    },
  },
  "catlife-hero": {
    name: "catlife-hero",
    components: {
      Example: <CatlifeHeroComponent />,
    },
  },
  "catlife-info-card": {
    name: "catlife-info-card",
    components: {
      Example: <CatlifeInfoCardComponent />,
    },
  },
  "catlife-navbar": {
    name: "catlife-navbar",
    components: {
      Example: <CatlifeNavbarComponent />,
    },
  },
  "catlife-plans-carousel": {
    name: "catlife-plans-carousel",
    components: {
      Example: <CatlifePlansCarouselComponent />,
    },
  },
  "catlife-telemedicine": {
    name: "catlife-telemedicine",
    components: {
      Example: <CatlifeTelemedicineComponent />,
    },
  },
  "catlife-testimonials": {
    name: "catlife-testimonials",
    components: {
      Example: <CatlifeTestimonialsComponent />,
    },
  },
  "pill-container": {
    name: "pill-container",
    components: {
      Example: <PillContainerComponent />,
    },
  },
};
