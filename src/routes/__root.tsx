import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () =>
 (
    <>
      {/* Outlet burada tüm alt rotaları gösterecek */}
      <Outlet />
    </>
 ),
})