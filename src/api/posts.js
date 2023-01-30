const sleep = n => new Promise(resolve => setTimeout(resolve, n));

//가짜 데이터
const posts = [
    {
        id: 1,
        title: "리덕스를 배워봅시다.",
        desc: "리덕스에 대해서 배워봅시다."
    },
    {
        id: 2,
        title: "리덕스 미들웨어를 배워봅시다.",
        desc: "리덕스 미들웨어에 대해서 배워봅시다."
    },
    {
        id: 3,
        title: "redux-thunk를 배워봅시다.",
        desc: "redux-thunk에 대해서 배워봅시다."
    },
]


//포스트목록을 리턴하는 비동기 함수
export const getPosts = async () => {
    await sleep(500); //0.5초뒤에 받아옴
    return posts;
}


//ID로 포스트를 리턴하는 비동기 함수
export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id); //id일치하는 항목 찾아서 반환   (해당하는 객체 받아옴(배열x))
}