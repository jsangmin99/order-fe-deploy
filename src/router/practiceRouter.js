import VuetifyComponent from '@/components/Practice/VuetifyComponent.vue'
import ModelingComponent from '@/components/Practice/ModelingComponent.vue'
import ConditionalComponent from '@/components/Practice/ConditionalComponent.vue'
import HookComponent from '@/components/Practice/HookComponent.vue'
import AxiosTestComponent from "@/components/Practice/AxiosTestComponent";
import WatchUpdateComponent from "@/components/Practice/WatchUpdateComponent";
import RouterTestComponent from "@/components/Practice/RouterTestComponent";

export const practiceRouter = [
    {
        path: '/practice/vuetify',
        name: 'VuetifyComponent',
        component: VuetifyComponent
    },
    {
        path: '/practice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    },
    {
        path: '/practice/conditional',
        name: 'ConditionalComponent',
        component: ConditionalComponent
    },
    {
        path: '/practice/hooks',
        name: 'HookComponent',
        component: HookComponent
    },
    {
        path: '/practice/axiostest',
        name: 'AxiosTestComponent',
        component: AxiosTestComponent

    },
    {
        path: '/practice/hooks-watch-update',
        name: 'WatchUpdateComponent',
        component: WatchUpdateComponent
    },
    {
        path: '/practice/routertest',
        name: 'RouteTestComponent',
        component: RouterTestComponent
    }
];