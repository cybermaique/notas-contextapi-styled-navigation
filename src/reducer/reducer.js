export const initalState = [
  {
    id: 1,
    title: "Hello World",
    content:
      "Olá, eu sou uma anotação criada para testes. Neste aplicativo, você pode adicionar, visualizar, deletar e editar as anotações!",
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "EDIT":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "UPDATE":
      return state.map((record) => {
        if (action.payload.id === record.id) return action.payload;
        else return record;
      });

    case "REMOVE":
      return state.filter((post) => action.payload !== post.id);
    default:
      return state;
  }
};
