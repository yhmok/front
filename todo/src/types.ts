export type Todo = {
    id: number,
    title: string,
    done: boolean
};

export type AddTodoFunc = (text: string) => void;
export type ToogleTodoFunc = (id: number) => void;

// todo 입력 화면에서 저장 버튼이 클릭되면,
//    todo 입력 화면 컴포넌트는 컨테이너 컴포넌트에게 보고해야 한다.
//    보고를 받은 컨테이너 컴포넌트가, 할일 목록에 새 할일을 추가한다.
//    이렇게 보고하기 위한 함수의 타입이 AddTodoFunc 이다.
//        (text: string) 부분은 함수의 파라미터 변수의 타입이고
//        => void 부분은 리턴값의 타입이다.
