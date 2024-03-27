import { computed } from 'vue';
import { useRouter } from 'vue-router';

const useMenus = () => {
  const router = useRouter();
  const routes = router.getRoutes();

  const menus = computed(() => {
    return routes.filter((r) => {
      const paths = r.path.split('/');
      if (paths.length < 2) return false;

      if (paths[1] !== 'vue-components') return false;

      if (paths.length < 3) return false;

      return true;
    });
  });

  return { menus };
};

export default useMenus;
