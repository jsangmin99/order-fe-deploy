
function initState() {
    return {
        count: 0,
        message: "",
    }
}


const practice = {
    //state: 상태를 의미하는 객체로서 initState를 통해 상태 초기화
    state: initState,
    //mutations: 상태(변수)를 변경하기 위한 함수들의 집합
    //mutation은 컴포넌트에서 직접호출 되기 보다는 actions를 통해 호출
    // 그이유는 여러 mulations을 연속적으로 호출되는 등의 경우가 있을수 있기 때문
    mutations: {
        increment(state) {
            state.count++;
        },
        updateMessage(state, newMessage) {
            state.message = newMessage;
        }
    },
    //actions: 비동기 처리 로직을 선언하는 메소드들
    actions: {
        //아래와 같이 actions를 통해 mutation을 호출
        //그러면 결국, 컴포넌트에서는 actions를 호출하게 된다.
        incrementCount(context) {
            context.commit('increment');
        },
        updateMessage(context, newMessage) {
            context.commit('updateMessage', newMessage);
        }
    },
    //getters: 상태(변수)를 get하기 위한 함수들의 집합
    getters: {
        getCount: state => state.count,
        getMessage: state => state.message
    }
}
export default practice;