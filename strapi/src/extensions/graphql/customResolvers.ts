module.exports = {
  resolver: {
    Query: {
      events: {
        resolver: async (_, args, ctx) => {
          // Call the default Strapi resolver to fetch the events
          const events = await ctx.db.evento.find();

          console.log(events);


          return events

          // // Modify the response structure
          // const modifiedEvents = events.map(event => ({
          //   ...event.attributes, // Move content inside attributes up one level
          //   Regiao: event.egiao?.Name, // Assuming Regiao is a relation
          //   Musica: event.Musica?.map(music => music.attributes.Name), // Assuming Musica is a relation
          // }));

          // return modifiedEvents;
        },
      },
    },
  },
};
