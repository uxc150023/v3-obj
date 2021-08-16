import { defineAsyncComponent } from "vue";
export function requireComp(app: any) {
  app.component(
    "HomeHeader",
    defineAsyncComponent(() =>
      import("./home-header/home-header.vue")
    )
  );
  app.component(
    "HomeMenu",
    defineAsyncComponent(() =>
      import("./home-menu/home-menu.vue")
    )
  );
  app.component(
    "MissonCard",
    defineAsyncComponent(() =>
      import("./misson-card/misson-card.vue")
    )
  );
  app.component(
    "PiCard",
    defineAsyncComponent(() =>
      import("./pi-card/pi-card.vue")
    )
  );
  app.component(
    "ExpertCard",
    defineAsyncComponent(() =>
      import("./expert-card/expert-card.vue")
    )
  );
}