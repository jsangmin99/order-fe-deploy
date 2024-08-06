import memberCreate from '../views/member/memberCreate.vue';
// import memberListComponent from '../views/member/memberListComponent.vue';
// import myPageComponent from '../views/member/mypageComponent.vue';
import LoginPage from '../views/member/LoginPage.vue';
import MemberList from '../views/member/MemberList.vue';

export const memberRouter = [
    {
        path: '/member/create',
        name: 'memberCreateComponent',
        component: memberCreate
    },
    {
        path: '/login',
        name: 'loginPage',
        component: LoginPage
    },
    {
        path: '/member/list',
        name: 'memberList',
        component: MemberList
    }
    // {
    //     path: '/member/list',
    //     name: 'memberListComponent',
    //     component: memberListComponent
    // },
    // {
    //     path: '/mypage',
    //     name: 'myPageComponent',
    //     component: myPageComponent
    // }



];