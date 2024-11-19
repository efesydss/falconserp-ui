import { Outlet, createRootRoute } from '@tanstack/react-router'
import Template from '../Template'

export const Route = createRootRoute({
  component: () =>
 (
    <>
      <Template>
         <Outlet />
      </Template>
    </>
 ),
})