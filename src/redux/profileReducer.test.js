import profileReducer, {addPostCreator, removePostCreator} from "./profileReducer";

//default data
let init = {
    postsData: [
        {id: 1, message: "My first post", likes: 5},
        {id: 2, message: "Talking about nothing", likes: 212},
        {id: 3, message: "What to wear?", likes: 11},
        {id: 4, message: "I am buying the longboard", likes: 333},
    ]
};

it('postsData length should increment',() =>{

    //creating action
    let action = addPostCreator("New post test");

    let newState = profileReducer(init,action);

    //expectation
    expect(newState.postsData.length).toBe(5);
})


it('postsData length should decrement',() =>{

    //creating action
    let action = removePostCreator(1);

    let newState = profileReducer(init,action);

    //expectation
    expect(newState.postsData.length).toBe(3);
})