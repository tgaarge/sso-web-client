import NotFound from '../views/error/not-found'
import PermissionDenied from '../views/error/permission-denied'

const publicRoutes = {
    NotFound: {
        component: NotFound,
        path: '/not-found'
    },
    PermissionDenied: {
        component: PermissionDenied,
        path: 'permission-denied'
    }
};

export default publicRoutes