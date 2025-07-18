import { Outlet, useLocation } from 'react-router-dom'

import { ROUTER_PATHS_TITLE_MATCHING } from '@routerPaths'


const CategoryLayout = () => {

  // Получаем наим-е категории из соотв. пути в маршруте
  // Альтернатива: meta property in route object + useMatches hook to access the meta data of the current route
  const location = useLocation();
  const layoutTitle = ROUTER_PATHS_TITLE_MATCHING.get(location.pathname);
  const layoutFinalTitle = !!layoutTitle ? `"${layoutTitle}"` : '';


  return (
    <div>
      <h3>Список элементов в выбранной категории {layoutFinalTitle}:</h3>
      <Outlet/>
    </div>
  )
}

export default CategoryLayout
