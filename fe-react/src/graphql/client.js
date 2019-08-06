import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost';

const cache = new InMemoryCache();
// 初始化缓存
cache.writeData({
  data: {
    showMore: false
  }
});

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
  resolvers: {
    Query: {
      showMore: (_root, variables, { cache, getCacheKey }) => {
        const getShowMoreStatusQuery = gql`
          {
            showMore @client
          }
        `;
        // 此处仅仅为了演示cache.readQuery，实际Query中可以不需要showMore
        const data = cache.readQuery({ query: getShowMoreStatusQuery });
        return data.showMore;
      }
    },
    Mutation: {
      changeShowMore: (_root, variables, { cache, getCacheKey }) => {
        const getShowMoreStatusQuery = gql`
          {
            showMore @client
          }
        `;
        cache.writeQuery({
          query: getShowMoreStatusQuery,
          data: {
            showMore: !!variables.showMoreStatus
          }
        });
      }
    },
    Grade: {
      name: () => '我从本地来'
    }
  }
});
