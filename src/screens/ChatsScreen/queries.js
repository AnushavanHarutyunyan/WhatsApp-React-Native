export const listChatRooms = /* GraphQL */ `
  query GetUser {
    getUser(id: "5b79e585-5d6e-432e-9f4c-6ac649819863") {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                id
                user {
                  id
                  image
                  name
                }
              }
            }
            LastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;
